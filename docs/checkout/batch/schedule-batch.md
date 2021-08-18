---
id: schedule-batch
title: Alteração de Horário em Lote para Rede
hide_title: true
---

# Alteração do Horário de funcionamento do estabelecimento em lote para Rede

## Como funciona?

- Esta chamada serve para alterar os horarários de funcionamento dos estabelecimentos de determinada Rede.

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
  companyWeekdayTimeRulesBatch(
    brandId: 1, 
    schedules: 
    [
      {
        companyId: 1, 
        schedule: 
        [
          {
            day: 1, 
            timeFrom: "11:00:00", 
            timeTo: "15:00:00"
            }
        ]
      }
    ]
  ) {
    success
  }
}
```    


| **Campo** | **Tipo**            | **Requerido** | **Exemplo**        |
| --------- | ------------------- | ------------- | ------------- |
| brandId     | Int             | S             | 123 |
| schedules     | List            | S             | schedules: [{...}]  |
| companyId     | Int              | S             | 321 |
| schedule     | List              | S             | schedule: [{...}] |
| day     | Int              | S* (Suporta range de 0 a 6)             | 0 |
| timeFrom     | String              | S* (Suporta construção: **H** ou **H:MM** ou **H:MM:SS**) | 1:05 | 
| timeTo     | String              | S* (Suporta construção: **H** ou **H:MM** ou **H:MM:SS**) | 1:05:35 | 

#### Exemplo (curl):

```json
curl --request POST \
  --url https://graphql.staging.onyo.com/graphql \
  --header 'Authorization: Bearer eyJ0eX...' \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  companyWeekdayTimeRulesBatch(brandId: 123, schedules: [\n    {companyId: 1, schedule: [{day: 1, timeFrom: \"11:00:00\", timeTo: \"15:00:00\"}]},\n  ]) {\n    success\n  }\n}\n\n\n\n"}'
```

### Retornos da chamada:

#### Sucesso:

```json
{
  "data": {
    "companyWeekdayTimeRulesBatch": {
      "success": true
    }
  }
}
```

#### Erro:
```json
{
  "data": {
    "companyWeekdayTimeRulesBatch": {
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
    "companyWeekdayTimeRulesBatch": null
  }
}
```


