# SendPostApi.AccountInvitationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invitationRouterCreate**](AccountInvitationApi.md#invitationRouterCreate) | **POST** /account/invitation/ | 
[**invitationRouterDelete**](AccountInvitationApi.md#invitationRouterDelete) | **DELETE** /account/invitation/{invitationId} | 
[**invitationRouterGetAll**](AccountInvitationApi.md#invitationRouterGetAll) | **GET** /account/invitation/ | 



## invitationRouterCreate

> ModelsInvitation invitationRouterCreate(xAccountApiKey, body)



Create Invitation

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountInvitationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsEInvitation(); // ModelsEInvitation | The Invitation content
apiInstance.invitationRouterCreate(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEInvitation**](ModelsEInvitation.md)| The Invitation content | 

### Return type

[**ModelsInvitation**](ModelsInvitation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invitationRouterDelete

> ModelsDeleteResponse invitationRouterDelete(xAccountApiKey, invitationId)



Delete Invitation

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountInvitationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let invitationId = 789; // Number | The InvitationId you want to delete
apiInstance.invitationRouterDelete(xAccountApiKey, invitationId, (error, data, response) => {
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
 **invitationId** | **Number**| The InvitationId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invitationRouterGetAll

> [ModelsInvitation] invitationRouterGetAll(xAccountApiKey)



Get All Invitations

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountInvitationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.invitationRouterGetAll(xAccountApiKey, (error, data, response) => {
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

[**[ModelsInvitation]**](ModelsInvitation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

