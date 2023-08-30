# SendPostApi.AccountPaymentApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentRouterApplyCouponToStripeCustomer**](AccountPaymentApi.md#paymentRouterApplyCouponToStripeCustomer) | **POST** /account/payment/customer/coupon | 
[**paymentRouterCreateCustomerPortal**](AccountPaymentApi.md#paymentRouterCreateCustomerPortal) | **POST** /account/payment/portal | 
[**paymentRouterCreatePaymentSubscription**](AccountPaymentApi.md#paymentRouterCreatePaymentSubscription) | **POST** /account/payment/subscription | 
[**paymentRouterGetAllCountries**](AccountPaymentApi.md#paymentRouterGetAllCountries) | **GET** /account/payment/pricing/countries | 
[**paymentRouterGetCouponCodes**](AccountPaymentApi.md#paymentRouterGetCouponCodes) | **GET** /account/payment/coupons | 
[**paymentRouterGetPricingPlans**](AccountPaymentApi.md#paymentRouterGetPricingPlans) | **GET** /account/payment/pricing | 
[**paymentRouterGetTaxRateByAddress**](AccountPaymentApi.md#paymentRouterGetTaxRateByAddress) | **POST** /account/payment/tax/address | 
[**paymentRouterGetTaxRateByIP**](AccountPaymentApi.md#paymentRouterGetTaxRateByIP) | **GET** /account/payment/tax/ip | 
[**paymentRouterHandlePaymentWebhook**](AccountPaymentApi.md#paymentRouterHandlePaymentWebhook) | **POST** /account/payment/webhook | 



## paymentRouterApplyCouponToStripeCustomer

> paymentRouterApplyCouponToStripeCustomer(xAccountApiKey, body)



Apply Coupon to Stripe Customer

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsCouponOptions(); // ModelsCouponOptions | Coupon Code Options
apiInstance.paymentRouterApplyCouponToStripeCustomer(xAccountApiKey, body, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsCouponOptions**](ModelsCouponOptions.md)| Coupon Code Options | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## paymentRouterCreateCustomerPortal

> ModelsBillingPortalSession paymentRouterCreateCustomerPortal(xAccountApiKey)



Create Customer Portal for account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
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


## paymentRouterCreatePaymentSubscription

> ModelsPaymentStatus paymentRouterCreatePaymentSubscription(xAccountApiKey, body)



Create Payment Subscription for Stripe

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsPaymentOptions(); // ModelsPaymentOptions | PaymentOptions content
apiInstance.paymentRouterCreatePaymentSubscription(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsPaymentOptions**](ModelsPaymentOptions.md)| PaymentOptions content | 

### Return type

[**ModelsPaymentStatus**](ModelsPaymentStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentRouterGetAllCountries

> [ModelsCountry] paymentRouterGetAllCountries()



Responds back with slice of all countries

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
apiInstance.paymentRouterGetAllCountries((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ModelsCountry]**](ModelsCountry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentRouterGetCouponCodes

> [ModelsCoupon] paymentRouterGetCouponCodes()



Responds back with slice of coupon codes

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
apiInstance.paymentRouterGetCouponCodes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ModelsCoupon]**](ModelsCoupon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentRouterGetPricingPlans

> [ModelsPricing] paymentRouterGetPricingPlans()



Responds back with slice of pricing plans

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
apiInstance.paymentRouterGetPricingPlans((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ModelsPricing]**](ModelsPricing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentRouterGetTaxRateByAddress

> ModelsTaxDetails paymentRouterGetTaxRateByAddress(body)



Responds back with tax details

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
let body = new SendPostApi.ModelsPaymentAddress(); // ModelsPaymentAddress | Address parameters
apiInstance.paymentRouterGetTaxRateByAddress(body, (error, data, response) => {
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
 **body** | [**ModelsPaymentAddress**](ModelsPaymentAddress.md)| Address parameters | 

### Return type

[**ModelsTaxDetails**](ModelsTaxDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentRouterGetTaxRateByIP

> ModelsTaxDetails paymentRouterGetTaxRateByIP()



Responds back with tax details

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
apiInstance.paymentRouterGetTaxRateByIP((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelsTaxDetails**](ModelsTaxDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentRouterHandlePaymentWebhook

> paymentRouterHandlePaymentWebhook()



Handle Payment Related Webhooks

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountPaymentApi();
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

