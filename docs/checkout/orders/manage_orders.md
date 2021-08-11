---
id: manage_orders
title: Fluxo de gerenciamento de pedidos
hide_title: true
---

## Fluxo de gerenciamento de pedidos

### Como funciona?

Todas as requisições abaixo requerem autenticação. A autenticação deve ser fornecida através do envio do token da brand/company através do header HTTP Authorization.

O token da brand/company pode ser fornecido diretamente pela Pede Pronto, usando o modelo JWT de autenticação.

**Resumo**

O Pede Pronto disponibiliza o e-mail na listagem de pedidos, o PDV interpreta os dados. Se tudo estiver correto,  prosegue alterando o status para o ID 4 (pos-accepted) ou ID 5 (pos-denied).

### Listagem de pedidos (order-list)

> GET /v1/{:PARTNER_SLUG}/order

```
curl --request GET \
  --url https://pos.staging.onyo.com/v1/{:PARTNER_SLUG}/orders \
  --header 'Authorization: Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva
G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_ad
Qssw5c' \
  --header 'Content-Type: application/json'
```

Essa chamada retorna uma lista de pedidos da loja autenticada na requisição. Por padrão essa chamada executa um filtro pelos pedidos nos status 2 e 3 (payment-authorized e pos-received) que são os pedidos que o PDV precisa aprovar ou reprovar. Caso algum filtro de status seja feito o filtro padrão será sobrescrito.

| **Campo** | **Tipo**            | **Requerido** | **Exemplo**        |
| --------- | ------------------- | ------------- | ------------------ |
| status | String ou lista | Sim | Status ou lista de status dos pedidos. Por padrão os pedidos são filtrados pelos status 2 e 3 caso nenhum filtro de status seja informado. Ex: status=3 ou status=3,4,5 
| since | String | Não | ISO date em UTC. Ex: since=2018-04-01T00:00:00 |
| until | String | Não | ISO date em UTC. Ex: until=2016-04-01T00:00:00 |

Exemplo de URL (filtrando por pedidos aprovados e negados pelo PDV que tenham sido criados desde 01/09/2018 00:00:00 UTC):

```
/v1/{:PARTNER_SLUG}/order?status=4,5&since=2018-09-01T00:00:00
```

### Tipos de pedidos

| **ID** | **Código** | **Descrição** |
| ------ | ---------- | ------------- |
| 1 |counter |Um pedido a ser recebido no balcão para ser consumido no restaurante ou praça de alimentação |
| 2 | to-go | Uma encomenda a ser retirada embalada para ser consumida em outro local |
| 3 | curbside | Um pedido a ser retirado no Drive Thru |
| 4 | table | Um pedido para ser servido na mesa informada |
| 5 | delivery | Um pedido a ser entregue no endereço informado |
| 6 | card | Um pedido para ser registrado em um cartão de consumo |
| 7 | payment | Um pagamento por itens encomendados pessoalmente |
| 8 | coupon | Um pedido que será resgatado na loja, mas que não deve ser preparado até que o cliente a resgate pessoalmente |
| 9 | room-service | Um pedido a ser entregue no local informado considerando algumas opções restritivas, como por exemplo um prédio comercial |


** Status disponíveis para alteração **

Um status não pode retroceder, a não ser para 0 (Cancelled) ou 5 (POS_DENIED).

**Exemplo correto:** ```1 (backend-received) > 2 (payment-authorized) > 3 (pos-received) > 4 (pos-accepted) > 6 (read) > 7 (dispatched) ```

**Exemplo inválido:** ``` 1 (backend-received) > 2 (payment-authorized) > 3 (pos-received) > 4 (pos-accepted) > 3 (pos-received) ```

| **ID** | **Código (Inteiro)** | **Descrição** |
| ------ | -------------------- | ------------- |
| 0 |canceled |Cancelado devido ao pagamento ter sido negado ou cancelado manualmente pela Pede Pronto |
| 1 | backend-received | Aguardando processamento do pagamento |
| 2 | payment-authorized | Pagamento aprovado, aguardando processamento pelo PDV |
| 3 | pos-received | Recebido pelo PDV, aguardando confirmação |
| 4 | pos-accepted | Aceito pelo PDV |
| 5 | pos-denied | Negado pelo PDV |
| 6 | ready | Pedido pronto para ser recebido pelo consumidor (informado pela loja) |
| 7 | dispatched | Saiu para entrega (delivery) |
| 8 | delivered | Entregue para o consumidor|
| 9 | received | Recebido pelo consumidor (informado pelo próprio consumidor) |
| 13 | preparing | Pedido sendo preparado pela loja |
| 15 | product-unavailable | Preparo do pedido pausado devido a indisponibilidade de algum produto. Aguardando decisão do consumidor |
| 16 | customer-action-needed | Preparo do pedido pausado devido a uma dúvida do Staff da loja. Aguardando informação do consumidor |


**Status não aplicáveis para integrações deste manual**

| **ID** | **Código (Inteiro)** | **Descrição** |
| ------ | -------------------- | ------------- |
| 10 |consumed | Consumido pelo cliente | (Descontinuado)|
| 11 | pos-imported | Importado pelo sistema de PDV |
| 12 | pos-import-error | Não importado pelo sistema de PDV |
| 14 | pos-analysing | Em análise pelo sistema de PDV |


#### Campos Extras:

Os campos extras são retornados nessa chamada caso o pedido tenha informações adicionais como taxa de entrega ou descontos.

| **Campo** | **Descrição** |
| --------- | ------------- |
| optional | Campo booleano (true ou false) |
| value | Valor em R$ do extra/desconto |
| key | Campo descritivo do valor extra/desconto |
| label | Nome do valor extra/desconto |

Exemplo de resposta contendo um pedido:

```
{
 "pagination": {
   "next": null,
   "total": 1,
   "page": 1,
   "previous": null
 },
 "data": [
   {
     "pos_reference": "",
     "customer_document": "53189076871",
     "service_charge_value": null,
     "id": 1047534,
     "display_code": null,
     "order_type": 5,
     "nested_items": [
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": "",
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": "35.00",
         "base_unit_price": null,
         "product": {
           "id": 52012,
           "name": "Meio a Meio"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 1,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 2,
         "items": [
           {
             "base_unit_pos_price": null,
             "pos_reference": "",
             "pos_name": "",
             "description": "",
             "dragged_by": null,
             "addition": 0.0,
             "redeem_id": null,
             "unit_price": null,
             "base_unit_price": null,
             "product": {
               "id": 52013,
               "name": "Escolha os sabores"
             },
             "unit_pos_price": null,
             "order_id": 1047534,
             "order_position": 2,
             "discount": 0.0,
             "prepare_rightaway": true,
             "unit_points": 0,
             "product_type": 1,
             "items": [
               {
                 "base_unit_pos_price": null,
                 "pos_reference": "",
                 "pos_name": null,
                 "description": "None",
                 "dragged_by": null,
                 "addition": 0.0,
                 "redeem_id": null,
                 "unit_price": null,
                 "base_unit_price": null,
                 "product": {
                   "id": 52014,
                   "name": "Marguerita"
                 },
                 "unit_pos_price": null,
                 "order_id": 1047534,
                 "order_position": 3,
                 "discount": 0.0,
                 "prepare_rightaway": true,
                 "unit_points": 0,
                 "product_type": 0,
                 "items": [],
                 "partition": null,
                 "is_note": false,
                 "pos_parent_position": null,
                 "parent_order_position": 2,
                 "quantity": "1.000"
               },
               {
                 "base_unit_pos_price": null,
                 "pos_reference": "",
                 "pos_name": null,
                 "description": "None",
                 "dragged_by": null,
                 "addition": 0.0,
                 "redeem_id": null,
                 "unit_price": null,
                 "base_unit_price": null,
                 "product": {
                   "id": 52017,
                   "name": "Presunto Parma"
                 },
                 "unit_pos_price": null,
                 "order_id": 1047534,
                 "order_position": 4,
                 "discount": 0.0,
                 "prepare_rightaway": true,
                 "unit_points": 0,
                 "product_type": 0,
                 "items": [],
                 "partition": null,
                 "is_note": false,
                 "pos_parent_position": null,
                 "parent_order_position": 2,
                 "quantity": "1.000"
               }
             ],
             "partition": null,
             "is_note": false,
             "pos_parent_position": null,
             "parent_order_position": 1,
             "quantity": "1.000"
           }
         ],
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": null,
         "quantity": "1.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": null,
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": "14.00",
         "base_unit_price": null,
         "product": {
           "id": 71662,
           "name": "Kombucha Maracujá Garrafa Booz 320ml"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 5,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 2,
         "items": [],
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": null,
         "quantity": "1.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": null,
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": null,
         "base_unit_price": null,
         "product": {
           "id": 71669,
           "name": "Embalagem"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 6,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 2,
         "items": [],
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": null,
         "quantity": "2.000"
       }
     ],
     "preparation_time_minimum": 64,
     "pos_import_status": null,
     "payable_value": "49.65",
     "status": 3,
     "creation_datetime": "2020-06-04T00:23:34.162787Z",
     "table_reference": "",
     "total_value": "57.00",
     "redeem": false,
     "printed": false,
     "address": {
       "city": "São Paulo",
       "geoLat": "-23.5682759000",
       "country": "Brazil",
       "complement": "Bairro: Paraíso | Complemento: 2o andar",
       "number": "70",
       "zipCode": "04003-000",
       "state": "SP",
       "street": "Rua Coronel Oscar Porto",
       "geoLon": "-46.6491211000"
     },
     "customer": {
       "telephone": "11971652467",
       "email": "felipe@onyo.com",
       "document": "53189076871",
       "id": 32434,
       "name": "Felipe Armoni Teste"
     },
     "preparation_time_maximum": 74,
     "items": [
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": null,
         "description": "None",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": null,
         "base_unit_price": null,
         "product": {
           "id": 52014,
           "name": "Marguerita"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 3,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 0,
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": 2,
         "quantity": "1.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": "",
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": null,
         "base_unit_price": null,
         "product": {
           "id": 52013,
           "name": "Escolha os sabores"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 2,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 1,
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": 1,
         "quantity": "1.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": "",
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": "35.00",
         "base_unit_price": null,
         "product": {
           "id": 52012,
           "name": "Meio a Meio"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 1,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 2,
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": null,
         "quantity": "1.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": null,
         "description": "None",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": null,
         "base_unit_price": null,
         "product": {
           "id": 52017,
           "name": "Presunto Parma"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 4,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 0,
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": 2,
         "quantity": "1.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": null,
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": null,
         "base_unit_price": null,
         "product": {
           "id": 71669,
           "name": "Embalagem"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 6,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 2,
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": null,
         "quantity": "2.000"
       },
       {
         "base_unit_pos_price": null,
         "pos_reference": "",
         "pos_name": null,
         "description": "",
         "dragged_by": null,
         "addition": 0.0,
         "redeem_id": null,
         "unit_price": "14.00",
         "base_unit_price": null,
         "product": {
           "id": 71662,
           "name": "Kombucha Maracujá Garrafa Booz 320ml"
         },
         "unit_pos_price": null,
         "order_id": 1047534,
         "order_position": 5,
         "discount": 0.0,
         "prepare_rightaway": true,
         "unit_points": 0,
         "product_type": 2,
         "partition": null,
         "is_note": false,
         "pos_parent_position": null,
         "parent_order_position": null,
         "quantity": "1.000"
       }
     ],
     "extras": [
       {
         "optional": false,
         "value": "-7.35",
         "key": "discount",
         "label": "15OFF_LABARBARA_CHEFSCLUB"
       },
       {
         "optional": false,
         "value": "8.00",
         "key": "additional",
         "label": "Entrega"
       }
     ],
     "payments": [
       {
         "status": "canceled",
         "gateway_code": "vtex",
         "is_onyo_affiliation": false,
         "payment_method": "credit",
         "transaction_id": "BB2AF9F03FA744A79EF62858222C4B25",
         "value": "49.65",
         "numerical_id": 1054575,
         "transaction_date": "2020-06-04 00:23:34",
         "acquirer": {
           "pos_reference": "",
           "id": 1,
           "name": "Cielo"
         },
         "acquirer_return": {
           "Tid": "91744583",
           "Message": null,
           "ReturnCode": null,
           "authId": "744583"
         },
         "payment_method_pos_reference": "",
         "transaction_code": "TESTPAY1054575",
         "card": {
           "masked_number": "4444331111",
           "printed_name": "Felipe",
           "card_brand": {
             "pos_reference": "",
             "code": "visa",
             "id": 8,
             "name": "Visa"
           }
         }
       }
     ],
     "error": null,
     "discount_value": "7.35",
     "sequence_number": null
   }
 ]
}

```

### Detalhe de pedido (order-detail)

> GET /v1/{:PARTNER_SLUG}/order/{:order_id}


```
curl --request GET \
  --url https://pos.staging.onyo.com/v1/{:PARTNER_SLUG}/orders/1234 \
  --header 'Authorization: Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva
G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_ad
Qssw5c' \
  --header 'Content-Type: application/json'
```

Essa chamada retorna o JSON do pedido informado na URL. A resposta dessa chamada tem o mesmo conteúdo da lista de itens da chamada de listagem de pedidos, porém apenas com o objeto do pedido solicitado na URL. 

### Atualização de pedido (order-patch)

> PATCH /v1/{:PARTNER_SLUG}/order/{:order_id}

Essa chamada permite a atualização do status de um pedido para 4 (aceito / POS_ACCEPTED) ou 5 (erro / POS_DENIED).
Caso haja algum erro com o pedido é importante que o campo erro seja enviado junto com o status 5.

Exemplo de payload de aprovação de pedido:

```
{
    "status": 4
}
```

Exemplo de payload de reprovação de pedido:

```
 {
    "status": 5,
    "error": {
        "type": "onyo.order.invalid-data",
        "message":"Código de Produto Inválido",
        "productErrors": [
            {
                "id": "http://api.staging.onyo.com/v1/mobile/product/500",
                "error": {
                    "type": "onyo.order.item-inconsistent"
                }
            }
        ]
    }
}
```

#### Campos disponíveis para atualização

| **Campo** | **Tipo** | **Obrigatório** | **Comentário** |
| --------- | -------- | --------------- | -------------- |
|status | Inteiro | Não |Status que o PDV deseja atualizar o pedido. Ex: 4 (pos-accepted), 5 (pos-denied) ou 6 (ready). |
| error | ErrorObject | Sim | Detalhes do motivo de negação do pedido pelo PDV |
| type | String | Sim | Código de erro. Ver [Códigos de erro de pedido](http://documentacao.pedepronto.com.br/checkout/orders/manage_orders#c%C3%B3digos-de-erro-do-pedido) |
| detail |Object | Não |Detalhes do erro, para fins de debug, não precisa seguir um formato específico.|
| message | String | Não | Mensagem de erro |
| productErrors | list of ProductErrorObject | Não | Lista de erros de produtos, caso tenha ocorrido erro especificamente em algum produto. |

**Descrição de erro do produto**

| **Campo** | **Tipo** | **Obrigatório** | **Comentário** |
| --------- | -------- | --------------- | -------------- |
| id |URL |Sim |Url do produto que contém erro.|
| error | ErrorObject | Sim | Objeto de erro. |


#### Códigos de erro do pedido

| **Código** | Código para produto | Comentário |
| --------- | ------------- | ------------- |
| onyo.order.customer-invalid | | Quando há alguma inconsistência na informação do cliente entre a Pede Pronto e o PDV |
| onyo.order.item-invalid-value | | Quando há alguma inconsistência no valor do pedido entre a Pede Pronto e o PDV |
| onyo.order.order-invalid | | Quando há alguma inconsistência no formato do pedido entre a Pede Pronto e o PDV |
| onyo.order.payment-invalid | | Quando há alguma inconsistência no pagamento entre a Pede Pronto e o PDV |
| onyo.order.product-missing | | Quando está faltando um produto obrigatório para o pedido em questão |
| onyo.order.invalid-data | onyo.order.item-inconsistent | |Quando há alguma inconsistência no registro de um determinado produto (ex .: preço ou pontos) |
| onyo.order.invalid-data | onyo.order.item-quantity-min | Quando a quantidade  de um determinado produto ou subproduto for inferior ao mínimo |
| onyo.order.invalid-data | onyo.order.item-subproduct-unexisting | Quando o subproduto não pode ser pedido para um produto porque não existe para a loja ou não é filho do suposto produto pai |
| onyo.order.invalid-data | onyo.order.item-unavailable-time | Quando o produto não pode ser pedido devido às restrições de tempo |
| onyo.order.invalid-data | onyo.order.item-unavailable | Quando o produto não pode ser pedido porque está fora de estoque |
| onyo.order.invalid-data | onyo.order.item-unexisting |Quando o produto informado não existe no PDV |

