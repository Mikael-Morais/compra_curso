# 🛒 Payment API - Mercado Pago Integration

## 📌 Base URL

```
http://localhost:3000/payments
```

---

## 💳 1. PAGAMENTO DIRETO (Com Cartão)

### POST `/payments/direct`

Realizar pagamento direto com cartão de crédito.

**Body (JSON):**

```json
{
  "amount": 10000,
  "description": "Curso React Avançado",
  "email": "cliente@exemplo.com",
  "name": "João Silva",
  "phone": "11987654321",
  "cpf": "12345678900",
  "address": "Rua Das Flores, 123",
  "city": "São Paulo",
  "state": "SP",
  "zipcode": "01234567",
  "card_token": "TOKEN_DO_CARTAO"
}
```

**Campos Obrigatórios:**

- `amount` (number) - Valor em centavos (ex: 10000 = R$ 100,00)
- `email` (string) - Email do comprador
- `name` (string) - Nome completo
- `card_token` (string) - Token gerado no frontend

**Campos Opcionais:**

- `description` (string) - Descrição do produto
- `phone` (string) - Telefone com DDD (ex: "11987654321")
- `cpf` (string) - CPF sem formatação (ex: "12345678900")
- `address` (string) - Endereço
- `city` (string) - Cidade
- `state` (string) - Estado (ex: "SP")
- `zipcode` (string) - CEP sem formatação (ex: "01234567")

**Resposta Sucesso (200):**

```json
{
  "id": "123456789",
  "status": "approved",
  "status_detail": "accredited"
}
```

**Resposta Erro (500):**

```json
{
  "error": "Descrição do erro"
}
```

---

## 🎁 2. CHECKOUT REDIRECIONADO

### POST `/payments/checkout`

Criar um checkout que redireciona para Mercado Pago.

**Body (JSON):**

```json
{
  "amount": 10000,
  "description": "Curso React Avançado",
  "email": "cliente@exemplo.com",
  "quantity": 1
}
```

**Campos Obrigatórios:**

- `amount` (number) - Valor em centavos

**Campos Opcionais:**

- `description` (string) - Descrição do produto
- `email` (string) - Email do cliente
- `quantity` (number) - Quantidade (padrão: 1)

**Resposta Sucesso (200):**

```json
{
  "id": "987654321",
  "init_point": "https://www.mercadopago.com.br/checkout/v1/..."
}
```

Redirecione o cliente para `init_point` para completar o pagamento.

---

## 📅 3. PLANOS DE ASSINATURA

### POST `/payments/plans`

Criar um novo plano de assinatura.

**Body (JSON):**

```json
{
  "reason": "Plano Premium Mensal",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "repetitions": 0,
    "deferred_days": 0
  },
  "back_url": "https://seu-site.com/success"
}
```

**Campos Obrigatórios:**

- `reason` (string) - Nome do plano
- `auto_recurring` (object) - Configurações de recorrência

**auto_recurring Opções:**

- `frequency` (number) - Frequência (ex: 1)
- `frequency_type` (string) - Tipo: `"days"`, `"weeks"`, `"months"`, `"years"`
- `repetitions` (number) - Número de cobranças (0 = ilimitado)
- `deferred_days` (number) - Dias até primeira cobrança

**Campos Opcionais:**

- `back_url` (string) - URL de retorno

**Resposta Sucesso (200):**

```json
{
  "id": "PLAN_ID",
  "reason": "Plano Premium Mensal",
  "status": "active"
}
```

**Exemplo de Planos:**

```json
// Plano mensal ilimitado
{
  "reason": "Premium Mensal",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "repetitions": 0
  }
}

// Plano anual com 12 cobranças
{
  "reason": "Premium Anual",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "repetitions": 12
  }
}

// Plano com cobrança após 7 dias
{
  "reason": "Teste 7 dias",
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "days",
    "repetitions": 1,
    "deferred_days": 7
  }
}
```

---

### GET `/payments/plans/:id`

Obter detalhes de um plano.

**URL Parameters:**

- `id` (string) - ID do plano (PLAN_ID)

**Resposta Sucesso (200):**

```json
{
  "id": "PLAN_ID",
  "reason": "Plano Premium Mensal",
  "status": "active",
  "auto_recurring": { ... }
}
```

---

### DELETE `/payments/plans/:id`

Deletar um plano.

**URL Parameters:**

- `id` (string) - ID do plano

**Resposta Sucesso (200):**

```json
{
  "message": "Plano deletado com sucesso"
}
```

---

## 🔄 4. ASSINATURAS (SUBSCRIPTIONS)

### POST `/payments/subscriptions`

Criar uma assinatura para um cliente.

**Body (JSON):**

```json
{
  "preapproval_plan_id": "PLAN_ID",
  "payer_email": "cliente@exemplo.com",
  "card_token": "TOKEN_DO_CARTAO",
  "back_url": "https://seu-site.com/subscription-success",
  "external_reference": "USER_ID_123"
}
```

**Campos Obrigatórios:**

- `preapproval_plan_id` (string) - ID do plano criado em POST /plans
- `payer_email` (string) - Email do cliente
- `card_token` (string) - Token do cartão gerado no frontend

**Campos Opcionais:**

- `back_url` (string) - URL de retorno
- `external_reference` (string) - Referência externa (ex: user_id)

**Resposta Sucesso (200):**

```json
{
  "id": "SUBSCRIPTION_ID",
  "status": "pending",
  "init_point": "https://www.mercadopago.com.br/checkout/..."
}
```

---

### GET `/payments/subscriptions/:id`

Obter detalhes de uma assinatura.

**URL Parameters:**

- `id` (string) - ID da assinatura (SUBSCRIPTION_ID)

**Resposta Sucesso (200):**

```json
{
  "id": "SUBSCRIPTION_ID",
  "status": "active",
  "payer_email": "cliente@exemplo.com",
  "plan_id": "PLAN_ID"
}
```

**Status Possíveis:**

- `pending` - Aguardando confirmação
- `active` - Assinatura ativa
- `paused` - Pausada
- `cancelled` - Cancelada
- `expired` - Expirada

---

### DELETE `/payments/subscriptions/:id`

Cancelar uma assinatura.

**URL Parameters:**

- `id` (string) - ID da assinatura

**Resposta Sucesso (200):**

```json
{
  "id": "SUBSCRIPTION_ID",
  "status": "cancelled",
  "message": "Assinatura cancelada com sucesso"
}
```

---

## 🔑 Gerando Card Token no Frontend

Você precisa usar o **Mercado Pago SDK** no frontend para gerar o `card_token`.

**Instalação:**

```bash
npm install @mercadopago/sdk-js
```

**Exemplo de Uso (React):**

```javascript
import { initMercadoPago, cardTokenizer } from "@mercadopago/sdk-js";

initMercadoPago("PUBLIC_KEY_AQUI");

async function generateToken() {
  const token = await cardTokenizer({
    cardNumber: "4111111111111111",
    cardholderName: "JOÃO SILVA",
    cardholderIdentification: {
      type: "CPF",
      subtype: "",
      value: "12345678900",
    },
    securityCode: "123",
    cardExpirationMonth: 12,
    cardExpirationYear: 25,
  });

  console.log(token); // Use este token no backend
}
```

---

## 📋 Fluxo Completo de Assinatura

1. **Frontend** → Gera `card_token` com dados do cartão
2. **Frontend** → POST para `POST /payments/plans` (criar plano, se necessário)
3. **Frontend** → Recebe `PLAN_ID`
4. **Frontend** → POST para `POST /payments/subscriptions` com `PLAN_ID` e `card_token`
5. **Frontend** → Redireciona para `init_point` para confirmação
6. **Backend** → Assinatura ativa após confirmação
7. **Backend** → Recebe webhooks de cobrança

---

## ⚠️ Variáveis de Ambiente Necessárias

No arquivo `.env`:

```
MERCADOPAGO_ACCESS_TOKEN=seu_access_token_aqui
```

---

## 🧪 Testes de Cartão

| Tipo       | Número           | CVV  | Data  |
| ---------- | ---------------- | ---- | ----- |
| Visa       | 4111111111111111 | 123  | 12/25 |
| Mastercard | 5555555555554444 | 123  | 12/25 |
| Amex       | 378282246310005  | 1234 | 12/25 |

CPF Teste: `12345678900`

---

## 📞 Suporte

Para mais informações sobre a API do Mercado Pago, acesse:
https://developer.mercadopago.com/
