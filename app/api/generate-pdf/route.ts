import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-01-28.clover",
  });

  try {
    const { sessionId } = await request.json();

    // Retrieve session from Stripe to verify payment
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    const metadata = session.metadata || {};
    const {
      city,
      surface,
      peb,
      age,
      currentRent,
      maxRent,
      overpayAmount,
      yearlyOverpay,
    } = metadata;

    // Generate a simple HTML-based PDF content
    const currentDate = new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Rapport Loyer Légal - Analyse Loyer</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 40px; }
    h1 { color: #4f46e5; border-bottom: 3px solid #4f46e5; padding-bottom: 10px; }
    h2 { color: #1e293b; margin-top: 30px; }
    .header { text-align: center; margin-bottom: 40px; }
    .logo { font-size: 32px; font-weight: black; color: #0f172a; }
    .info-box { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; }
    .legal { background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; }
    .success { background: #d1fae5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background: #f8fafc; font-weight: bold; }
    .amount { font-size: 24px; font-weight: bold; color: #dc2626; }
    .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
    .letter { background: #fff; border: 1px solid #e2e8f0; padding: 30px; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Loyer Légal</div>
    <p>Rapport d'analyse de loyer - ${currentDate}</p>
  </div>

  <h1>Analyse de votre loyer à ${city}</h1>

  <div class="info-box">
    <h2>Informations du logement</h2>
    <table>
      <tr><th>Caractéristique</th><th>Valeur</th></tr>
      <tr><td>Ville</td><td>${city}</td></tr>
      <tr><td>Surface</td><td>${surface} m²</td></tr>
      <tr><td>Certificat PEB</td><td>${peb}</td></tr>
      <tr><td>Âge du bien</td><td>${age} ans</td></tr>
    </table>
  </div>

  <h2>Résultat de l'analyse</h2>
  <div class="highlight">
    <p><strong>Loyer actuel :</strong> ${parseFloat(currentRent || "0").toFixed(0)}€/mois</p>
    <p><strong>Loyer maximum légal :</strong> ${parseFloat(maxRent || "0").toFixed(0)}€/mois</p>
    <p class="amount">Surpaye mensuelle : ${parseFloat(overpayAmount || "0").toFixed(0)}€</p>
    <p class="amount">Surpaye annuelle : ${parseFloat(yearlyOverpay || "0").toFixed(0)}€</p>
  </div>

  <h2>Cadre juridique</h2>
  <div class="legal">
    <p><strong>Base légale :</strong> Arrêté royal du 22 décembre 2023 fixant le prix de référence pour la Région de Bruxelles-Capitale.</p>
    <p><strong>Prix de référence :</strong> 15,80€/m² pour la Région de Bruxelles-Capitale (SPF Finances).</p>
    <p><strong>Coefficients appliqués :</strong></p>
    <ul>
      <li>Coefficient PEB (${peb})</li>
      <li>Coefficient d'ancienneté (${age} ans)</li>
    </ul>
  </div>

  <h2>Lettre de mise en demeure type</h2>
  <div class="letter">
    <p><strong>Objet :</strong> Mise en demeure - Réduction de loyer</p>
    <br>
    <p>Madame, Monsieur,</p>
    <br>
    <p>Par la présente, je vous informe que le loyer actuel de mon logement situé à [ADRESSE] excède le maximum légal autorisé par le Code du Logement.</p>
    <br>
    <p>Conformément à l'arrêté royal du 22 décembre 2023, le loyer maximum légal pour mon logement est de <strong>${parseFloat(maxRent || "0").toFixed(0)}€/mois</strong>, alors que je paye actuellement <strong>${parseFloat(currentRent || "0").toFixed(0)}€/mois</strong>.</p>
    <br>
    <p>Je vous mets en demeure de réduire mon loyer dans un délai de 30 jours à compter de la réception de cette lettre. À défaut, je me verrai dans l'obligation d'introduire une réclamation auprès du tribunal compétent.</p>
    <br>
    <p>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</p>
    <br>
    <p>Signature</p>
    <p>Date : ___________</p>
  </div>

  <h2>Guide des démarches</h2>
  <div class="success">
    <p><strong>Étape 1 :</strong> Envoyez la lettre de mise en demeure à votre propriétaire par lettre recommandée.</p>
    <p><strong>Étape 2 :</strong> Attendez la réponse dans un délai de 30 jours.</p>
    <p><strong>Étape 3 :</strong> Si le propriétaire refuse, contactez la Justice de Paix de votre arrondissement.</p>
    <p><strong>Étape 4 :</strong> Vous pouvez réclamer le remboursement des trop-perçus des 12 derniers mois.</p>
  </div>

  <div class="footer">
    <p>Ce rapport a été généré par Loyer Légal.be</p>
    <p>Les calculs sont basés sur les données officielles du SPF Finances.</p>
    <p>Ce document est fourni à titre informatif et ne constitue pas un avis juridique.</p>
  </div>
</body>
</html>
    `;

    // Return HTML content as PDF (browsers can print to PDF)
    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": 'attachment; filename="rentcheck-rapport.html"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Error generating PDF" },
      { status: 500 }
    );
  }
}
