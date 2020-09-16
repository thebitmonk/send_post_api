# \AccountsmtpstatApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SMTPStatRouterGetAllAggregateIPProviderSMTPStats**](AccountsmtpstatApi.md#SMTPStatRouterGetAllAggregateIPProviderSMTPStats) | **Get** /account/smtp/stat/ip/{ipid}/provider/{pname}/aggregate | 
[**SMTPStatRouterGetAllAggregateIPSMTPStats**](AccountsmtpstatApi.md#SMTPStatRouterGetAllAggregateIPSMTPStats) | **Get** /account/smtp/stat/ip/{ipid}/aggregate | 
[**SMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount**](AccountsmtpstatApi.md#SMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount) | **Get** /account/smtp/stat/ip/{ipid}/subaccount/{sid}/aggregate | 
[**SMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats**](AccountsmtpstatApi.md#SMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats) | **Get** /account/smtp/stat/subaccount/{sid}/provider/{pname}/aggregate | 
[**SMTPStatRouterGetAllAggregateSubAccountSMTPStats**](AccountsmtpstatApi.md#SMTPStatRouterGetAllAggregateSubAccountSMTPStats) | **Get** /account/smtp/stat/subaccount/{sid}/aggregate | 
[**SMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP**](AccountsmtpstatApi.md#SMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP) | **Get** /account/smtp/stat/subaccount/{sid}/ip/{ipid}/aggregate | 


# **SMTPStatRouterGetAllAggregateIPProviderSMTPStats**
> []ModelsSmtpStat SMTPStatRouterGetAllAggregateIPProviderSMTPStats(ctx, xAccountApiKey, ipid, pname, optional)


Get All Aggregate IP Provider SMTP Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IP ID you want to get | 
  **pname** | **string**| the provider name | 
 **optional** | ***AccountsmtpstatApiSMTPStatRouterGetAllAggregateIPProviderSMTPStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsmtpstatApiSMTPStatRouterGetAllAggregateIPProviderSMTPStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSmtpStat**](models.SMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SMTPStatRouterGetAllAggregateIPSMTPStats**
> []ModelsSmtpStat SMTPStatRouterGetAllAggregateIPSMTPStats(ctx, xAccountApiKey, ipid, optional)


Get All Aggregate IP SMTP Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
 **optional** | ***AccountsmtpstatApiSMTPStatRouterGetAllAggregateIPSMTPStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsmtpstatApiSMTPStatRouterGetAllAggregateIPSMTPStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSmtpStat**](models.SMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount**
> []ModelsSmtpStat SMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(ctx, xAccountApiKey, ipid, sid, optional)


Get All Aggregate IP SMTP Stats For SubAccount

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IP ID you want to get | 
  **sid** | **int64**| the SubAccount ID you want to get | 
 **optional** | ***AccountsmtpstatApiSMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsmtpstatApiSMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccountOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSmtpStat**](models.SMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats**
> []ModelsSmtpStat SMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(ctx, xAccountApiKey, sid, pname, optional)


Get All Aggregate SubAccount Provider SMTP Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **sid** | **int64**| the SubAccount ID you want to get | 
  **pname** | **string**| the provider name | 
 **optional** | ***AccountsmtpstatApiSMTPStatRouterGetAllAggregateSubAccountProviderSMTPStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsmtpstatApiSMTPStatRouterGetAllAggregateSubAccountProviderSMTPStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSmtpStat**](models.SMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SMTPStatRouterGetAllAggregateSubAccountSMTPStats**
> []ModelsSmtpStat SMTPStatRouterGetAllAggregateSubAccountSMTPStats(ctx, xAccountApiKey, sid, optional)


Get All Aggregate SubAccount SMTP Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **sid** | **int64**| the Sub-Account ID you want to get | 
 **optional** | ***AccountsmtpstatApiSMTPStatRouterGetAllAggregateSubAccountSMTPStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsmtpstatApiSMTPStatRouterGetAllAggregateSubAccountSMTPStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSmtpStat**](models.SMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP**
> []ModelsSmtpStat SMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(ctx, xAccountApiKey, sid, ipid, optional)


Get All Aggregate SubAccount SMTP Stats For IP

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **sid** | **int64**| the Sub-Account ID you want to get | 
  **ipid** | **int64**| the IP  ID you want to get | 
 **optional** | ***AccountsmtpstatApiSMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIPOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsmtpstatApiSMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIPOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSmtpStat**](models.SMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

