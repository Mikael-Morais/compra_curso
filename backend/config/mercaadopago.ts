import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error('MERCADOPAGO_ACCESS_TOKEN is not set in environment variables');
}

// Configurar o cliente do Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: accessToken,
});

const preference = new Preference(client);

export { preference, client };
