const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact form route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Use Nodemailer to send email (replace with your email settings)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'anushkabhujadep6@gmail.com', // Replace with your email
                pass: 'AnushkaSuresh@09'       // Replace with your email password
            }
        });

        const mailOptions = {
            from: email,
            to: 'anushkabhujadep6@gmail.com', // Replace with your email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Message sent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
