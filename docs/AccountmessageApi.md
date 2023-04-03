# SendPostApi.AccountmessageApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageRouterGet**](AccountmessageApi.md#messageRouterGet) | **GET** /account/message/{messageId} | 
[**messageRouterGetAllEventsForAMessageId**](AccountmessageApi.md#messageRouterGetAllEventsForAMessageId) | **GET** /account/message/{messageId}/events | 
[**messageRouterGetAllEventsForAMessageIdFromANode**](AccountmessageApi.md#messageRouterGetAllEventsForAMessageIdFromANode) | **GET** /account/message/node/{messageId}/events | 
[**messageRouterGetMessageFromNode**](AccountmessageApi.md#messageRouterGetMessageFromNode) | **GET** /account/message/node/{messageId} | 

<a name="messageRouterGet"></a>
# **messageRouterGet**
> ModelsQEmailMessage messageRouterGet(xAccountApiKey, messageId)



Find Message By Id

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmessageApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key
let messageId = "messageId_example"; // String | the messageId that you want to retrieve

apiInstance.messageRouterGet(xAccountApiKey, messageId, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="messageRouterGetAllEventsForAMessageId"></a>
# **messageRouterGetAllEventsForAMessageId**
> [ModelsQEvent] messageRouterGetAllEventsForAMessageId(xAccountApiKey, messageId)



Find all events associated with a message id

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmessageApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let messageId = "messageId_example"; // String | the messageId that you want to retrieve

apiInstance.messageRouterGetAllEventsForAMessageId(xAccountApiKey, messageId, (error, data, response) => {
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
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="messageRouterGetAllEventsForAMessageIdFromANode"></a>
# **messageRouterGetAllEventsForAMessageIdFromANode**
> [ModelsQEvent] messageRouterGetAllEventsForAMessageIdFromANode(xAccountApiKey, messageId)



Find all message events associated with a message id from a specific node

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmessageApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let messageId = "messageId_example"; // String | the messageId that you want to retrieve

apiInstance.messageRouterGetAllEventsForAMessageIdFromANode(xAccountApiKey, messageId, (error, data, response) => {
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
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="messageRouterGetMessageFromNode"></a>
# **messageRouterGetMessageFromNode**
> ModelsQEmailMessage messageRouterGetMessageFromNode(xAccountApiKey, messageId)



Find Message from node by specific Id

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmessageApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let messageId = "messageId_example"; // String | the messageId that you want to retrieve

apiInstance.messageRouterGetMessageFromNode(xAccountApiKey, messageId, (error, data, response) => {
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
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

