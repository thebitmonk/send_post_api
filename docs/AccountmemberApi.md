# SendPostApi.AccountMemberApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memberRouterDelete**](AccountMemberApi.md#memberRouterDelete) | **DELETE** /account/member/{memberId} | 
[**memberRouterGet**](AccountMemberApi.md#memberRouterGet) | **GET** /account/member/{memberId} | 
[**memberRouterGetAll**](AccountMemberApi.md#memberRouterGetAll) | **GET** /account/member/ | 
[**memberRouterUpdate**](AccountMemberApi.md#memberRouterUpdate) | **PUT** /account/member/{memberId} | 
[**memberRouterVerifyByEmailRequest**](AccountMemberApi.md#memberRouterVerifyByEmailRequest) | **POST** /account/member/{memberId}/verify/email | 



## memberRouterDelete

> ModelsDeleteResponse memberRouterDelete(xAccountApiKey, memberId)



Delete Member

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMemberApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let memberId = 789; // Number | The MemberId you want to delete
apiInstance.memberRouterDelete(xAccountApiKey, memberId, (error, data, response) => {
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
 **memberId** | **Number**| The MemberId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberRouterGet

> ModelsMember memberRouterGet(xAccountApiKey, memberId)



Find Member by MemberId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMemberApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let memberId = 789; // Number | the MemberId you want to get
apiInstance.memberRouterGet(xAccountApiKey, memberId, (error, data, response) => {
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
 **memberId** | **Number**| the MemberId you want to get | 

### Return type

[**ModelsMember**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberRouterGetAll

> [ModelsMember] memberRouterGetAll(xAccountApiKey)



Get All Members

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMemberApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.memberRouterGetAll(xAccountApiKey, (error, data, response) => {
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

[**[ModelsMember]**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberRouterUpdate

> ModelsMember memberRouterUpdate(xAccountApiKey, memberId, body)



Update Member

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMemberApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let memberId = 789; // Number | The MemberId you want to update
let body = new SendPostApi.ModelsEMember(); // ModelsEMember | The body
apiInstance.memberRouterUpdate(xAccountApiKey, memberId, body, (error, data, response) => {
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
 **memberId** | **Number**| The MemberId you want to update | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The body | 

### Return type

[**ModelsMember**](ModelsMember.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberRouterVerifyByEmailRequest

> memberRouterVerifyByEmailRequest(xAccountApiKey, memberId, body)



Verify Member By Email Request

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMemberApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let memberId = 789; // Number | the MemberId who is inviting new member to join the account
let body = new SendPostApi.ModelsVerifyByMemberTokenRequest(); // ModelsVerifyByMemberTokenRequest | The Email to be used to verify
apiInstance.memberRouterVerifyByEmailRequest(xAccountApiKey, memberId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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
- **Accept**: Not defined

