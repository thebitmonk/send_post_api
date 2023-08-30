# SendPostApi.AccountTpspApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tPSPRouterCount**](AccountTpspApi.md#tPSPRouterCount) | **GET** /account/tpsp/count | 
[**tPSPRouterDelete**](AccountTpspApi.md#tPSPRouterDelete) | **DELETE** /account/tpsp/{tpspId} | 
[**tPSPRouterGet**](AccountTpspApi.md#tPSPRouterGet) | **GET** /account/tpsp/{tpspId} | 
[**tPSPRouterGetAll**](AccountTpspApi.md#tPSPRouterGetAll) | **GET** /account/tpsp/ | 
[**tPSPRouterInsert**](AccountTpspApi.md#tPSPRouterInsert) | **POST** /account/tpsp/ | 
[**tPSPRouterUpdate**](AccountTpspApi.md#tPSPRouterUpdate) | **PUT** /account/tpsp/{tpspId} | 



## tPSPRouterCount

> ModelsCountStat tPSPRouterCount(xAccountApiKey, opts)



Count Total TPSPs

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'search': "search_example" // String | search term
};
apiInstance.tPSPRouterCount(xAccountApiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tPSPRouterDelete

> ModelsDeleteResponse tPSPRouterDelete(xAccountApiKey, tpspId)



Delete ThirdPartySendingProvider

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspId = 789; // Number | The TPSPID you want to delete
apiInstance.tPSPRouterDelete(xAccountApiKey, tpspId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspId** | **Number**| The TPSPID you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tPSPRouterGet

> ModelsThirdPartySendingProvider tPSPRouterGet(xAccountApiKey, tpspId)



Find ThirdPartySendingProvider by TPSPID

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspId = 789; // Number | the TPSPID you want to get
apiInstance.tPSPRouterGet(xAccountApiKey, tpspId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspId** | **Number**| the TPSPID you want to get | 

### Return type

[**ModelsThirdPartySendingProvider**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tPSPRouterGetAll

> [ModelsThirdPartySendingProvider] tPSPRouterGetAll(xAccountApiKey, opts)



Get All TPSPs

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.tPSPRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsThirdPartySendingProvider]**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tPSPRouterInsert

> ModelsThirdPartySendingProvider tPSPRouterInsert(xAccountApiKey, body)



Insert ThirdPartySendingProvider

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsEThirdPartySendingProvider(); // ModelsEThirdPartySendingProvider | The body
apiInstance.tPSPRouterInsert(xAccountApiKey, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEThirdPartySendingProvider**](ModelsEThirdPartySendingProvider.md)| The body | 

### Return type

[**ModelsThirdPartySendingProvider**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tPSPRouterUpdate

> ModelsThirdPartySendingProvider tPSPRouterUpdate(xAccountApiKey, tpspId, body)



Update ThirdPartySendingProvider

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspId = 789; // Number | The TPSPID you want to update
let body = {key: null}; // Object | The body
apiInstance.tPSPRouterUpdate(xAccountApiKey, tpspId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspId** | **Number**| The TPSPID you want to update | 
 **body** | **Object**| The body | 

### Return type

[**ModelsThirdPartySendingProvider**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

