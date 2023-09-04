# SendPostApi.AccountmemberApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memberRouterDelete**](AccountmemberApi.md#memberRouterDelete) | **DELETE** /account/member/{memberId} | 
[**memberRouterGet**](AccountmemberApi.md#memberRouterGet) | **GET** /account/member/{memberId} | 
[**memberRouterGetAll**](AccountmemberApi.md#memberRouterGetAll) | **GET** /account/member/ | 
[**memberRouterUpdate**](AccountmemberApi.md#memberRouterUpdate) | **PUT** /account/member/{memberId} | 
[**memberRouterVerifyByEmailRequest**](AccountmemberApi.md#memberRouterVerifyByEmailRequest) | **POST** /account/member/{memberId}/verify/email | 


<a name="memberRouterDelete"></a>
# **memberRouterDelete**
> ModelsDeleteResponse memberRouterDelete(xAccountApiKey, memberId)



Delete Member

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | The MemberId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterDelete(xAccountApiKey, memberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| The MemberId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="memberRouterGet"></a>
# **memberRouterGet**
> ModelsMember memberRouterGet(xAccountApiKey, memberId)



Find Member by MemberId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | the MemberId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterGet(xAccountApiKey, memberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| the MemberId you want to get | 

### Return type

[**ModelsMember**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="memberRouterGetAll"></a>
# **memberRouterGetAll**
> [ModelsMember] memberRouterGetAll(xAccountApiKey)



Get All Members

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterGetAll(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsMember]**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="memberRouterUpdate"></a>
# **memberRouterUpdate**
> ModelsMember memberRouterUpdate(xAccountApiKey, memberId, body)



Update Member

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | The MemberId you want to update

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memberRouterUpdate(xAccountApiKey, memberId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| The MemberId you want to update | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The body | 

### Return type

[**ModelsMember**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="memberRouterVerifyByEmailRequest"></a>
# **memberRouterVerifyByEmailRequest**
> memberRouterVerifyByEmailRequest(xAccountApiKey, memberId, body)



Verify Member By Email Request

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmemberApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | the MemberId who is inviting new member to join the account

var body = new SendPostApi.ModelsVerifyByMemberTokenRequest(); // ModelsVerifyByMemberTokenRequest | The Email to be used to verify


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.memberRouterVerifyByEmailRequest(xAccountApiKey, memberId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| the MemberId who is inviting new member to join the account | 
 **body** | [**ModelsVerifyByMemberTokenRequest**](ModelsVerifyByMemberTokenRequest.md)| The Email to be used to verify | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

