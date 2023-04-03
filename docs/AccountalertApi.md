# SendPostApi.AccountalertApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alertRouterCount**](AccountalertApi.md#alertRouterCount) | **GET** /account/alert/count | 
[**alertRouterCreateAlert**](AccountalertApi.md#alertRouterCreateAlert) | **POST** /account/alert/ | 
[**alertRouterDelete**](AccountalertApi.md#alertRouterDelete) | **DELETE** /account/alert/{alertId} | 
[**alertRouterGetAll**](AccountalertApi.md#alertRouterGetAll) | **GET** /account/alert/ | 
[**alertRouterUpdate**](AccountalertApi.md#alertRouterUpdate) | **PUT** /account/alert/{alertId} | 

<a name="alertRouterCount"></a>
# **alertRouterCount**
> ModelsCountStat alertRouterCount(xAccountApiKey, opts)



Count Total Alerts for account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountalertApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'search': "search_example" // String | search term
};
apiInstance.alertRouterCount(xAccountApiKey, opts, (error, data, response) => {
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
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="alertRouterCreateAlert"></a>
# **alertRouterCreateAlert**
> ModelsAlertResponse alertRouterCreateAlert(body, xAccountApiKey)



create an alert

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountalertApi();
let body = new SendPostApi.ModelsAlertRequest(); // ModelsAlertRequest | The List to br sent
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.alertRouterCreateAlert(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsAlertRequest**](ModelsAlertRequest.md)| The List to br sent | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsAlertResponse**](ModelsAlertResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertRouterDelete"></a>
# **alertRouterDelete**
> ModelsDeleteResponse alertRouterDelete(xAccountApiKey, alertId)



Delete Alert

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountalertApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let alertId = 789; // Number | The AlertId you want to delete

apiInstance.alertRouterDelete(xAccountApiKey, alertId, (error, data, response) => {
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
 **alertId** | **Number**| The AlertId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="alertRouterGetAll"></a>
# **alertRouterGetAll**
> [ModelsDetailedAlert] alertRouterGetAll(xAccountApiKey, opts)



Get All Alerts

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountalertApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.alertRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsDetailedAlert]**](ModelsDetailedAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="alertRouterUpdate"></a>
# **alertRouterUpdate**
> Alert alertRouterUpdate(body, xAccountApiKey, alertId)



Update an Alert

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountalertApi();
let body = new SendPostApi.ModelsEAlert(); // ModelsEAlert | The alert  Settings
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let alertId = 789; // Number | The alert you want to update

apiInstance.alertRouterUpdate(body, xAccountApiKey, alertId, (error, data, response) => {
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
 **body** | [**ModelsEAlert**](ModelsEAlert.md)| The alert  Settings | 
 **xAccountApiKey** | **String**| Account API Key | 
 **alertId** | **Number**| The alert you want to update | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

