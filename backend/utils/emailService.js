const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send appointment confirmation email
const sendAppointmentConfirmation = async (appointment) => {
  try {
    const transporter = createTransporter();
    
    const appointmentDate = new Date(appointment.appointmentDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const mailOptions = {
      from: `"Platinum Healthcare UAE" <${process.env.EMAIL_USER}>`,
      to: appointment.patientEmail,
      subject: 'Appointment Confirmation - Platinum Healthcare UAE',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Platinum Healthcare UAE</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Your trusted partner for comprehensive wellness</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">Appointment Confirmation</h2>
            
            <p>Dear ${appointment.patientName},</p>
            
            <p>Your appointment has been successfully booked. Here are the details:</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Doctor:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">Dr. ${appointment.doctor.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Specialization:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${appointment.doctor.specialization}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${appointmentDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Time:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${appointment.appointmentTime}</td>
                </tr>
                ${appointment.service ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${appointment.service.name}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0;"><strong>Status:</strong></td>
                  <td style="padding: 10px 0;"><span style="background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">CONFIRMED</span></td>
                </tr>
              </table>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1976d2; margin: 0 0 10px 0;">Important Notes:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #333;">
                <li>Please arrive 15 minutes before your appointment time</li>
                <li>Bring a valid ID and insurance card (if applicable)</li>
                <li>If you need to reschedule, please call us at least 24 hours in advance</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666;">Need to make changes to your appointment?</p>
              <p style="color: #666;">Call us at: <strong>+971-4-XXX-XXXX</strong></p>
              <p style="color: #666;">Email us at: <strong>info@platinumhealthuae.com</strong></p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">© 2024 Platinum Healthcare UAE. All rights reserved.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">Al Qusais, Dubai, UAE</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending appointment confirmation email:', error);
    throw error;
  }
};

// Send appointment reminder email
const sendAppointmentReminder = async (appointment) => {
  try {
    const transporter = createTransporter();
    
    const appointmentDate = new Date(appointment.appointmentDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const mailOptions = {
      from: `"Platinum Healthcare UAE" <${process.env.EMAIL_USER}>`,
      to: appointment.patientEmail,
      subject: 'Appointment Reminder - Tomorrow at Platinum Healthcare UAE',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Appointment Reminder</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Platinum Healthcare UAE</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <p>Dear ${appointment.patientName},</p>
            
            <p>This is a friendly reminder about your upcoming appointment:</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin: 0 0 15px 0;">Tomorrow's Appointment</h3>
              <p><strong>Doctor:</strong> Dr. ${appointment.doctor.name}</p>
              <p><strong>Date:</strong> ${appointmentDate}</p>
              <p><strong>Time:</strong> ${appointment.appointmentTime}</p>
            </div>
            
            <p>Please remember to arrive 15 minutes early and bring your ID and insurance card.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p>Need to reschedule? Call us at <strong>+971-4-XXX-XXXX</strong></p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment reminder email sent successfully');
  } catch (error) {
    console.error('Error sending appointment reminder email:', error);
    throw error;
  }
};

module.exports = {
  sendAppointmentConfirmation,
  sendAppointmentReminder
};