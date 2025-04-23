// src/pages/api/contact.js
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;
  
  // Validate inputs
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  
  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }
  
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }
  
  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    
    return res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!',
      data: contact 
    });
  } catch (error) {
    console.error("API error:", error);
    
    // Check for common Prisma errors
    if (error.code === 'P2002') {
      return res.status(400).json({ 
        success: false, 
        message: 'This contact information has already been submitted' 
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      message: 'Server error. Your message could not be sent.'
    });
  }
}