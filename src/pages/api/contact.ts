import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { z } from 'zod';
import { getContactEmailHtml, getContactEmailText } from '~/lib/contactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate the request body
    const validatedData = contactSchema.parse(req.body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Elevate Contact Form <noreply@news.joinelevate.net>',
      to: ['elevatellcbiz@gmail.com'],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: getContactEmailText(validatedData),
      html: getContactEmailHtml(validatedData),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid form data', details: error.errors });
    }
    
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
