# SendPostApi.AuthApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authRouterCreate**](AuthApi.md#authRouterCreate) | **POST** /auth/create | 
[**authRouterGetAuthInfo**](AuthApi.md#authRouterGetAuthInfo) | **POST** /auth/info | 
[**authRouterUpdateAuthInfo**](AuthApi.md#authRouterUpdateAuthInfo) | **PUT** /auth/info | 

<a name="authRouterCreate"></a>
# **authRouterCreate**
> ModelsAccount authRouterCreate(body, xToken)



Create Account, sub-account and member

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content
let xToken = "xToken_example"; // String | Firebase dynamic token

apiInstance.authRouterCreate(body, xToken, (error, data, response) => {
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
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRouterGetAuthInfo"></a>
# **authRouterGetAuthInfo**
> ModelsAuthInfo authRouterGetAuthInfo(body, xToken)



Get Auth Info Details

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content
let xToken = "xToken_example"; // String | Firebase dynamic token

apiInstance.authRouterGetAuthInfo(body, xToken, (error, data, response) => {
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
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRouterUpdateAuthInfo"></a>
# **authRouterUpdateAuthInfo**
> ModelsAuthInfo authRouterUpdateAuthInfo(body, xToken)



Updates member and accounts related for email verification and on boarding answers

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let body = new SendPostApi.ModelsEAccountMember(); // ModelsEAccountMember | The Account Member content
let xToken = "xToken_example"; // String | Firebase dynamic token

apiInstance.authRouterUpdateAuthInfo(body, xToken, (error, data, response) => {
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
 **body** | [**ModelsEAccountMember**](ModelsEAccountMember.md)| The Account Member content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

