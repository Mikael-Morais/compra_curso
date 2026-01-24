import { Router, Request, Response } from 'express';
import { preference, client } from '../config/mercaadopago';
import axios from 'axios';

const router = Router();

const MP_API_BASE = 'https://api.mercadopago.com/v1';
const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

// ==================== PAGAMENTOS DIRETOS ====================

/**
 * POST /payments/direct
 * Descrição: Criar um pagamento direto com cartão
 * 
 * Body necessário:
 * {
 *   "amount": number (em centavos, ex: 10000 = R$ 100,00),
 *   "description": string (descrição do produto),
 *   "email": string (email do comprador),
 *   "name": string (nome do comprador),
 *   "phone": string (telefone com DDD, ex: "11987654321"),
 *   "cpf": string (CPF sem formatação, ex: "12345678900"),
 *   "address": string (endereço),
 *   "city": string (cidade),
 *   "state": string (estado, ex: "SP"),
 *   "zipcode": string (CEP sem formatação, ex: "01234567"),
 *   "card_token": string (token do cartão gerado no frontend)
 * }
 */
router.post('/direct', async (req: Request, res: Response) => {
	const {
		amount,
		description,
		email,
		name,
		phone,
		cpf,
		address,
		city,
		state,
		zipcode,
		card_token,
	} = req.body;

	// Validações
	if (!amount || typeof amount !== 'number') {
		return res.status(400).json({ error: 'O campo `amount` (number) é obrigatório' });
	}
	if (!card_token) {
		return res.status(400).json({ error: 'O campo `card_token` é obrigatório' });
	}
	if (!email || !name) {
		return res.status(400).json({ error: 'Os campos `email` e `name` são obrigatórios' });
	}

	try {
		const paymentData = {
			transaction_amount: amount / 100, // Converter centavos para reais
			description: description || 'Pagamento',
			payment_method_id: 'master',
			token: card_token,
			payer: {
				email,
				first_name: name.split(' ')[0],
				last_name: name.split(' ').slice(1).join(' '),
				identification: {
					type: 'CPF',
					number: cpf,
				},
				phone: {
					area_code: phone?.substring(0, 2),
					number: phone?.substring(2),
				},
				address: {
					street_name: address,
					street_number: 0,
					zip_code: zipcode,
					city_name: city,
					state_name: state,
				},
			},
			installments: 1,
		};

		const response = await axios.post(`${MP_API_BASE}/payments`, paymentData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return res.json({
			id: response.data.id,
			status: response.data.status,
			status_detail: response.data.status_detail,
		});
	} catch (err: any) {
		console.error('Mercado Pago payment error:', err.response?.data || err.message);
		return res.status(500).json({
			error: err.response?.data?.message || 'Erro ao processar pagamento',
		});
	}
});

// ==================== PLANOS DE ASSINATURA ====================

/**
 * POST /payments/plans
 * Descrição: Criar um plano de assinatura
 * 
 * Body necessário:
 * {
 *   "reason": string (nome do plano, ex: "Plano Premium"),
 *   "auto_recurring": {
 *     "frequency": number (frequência, ex: 1 para mensal),
 *     "frequency_type": string ("days", "weeks", "months", "years"),
 *     "repetitions": number (número de cobrânças, 0 = ilimitado),
 *     "deferred_days": number (opcional, dias até primeira cobrança)
 *   },
 *   "back_url": string (URL de retorno)
 * }
 */
router.post('/plans', async (req: Request, res: Response) => {
	const { reason, auto_recurring, back_url } = req.body;

	if (!reason || !auto_recurring) {
		return res.status(400).json({
			error: 'Os campos `reason` e `auto_recurring` são obrigatórios',
		});
	}

	try {
		const planData = {
			reason,
			auto_recurring,
			back_url: back_url || 'https://seu-site.com',
			payment_method_allowed: 'credit_card',
		};

		const response = await axios.post(`${MP_API_BASE}/plans`, planData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return res.json({
			id: response.data.id,
			reason: response.data.reason,
			status: response.data.status,
		});
	} catch (err: any) {
		console.error('Mercado Pago plan error:', err.response?.data || err.message);
		return res.status(500).json({
			error: err.response?.data?.message || 'Erro ao criar plano',
		});
	}
});

/**
 * GET /payments/plans/:id
 * Descrição: Obter detalhes de um plano
 */
router.get('/plans/:id', async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const response = await axios.get(`${MP_API_BASE}/plans/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return res.json(response.data);
	} catch (err: any) {
		console.error('Mercado Pago get plan error:', err.response?.data || err.message);
		return res.status(500).json({
			error: 'Erro ao obter plano',
		});
	}
});

/**
 * DELETE /payments/plans/:id
 * Descrição: Deletar um plano
 */
router.delete('/plans/:id', async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await axios.delete(`${MP_API_BASE}/plans/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return res.json({ message: 'Plano deletado com sucesso' });
	} catch (err: any) {
		console.error('Mercado Pago delete plan error:', err.response?.data || err.message);
		return res.status(500).json({
			error: 'Erro ao deletar plano',
		});
	}
});

// ==================== ASSINATURAS ====================

/**
 * POST /payments/subscriptions
 * Descrição: Criar uma assinatura
 * 
 * Body necessário:
 * {
 *   "preapproval_plan_id": string (ID do plano),
 *   "payer_email": string (email do cliente),
 *   "card_token": string (token do cartão gerado no frontend),
 *   "back_url": string (URL de retorno, opcional),
 *   "external_reference": string (referência externa, ex: user_id)
 * }
 */
router.post('/subscriptions', async (req: Request, res: Response) => {
	const { preapproval_plan_id, payer_email, card_token, amount, external_reference } =
		req.body;

	if (!preapproval_plan_id || !payer_email || !card_token || !amount) {
		return res.status(400).json({
			error: 'Os campos `preapproval_plan_id`, `payer_email`, `card_token` e `amount` são obrigatórios',
		});
	}

	try {
		const subscriptionData = {
			preapproval_plan_id,
			payer_email,
			card_token_id: card_token,
			transaction_amount: amount / 100,  // Converter centavos para reais
			external_reference: external_reference || '',
		};

		const response = await axios.post(`${MP_API_BASE}/preapproval`, subscriptionData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return res.json({
			id: response.data.id,
			status: response.data.status,
			amount: response.data.transaction_amount,
		});
	} catch (err: any) {
		console.error('Mercado Pago subscription error:', err.response?.data || err.message);
		return res.status(500).json({
			error: err.response?.data?.message || 'Erro ao criar assinatura',
		});
	}
});

/**
 * GET /payments/subscriptions/:id
 * Descrição: Obter detalhes de uma assinatura
 */
router.get('/subscriptions/:id', async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const response = await axios.get(`${MP_API_BASE}/preapproval/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return res.json({
			id: response.data.id,
			status: response.data.status,
			payer_email: response.data.payer_email,
			plan_id: response.data.preapproval_plan_id,
		});
	} catch (err: any) {
		console.error('Mercado Pago get subscription error:', err.response?.data || err.message);
		return res.status(500).json({
			error: 'Erro ao obter assinatura',
		});
	}
});

/**
 * DELETE /payments/subscriptions/:id
 * Descrição: Cancelar uma assinatura
 */
router.delete('/subscriptions/:id', async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const response = await axios.put(
			`${MP_API_BASE}/preapproval/${id}`,
			{ status: 'cancelled' },
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		return res.json({
			id: response.data.id,
			status: response.data.status,
			message: 'Assinatura cancelada com sucesso',
		});
	} catch (err: any) {
		console.error('Mercado Pago cancel subscription error:', err.response?.data || err.message);
		return res.status(500).json({
			error: 'Erro ao cancelar assinatura',
		});
	}
});

// ==================== PREFERÊNCIAS (Checkout Redirecionado) ====================

/**
 * POST /payments/checkout
 * Descrição: Criar checkout redirecionado
 * 
 * Body necessário:
 * {
 *   "amount": number (em centavos),
 *   "description": string,
 *   "email": string,
 *   "quantity": number (opcional, padrão: 1)
 * }
 */
router.post('/checkout', async (req: Request, res: Response) => {
	const { amount, description, email, quantity = 1 } = req.body;

	if (!amount || typeof amount !== 'number') {
		return res.status(400).json({ error: 'O campo `amount` é obrigatório' });
	}

	try {
		const preferenceData = {
			items: [
				{
					id: '1',
					title: description || 'Pagamento',
					quantity,
					currency_id: 'BRL',
					unit_price: amount / 100,
				},
			],
			payer: {
				email: email || 'test@test.com',
			},
		};

		const response = await preference.create({ body: preferenceData });

		return res.json({
			id: response.id,
			init_point: response.init_point,
		});
	} catch (err: any) {
		console.error('Mercado Pago checkout error:', err);
		return res.status(500).json({
			error: err.message || 'Erro ao criar checkout',
		});
	}
});

// ==================== INFO ====================

router.get('/', (_req: Request, res: Response) => {
	res.json({
		message: 'Payment API',
		endpoints: {
			'POST /payments/direct': 'Pagamento direto com cartão',
			'POST /payments/checkout': 'Checkout redirecionado',
			'POST /payments/plans': 'Criar plano de assinatura',
			'GET /payments/plans/:id': 'Obter plano',
			'DELETE /payments/plans/:id': 'Deletar plano',
			'POST /payments/subscriptions': 'Criar assinatura',
			'GET /payments/subscriptions/:id': 'Obter assinatura',
			'DELETE /payments/subscriptions/:id': 'Cancelar assinatura',
		},
	});
});

export default router;
