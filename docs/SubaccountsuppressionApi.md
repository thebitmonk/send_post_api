# SendPostApi.SubaccountSuppressionApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suppressionRouterCount**](SubaccountSuppressionApi.md#suppressionRouterCount) | **GET** /subaccount/suppression/count | 
[**suppressionRouterCreateSuppressions**](SubaccountSuppressionApi.md#suppressionRouterCreateSuppressions) | **POST** /subaccount/suppression/ | 
[**suppressionRouterCreateSuppressionsInSuppressionFilter**](SubaccountSuppressionApi.md#suppressionRouterCreateSuppressionsInSuppressionFilter) | **POST** /subaccount/suppression/filter | 
[**suppressionRouterDeleteSuppression**](SubaccountSuppressionApi.md#suppressionRouterDeleteSuppression) | **DELETE** /subaccount/suppression/ | 
[**suppressionRouterDeleteSuppressionsInSuppressionFilter**](SubaccountSuppressionApi.md#suppressionRouterDeleteSuppressionsInSuppressionFilter) | **DELETE** /subaccount/suppression/filter | 
[**suppressionRouterExportAllSuppressions**](SubaccountSuppressionApi.md#suppressionRouterExportAllSuppressions) | **POST** /subaccount/suppression/export | 
[**suppressionRouterGetAllSuppressions**](SubaccountSuppressionApi.md#suppressionRouterGetAllSuppressions) | **GET** /subaccount/suppression/ | 



## suppressionRouterCount

> ModelsCountStat suppressionRouterCount(xSubAccountApiKey, opts)



Count Total Suppressions

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
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


## suppressionRouterCreateSuppressions

> [ModelsSuppression] suppressionRouterCreateSuppressions(xSubAccountApiKey, body)



Add Email Addresses To Suppression List

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsRSuppression(); // ModelsRSuppression | Suppression content
apiInstance.suppressionRouterCreateSuppressions(xSubAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsRSuppression**](ModelsRSuppression.md)| Suppression content | 

### Return type

[**[ModelsSuppression]**](ModelsSuppression.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## suppressionRouterCreateSuppressionsInSuppressionFilter

> suppressionRouterCreateSuppressionsInSuppressionFilter(body)



Add Email Addresses To Suppression Filter

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
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


## suppressionRouterDeleteSuppression

> [ModelsDeleteResponse] suppressionRouterDeleteSuppression(xSubAccountApiKey, body)



Delete specific emails which are in suppression list

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsRDSuppression(); // ModelsRDSuppression | Suppression content
apiInstance.suppressionRouterDeleteSuppression(xSubAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsRDSuppression**](ModelsRDSuppression.md)| Suppression content | 

### Return type

[**[ModelsDeleteResponse]**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## suppressionRouterDeleteSuppressionsInSuppressionFilter

> suppressionRouterDeleteSuppressionsInSuppressionFilter(body)



Delete specific emails which are in suppression list

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
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


## suppressionRouterExportAllSuppressions

> suppressionRouterExportAllSuppressions(xSubAccountApiKey, opts)



Export all suppressions

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'email': "email_example" // String | member email
};
apiInstance.suppressionRouterExportAllSuppressions(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **email** | **String**| member email | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## suppressionRouterGetAllSuppressions

> [ModelsSuppression] suppressionRouterGetAllSuppressions(xSubAccountApiKey, opts)



Get all suppressions

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountSuppressionApi();
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

