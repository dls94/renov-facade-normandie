import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, project, message } = body;

    // Validation minimale
    if (!name || !email || !project || !message) {
        console.log("Champs reçus :", {
    name,
    email,
    project,
    message,
  });
      return NextResponse.json(
        {
          success: false,
          message: "Veuillez remplir tous les champs obligatoires.",
        },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Renov'Façade Normandie <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      replyTo: email,
      subject: `Nouvelle demande de contact — ${project}`,
      text: `
Nouvelle demande de contact

Nom : ${name}
Téléphone : ${phone || "Non renseigné"}
Email : ${email}
Type de projet : ${project}

Message :
${message}
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        {
          success: false,
          message: "Une erreur est survenue lors de l'envoi.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a bien été envoyée.",
    });
  } catch (error) {
    console.error("Erreur API contact :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue.",
      },
      { status: 500 },
    );
  }
}