# SendPostApi.AccountsettingApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountSettingRouterUpdate**](AccountsettingApi.md#accountSettingRouterUpdate) | **PUT** /account/setting/ | 

<a name="accountSettingRouterUpdate"></a>
# **accountSettingRouterUpdate**
> ModelsAccount accountSettingRouterUpdate(body, xAccountApiKey)



update account settings

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsettingApi();
let body = new SendPostApi.ModelsEAccountSetting(); // ModelsEAccountSetting | The account settings to be updated
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.accountSettingRouterUpdate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEAccountSetting**](ModelsEAccountSetting.md)| The account settings to be updated | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

