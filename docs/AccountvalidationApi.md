# SendPostApi.AccountvalidationApi

All URIs are relative to *https://apiv2.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateRouterValidateEmailBulk**](AccountvalidationApi.md#validateRouterValidateEmailBulk) | **POST** /account/validation/bulk | 
[**validationRouterCount**](AccountvalidationApi.md#validationRouterCount) | **GET** /account/validation/count | 
[**validationRouterDeleteValidation**](AccountvalidationApi.md#validationRouterDeleteValidation) | **DELETE** /account/validation/ | 
[**validationRouterGetAll**](AccountvalidationApi.md#validationRouterGetAll) | **GET** /account/validation/ | 
[**validationRouterGetEmailCountByStatus**](AccountvalidationApi.md#validationRouterGetEmailCountByStatus) | **GET** /account/validation/emails/count | 
[**validationRouterGetEmailsByStatus**](AccountvalidationApi.md#validationRouterGetEmailsByStatus) | **GET** /account/validation/emails | 
[**validationRouterGetValidationJobResults**](AccountvalidationApi.md#validationRouterGetValidationJobResults) | **GET** /account/validation/results | 
[**validationRouterValidateEmailBulkList**](AccountvalidationApi.md#validationRouterValidateEmailBulkList) | **POST** /account/validation/list/bulk | 


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
> ModelsCountStat validationRouterCount(xSubAccountApiKey)



Count Total Validations <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | SubAccount API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterCount(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| SubAccount API Key | 

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



Delete a specific validation <br>

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
> [ModelsValidationJob] validationRouterGetAll(xSubAccountApiKey, opts)



Get all validation <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | SubAccount API Key

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
apiInstance.validationRouterGetAll(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| SubAccount API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsValidationJob]**](ModelsValidationJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterGetEmailCountByStatus"></a>
# **validationRouterGetEmailCountByStatus**
> MapStringint validationRouterGetEmailCountByStatus(xSubAccountApiKey, status)



Get count of email addresses based on status <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | SubAccount API Key

var status = 789; // Number | Email status filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterGetEmailCountByStatus(xSubAccountApiKey, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| SubAccount API Key | 
 **status** | **Number**| Email status filter | 

### Return type

[**MapStringint**](MapStringint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterGetEmailsByStatus"></a>
# **validationRouterGetEmailsByStatus**
> [ModelsEmail] validationRouterGetEmailsByStatus(xSubAccountApiKey, status, opts)



Fetch email addresses based on status with limit and offset <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | SubAccount API Key

var status = 789; // Number | Email status filter

var opts = { 
  'offset': 789, // Number | Offset for pagination
  'limit': 789 // Number | Limit for pagination
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterGetEmailsByStatus(xSubAccountApiKey, status, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| SubAccount API Key | 
 **status** | **Number**| Email status filter | 
 **offset** | **Number**| Offset for pagination | [optional] 
 **limit** | **Number**| Limit for pagination | [optional] 

### Return type

[**[ModelsEmail]**](ModelsEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterGetValidationJobResults"></a>
# **validationRouterGetValidationJobResults**
> ModelsBulkResponse validationRouterGetValidationJobResults(xSubAccountApiKey, opts)



Get validation job results <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'jobId': 789, // Number | jobId
  'tag': "tag_example" // String | tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterGetValidationJobResults(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **jobId** | **Number**| jobId | [optional] 
 **tag** | **String**| tag | [optional] 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validationRouterValidateEmailBulkList"></a>
# **validationRouterValidateEmailBulkList**
> ModelsBulkResponse validationRouterValidateEmailBulkList(xSubAccountApiKey, body)



Validate Emails In File Asynchronously <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidationApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validationRouterValidateEmailBulkList(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The email list to be sent for being validated | 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

