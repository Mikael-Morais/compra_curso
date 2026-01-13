import { Router, Request, Response } from 'express';
import stripe from '../config/stripe';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'payments route' });
});

// Criar PaymentIntent
router.post('/create-payment-intent', async (req: Request, res: Response) => {
	const { amount, currency = 'brl' } = req.body;

	if (!amount || typeof amount !== 'number') {
		return res.status(400).json({ error: 'O campo `amount` (number, em centavos) é obrigatório' });
	}

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			payment_method_types: ['card'],
		});

		return res.json({ clientSecret: paymentIntent.client_secret });
	} catch (err: any) {
		console.error('Stripe error:', err);
		return res.status(500).json({ error: err.message || 'Erro ao criar PaymentIntent' });
	}
});

export default router;
