# SendPostApi.AccountinvitationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invitationRouterCreate**](AccountinvitationApi.md#invitationRouterCreate) | **POST** /account/invitation/ | 
[**invitationRouterDelete**](AccountinvitationApi.md#invitationRouterDelete) | **DELETE** /account/invitation/{invitationId} | 
[**invitationRouterGetAll**](AccountinvitationApi.md#invitationRouterGetAll) | **GET** /account/invitation/ | 


<a name="invitationRouterCreate"></a>
# **invitationRouterCreate**
> ModelsInvitation invitationRouterCreate(xAccountApiKey, body)



Create Invitation

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountinvitationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEInvitation(); // ModelsEInvitation | The Invitation content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invitationRouterCreate(xAccountApiKey, body, callback);
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

<a name="invitationRouterDelete"></a>
# **invitationRouterDelete**
> ModelsDeleteResponse invitationRouterDelete(xAccountApiKey, invitationId, body)



Delete Invitation

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountinvitationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var invitationId = 789; // Number | The InvitationId you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invitationRouterDelete(xAccountApiKey, invitationId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **invitationId** | **Number**| The InvitationId you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invitationRouterGetAll"></a>
# **invitationRouterGetAll**
> [ModelsInvitation] invitationRouterGetAll(xAccountApiKey)



Get All Invitations

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountinvitationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invitationRouterGetAll(xAccountApiKey, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

