# SendPostApi.SubaccountSenderApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**senderRouterCount**](SubaccountSenderApi.md#senderRouterCount) | **GET** /subaccount/sender/count | 
[**senderRouterCreate**](SubaccountSenderApi.md#senderRouterCreate) | **POST** /subaccount/sender/ | 
[**senderRouterDelete**](SubaccountSenderApi.md#senderRouterDelete) | **DELETE** /subaccount/sender/{senderId} | 
[**senderRouterGet**](SubaccountSenderApi.md#senderRouterGet) | **GET** /subaccount/sender/{senderId} | 
[**senderRouterGetAll**](SubaccountSenderApi.md#senderRouterGetAll) | **GET** /subaccount/sender/ | 
[**senderRouterUpdate**](SubaccountSenderApi.md#senderRouterUpdate) | **PUT** /subaccount/sender/{senderId} | 



## senderRouterCount

> ModelsCountStat senderRouterCount(xSubAccountApiKey)



Count Total Senders

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSenderApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
apiInstance.senderRouterCount(xSubAccountApiKey, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## senderRouterCreate

> ModelsSender senderRouterCreate(xSubAccountApiKey, body)



Create Sender

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSenderApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsESender(); // ModelsESender | The Sender content
apiInstance.senderRouterCreate(xSubAccountApiKey, body, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsESender**](ModelsESender.md)| The Sender content | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## senderRouterDelete

> ModelsDeleteResponse senderRouterDelete(xSubAccountApiKey, senderId)



Delete Sender

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSenderApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let senderId = 789; // Number | The SenderId you want to delete
apiInstance.senderRouterDelete(xSubAccountApiKey, senderId, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| The SenderId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## senderRouterGet

> ModelsSender senderRouterGet(xSubAccountApiKey, senderId)



Find Sender by SenderId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSenderApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let senderId = 789; // Number | the SenderId you want to get
apiInstance.senderRouterGet(xSubAccountApiKey, senderId, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| the SenderId you want to get | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## senderRouterGetAll

> [ModelsSender] senderRouterGetAll(xSubAccountApiKey, opts)



Get All Senders

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSenderApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.senderRouterGetAll(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsSender]**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## senderRouterUpdate

> ModelsSender senderRouterUpdate(xSubAccountApiKey, senderId, body)



Update Sender

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSenderApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let senderId = 789; // Number | The SenderId you want to update
let body = new SendPostApi.ModelsESender(); // ModelsESender | The body
apiInstance.senderRouterUpdate(xSubAccountApiKey, senderId, body, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| The SenderId you want to update | 
 **body** | [**ModelsESender**](ModelsESender.md)| The body | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

