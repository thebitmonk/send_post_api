# SendPostApi.AccountgetorcreateApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountRouterCreate**](AccountgetorcreateApi.md#accountRouterCreate) | **POST** /account/getorcreate/ | 


<a name="accountRouterCreate"></a>
# **accountRouterCreate**
> [ModelsAccount] accountRouterCreate(body, xToken)



Create Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountgetorcreateApi();

var body = new SendPostApi.ModelsEAccount(); // ModelsEAccount | The Account content

var xToken = "xToken_example"; // String | Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountRouterCreate(body, xToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsEAccount**](ModelsEAccount.md)| The Account content | 
 **xToken** | **String**| Firebase dynamic token | 

### Return type

[**[ModelsAccount]**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

