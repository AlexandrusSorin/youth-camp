require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: false
}));
app.use(bodyParser.json());

// Rută de test
app.get('/', (req, res) => {
  res.json({ message: 'Backend functional!' });
});

// Ruta pentru trimiterea emailului
app.post("/send-email", async (req, res) => {
  const { nume, varsta, dataNasterii, email, telefon, detalii } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Înscriere nouă la tabăra de tineret",
      text: `
        Nume: ${nume}
        Vârstă: ${varsta}
        Data nașterii: ${dataNasterii}
        Email: ${email}
        Telefon: ${telefon}
        Detalii: ${detalii}
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email trimis cu succes!" });
  } catch (error) {
    console.error('Eroare email:', error);
    res.status(500).json({ 
      success: false, 
      message: "Eroare la trimiterea emailului."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server pornit pe portul ${PORT}`);
});