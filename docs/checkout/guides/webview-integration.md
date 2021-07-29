---
id: webview-integration
title: Integração de identidade WebView
hide_title: true
---

# Fluxo de login

## Sobre este guia

Neste guia vamos descrever o passo-a-passo para integração de uma WebView com sua plataforma. Para tal, é
necessário seguir um fluxo que visa proteger ambas as partes de agentes maliciosos.

## Como funciona?

A imagem a seguir descreve o fluxo que deve ser seguido para que o login seja feito de
forma bem sucedida.

![img](../../../static/img/guides/webview-integration-flow.png)

### Fluxo

**Passo 1**: A aplicação mobile faz uma requisição HTTPS para uma API que está credenciada e
tem acesso à plataforma do Pede Pronto;

**Passo 2:** Essa API, de posse de uma api key previamente fornecida pelo Pede Pronto, efetua
uma requisição com os dados do usuário como payload e a api key no cabeçalho da
requisição;

**Passo 3:** Caso a requisição seja bem sucedida, a plataforma do Pede Pronto retorna uma
resposta contendo um token de acesso para o usuário em questão;

**Passo 4:** A API repassa esse token para o dispositivo mobile;

**Passo 5:** A aplicação mobile abre uma WebView passando o token de acesso como parâmetro
de querystring.

## Endpoint de Autenticação:

- URL: /v1/partners/login
- Método: POST
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer **API key fornecido pelo Pede Pronto**
- Payload (formato JSON):

| **campo** | **tipo**            | **required?** | **exemplo**        |
| --------- | ------------------- | ------------- | ------------------ |
| email     | String              | S             | teste@email.com.br |
| phone     | String (DDD e nº)   | S             | 71984544554        |
| cpf       | String (somente nº) | S             | 7887878766         |
| name      | String              | S             | Washington Silva   |

**Passo 3:** O PicPay devolve o QR Code no retorno da chamada da API de pagamentos (URL para redirecionamento em paymentUrl e imagem codificada em qrcode.base64);

### Exemplo chamada de autenticação (curl):

```json
curl --request POST \
--url https://api.staging.onyo.com/v1/partners/login \
--header 'authorization: Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva
G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_ad
Qssw5c' \
--header 'content-type: application/json' \
--data '{
"email": "teste@email.com",
"phone": "11985412354",
"cpf": "91078236062",
“name”: “João Silva”
}'
```

### Retornos da chamada de autenticação:

#### Sucesso

- Operação realizada com sucesso:

  - Código 200 ou 201
  - Payload (JSON):

  | **campo** | **tipo**          | **exemplo**   |
  | --------- | ----------------- | ------------- |
  | token     | String(Token JWT) | ehkhukj787hhh |

  HTTP [200|201] OK

  ```
  {
  “token”:
  “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaW
  F0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c”
  }
  ```

#### Erro

- Erro:

  - Código 400
  - Payload (JSON):

  | **campo** | **tipo** | **exemplo**            |
  | --------- | -------- | ---------------------- |
  | error     | String   | onyo.user.invalid-data |

HTTP 400 BAD REQUEST

```
{
“error”: “onyo.user.invalid-data”
}
```

## Diagrama de Sequência

**Sucesso:**

![img](../../../static/img/guides/webview-integration-success.png)

**Erro:**

![img](../../../static/img/guides/webview-integration-error.png)

## Obtendo ajuda

Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail: @pedepronto.com.br

```

```
