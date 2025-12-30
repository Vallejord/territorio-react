const {onRequest} = require('firebase-functions/v2/https');
const {setGlobalOptions} = require('firebase-functions/v2');
const {defineSecret} = require('firebase-functions/params');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Definir secrets para Gen2 (variables de entorno seguras)
const gmailUser = defineSecret('GMAIL_USER');
const gmailPass = defineSecret('GMAIL_PASS');

admin.initializeApp();

// Configurar opciones globales para Gen2
setGlobalOptions({
  region: 'us-central1',
});

/**
 * Cloud Function para procesar el formulario de contacto (Gen2)
 * 
 * Envía emails usando Gmail SMTP (solo GCP, sin servicios externos)
 * 
 * Configuración de Secrets requerida (Gen2):
 * firebase functions:secrets:set GMAIL_USER
 * firebase functions:secrets:set GMAIL_PASS
 * 
 * Para obtener App Password de Gmail:
 * 1. Ir a: https://myaccount.google.com/apppasswords
 * 2. Generar una contraseña de aplicación
 * 3. Usar esa contraseña como GMAIL_PASS
 */
exports.submitContact = onRequest(
  { secrets: [gmailUser, gmailPass] },
  async (req, res) => {
  // CORS handling
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).send('');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Validar longitud de campos
    if (name.trim().length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters' });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters' });
    }

    // Configurar transporter de Gmail (Gen2 usa secrets)
    const gmailUserValue = gmailUser.value();
    const gmailPassValue = gmailPass.value();

    if (!gmailUserValue || !gmailPassValue) {
      console.error('Gmail credentials not configured');
      return res.status(500).json({
        error: 'Email service not configured',
        details: 'Please configure Gmail credentials in Firebase Functions config'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUserValue,
        pass: gmailPassValue
      }
    });

    // Email para el admin
    const adminEmail = gmailUserValue;
    const mailOptions = {
      from: `"Territorio Web" <${gmailUserValue}>`,
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

    // Opcional: Guardar también en Firestore para backup
    try {
      const db = admin.firestore();
      const contactRef = db.collection('contacts');
      
      await contactRef.add({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        read: false,
        ip: req.ip || req.headers['x-forwarded-for'] || 'unknown'
      });
    } catch (firestoreError) {
      // Si Firestore falla, no es crítico, el email ya se envió
      console.warn('Failed to save to Firestore:', firestoreError);
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


