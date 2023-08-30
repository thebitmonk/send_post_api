# SendPostApi.AccountSettingApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountSettingRouterCheckDedicatedIPExist**](AccountSettingApi.md#accountSettingRouterCheckDedicatedIPExist) | **GET** /account/setting/dedicated | 
[**accountSettingRouterGetAccount**](AccountSettingApi.md#accountSettingRouterGetAccount) | **GET** /account/setting/ | 
[**accountSettingRouterUpdate**](AccountSettingApi.md#accountSettingRouterUpdate) | **PUT** /account/setting/ | 



## accountSettingRouterCheckDedicatedIPExist

> ModelsDedicatedIPs accountSettingRouterCheckDedicatedIPExist(xAccountApiKey)



check if account has dedicated ip&#39;s

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSettingApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.accountSettingRouterCheckDedicatedIPExist(xAccountApiKey, (error, data, response) => {
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

[**ModelsDedicatedIPs**](ModelsDedicatedIPs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountSettingRouterGetAccount

> ModelsAccount accountSettingRouterGetAccount(xAccountApiKey)



get latest account details

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSettingApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.accountSettingRouterGetAccount(xAccountApiKey, (error, data, response) => {
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

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountSettingRouterUpdate

> ModelsAccount accountSettingRouterUpdate(xAccountApiKey, body)



update account settings

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSettingApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsEAccountSetting(); // ModelsEAccountSetting | The account settings to be updated
apiInstance.accountSettingRouterUpdate(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEAccountSetting**](ModelsEAccountSetting.md)| The account settings to be updated | 

### Return type

[**ModelsAccount**](ModelsAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

