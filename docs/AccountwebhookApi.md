# SendPostApi.AccountWebhookApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountWebhookRouterCount**](AccountWebhookApi.md#accountWebhookRouterCount) | **GET** /account/webhook/count | 
[**accountWebhookRouterCreate**](AccountWebhookApi.md#accountWebhookRouterCreate) | **POST** /account/webhook/ | 
[**accountWebhookRouterDelete**](AccountWebhookApi.md#accountWebhookRouterDelete) | **DELETE** /account/webhook/{webhookId} | 
[**accountWebhookRouterGet**](AccountWebhookApi.md#accountWebhookRouterGet) | **GET** /account/webhook/{webhookId} | 
[**accountWebhookRouterGetAll**](AccountWebhookApi.md#accountWebhookRouterGetAll) | **GET** /account/webhook/ | 
[**accountWebhookRouterUpdate**](AccountWebhookApi.md#accountWebhookRouterUpdate) | **PUT** /account/webhook/{webhookId} | 



## accountWebhookRouterCount

> ModelsCountStat accountWebhookRouterCount(xAccountApiKey)



Count Total AccountWebhooks

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountWebhookApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.accountWebhookRouterCount(xAccountApiKey, (error, data, response) => {
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

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountWebhookRouterCreate

> ModelsAccountWebhook accountWebhookRouterCreate(xAccountApiKey, body)



Create AccountWebhook

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountWebhookApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The AccountWebhook content
apiInstance.accountWebhookRouterCreate(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The AccountWebhook content | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accountWebhookRouterDelete

> ModelsDeleteResponse accountWebhookRouterDelete(xAccountApiKey, webhookId)



Delete AccountWebhook

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountWebhookApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let webhookId = 789; // Number | The AccountWebhookId you want to delete
apiInstance.accountWebhookRouterDelete(xAccountApiKey, webhookId, (error, data, response) => {
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
 **webhookId** | **Number**| The AccountWebhookId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountWebhookRouterGet

> ModelsAccountWebhook accountWebhookRouterGet(xAccountApiKey, webhookId)



Find AccountWebhook by AccountWebhookId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountWebhookApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let webhookId = 789; // Number | the AccountWebhookId you want to get
apiInstance.accountWebhookRouterGet(xAccountApiKey, webhookId, (error, data, response) => {
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
 **webhookId** | **Number**| the AccountWebhookId you want to get | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountWebhookRouterGetAll

> [ModelsAccountWebhook] accountWebhookRouterGetAll(xAccountApiKey, opts)



Get All AccountWebhooks

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountWebhookApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};
apiInstance.accountWebhookRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsAccountWebhook]**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountWebhookRouterUpdate

> ModelsAccountWebhook accountWebhookRouterUpdate(xAccountApiKey, webhookId, body)



Update AccountWebhook

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountWebhookApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let webhookId = 789; // Number | The AccountWebhookId you want to update
let body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The body
apiInstance.accountWebhookRouterUpdate(xAccountApiKey, webhookId, body, (error, data, response) => {
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
 **webhookId** | **Number**| The AccountWebhookId you want to update | 
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The body | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

