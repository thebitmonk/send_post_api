# SendPostApi.SubaccountsenderApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**senderRouterCount**](SubaccountsenderApi.md#senderRouterCount) | **GET** /subaccount/sender/count | 
[**senderRouterCreate**](SubaccountsenderApi.md#senderRouterCreate) | **POST** /subaccount/sender/ | 
[**senderRouterDelete**](SubaccountsenderApi.md#senderRouterDelete) | **DELETE** /subaccount/sender/{senderId} | 
[**senderRouterGet**](SubaccountsenderApi.md#senderRouterGet) | **GET** /subaccount/sender/{senderId} | 
[**senderRouterGetAll**](SubaccountsenderApi.md#senderRouterGetAll) | **GET** /subaccount/sender/ | 
[**senderRouterUpdate**](SubaccountsenderApi.md#senderRouterUpdate) | **PUT** /subaccount/sender/{senderId} | 

<a name="senderRouterCount"></a>
# **senderRouterCount**
> ModelsCountStat senderRouterCount(xSubAccountApiKey)



Count Total Senders

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsenderApi();
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

<a name="senderRouterCreate"></a>
# **senderRouterCreate**
> ModelsSender senderRouterCreate(body, xSubAccountApiKey)



Create Sender

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsenderApi();
let body = new SendPostApi.ModelsESender(); // ModelsESender | The Sender content
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.senderRouterCreate(body, xSubAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsESender**](ModelsESender.md)| The Sender content | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="senderRouterDelete"></a>
# **senderRouterDelete**
> ModelsDeleteResponse senderRouterDelete(xSubAccountApiKey, senderId)



Delete Sender

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsenderApi();
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

<a name="senderRouterGet"></a>
# **senderRouterGet**
> ModelsSender senderRouterGet(xSubAccountApiKey, senderId)



Find Sender by SenderId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsenderApi();
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

<a name="senderRouterGetAll"></a>
# **senderRouterGetAll**
> [ModelsSender] senderRouterGetAll(xSubAccountApiKey, opts)



Get All Senders

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsenderApi();
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

<a name="senderRouterUpdate"></a>
# **senderRouterUpdate**
> ModelsSender senderRouterUpdate(body, xSubAccountApiKey, senderId)



Update Sender

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsenderApi();
let body = new SendPostApi.ModelsESender(); // ModelsESender | The body
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let senderId = 789; // Number | The SenderId you want to update

apiInstance.senderRouterUpdate(body, xSubAccountApiKey, senderId, (error, data, response) => {
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
 **body** | [**ModelsESender**](ModelsESender.md)| The body | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| The SenderId you want to update | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

