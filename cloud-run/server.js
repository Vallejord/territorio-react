const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar Firebase Admin (opcional, solo si queremos guardar en Firestore)
try {
  admin.initializeApp();
} catch (e) {
  console.log('Firebase Admin ya inicializado o no disponible');
}

/**
 * Endpoint para procesar formulario de contacto
 * Cloud Run - Deploy rápido y confiable
 */
app.post('/submitContact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'Name, email, and message are required'
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validar longitud
    if (name.trim().length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters' });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters' });
    }

    // Obtener credenciales de Gmail desde variables de entorno (Cloud Run secrets)
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      console.error('Gmail credentials not configured');
      return res.status(500).json({
        error: 'Email service not configured',
        details: 'GMAIL_USER and GMAIL_PASS environment variables required'
      });
    }

    // Configurar transporter de Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    // Email para el admin
    const adminEmail = gmailUser;
    const mailOptions = {
      from: `"Territorio Web" <${gmailUser}>`,
      to: adminEmail,
      replyTo: email.trim(),
      subject: `Nuevo contacto desde web: ${name.trim()}`,
      text: `
Nuevo mensaje de contacto desde el sitio web de Territorio

Nombre: ${name.trim()}
Email: ${email.trim()}

Mensaje:
${message.trim()}

---
Este mensaje fue enviado desde el formulario de contacto de territorio.com.ar
      `.trim(),
      html: `
        <h2>Nuevo mensaje de contacto desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Este mensaje fue enviado desde el formulario de contacto de territorio.com.ar</small></p>
      `
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    // Opcional: Guardar en Firestore
    try {
      const db = admin.firestore();
      await db.collection('contacts').add({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        read: false,
        ip: req.ip || req.headers['x-forwarded-for'] || 'unknown'
      });
    } catch (firestoreError) {
      console.warn('Failed to save to Firestore:', firestoreError);
      // No es crítico, el email ya se envió
    }

    console.log('Contact form submission processed:', {
      name: name.trim(),
      email: email.trim(),
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      error: 'Failed to process message',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'territorio-contact' });
});

// Iniciar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




