# SendPostApi.AccountonboardingApi

All URIs are relative to *https://api-stag.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onboardingRouterCreateUnlockTicket**](AccountonboardingApi.md#onboardingRouterCreateUnlockTicket) | **POST** /account/onboarding/unlockticket | 
[**onboardingRouterGetOnboardingChecklist**](AccountonboardingApi.md#onboardingRouterGetOnboardingChecklist) | **GET** /account/onboarding/checklist | 
[**onboardingRouterSendOnboardingWelcomeEmail**](AccountonboardingApi.md#onboardingRouterSendOnboardingWelcomeEmail) | **POST** /account/onboarding/welcome | 


<a name="onboardingRouterCreateUnlockTicket"></a>
# **onboardingRouterCreateUnlockTicket**
> onboardingRouterCreateUnlockTicket(xAccountApiKey, body)



Creates unlock ticket on hubspot 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountonboardingApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsAccountUnlockTicket(); // ModelsAccountUnlockTicket | Content values for creating ticket


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.onboardingRouterCreateUnlockTicket(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsAccountUnlockTicket**](ModelsAccountUnlockTicket.md)| Content values for creating ticket | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onboardingRouterGetOnboardingChecklist"></a>
# **onboardingRouterGetOnboardingChecklist**
> ModelsOnboardingChecklist onboardingRouterGetOnboardingChecklist(xAccountApiKey)



Gets Onboarding Checklist data for account if not present creates a default entry 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountonboardingApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.onboardingRouterGetOnboardingChecklist(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsOnboardingChecklist**](ModelsOnboardingChecklist.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onboardingRouterSendOnboardingWelcomeEmail"></a>
# **onboardingRouterSendOnboardingWelcomeEmail**
> onboardingRouterSendOnboardingWelcomeEmail(xAccountApiKey)



Sends welcome email for a newly registered account 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountonboardingApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.onboardingRouterSendOnboardingWelcomeEmail(xAccountApiKey, callback);
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

