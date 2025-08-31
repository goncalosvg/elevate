import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { resend } from '../../../lib/resend'
import { supabaseAdmin } from '../../../lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { token } = req.query

    if (!token || typeof token !== 'string') {
      return res.status(400).json({ error: 'Valid unsubscribe token is required' })
    }

    // Verify the JWT token
    let decoded: any
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key')
    } catch (jwtError) {
      res.redirect(302, `/unsubscribe?status=error&message=${encodeURIComponent('Invalid or expired unsubscribe token')}`)
      return
    }

    const { userId, email } = decoded

    if (!userId || !email) {
      res.redirect(302, `/unsubscribe?status=error&message=${encodeURIComponent('Invalid token payload')}`)
      return
    }

    // Verify the user exists and matches the token
    const { data, error } = await supabaseAdmin
      .from("waitlist")
      .select("id, email")
      .eq("id", userId)
      .eq("email", email)
      .single()

    if (error || !data) {
      console.error('User not found or verification failed:', error)
      res.redirect(302, `/unsubscribe?status=error&message=${encodeURIComponent('User not found or verification failed')}`)
      return
    }

    // Mark user as unsubscribed in database
    const { error: updateError } = await supabaseAdmin
      .from("waitlist")
      .update({ 
        unsubscribed: true, 
        unsubscribed_at: new Date().toISOString() 
      })
      .eq("id", userId)

    if (updateError) {
      console.error('Failed to update user unsubscribe status:', updateError)
      res.redirect(302, `/unsubscribe?status=error&message=${encodeURIComponent('Failed to process unsubscribe request')}`)
      return
    }

    // Remove from Resend audience
    try {
      await resend.contacts.remove({
        email: email,
        audienceId: '241261dd-0fe7-414b-8177-d485e1061ed9'
      })
    } catch (resendError) {
      console.error('Resend contact removal error:', resendError)
      // Don't fail the request if Resend fails
    }

    // Redirect to user-friendly unsubscribe page
    res.redirect(302, `/unsubscribe?status=success&email=${encodeURIComponent(email)}`)

  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'An unexpected error occurred' 
    })
  }
}
