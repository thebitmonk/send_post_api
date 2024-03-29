# SendPostApi.AccountdomainApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDomainRouterCount**](AccountdomainApi.md#accountDomainRouterCount) | **GET** /account/domain/count | 
[**accountDomainRouterGet**](AccountdomainApi.md#accountDomainRouterGet) | **GET** /account/domain/{domainId} | 
[**accountDomainRouterGetAll**](AccountdomainApi.md#accountDomainRouterGetAll) | **GET** /account/domain/ | 


<a name="accountDomainRouterCount"></a>
# **accountDomainRouterCount**
> ModelsCountStat accountDomainRouterCount(xAccountApiKey, opts)



Count Total Account Domains <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

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
apiInstance.accountDomainRouterCount(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountDomainRouterGet"></a>
# **accountDomainRouterGet**
> ModelsAccountDomain accountDomainRouterGet(xAccountApiKey, domainId)



Find Domain by DomainId <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = 789; // Number | the DomainId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountDomainRouterGet(xAccountApiKey, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **Number**| the DomainId you want to get | 

### Return type

[**ModelsAccountDomain**](ModelsAccountDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountDomainRouterGetAll"></a>
# **accountDomainRouterGetAll**
> [ModelsAccountDomain] accountDomainRouterGetAll(xAccountApiKey, opts)



Get All Domains <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainApi();

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
apiInstance.accountDomainRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsAccountDomain]**](ModelsAccountDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

