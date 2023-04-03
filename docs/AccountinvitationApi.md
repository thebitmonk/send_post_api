# SendPostApi.AccountinvitationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invitationRouterCreate**](AccountinvitationApi.md#invitationRouterCreate) | **POST** /account/invitation/ | 
[**invitationRouterDelete**](AccountinvitationApi.md#invitationRouterDelete) | **DELETE** /account/invitation/{invitationId} | 
[**invitationRouterGetAll**](AccountinvitationApi.md#invitationRouterGetAll) | **GET** /account/invitation/ | 

<a name="invitationRouterCreate"></a>
# **invitationRouterCreate**
> ModelsInvitation invitationRouterCreate(body, xAccountApiKey)



Create Invitation

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountinvitationApi();
let body = new SendPostApi.ModelsEInvitation(); // ModelsEInvitation | The Invitation content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.invitationRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEInvitation**](ModelsEInvitation.md)| The Invitation content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsInvitation**](ModelsInvitation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invitationRouterDelete"></a>
# **invitationRouterDelete**
> ModelsDeleteResponse invitationRouterDelete(xAccountApiKey, invitationId)



Delete Invitation

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountinvitationApi();
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

<a name="invitationRouterGetAll"></a>
# **invitationRouterGetAll**
> [ModelsInvitation] invitationRouterGetAll(xAccountApiKey)



Get All Invitations

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountinvitationApi();
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

