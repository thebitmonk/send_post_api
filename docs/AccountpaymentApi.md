# SendPostApi.AccountpaymentApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentRouterCreateCustomerPortal**](AccountpaymentApi.md#paymentRouterCreateCustomerPortal) | **POST** /account/payment/portal | 


<a name="paymentRouterCreateCustomerPortal"></a>
# **paymentRouterCreateCustomerPortal**
> ApiBillingPortalSession paymentRouterCreateCustomerPortal(xAccountApiKey)



Create Customer Portal for account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountpaymentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterCreateCustomerPortal(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ApiBillingPortalSession**](ApiBillingPortalSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

