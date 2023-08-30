# SendPostApi.AccountSmtpStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sMTPStatRouterGetAllAggregateIPProviderSMTPStats**](AccountSmtpStatApi.md#sMTPStatRouterGetAllAggregateIPProviderSMTPStats) | **GET** /account/smtp/stat/ip/{ipid}/provider/{provider}/aggregate | 
[**sMTPStatRouterGetAllAggregateIPSMTPStats**](AccountSmtpStatApi.md#sMTPStatRouterGetAllAggregateIPSMTPStats) | **GET** /account/smtp/stat/ip/{ipid}/aggregate | 
[**sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount**](AccountSmtpStatApi.md#sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount) | **GET** /account/smtp/stat/ip/{ipid}/subaccount/{sid}/aggregate | 
[**sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats**](AccountSmtpStatApi.md#sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats) | **GET** /account/smtp/stat/subaccount/{sid}/provider/{provider}/aggregate | 
[**sMTPStatRouterGetAllAggregateSubAccountSMTPStats**](AccountSmtpStatApi.md#sMTPStatRouterGetAllAggregateSubAccountSMTPStats) | **GET** /account/smtp/stat/subaccount/{sid}/aggregate | 
[**sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP**](AccountSmtpStatApi.md#sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP) | **GET** /account/smtp/stat/subaccount/{sid}/ip/{ipid}/aggregate | 



## sMTPStatRouterGetAllAggregateIPProviderSMTPStats

> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateIPProviderSMTPStats(xAccountApiKey, ipid, provider, opts)



Get All Aggregate IP Provider SMTP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSmtpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IP ID you want to get
let provider = "provider_example"; // String | the provider name
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.sMTPStatRouterGetAllAggregateIPProviderSMTPStats(xAccountApiKey, ipid, provider, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IP ID you want to get | 
 **provider** | **String**| the provider name | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sMTPStatRouterGetAllAggregateIPSMTPStats

> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateIPSMTPStats(xAccountApiKey, ipid, opts)



Get All Aggregate IP SMTP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSmtpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.sMTPStatRouterGetAllAggregateIPSMTPStats(xAccountApiKey, ipid, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount

> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(xAccountApiKey, ipid, sid, opts)



Get All Aggregate IP SMTP Stats For SubAccount

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSmtpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IP ID you want to get
let sid = 789; // Number | the SubAccount ID you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(xAccountApiKey, ipid, sid, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IP ID you want to get | 
 **sid** | **Number**| the SubAccount ID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats

> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(xAccountApiKey, sid, provider, opts)



Get All Aggregate SubAccount Provider SMTP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSmtpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the SubAccount ID you want to get
let provider = "provider_example"; // String | the provider name
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(xAccountApiKey, sid, provider, opts, (error, data, response) => {
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
 **sid** | **Number**| the SubAccount ID you want to get | 
 **provider** | **String**| the provider name | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sMTPStatRouterGetAllAggregateSubAccountSMTPStats

> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateSubAccountSMTPStats(xAccountApiKey, sid, opts)



Get All Aggregate SubAccount SMTP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSmtpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the Sub-Account ID you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.sMTPStatRouterGetAllAggregateSubAccountSMTPStats(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the Sub-Account ID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP

> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(xAccountApiKey, sid, ipid, opts)



Get All Aggregate SubAccount SMTP Stats For IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSmtpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the Sub-Account ID you want to get
let ipid = 789; // Number | the IP  ID you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(xAccountApiKey, sid, ipid, opts, (error, data, response) => {
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
 **sid** | **Number**| the Sub-Account ID you want to get | 
 **ipid** | **Number**| the IP  ID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

