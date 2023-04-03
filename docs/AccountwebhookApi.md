# SendPostApi.AccountwebhookApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountWebhookRouterCount**](AccountwebhookApi.md#accountWebhookRouterCount) | **GET** /account/webhook/count | 
[**accountWebhookRouterCreate**](AccountwebhookApi.md#accountWebhookRouterCreate) | **POST** /account/webhook/ | 
[**accountWebhookRouterDelete**](AccountwebhookApi.md#accountWebhookRouterDelete) | **DELETE** /account/webhook/{webhookId} | 
[**accountWebhookRouterGet**](AccountwebhookApi.md#accountWebhookRouterGet) | **GET** /account/webhook/{webhookId} | 
[**accountWebhookRouterGetAll**](AccountwebhookApi.md#accountWebhookRouterGetAll) | **GET** /account/webhook/ | 
[**accountWebhookRouterUpdate**](AccountwebhookApi.md#accountWebhookRouterUpdate) | **PUT** /account/webhook/{webhookId} | 

<a name="accountWebhookRouterCount"></a>
# **accountWebhookRouterCount**
> ModelsCountStat accountWebhookRouterCount(xAccountApiKey)



Count Total AccountWebhooks

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountwebhookApi();
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

<a name="accountWebhookRouterCreate"></a>
# **accountWebhookRouterCreate**
> ModelsAccountWebhook accountWebhookRouterCreate(body, xAccountApiKey)



Create AccountWebhook

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountwebhookApi();
let body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The AccountWebhook content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.accountWebhookRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The AccountWebhook content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterDelete"></a>
# **accountWebhookRouterDelete**
> ModelsDeleteResponse accountWebhookRouterDelete(xAccountApiKey, webhookId)



Delete AccountWebhook

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountwebhookApi();
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

<a name="accountWebhookRouterGet"></a>
# **accountWebhookRouterGet**
> ModelsAccountWebhook accountWebhookRouterGet(xAccountApiKey, webhookId)



Find AccountWebhook by AccountWebhookId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountwebhookApi();
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

<a name="accountWebhookRouterGetAll"></a>
# **accountWebhookRouterGetAll**
> [ModelsAccountWebhook] accountWebhookRouterGetAll(xAccountApiKey, opts)



Get All AccountWebhooks

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountwebhookApi();
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

<a name="accountWebhookRouterUpdate"></a>
# **accountWebhookRouterUpdate**
> ModelsAccountWebhook accountWebhookRouterUpdate(body, xAccountApiKey, webhookId)



Update AccountWebhook

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountwebhookApi();
let body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The body
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let webhookId = 789; // Number | The AccountWebhookId you want to update

apiInstance.accountWebhookRouterUpdate(body, xAccountApiKey, webhookId, (error, data, response) => {
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
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The body | 
 **xAccountApiKey** | **String**| Account API Key | 
 **webhookId** | **Number**| The AccountWebhookId you want to update | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

