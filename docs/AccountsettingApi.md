# SendPostApi.AccountsettingApi

All URIs are relative to *http://127.0.0.1:8082/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountSettingRouterUpdate**](AccountsettingApi.md#accountSettingRouterUpdate) | **PUT** /account/setting/ | 


<a name="accountSettingRouterUpdate"></a>
# **accountSettingRouterUpdate**
> ModelsAccount accountSettingRouterUpdate(xAccountApiKey, body)



update account settings

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsettingApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEAccountSetting(); // ModelsEAccountSetting | The account settings to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountSettingRouterUpdate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEAccountSetting**](ModelsEAccountSetting.md)| The account settings to be updated | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

