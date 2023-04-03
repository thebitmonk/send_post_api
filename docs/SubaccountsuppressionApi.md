# SendPostApi.SubaccountsuppressionApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suppressionRouterCount**](SubaccountsuppressionApi.md#suppressionRouterCount) | **GET** /subaccount/suppression/count | 
[**suppressionRouterCreateSuppressions**](SubaccountsuppressionApi.md#suppressionRouterCreateSuppressions) | **POST** /subaccount/suppression/ | 
[**suppressionRouterCreateSuppressionsInSuppressionFilter**](SubaccountsuppressionApi.md#suppressionRouterCreateSuppressionsInSuppressionFilter) | **POST** /subaccount/suppression/filter | 
[**suppressionRouterDeleteSuppression**](SubaccountsuppressionApi.md#suppressionRouterDeleteSuppression) | **DELETE** /subaccount/suppression/ | 
[**suppressionRouterDeleteSuppressionsInSuppressionFilter**](SubaccountsuppressionApi.md#suppressionRouterDeleteSuppressionsInSuppressionFilter) | **DELETE** /subaccount/suppression/filter | 
[**suppressionRouterGetAllSuppressions**](SubaccountsuppressionApi.md#suppressionRouterGetAllSuppressions) | **GET** /subaccount/suppression/ | 

<a name="suppressionRouterCount"></a>
# **suppressionRouterCount**
> ModelsCountStat suppressionRouterCount(xSubAccountApiKey, opts)



Count Total Suppressions

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.suppressionRouterCount(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="suppressionRouterCreateSuppressions"></a>
# **suppressionRouterCreateSuppressions**
> ModelsSuppression suppressionRouterCreateSuppressions(body, xSubAccountApiKey)



Add Email Addresses To Suppression List

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsuppressionApi();
let body = new SendPostApi.ModelsRSuppression(); // ModelsRSuppression | Suppression content
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.suppressionRouterCreateSuppressions(body, xSubAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsRSuppression**](ModelsRSuppression.md)| Suppression content | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsSuppression**](ModelsSuppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suppressionRouterCreateSuppressionsInSuppressionFilter"></a>
# **suppressionRouterCreateSuppressionsInSuppressionFilter**
> suppressionRouterCreateSuppressionsInSuppressionFilter(body)



Add Email Addresses To Suppression Filter

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsuppressionApi();
let body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Add suppressions to suppression filter

apiInstance.suppressionRouterCreateSuppressionsInSuppressionFilter(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsSuppression**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="suppressionRouterDeleteSuppression"></a>
# **suppressionRouterDeleteSuppression**
> ModelsSuppression suppressionRouterDeleteSuppression(body, xSubAccountApiKey)



Delete specific emails which are in suppression list

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsuppressionApi();
let body = new SendPostApi.ModelsRDSuppression(); // ModelsRDSuppression | Suppression content
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.suppressionRouterDeleteSuppression(body, xSubAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsRDSuppression**](ModelsRDSuppression.md)| Suppression content | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsSuppression**](ModelsSuppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suppressionRouterDeleteSuppressionsInSuppressionFilter"></a>
# **suppressionRouterDeleteSuppressionsInSuppressionFilter**
> suppressionRouterDeleteSuppressionsInSuppressionFilter(body)



Delete specific emails which are in suppression list

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsuppressionApi();
let body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Suppression content

apiInstance.suppressionRouterDeleteSuppressionsInSuppressionFilter(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsSuppression**](ModelsSuppression.md)| Suppression content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="suppressionRouterGetAllSuppressions"></a>
# **suppressionRouterGetAllSuppressions**
> [ModelsSuppression] suppressionRouterGetAllSuppressions(xSubAccountApiKey, opts)



Get all suppressions

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountsuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.suppressionRouterGetAllSuppressions(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSuppression]**](ModelsSuppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

