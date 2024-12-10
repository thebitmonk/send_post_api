# SendPostApi.AccountmailReportApi

All URIs are relative to *https://apiv2.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mailReportRouterMailReport**](AccountmailReportApi.md#mailReportRouterMailReport) | **POST** /account/mailReport/ | 
[**mailReportRouterMailReportGetSingleReport**](AccountmailReportApi.md#mailReportRouterMailReportGetSingleReport) | **GET** /account/mailReport/{reportId} | 
[**mailReportRouterMailReportProviders**](AccountmailReportApi.md#mailReportRouterMailReportProviders) | **GET** /account/mailReport/provider | 


<a name="mailReportRouterMailReport"></a>
# **mailReportRouterMailReport**
> ModelsMailReportResult mailReportRouterMailReport(xAccountApiKey, body)



get reputation of domain <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmailReportApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsCreateMailReport(); // ModelsCreateMailReport | The IP Email Provider Settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mailReportRouterMailReport(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsCreateMailReport**](ModelsCreateMailReport.md)| The IP Email Provider Settings | 

### Return type

[**ModelsMailReportResult**](ModelsMailReportResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mailReportRouterMailReportGetSingleReport"></a>
# **mailReportRouterMailReportGetSingleReport**
> ModelsGlockappsMailReport mailReportRouterMailReportGetSingleReport(xAccountApiKey, reportId)



get Providers available <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmailReportApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var reportId = 789; // Number | the report id you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mailReportRouterMailReportGetSingleReport(xAccountApiKey, reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **reportId** | **Number**| the report id you want to get | 

### Return type

[**ModelsGlockappsMailReport**](ModelsGlockappsMailReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mailReportRouterMailReportProviders"></a>
# **mailReportRouterMailReportProviders**
> ModelsProviderResult mailReportRouterMailReportProviders(xAccountApiKey)



get Providers available <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmailReportApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mailReportRouterMailReportProviders(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsProviderResult**](ModelsProviderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

