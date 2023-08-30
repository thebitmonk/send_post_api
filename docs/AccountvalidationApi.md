# SendPostApi.AccountValidationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateRouterValidateEmailBulk**](AccountValidationApi.md#validateRouterValidateEmailBulk) | **POST** /account/validation/bulk | 
[**validationRouterCount**](AccountValidationApi.md#validationRouterCount) | **GET** /account/validation/count | 
[**validationRouterDeleteValidation**](AccountValidationApi.md#validationRouterDeleteValidation) | **DELETE** /account/validation/ | 
[**validationRouterGetAll**](AccountValidationApi.md#validationRouterGetAll) | **GET** /account/validation/ | 
[**validationRouterValidateEmailList**](AccountValidationApi.md#validationRouterValidateEmailList) | **POST** /account/validation/ | 



## validateRouterValidateEmailBulk

> ModelsBulkResponse validateRouterValidateEmailBulk(xAccountApiKey, fileinput)



Validate Emails In File Asynchronously

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountValidationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let fileinput = "/path/to/file"; // File | CSV whose emails need to be validated
apiInstance.validateRouterValidateEmailBulk(xAccountApiKey, fileinput, (error, data, response) => {
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
 **fileinput** | **File**| CSV whose emails need to be validated | 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## validationRouterCount

> ModelsCountStat validationRouterCount(xAccountApiKey)



Count Total Validations

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountValidationApi();
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


## validationRouterDeleteValidation

> ModelsValidation validationRouterDeleteValidation(xAccountApiKey, body)



Delete a specific validation

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountValidationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = ["null"]; // [String] | List of emails to be deleted from validation
apiInstance.validationRouterDeleteValidation(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**[String]**](String.md)| List of emails to be deleted from validation | 

### Return type

[**ModelsValidation**](ModelsValidation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validationRouterGetAll

> [ModelsValidation] validationRouterGetAll(xAccountApiKey, opts)



Get all validation

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountValidationApi();
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


## validationRouterValidateEmailList

> ModelsCleanedList validationRouterValidateEmailList(xAccountApiKey, body)



Validate Email List Synchronously

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountValidationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated
apiInstance.validationRouterValidateEmailList(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The email list to be sent for being validated | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

