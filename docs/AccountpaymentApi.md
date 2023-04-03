# SendPostApi.AccountpaymentApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentRouterApplyCouponToStripeCustomer**](AccountpaymentApi.md#paymentRouterApplyCouponToStripeCustomer) | **POST** /account/payment/customer/coupon | 
[**paymentRouterCreateCustomerPortal**](AccountpaymentApi.md#paymentRouterCreateCustomerPortal) | **POST** /account/payment/portal | 
[**paymentRouterCreatePaymentSubscription**](AccountpaymentApi.md#paymentRouterCreatePaymentSubscription) | **POST** /account/payment/subscription | 
[**paymentRouterHandlePaymentWebhook**](AccountpaymentApi.md#paymentRouterHandlePaymentWebhook) | **POST** /account/payment/webhook | 

<a name="paymentRouterApplyCouponToStripeCustomer"></a>
# **paymentRouterApplyCouponToStripeCustomer**
> paymentRouterApplyCouponToStripeCustomer(body, xAccountApiKey)



Apply Coupon to Stripe Customer

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountpaymentApi();
let body = new SendPostApi.ModelsCouponOptions(); // ModelsCouponOptions | Coupon Code Options
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.paymentRouterApplyCouponToStripeCustomer(body, xAccountApiKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsCouponOptions**](ModelsCouponOptions.md)| Coupon Code Options | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="paymentRouterCreateCustomerPortal"></a>
# **paymentRouterCreateCustomerPortal**
> ModelsBillingPortalSession paymentRouterCreateCustomerPortal(xAccountApiKey)



Create Customer Portal for account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountpaymentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.paymentRouterCreateCustomerPortal(xAccountApiKey, (error, data, response) => {
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

[**ModelsBillingPortalSession**](ModelsBillingPortalSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentRouterCreatePaymentSubscription"></a>
# **paymentRouterCreatePaymentSubscription**
> ModelsPaymentStatus paymentRouterCreatePaymentSubscription(body, xAccountApiKey)



Create Payment Subscription for Stripe

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountpaymentApi();
let body = new SendPostApi.ModelsPaymentOptions(); // ModelsPaymentOptions | PaymentOptions content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.paymentRouterCreatePaymentSubscription(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsPaymentOptions**](ModelsPaymentOptions.md)| PaymentOptions content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsPaymentStatus**](ModelsPaymentStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterHandlePaymentWebhook"></a>
# **paymentRouterHandlePaymentWebhook**
> paymentRouterHandlePaymentWebhook()



Handle Payment Related Webhooks

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountpaymentApi();
apiInstance.paymentRouterHandlePaymentWebhook((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

