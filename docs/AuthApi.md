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
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AuthApi();

var body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content

var xToken = "xToken_example"; // String | Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRouterCreate(body, xToken, callback);
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
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AuthApi();

var body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content

var xToken = "xToken_example"; // String | Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRouterGetAuthInfo(body, xToken, callback);
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
> ModelsAuthInfo authRouterUpdateAuthInfo(name, companyName, onboardQAnswered, uid, sendingVolumePerMonth, hexColor, logoURL, xToken, opts)



Updates member and accounts related for email verification and on boarding answers

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AuthApi();

var name = "name_example"; // String | Name

var companyName = "companyName_example"; // String | Company Name

var onboardQAnswered = "onboardQAnswered_example"; // String | Onboarding Questionare answered

var uid = "uid_example"; // String | user id

var sendingVolumePerMonth = "sendingVolumePerMonth_example"; // String | Sending Volume Per Month

var hexColor = "hexColor_example"; // String | company brand color

var logoURL = "logoURL_example"; // String | logo URL

var xToken = "xToken_example"; // String | Firebase dynamic token

var opts = { 
  'switchingSendpostDescription': "switchingSendpostDescription_example", // String | Why user like to switch to sendpost
  'currentEmailServiceProvider': "currentEmailServiceProvider_example", // String | Current Email Service Provider
  'logo': "/path/to/file.txt" // File | Logo file
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRouterUpdateAuthInfo(name, companyName, onboardQAnswered, uid, sendingVolumePerMonth, hexColor, logoURL, xToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name | 
 **companyName** | **String**| Company Name | 
 **onboardQAnswered** | **String**| Onboarding Questionare answered | 
 **uid** | **String**| user id | 
 **sendingVolumePerMonth** | **String**| Sending Volume Per Month | 
 **hexColor** | **String**| company brand color | 
 **logoURL** | **String**| logo URL | 
 **xToken** | **String**| Firebase dynamic token | 
 **switchingSendpostDescription** | **String**| Why user like to switch to sendpost | [optional] 
 **currentEmailServiceProvider** | **String**| Current Email Service Provider | [optional] 
 **logo** | **File**| Logo file | [optional] 

### Return type

[**ModelsAuthInfo**](ModelsAuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

