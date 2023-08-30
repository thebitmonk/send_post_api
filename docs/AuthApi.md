# SendPostApi.AuthApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authRouterCreate**](AuthApi.md#authRouterCreate) | **POST** /auth/create | 
[**authRouterGetAuthInfo**](AuthApi.md#authRouterGetAuthInfo) | **POST** /auth/info | 
[**authRouterUpdateAuthInfo**](AuthApi.md#authRouterUpdateAuthInfo) | **PUT** /auth/info | 
[**authRouterUpdateLogo**](AuthApi.md#authRouterUpdateLogo) | **PUT** /auth/logo | 



## authRouterCreate

> ModelsAccount authRouterCreate(xToken, body)



Create Account, sub-account and member

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let xToken = "xToken_example"; // String | Firebase dynamic token
let body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content
apiInstance.authRouterCreate(xToken, body, (error, data, response) => {
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
 **xToken** | **String**| Firebase dynamic token | 
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRouterGetAuthInfo

> ModelsAuthInfo authRouterGetAuthInfo(xToken, body)



Get Auth Info Details

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let xToken = "xToken_example"; // String | Firebase dynamic token
let body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content
apiInstance.authRouterGetAuthInfo(xToken, body, (error, data, response) => {
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
 **xToken** | **String**| Firebase dynamic token | 
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRouterUpdateAuthInfo

> ModelsAuthInfo authRouterUpdateAuthInfo(xToken, body)



Updates member and accounts related for email verification and on boarding answers

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let xToken = "xToken_example"; // String | Firebase dynamic token
let body = new SendPostApi.ModelsEAccountMember(); // ModelsEAccountMember | The Account Member content
apiInstance.authRouterUpdateAuthInfo(xToken, body, (error, data, response) => {
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
 **xToken** | **String**| Firebase dynamic token | 
 **body** | [**ModelsEAccountMember**](ModelsEAccountMember.md)| The Account Member content | 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRouterUpdateLogo

> authRouterUpdateLogo(xToken, uid, opts)



Updates account brand logo for custom templates

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AuthApi();
let xToken = "xToken_example"; // String | Firebase dynamic token
let uid = "uid_example"; // String | user id
let opts = {
  'logo': "/path/to/file" // File | Logo file
};
apiInstance.authRouterUpdateLogo(xToken, uid, opts, (error, data, response) => {
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
 **xToken** | **String**| Firebase dynamic token | 
 **uid** | **String**| user id | 
 **logo** | **File**| Logo file | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

