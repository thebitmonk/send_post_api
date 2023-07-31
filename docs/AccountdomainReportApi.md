# SendPostApi.AccountdomainReportApi

All URIs are relative to *https://api-stag.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainReportRouterReputation**](AccountdomainReportApi.md#domainReportRouterReputation) | **GET** /account/domainReport/reputation | 


<a name="domainReportRouterReputation"></a>
# **domainReportRouterReputation**
> ModelsDomainCheckResult domainReportRouterReputation(xAccountApiKey, opts)



get reputation of domain 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainReportApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'ip': "ip_example", // String | ip
  'host': "host_example" // String | host
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainReportRouterReputation(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ip** | **String**| ip | [optional] 
 **host** | **String**| host | [optional] 

### Return type

[**ModelsDomainCheckResult**](ModelsDomainCheckResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

