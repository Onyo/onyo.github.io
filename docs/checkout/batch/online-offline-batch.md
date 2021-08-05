---
id: online-offline-batch
title: Ativar e Desativar lojas em lote para Rede
hide_title: true
---

## Ativar e Desativar lojas em lote

### Como funciona?

- Esta chamada tem como objetivo ativar e desativar lojas de uma determinada rede.


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
mutation {
  companiesUpdateOnlineOfflineBatch(
    brandId: 1, 
    companiesItems: [
      {
        id: 1, 
        unavailable: false
      }, 
      {
        id: 2, 
        unavailable: true
      }
      ]) 
    {
      success
  }
}
```                 

#### Exemplo (curl):

```json
curl --request POST \
  --url https://graphql.staging.onyo.com/graphql \
  --header 'Authorization: Bearer eyJ0eX...' \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  companiesUpdateOnlineOfflineBatch(brandId: 1, companiesItems: [{id: 1, unavailable: false}, {id: 2, unavailable: true}, {id: 3, unavailable: true}]) {\n    success\n  }\n}\n"}'
```

### Retornos da chamada:

#### Sucesso:

```json
{
  "data": {
    "companiesUpdateOnlineOfflineBatch": {
      "success": true
    }
  }
}
```

#### Erro:
```json
{
  "data": {
    "companiesUpdateOnlineOfflineBatch": {
      "success": false
    }
  }
}
```

### Unauthorized

Quando não autorizado o **accessToken** pode ocorrer os seguintes erros:


| **erro** |  **motivo** 
| --------- |  ------------------ |
| onyo_graphql.unauthorized     | quando o usuário não tem acesso a **brand** (ou marca)  
| onyo_graphql.batch_service_company_unauthorized     | quando a **CompanyId** não é autorizada. 


#### Exemplo:
```json
{
  "errors": [
    {
      "message": "onyo_graphql.unauthorized",
      ...
      }
  ],
  "data": {
    "companiesUpdateOnlineOfflineBatch": null
  }
}
```
