---
id: auth-batch
title: Autenticação para Rede
hide_title: true
---

# Autenticação

## Como funciona?

- Essa chamada tem como intuito gerar um token de acesso para um usuário administrador da rede (ou grupo de lojas).

## Se não tiver uma conta cadastrada?

- Se ainda não tiver cadastro, deve enviar um email para <engenharia@pedepronto.com.br> com informações da Rede.


## Ambientes:

**Homologação**:
```bash
https://graphql.staging.onyo.com/graphql
```

**Produção**:
```bash
https://graphql.onyo.com/graphql
```

## Endpoint mutation:

- URL: /graphql
- Método: POST
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer **accessToken**
- Payload (formato JSON):

```bash
{
  mutation {
  loginTokenAuth(
    input:{
      email: "email@empresa.com", 
      password: "******", 
      userType: CRM
      }
      ){
    accessToken
  }
}
}
```

#### Exemplo (curl):

```json
curl --request POST \
  --url https://graphql.staging.onyo.com/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  loginTokenAuth(input:{email: \"email@empresa.com\", password: \"******\", userType: CRM}){\n    accessToken\n  }\n}"}'
```

### Retornos da chamada:

#### Sucesso:

```json
{
  "data": {
    "loginTokenAuth": {
      "accessToken": "eyJ0e..."
    }
  }
}
```

#### Erro:
```json
{
  "data": {
    "loginTokenAuth": {
      "accessToken": null
    }
  }
}
```

