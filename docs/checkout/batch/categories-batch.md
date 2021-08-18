---
id: categories-batch
title: Consultar por categorias de uma Rede
hide_title: true
---

# Consultar por categorias de uma Rede

## Como funciona?

- Esta chamada serve para listar todas as categorias de uma Rede.

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
  listCategories(brandId: 123) {
    edges {
      node {
        numericalId
        name
      }
    }
  }
}
```                 

#### Exemplo (curl):

```json
curl --request POST \
--url https://graphql.staging.onyo.com/graphql \
--header 'Authorization: Bearer eyJ0...' \
--header 'Content-Type: application/json' \
--data '{"query":"{\n  listCategories(brandId: 343) {\n    edges {\n      node {\n        numericalId\n        name\n      }\n    }\n  }\n}\n"}'
```

### Retornos da chamada:

#### Sucesso:

```json
{
  "data": {
    "listCategories": {
      "edges": [
        {
          "node": {
            "numericalId": 8417,
            "name": "lorem ddsdsd"
          }
        },
        {
          "node": {
            "numericalId": 8388,
            "name": "outra lorem ddsdsd"
          }
        }
      ]
    }
  }
}
```

### Unauthorized

Quando não autorizado o **accessToken** pode ocorrer os seguintes erros:


| **erro** |  **motivo** 
| --------- |  ------------------ |
| onyo_graphql.unauthorized     | quando o usuário não tem acesso a **brand** (ou marca)  


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
    "listCategories": null
  }
}
```


