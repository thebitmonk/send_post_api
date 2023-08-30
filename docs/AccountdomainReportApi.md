# SendPostApi.AccountDomainReportApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainReportRouterReputation**](AccountDomainReportApi.md#domainReportRouterReputation) | **GET** /account/domainReport/reputation | 



## domainReportRouterReputation

> ModelsDomainCheckResult domainReportRouterReputation(xAccountApiKey, opts)



get reputation of domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainReportApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'ip': "ip_example", // String | ip
  'host': "host_example" // String | host
};
apiInstance.domainReportRouterReputation(xAccountApiKey, opts, (error, data, response) => {
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
 **ip** | **String**| ip | [optional] 
 **host** | **String**| host | [optional] 

### Return type

[**ModelsDomainCheckResult**](ModelsDomainCheckResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

