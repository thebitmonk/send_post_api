# SendPostApi.AccounttemplateApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountTemplateRouterCopy**](AccounttemplateApi.md#accountTemplateRouterCopy) | **POST** /account/template/{templateid}/copy | 
[**accountTemplateRouterCount**](AccounttemplateApi.md#accountTemplateRouterCount) | **GET** /account/template/count | 
[**accountTemplateRouterCreate**](AccounttemplateApi.md#accountTemplateRouterCreate) | **POST** /account/template/ | 
[**accountTemplateRouterDelete**](AccounttemplateApi.md#accountTemplateRouterDelete) | **DELETE** /account/template/{templateid} | 
[**accountTemplateRouterGet**](AccounttemplateApi.md#accountTemplateRouterGet) | **GET** /account/template/{templateid} | 
[**accountTemplateRouterGetAll**](AccounttemplateApi.md#accountTemplateRouterGetAll) | **GET** /account/template/ | 
[**accountTemplateRouterUpdate**](AccounttemplateApi.md#accountTemplateRouterUpdate) | **PUT** /account/template/{templateid} | 


<a name="accountTemplateRouterCopy"></a>
# **accountTemplateRouterCopy**
> ModelsAccountTemplate accountTemplateRouterCopy(xAccountApiKey, templateid)



Copy AccountTemplate <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | The id of the template you want to copy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterCopy(xAccountApiKey, templateid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| The id of the template you want to copy | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterCount"></a>
# **accountTemplateRouterCount**
> ModelsCountStat accountTemplateRouterCount(xAccountApiKey, opts)



Count total templates <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

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
apiInstance.accountTemplateRouterCount(xAccountApiKey, opts, callback);
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

<a name="accountTemplateRouterCreate"></a>
# **accountTemplateRouterCreate**
> ModelsAccountTemplate accountTemplateRouterCreate(xAccountApiKey, body)



Create a new template <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEAccountTemplate(); // ModelsEAccountTemplate | The AccountTemplate content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEAccountTemplate**](ModelsEAccountTemplate.md)| The AccountTemplate content | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterDelete"></a>
# **accountTemplateRouterDelete**
> ModelsDeleteResponse accountTemplateRouterDelete(xAccountApiKey, templateid, body)



Delete AccountTemplate <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | The id of the template you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterDelete(xAccountApiKey, templateid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| The id of the template you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterGet"></a>
# **accountTemplateRouterGet**
> ModelsAccountTemplate accountTemplateRouterGet(xAccountApiKey, templateid)



Get single template <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | ID of the template required


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterGet(xAccountApiKey, templateid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| ID of the template required | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterGetAll"></a>
# **accountTemplateRouterGetAll**
> [ModelsAccountTemplate] accountTemplateRouterGetAll(xAccountApiKey, opts)



Get all templates <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

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
apiInstance.accountTemplateRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsAccountTemplate]**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterUpdate"></a>
# **accountTemplateRouterUpdate**
> ModelsAccountTemplate accountTemplateRouterUpdate(xAccountApiKey, templateid, body)



update template <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | The id of the template you want to update

var body = new SendPostApi.ModelsEAccountTemplate(); // ModelsEAccountTemplate | The template content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterUpdate(xAccountApiKey, templateid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| The id of the template you want to update | 
 **body** | [**ModelsEAccountTemplate**](ModelsEAccountTemplate.md)| The template content | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

