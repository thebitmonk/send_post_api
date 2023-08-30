# SendPostApi.AccountAlertApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alertRouterCount**](AccountAlertApi.md#alertRouterCount) | **GET** /account/alert/count | 
[**alertRouterCreateAlert**](AccountAlertApi.md#alertRouterCreateAlert) | **POST** /account/alert/ | 
[**alertRouterDelete**](AccountAlertApi.md#alertRouterDelete) | **DELETE** /account/alert/{alertId} | 
[**alertRouterGetAll**](AccountAlertApi.md#alertRouterGetAll) | **GET** /account/alert/ | 
[**alertRouterUpdate**](AccountAlertApi.md#alertRouterUpdate) | **PUT** /account/alert/{alertId} | 



## alertRouterCount

> ModelsCountStat alertRouterCount(xAccountApiKey, opts)



Count Total Alerts for account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountAlertApi();
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


## alertRouterCreateAlert

> ModelsAlertResponse alertRouterCreateAlert(xAccountApiKey, body)



create an alert

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountAlertApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsAlertRequest(); // ModelsAlertRequest | The List to br sent
apiInstance.alertRouterCreateAlert(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsAlertRequest**](ModelsAlertRequest.md)| The List to br sent | 

### Return type

[**ModelsAlertResponse**](ModelsAlertResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## alertRouterDelete

> ModelsDeleteResponse alertRouterDelete(xAccountApiKey, alertId)



Delete Alert

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountAlertApi();
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


## alertRouterGetAll

> [ModelsDetailedAlert] alertRouterGetAll(xAccountApiKey, opts)



Get All Alerts

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountAlertApi();
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


## alertRouterUpdate

> Object alertRouterUpdate(xAccountApiKey, alertId, body)



Update an Alert

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountAlertApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let alertId = 789; // Number | The alert you want to update
let body = new SendPostApi.ModelsEAlert(); // ModelsEAlert | The alert  Settings
apiInstance.alertRouterUpdate(xAccountApiKey, alertId, body, (error, data, response) => {
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
 **alertId** | **Number**| The alert you want to update | 
 **body** | [**ModelsEAlert**](ModelsEAlert.md)| The alert  Settings | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

