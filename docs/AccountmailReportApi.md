# SendPostApi.AccountmailReportApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mailReportRouterMailReport**](AccountmailReportApi.md#mailReportRouterMailReport) | **POST** /account/mailReport/ | 
[**mailReportRouterMailReportGetSingleReport**](AccountmailReportApi.md#mailReportRouterMailReportGetSingleReport) | **GET** /account/mailReport/{reportId} | 
[**mailReportRouterMailReportProviders**](AccountmailReportApi.md#mailReportRouterMailReportProviders) | **GET** /account/mailReport/provider | 

<a name="mailReportRouterMailReport"></a>
# **mailReportRouterMailReport**
> ModelsMailReportResult mailReportRouterMailReport(body, xAccountApiKey)



get reputation of domain

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmailReportApi();
let body = new SendPostApi.ModelsCreateMailReport(); // ModelsCreateMailReport | The IP Email Provider Settings
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.mailReportRouterMailReport(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsCreateMailReport**](ModelsCreateMailReport.md)| The IP Email Provider Settings | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsMailReportResult**](ModelsMailReportResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mailReportRouterMailReportGetSingleReport"></a>
# **mailReportRouterMailReportGetSingleReport**
> ApiGlockappsMailReport mailReportRouterMailReportGetSingleReport(xAccountApiKey, reportId)



get Providers available

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmailReportApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let reportId = 789; // Number | the report id you want to get

apiInstance.mailReportRouterMailReportGetSingleReport(xAccountApiKey, reportId, (error, data, response) => {
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
 **reportId** | **Number**| the report id you want to get | 

### Return type

[**ApiGlockappsMailReport**](ApiGlockappsMailReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailReportRouterMailReportProviders"></a>
# **mailReportRouterMailReportProviders**
> ModelsProviderResult mailReportRouterMailReportProviders(xAccountApiKey)



get Providers available

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountmailReportApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.mailReportRouterMailReportProviders(xAccountApiKey, (error, data, response) => {
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

[**ModelsProviderResult**](ModelsProviderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

