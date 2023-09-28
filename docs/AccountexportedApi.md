# SendPostApi.AccountexportedApi

All URIs are relative to *https://api-stag.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportStatRouterGetStatisticToFile**](AccountexportedApi.md#exportStatRouterGetStatisticToFile) | **GET** /account/exported/ | 


<a name="exportStatRouterGetStatisticToFile"></a>
# **exportStatRouterGetStatisticToFile**
> exportStatRouterGetStatisticToFile(xAccountApiKey)



Save statistic to the file and send email <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountexportedApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.exportStatRouterGetStatisticToFile(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

