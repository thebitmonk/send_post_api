# SendPostApi.AccountalertApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alertRouterCount**](AccountalertApi.md#alertRouterCount) | **GET** /account/alert/count | 
[**alertRouterCreateAlert**](AccountalertApi.md#alertRouterCreateAlert) | **POST** /account/alert/ | 
[**alertRouterGetAll**](AccountalertApi.md#alertRouterGetAll) | **GET** /account/alert/ | 


<a name="alertRouterCount"></a>
# **alertRouterCount**
> ModelsCountStat alertRouterCount(xAccountApiKey, opts)



Count Total Alerts for account

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
> ModelsAlert alertRouterCreateAlert(xAccountApiKey, body)



create an alert

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

[**ModelsAlert**](ModelsAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertRouterGetAll"></a>
# **alertRouterGetAll**
> [ModelsDetailedAlert] alertRouterGetAll(xAccountApiKey, opts)



Get All Alerts

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

