# SendPostApi.AccountMailReportApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mailReportRouterMailReport**](AccountMailReportApi.md#mailReportRouterMailReport) | **POST** /account/mailReport/ | 
[**mailReportRouterMailReportGetSingleReport**](AccountMailReportApi.md#mailReportRouterMailReportGetSingleReport) | **GET** /account/mailReport/{reportId} | 
[**mailReportRouterMailReportProviders**](AccountMailReportApi.md#mailReportRouterMailReportProviders) | **GET** /account/mailReport/provider | 



## mailReportRouterMailReport

> ModelsMailReportResult mailReportRouterMailReport(xAccountApiKey, body)



get reputation of domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMailReportApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsCreateMailReport(); // ModelsCreateMailReport | The IP Email Provider Settings
apiInstance.mailReportRouterMailReport(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsCreateMailReport**](ModelsCreateMailReport.md)| The IP Email Provider Settings | 

### Return type

[**ModelsMailReportResult**](ModelsMailReportResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mailReportRouterMailReportGetSingleReport

> Object mailReportRouterMailReportGetSingleReport(xAccountApiKey, reportId)



get Providers available

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMailReportApi();
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mailReportRouterMailReportProviders

> ModelsProviderResult mailReportRouterMailReportProviders(xAccountApiKey)



get Providers available

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountMailReportApi();
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

