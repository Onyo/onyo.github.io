---
id: menu-batch
title: Criação de Cardápio em Lote para Rede
hide_title: true
---

## Criar Cardápio em Lote para Rede

### Como funciona?

- Esta chamada serve para criar cardápio em lote para lojas em uma determinada Rede.

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
  createMenuBatch(
    brandId: "Int", 
    companiesIds: ["Int"], 
    menu: [
      {
        productName: "String", 
        productPosName: "String", 
        productPosReference: "String", 
        productOperator: "String", 
        productSequence: "Int", 
        productShortDescription: "String", 
        productFullDescription: "String", 
        productCategoryId: "Int",
        productCategoryName: "String", 
        productCompanyPrice: "Float", 
        productCompanyPosPrice: "Float", 
        choosables: [
          {
            productMinimumChoices: "Int", 
            productMaximumChoices: "Int", 
            productName: "String", 
            productPosName: "String", 
            productPosReference: "String", 
            productOperator: "String", 
            productSequence: "Int", 
            productCompanyPrice: "Int", 
            productCompanyPosPrice: "Int"
            simples: [
              {
                productMinimumChoices: "Int", 
                productMaximumChoices: "Int", 
                productName: "String", 
                productPosName: "String", 
                productPosReference: "String", 
                productOperator: "String", 
                productSequence: "Int", 
                productCompanyPrice: "Int", 
                productCompanyPosPrice: "Int"
              }
            ]
          },
        ]
      },
      
    ]) {
    success
  }
}

``` 

| **Campo** | **Tipo**            | **Requerido** | **Exemplo**        |
| --------- | ------------------- | ------------- | ------------------ |
| productName     | String              | S             | Pão de Cenoura |
| productPosName     | String   | N             | Pão de Cenoura        |
| productPosReference       | String | N             | produtoABC         |
| productOperator      | String (sum, and, xor, or)              | S             | sum   |
| productShortDescription      | String              | N             | Pão de Cenoura ralada delicioso   |
| productFullDescription      | String              | N            | Pão de Cenoura ralada delicioso e coberto com chocolate   |
| productCategoryId      | Int              | N             | 1   |
| productCategoryName      | String              | N* (Se não conter um **productCategoryId** esse campo será obrigatório. Se for usado junto ao campo **productCategoryId** este campo será atualizado)             | Padaria   |
| productCompanyPrice      | Float              | S             | 2.52   |
| productCompanyPosPrice      | Float              | N             | 2.52  |
| productMinimumChoices      | Int              | S* (Deve ser usado apenas dentro de uma lista de **choosables** ou **simples**)            | 0  |
| productMaximumChoices      | Int              | S* (Deve ser usado apenas dentro de uma lista de **choosables** ou **simples**)            | 1  |
| choosables      | List              | N             | choosables: [{...}]  |
| simples      | List              | S | choosables: [{..., simples: [{...}]}]  |




#### Exemplo (curl):

```json
curl --request POST \
  --url https://graphql.staging.onyo.com/graphql \
  --header 'Authorization: Bearer eyJ0eXAi...' \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  createMenuBatch(brandId: 1, companiesIds: [1, 2, 3], \n    menu: [\n      {\n        productName: \"lorem\", \n        productPosName: \"lorem\", \n        productPosReference: \"lorem\", \n        productOperator: \"sum\", \n        productSequence: 1, \n        productShortDescription: \"lorem\", \n        productFullDescription: \"lorem\", \n        productCategoryId: 8388,\n        productCategoryName: \"outra lorem\", \n        productCompanyPrice: 25.5, \n        productCompanyPosPrice: 25.5, \n        choosables: [\n          {\n            productMinimumChoices: 0, \n            productMaximumChoices: 1, \n            productName: \"lorem\", \n            productPosName: \"lorem\", \n            productPosReference: \"lorem\", \n            productOperator: \"sum\", \n            productSequence: 1, \n            productCompanyPrice: 0, \n            productCompanyPosPrice: 0\n            simples: [\n              {\n                productMinimumChoices: 0, \n                productMaximumChoices: 1, \n                productName: \"lorem\", \n                productPosName: \"lorem\", \n                productPosReference: \"lorem\", \n                productOperator: \"sum\", \n                productSequence: 1, \n                productCompanyPrice: 0, \n                productCompanyPosPrice: 0\n              }\n            ]\n          },\n        ]\n      },\n      \n    ]) {\n    success\n  }\n}\n\n"}'
```

### Retornos da chamada:

#### Sucesso:

```json
{
  "data": {
    "createMenuBatch": {
      "success": true
    }
  }
}
```

#### Erro:
```json
{
  "data": {
    "createMenuBatch": {
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
    "createMenuBatch": null
  }
}
```