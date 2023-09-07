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



Count Total Alerts for account <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountalertApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertRouterCount(xAccountApiKey, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertRouterCreateAlert"></a>
# **alertRouterCreateAlert**
> ModelsAlertResponse alertRouterCreateAlert(xAccountApiKey, body)



create an alert <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountalertApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsAlertRequest(); // ModelsAlertRequest | The List to br sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertRouterCreateAlert(xAccountApiKey, body, callback);
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

<a name="alertRouterDelete"></a>
# **alertRouterDelete**
> ModelsDeleteResponse alertRouterDelete(xAccountApiKey, alertId, body)



Delete Alert <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountalertApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var alertId = 789; // Number | The AlertId you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertRouterDelete(xAccountApiKey, alertId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **alertId** | **Number**| The AlertId you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertRouterGetAll"></a>
# **alertRouterGetAll**
> [ModelsDetailedAlert] alertRouterGetAll(xAccountApiKey, opts)



Get All Alerts <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountalertApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertRouterGetAll(xAccountApiKey, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertRouterUpdate"></a>
# **alertRouterUpdate**
> ModelsAlert alertRouterUpdate(xAccountApiKey, alertId, body)



Update an Alert <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountalertApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var alertId = 789; // Number | The alert you want to update

var body = new SendPostApi.ModelsEAlert(); // ModelsEAlert | The alert  Settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertRouterUpdate(xAccountApiKey, alertId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **alertId** | **Number**| The alert you want to update | 
 **body** | [**ModelsEAlert**](ModelsEAlert.md)| The alert  Settings | 

### Return type

[**ModelsAlert**](ModelsAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

