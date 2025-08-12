const nodemailer = require("nodemailer");

const sendMail = async (receiverEmailAddress, content, subject) => {
  const userEmail = receiverEmailAddress;

  // Check if required environment variables are set
  if (!process.env.GMAIL_ID || !process.env.APP_PASSWORD) {
    console.error("Missing Gmail configuration: GMAIL_ID or APP_PASSWORD not set");
    return false;
  }

  let config = {
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  };

  let transporter = nodemailer.createTransport(config);

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log("SMTP transporter verified successfully");
  } catch (error) {
    console.error("SMTP verification failed:", error.message);
    return false;
  }

  let message = {
    from: process.env.GMAIL_ID,
    to: userEmail,
    subject: subject,
    html: content,
  };

  try {
    const info = await transporter.sendMail(message);
    console.log("Email sent successfully to:", userEmail);
    console.log("Message ID:", info.messageId);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error.message);
    console.error("Error details:", error);
    return false;
  }
};

module.exports = sendMail;
