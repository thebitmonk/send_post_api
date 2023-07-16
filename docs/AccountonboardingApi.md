# SendPostApi.AccountonboardingApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onboardingRouterCreateUnlockTicket**](AccountonboardingApi.md#onboardingRouterCreateUnlockTicket) | **POST** /account/onboarding/unlockticket | 
[**onboardingRouterGetOnboardingChecklist**](AccountonboardingApi.md#onboardingRouterGetOnboardingChecklist) | **GET** /account/onboarding/checklist | 
[**onboardingRouterSendOnboardingWelcomeEmail**](AccountonboardingApi.md#onboardingRouterSendOnboardingWelcomeEmail) | **POST** /account/onboarding/welcome | 


<a name="onboardingRouterCreateUnlockTicket"></a>
# **onboardingRouterCreateUnlockTicket**
> onboardingRouterCreateUnlockTicket(xAccountApiKey)



Creates unlock ticket on hubspot <br>

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
apiInstance.onboardingRouterCreateUnlockTicket(xAccountApiKey, callback);
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

<a name="onboardingRouterGetOnboardingChecklist"></a>
# **onboardingRouterGetOnboardingChecklist**
> ModelsOnboardingChecklist onboardingRouterGetOnboardingChecklist(xAccountApiKey)



Gets Onboarding Checklist data for account if not present creates a default entry <br>

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



Sends welcome email for a newly registered account <br>

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

