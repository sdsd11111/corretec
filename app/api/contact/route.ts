import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Tipos para las variables de entorno
type EnvVars = {
  SMTP_HOST: string;
  SMTP_PORT: string;
  SMTP_SECURE: string;
  SMTP_USER: string;
  SMTP_PASS: string;
  SMTP_FROM: string;
  SMTP_TO: string;
};

// Verificar que todas las variables de entorno requeridas estén definidas
const env = process.env as unknown as EnvVars;
const requiredVars: (keyof EnvVars)[] = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_SECURE',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'SMTP_TO'
];

const missingVars = requiredVars.filter(key => !env[key]);
if (missingVars.length > 0) {
  console.error('Faltan variables de entorno requeridas:', missingVars.join(', '));
}

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, tipoSeguro, mensaje } = await request.json();

    // Configurar el transporte SMTP con variables de entorno
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: parseInt(env.SMTP_PORT, 10),
      secure: env.SMTP_SECURE === 'true',
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
      tls: {
        // No fallar en certificados inválidos
        rejectUnauthorized: false
      }
    });

    // Configurar el correo electrónico
    const mailOptions = {
      from: `"Sitio Web Corretec" <${env.SMTP_FROM}>`,
      to: env.SMTP_TO,
      subject: `Nuevo mensaje de ${nombre} - ${tipoSeguro}`,
      html: `
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Tipo de Seguro:</strong> ${tipoSeguro}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje enviado correctamente' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Error al enviar el mensaje' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}
