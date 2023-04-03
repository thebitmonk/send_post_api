# SendPostApi.AccountvalidationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateRouterValidateEmailBulk**](AccountvalidationApi.md#validateRouterValidateEmailBulk) | **POST** /account/validation/bulk | 
[**validationRouterCount**](AccountvalidationApi.md#validationRouterCount) | **GET** /account/validation/count | 
[**validationRouterDeleteValidation**](AccountvalidationApi.md#validationRouterDeleteValidation) | **DELETE** /account/validation/ | 
[**validationRouterGetAll**](AccountvalidationApi.md#validationRouterGetAll) | **GET** /account/validation/ | 
[**validationRouterValidateEmailList**](AccountvalidationApi.md#validationRouterValidateEmailList) | **POST** /account/validation/ | 

<a name="validateRouterValidateEmailBulk"></a>
# **validateRouterValidateEmailBulk**
> ModelsBulkResponse validateRouterValidateEmailBulk(fileinput, xAccountApiKey)



Validate Emails In File Asynchronously

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountvalidationApi();
let fileinput = "fileinput_example"; // Blob | 
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.validateRouterValidateEmailBulk(fileinput, xAccountApiKey, (error, data, response) => {
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
 **fileinput** | **Blob**|  | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="validationRouterCount"></a>
# **validationRouterCount**
> ModelsCountStat validationRouterCount(xAccountApiKey)



Count Total Validations

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountvalidationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.validationRouterCount(xAccountApiKey, (error, data, response) => {
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

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validationRouterDeleteValidation"></a>
# **validationRouterDeleteValidation**
> ModelsValidation validationRouterDeleteValidation(body, xAccountApiKey)



Delete a specific validation

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountvalidationApi();
let body = ["body_example"]; // [String] | List of emails to be deleted from validation
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.validationRouterDeleteValidation(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**[String]**](String.md)| List of emails to be deleted from validation | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsValidation**](ModelsValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterGetAll"></a>
# **validationRouterGetAll**
> [ModelsValidation] validationRouterGetAll(xAccountApiKey, opts)



Get all validation

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountvalidationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};
apiInstance.validationRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsValidation]**](ModelsValidation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validationRouterValidateEmailList"></a>
# **validationRouterValidateEmailList**
> ModelsCleanedList validationRouterValidateEmailList(body, xAccountApiKey)



Validate Email List Synchronously

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountvalidationApi();
let body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.validationRouterValidateEmailList(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The email list to be sent for being validated | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

