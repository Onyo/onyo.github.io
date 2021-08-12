---
id: auth-batch
title: Autenticação para Rede
hide_title: true
---

# Autenticação

## Como funciona?

- Essa chamada tem como intuito gerar um token de acesso para um usuário administrador da rede (ou grupo de lojas).

## Se não tiver uma conta cadastrada?

- Se ainda não tiver cadastro, por favor, entre em contato por um de nossos colaboradores.


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

## Consultar a rede (ou grupo de lojas):

Com essa query é possível visualizar a situação da rede ou grupo de lojas.

| **Campo** | **Campos**            |  
| --------- | ------------------- | 
| allowedCompanies |  name, numericalId, unavailable |
| allowedBrands | name, numerical


#### Exemplo de query graphql:
```bash
{
  crmUser {
    allowedCompanies {
      numericalId
      unavailable
      name
      
    }
    allowedBrands {
      numericalId
      name
    }
  }
}
```
#### retorno:

```json
{
  "data": {
    "crmUser": {
      "allowedCompanies": [
        {
          "numericalId": 737,
          "unavailable": false,
          "name": "10 Pastéis Pinheiros"
        },
        {
          "numericalId": 811,
          "unavailable": true,
          "name": "Teste 2"
        },
        {
          "numericalId": 3171,
          "unavailable": true,
          "name": "Teste do Hideki"
        }
      ],
      "allowedBrands": [
        {
          "numericalId": 343,
          "name": "10 Pastéis"
        }
      ]
    }
  }
}
```

#### Exemplo (curl):
```json
curl --request POST \
  --url https://graphql.staging.onyo.com/graphql \
  --header 'Authorization: Bearer eyJ0eX...' \
  --header 'Content-Type: application/json' \
  --data '{"query":"{\n  crmUser {\n    allowedCompanies {\n      numericalId\n      unavailable\n      name\n      \n    }\n    allowedBrands {\n      numericalId\n      name\n    }\n  }\n}\n"}'
```