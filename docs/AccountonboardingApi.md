# SendPostApi.AccountonboardingApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onboardingRouterGetOnboardingChecklist**](AccountonboardingApi.md#onboardingRouterGetOnboardingChecklist) | **GET** /account/onboarding/checklist | 

<a name="onboardingRouterGetOnboardingChecklist"></a>
# **onboardingRouterGetOnboardingChecklist**
> ModelsOnboardingChecklist onboardingRouterGetOnboardingChecklist(xAccountApiKey)



Gets Onboarding Checklist data for account if not present creates a default entry

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountonboardingApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.onboardingRouterGetOnboardingChecklist(xAccountApiKey, (error, data, response) => {
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

[**ModelsOnboardingChecklist**](ModelsOnboardingChecklist.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

