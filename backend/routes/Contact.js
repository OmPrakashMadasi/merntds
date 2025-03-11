//Contact.js
const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

const router = express.Router();

async function sendMail(mailOptions) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
  });

  return transporter.sendMail(mailOptions);
}

// Route to save contact form data and send email notifications
router.post('/contactus', async (req, res) => {
  try {
    const { name, email, mobile_number, message } = req.body;

    // Create a new contact document and save to MongoDB
    const newContact = new Contact({ name, email, mobile_number, message });
    await newContact.save();

    router.get('/', (req, res) => {
      res.send('Contact route working');
    });


    // Email options for admin notification
    const adminMailOptions = {
      from: 'admin@trishoka.com',
      to: process.env.ADMIN_EMAIL,
      subject: 'Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; width: 90%; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
          <div style="background-color: #333; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="color: #333; text-align: center;">You have a new message from the contact form:</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td><td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td><td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td><td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd;">${mobile_number}</td></tr>
              <tr><td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 10px; background-color: #fff; font-style: italic;">${message}</td></tr>
            </table>
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="text-decoration: none; padding: 10px 20px; background-color: #333; color: #fff; border-radius: 5px;">Reply to Client</a>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #555;">
            <p>Note: This is an auto-generated mail by your contact form.</p>
            <p style="font-size: 12px; color: #555;"><img   ="cid:companyLogo" alt="Trishoka Logo" style="width: 24px;"> &copy; ${new Date().getFullYear()} Trishoka Digital Services</p>
          </div>
        </div>`,
      attachments: [
        {
          filename: 'trishoka.png',
          path: './routes/assets/images/trishoka.png',
          cid: 'companyLogo'
        }
      ]
    };

    // Email options for user auto-reply
    const userMailOptions = {
      from: 'admin@trishoka.com',
      to: email,
      subject: 'Thank You for Contacting Trishoka Digital Services!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; width: 100%; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="color: #333; text-align: center;">Thank You,${name}!</h2>
  <p style="color: #333; text-align: center;">We have received your message & will get back to you shortly.</p> 

  <p style="color: #333; text-align: center;">
    <img src="cid:template-12-10-24" alt="template-12-10-24" style="max-width: 100%; height: auto;"> 
  </p>         

  <!-- Footer Section with Social Media Links -->
  <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #555;">
    <!-- Social Media Links -->
    <div style="margin-top: 15px;">
      <a href="https://www.linkedin.com/company/96662799/admin/dashboard/" target="_blank" style="margin: 0 10px;">
        <img src="cid:linkedinIcon" alt="LinkedIn" style="width: 24px; height: 24px; display: inline-block;">
      </a>
      <a href="https://x.com/TrishokaDigital" target="_blank" style="margin: 0 10px;">
        <img src="cid:twitterIcon" alt="Twitter" style="width: 24px; height: 24px; display: inline-block;">
      </a>
      <a href="https://www.instagram.com/trishoka_digital_services/" target="_blank" style="margin: 0 10px;">
        <img src="cid:instagramIcon" alt="Instagram" style="width: 24px; height: 24px; display: inline-block;">
      </a>
    </div>
    <p style="color: #333; text-align: center; font-size: 14px;">If you have any further questions, feel free to reach out. We're here to help!</p>

<p style="color: #333; text-align: center; font-size: 14px;">You are receiving this email as a confirmation of your message to TRISHOKA Digital Services. We appreciate your Enquiry!</p>

    <p style="font-size: 12px; color: #555;">
    

      <div>
     <div style="margin-top:20px">
      <img src="cid:companyLogo" alt="Trishoka Logo" style="width: 24px;"></div>
      <b> &copy; ${new Date().getFullYear()} TRISHOKA Digital Services </p>
      </div>
    </p>
  </div>        
</div>
`,
      attachments: [
        {
          filename: 'trishoka.png',
          path: './routes/assets/images/trishoka.png',
          cid: 'companyLogo'
        },
        {
          filename: 'template-12-10-24.png',
          path: './routes/assets/images/template-12-10-24.png', // Path to LinkedIn icon
          cid: 'template-12-10-24'
        },
        {
          filename: 'twitter.png',
          path: './routes/assets/images/twitter.png', // Path to Twitter icon
          cid: 'twitterIcon'
        },
        {
          filename: 'linkedin.png',
          path: './routes/assets/images/linkedin.png', // Path to LinkedIn icon
          cid: 'linkedinIcon'
        },
        {
          filename: 'instagram.png',
          path: './routes/assets/images/instagram.png', // Path to LinkedIn icon
          cid: 'instagramIcon'
        }
      ]
    };
    

    // Send admin email
    await sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    // Send user auto-reply email
    await sendMail(userMailOptions);
    console.log('User auto-reply email sent successfully');

    res.status(201).json({ message: 'Message sent successfully, Our Agent will contact you!!! Thank You...' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// Middleware to check API key
const requireApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized access' });
  }
};

// Route to fetch all contact form submissions
router.get('/contactus', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contact data:', error);
    res.status(500).json({ message: 'There was an issue fetching contact data. Please try again.' });
  }
});

module.exports = router;
