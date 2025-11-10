require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Brevo = require("@getbrevo/brevo");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Initialize Brevo client
const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// Routes
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.sender = { name, email };
  sendSmtpEmail.to = [{ email: process.env.EMAIL_TO }];
  sendSmtpEmail.subject = "Contact Form Submission - Portfolio";
  sendSmtpEmail.htmlContent = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully!");
    res.status(200).json({ code: 200, status: "Message Sent Successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ code: 500, status: "Error sending message" });
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
