# YlThirdPartyInstantsettlementApiClient.InstantSettlementApi

All URIs are relative to *https://staging.youlendapi.com/instantsettlement*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiInstantSettlementGet**](InstantSettlementApi.md#apiInstantSettlementGet) | **GET** /api/InstantSettlement | An endpoint for getting your associated Instant Settlements
[**apiInstantSettlementInstantSettlementNumberPost**](InstantSettlementApi.md#apiInstantSettlementInstantSettlementNumberPost) | **POST** /api/InstantSettlement/{instantSettlementNumber} | Create instant settlement transactions for a specified instant settlement
[**apiInstantSettlementInstantSettlementNumberTransactionsGet**](InstantSettlementApi.md#apiInstantSettlementInstantSettlementNumberTransactionsGet) | **GET** /api/InstantSettlement/{instantSettlementNumber}/transactions | An endpoint for viewing the transactions for an Instant Settlement



## apiInstantSettlementGet

> [InstantSettlementView] apiInstantSettlementGet(opts)

An endpoint for getting your associated Instant Settlements

### Example

```javascript
import YlThirdPartyInstantsettlementApiClient from 'yl-third-party-instantsettlement-api-client';
let defaultClient = YlThirdPartyInstantsettlementApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyInstantsettlementApiClient.InstantSettlementApi();
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiInstantSettlementGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [optional] 

### Return type

[**[InstantSettlementView]**](InstantSettlementView.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiInstantSettlementInstantSettlementNumberPost

> apiInstantSettlementInstantSettlementNumberPost(instantSettlementNumber, opts)

Create instant settlement transactions for a specified instant settlement

Sample request:                    POST /api/InstantSettlement/30000001      [{          \&quot;transactionReferences\&quot;: [          \&quot;ref\&quot;          ],          \&quot;currencyISOCode\&quot;: \&quot;GBP\&quot;,          \&quot;totalSettlementAmount\&quot;: 10000,          \&quot;transactionDate\&quot; : \&quot;2020-02-16T18:25:43-05:00\&quot;      },      {          \&quot;transactionReferences\&quot;: [          \&quot;ref\&quot;          ],          \&quot;currencyISOCode\&quot;: \&quot;GBP\&quot;,          \&quot;totalSettlementAmount\&quot;: 500,          \&quot;transactionDate\&quot; : \&quot;2020-02-16T18:25:43-05:00\&quot;      }]

### Example

```javascript
import YlThirdPartyInstantsettlementApiClient from 'yl-third-party-instantsettlement-api-client';
let defaultClient = YlThirdPartyInstantsettlementApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyInstantsettlementApiClient.InstantSettlementApi();
let instantSettlementNumber = 56; // Number | Instant settlement number (an integer)
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'createInstantSettlementTransactionModel': [new YlThirdPartyInstantsettlementApiClient.CreateInstantSettlementTransactionModel()] // [CreateInstantSettlementTransactionModel] | 
};
apiInstance.apiInstantSettlementInstantSettlementNumberPost(instantSettlementNumber, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instantSettlementNumber** | **Number**| Instant settlement number (an integer) | 
 **apiVersion** | **String**|  | [optional] 
 **createInstantSettlementTransactionModel** | [**[CreateInstantSettlementTransactionModel]**](CreateInstantSettlementTransactionModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## apiInstantSettlementInstantSettlementNumberTransactionsGet

> [InstantSettlementTransactionModel] apiInstantSettlementInstantSettlementNumberTransactionsGet(instantSettlementNumber, opts)

An endpoint for viewing the transactions for an Instant Settlement

### Example

```javascript
import YlThirdPartyInstantsettlementApiClient from 'yl-third-party-instantsettlement-api-client';
let defaultClient = YlThirdPartyInstantsettlementApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyInstantsettlementApiClient.InstantSettlementApi();
let instantSettlementNumber = 56; // Number | The number of the Instant Settlement product
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.apiInstantSettlementInstantSettlementNumberTransactionsGet(instantSettlementNumber, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instantSettlementNumber** | **Number**| The number of the Instant Settlement product | 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**[InstantSettlementTransactionModel]**](InstantSettlementTransactionModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

