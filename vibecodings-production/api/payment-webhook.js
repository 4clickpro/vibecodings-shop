// VibeCodings Payment Fulfillment Hook
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { tier, email, prompt, paymentId } = req.body;
  
  // URL to direct payments to
  const paymentLink = "https://vibe-codings-shop-282120115662.us-west1.run.app/checkout";
  
  console.log('Payment initialized for', tier, 'via', paymentLink);
  
  res.status(200).json({ status: 'Redirecting to payment', url: paymentLink });
}
