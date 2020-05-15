# SendPostApi.SubaccountwebhookApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookRouterCreate**](SubaccountwebhookApi.md#webhookRouterCreate) | **POST** /subaccount/webhook/ | 
[**webhookRouterDelete**](SubaccountwebhookApi.md#webhookRouterDelete) | **DELETE** /subaccount/webhook/{webhookId} | 
[**webhookRouterGet**](SubaccountwebhookApi.md#webhookRouterGet) | **GET** /subaccount/webhook/{webhookId} | 
[**webhookRouterGetAll**](SubaccountwebhookApi.md#webhookRouterGetAll) | **GET** /subaccount/webhook/ | 
[**webhookRouterUpdate**](SubaccountwebhookApi.md#webhookRouterUpdate) | **PUT** /subaccount/webhook/{webhookId} | 


<a name="webhookRouterCreate"></a>
# **webhookRouterCreate**
> ModelsWebhook webhookRouterCreate(xSubAccountApiKey, body)



Create Webhook

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountwebhookApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The Webhook content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookRouterCreate(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The Webhook content | 

### Return type

[**ModelsWebhook**](ModelsWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookRouterDelete"></a>
# **webhookRouterDelete**
> ModelsDeleteResponse webhookRouterDelete(xSubAccountApiKey, webhookId)



Delete Webhook

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountwebhookApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var webhookId = 789; // Number | The WebhookId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookRouterDelete(xSubAccountApiKey, webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **webhookId** | **Number**| The WebhookId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookRouterGet"></a>
# **webhookRouterGet**
> ModelsWebhook webhookRouterGet(xSubAccountApiKey, webhookId)



Find Webhook by WebhookId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountwebhookApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var webhookId = 789; // Number | the WebhookId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookRouterGet(xSubAccountApiKey, webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **webhookId** | **Number**| the WebhookId you want to get | 

### Return type

[**ModelsWebhook**](ModelsWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookRouterGetAll"></a>
# **webhookRouterGetAll**
> [ModelsWebhook] webhookRouterGetAll(xSubAccountApiKey, opts)



Get All Webhooks

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountwebhookApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookRouterGetAll(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsWebhook]**](ModelsWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookRouterUpdate"></a>
# **webhookRouterUpdate**
> ModelsWebhook webhookRouterUpdate(xSubAccountApiKey, webhookId, body)



Update Webhook

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountwebhookApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var webhookId = 789; // Number | The WebhookId you want to update

var body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookRouterUpdate(xSubAccountApiKey, webhookId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **webhookId** | **Number**| The WebhookId you want to update | 
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The body | 

### Return type

[**ModelsWebhook**](ModelsWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

