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
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var fileinput = "/path/to/file.txt"; // File | CSV whose emails need to be validated

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateRouterValidateEmailBulk(fileinput, xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileinput** | **File**| CSV whose emails need to be validated | 
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
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterCount(xAccountApiKey, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterDeleteValidation"></a>
# **validationRouterDeleteValidation**
> ModelsValidation validationRouterDeleteValidation(xAccountApiKey, body)



Delete a specific validation

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEValidation(); // ModelsEValidation | List of emails to be deleted from validation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterDeleteValidation(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEValidation**](ModelsEValidation.md)| List of emails to be deleted from validation | 

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
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterGetAll(xAccountApiKey, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterValidateEmailList"></a>
# **validationRouterValidateEmailList**
> ModelsCleanedList validationRouterValidateEmailList(xAccountApiKey, body)



Validate Email List Synchronously

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterValidateEmailList(xAccountApiKey, body, callback);
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

