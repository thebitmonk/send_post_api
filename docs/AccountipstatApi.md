# \AccountipstatApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IPStatRouterGetAllAggregateIPStats**](AccountipstatApi.md#IPStatRouterGetAllAggregateIPStats) | **Get** /account/ip/stat/{ipid}/aggregate | 
[**IPStatRouterGetAllAggregateIPStatsByGroup**](AccountipstatApi.md#IPStatRouterGetAllAggregateIPStatsByGroup) | **Get** /account/ip/stat/{ipid}/aggregate/provider | 
[**IPStatRouterGetAllAggregatedProviderStatsForAIP**](AccountipstatApi.md#IPStatRouterGetAllAggregatedProviderStatsForAIP) | **Get** /account/ip/stat/{ipid}/aggregate/providers | 
[**IPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP**](AccountipstatApi.md#IPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP) | **Get** /account/ip/stat/{ipid}/aggregate/sid/{sid}/providers | 
[**IPStatRouterGetAllAggregatedSubAccountStatsForAnIP**](AccountipstatApi.md#IPStatRouterGetAllAggregatedSubAccountStatsForAnIP) | **Get** /account/ip/stat/{ipid}/aggregate/subaccounts | 
[**IPStatRouterGetAllIPStats**](AccountipstatApi.md#IPStatRouterGetAllIPStats) | **Get** /account/ip/stat/{ipid} | 
[**IPStatRouterGetAllIPStatsByGroup**](AccountipstatApi.md#IPStatRouterGetAllIPStatsByGroup) | **Get** /account/ip/stat/{ipid}/provider | 


# **IPStatRouterGetAllAggregateIPStats**
> ModelsStat IPStatRouterGetAllAggregateIPStats(ctx, xAccountApiKey, ipid, optional)


Get All Aggregate Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllAggregateIPStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllAggregateIPStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**ModelsStat**](models.Stat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPStatRouterGetAllAggregateIPStatsByGroup**
> ModelsStat IPStatRouterGetAllAggregateIPStatsByGroup(ctx, xAccountApiKey, ipid, provider, optional)


Get All Aggregate Stats by Group

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
  **provider** | **string**| the group whose stats you want | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllAggregateIPStatsByGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllAggregateIPStatsByGroupOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**ModelsStat**](models.Stat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPStatRouterGetAllAggregatedProviderStatsForAIP**
> []ModelsPipStat IPStatRouterGetAllAggregatedProviderStatsForAIP(ctx, xAccountApiKey, ipid, optional)


Get All Aggregated Provider Stats for a IP

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllAggregatedProviderStatsForAIPOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllAggregatedProviderStatsForAIPOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsPipStat**](models.PIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP**
> []ModelsPipStat IPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP(ctx, xAccountApiKey, ipid, sid, optional)


Get All Aggregated Provider Stats for a Specific Sub-Account of a IP

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
  **sid** | **int64**| the Sub Account Id you want to get | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIPOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIPOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsPipStat**](models.PIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPStatRouterGetAllAggregatedSubAccountStatsForAnIP**
> []ModelsSipStat IPStatRouterGetAllAggregatedSubAccountStatsForAnIP(ctx, xAccountApiKey, ipid, optional)


Get All Aggregated Sub-Account Stats for an IP

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllAggregatedSubAccountStatsForAnIPOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllAggregatedSubAccountStatsForAnIPOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsSipStat**](models.SIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPStatRouterGetAllIPStats**
> []ModelsRipStat IPStatRouterGetAllIPStats(ctx, xAccountApiKey, ipid, optional)


Get All IP Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllIPStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllIPStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsRipStat**](models.RIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPStatRouterGetAllIPStatsByGroup**
> []ModelsRipStat IPStatRouterGetAllIPStatsByGroup(ctx, ipid, xAccountApiKey, provider, optional)


Get All IP Stats by Group

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **ipid** | **int64**| the IPId you want to get | 
  **xAccountApiKey** | **string**| Account API Key | 
  **provider** | **string**| the provider whose stats you want | 
 **optional** | ***AccountipstatApiIPStatRouterGetAllIPStatsByGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipstatApiIPStatRouterGetAllIPStatsByGroupOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsRipStat**](models.RIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

