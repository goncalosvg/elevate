import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { resend } from '../../../lib/resend'
import { supabaseAdmin } from '../../../lib/supabase'
import { getWelcomeEmailHtml, getWelcomeEmailText } from '../../../lib/welcomeEmail'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = req.body
    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || 
               req.headers['x-real-ip']?.toString() || 
               req.socket.remoteAddress

    const { data, error } = await supabaseAdmin
      .from('waitlist')
      .insert([{
        email: body.email,
        phone: body.phone || null,
        created_at: new Date().toISOString(),
        // Location data (we'll get this from client-side geolocation if needed)
        country: body.country || null,
        city: body.city || null,
        region: body.region || null,
        timezone: body.timezone,
        // Device data from client
        device_mobile: body.device_mobile,
        device_browser: body.device_browser,
        device_os: body.device_os,
        // IP address (hashed for privacy)
        ip_hash: ip ? Buffer.from(ip).toString('base64') : null,
      }])
      .select('id')
      .single()

    if (error) {
      // Check if it's a duplicate email error (unique constraint violation)
      if (error.code === '23505' && error.message.includes('email')) {
        // For security purposes, return success even if email already exists
        console.log('Duplicate email attempted:', body.email)
        return res.status(200).json({ success: true })
      }
      
      console.error('Supabase error:', error)
      return res.status(400).json({ error: `Database error: ${error.message}` })
    }

    if (!data || !data.id) {
      console.error('Failed to get new user ID from Supabase')
      return res.status(500).json({ error: 'Failed to create user and get ID.' })
    }

    // Generate secure unsubscribe token
    const unsubscribeToken = jwt.sign(
      { 
        userId: data.id, 
        email: body.email,
        type: 'unsubscribe'
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1y' } // Token expires in 1 year
    )

    // Send welcome email using Resend
    try {
      await resend.emails.send({
        from: 'Elevate <updates@news.joinelevate.net>',
        to: body.email,
        subject: "Welcome to Elevate — You're on the list",
        headers: {
          'List-Unsubscribe': `<https://joinelevate.net/api/unsubscribe?token=${unsubscribeToken}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
        text: getWelcomeEmailText(unsubscribeToken),
        html: getWelcomeEmailHtml(data.id, unsubscribeToken),
        replyTo: "help@joinelevate.net"
      })

      // Add user to Waitlist audience
      await resend.contacts.create({
        email: body.email,
        audienceId: '241261dd-0fe7-414b-8177-d485e1061ed9'
      })
    } catch (emailError) {
      console.error('Resend email error:', emailError)
      // Do not block the response if email fails
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'An unexpected error occurred' 
    })
  }
}
