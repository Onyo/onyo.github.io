---
id: auth-batch
title: Chamada de Autenticação para Rede
hide_title: true
---

# Chamada de Autenticação para Rede

## Como funciona?

- Essa chamada serve para gerar um token de acesso para o usuário do CRM (Customer Relationship Management).

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

#### exemplo (curl):

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

