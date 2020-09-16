# \SubaccountstatApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubAccountStatRouterGetAllAggregateSubAccountStats**](SubaccountstatApi.md#SubAccountStatRouterGetAllAggregateSubAccountStats) | **Get** /subaccount/stat/aggregate | 
[**SubAccountStatRouterGetAllAggregateSubAccountStatsByGroup**](SubaccountstatApi.md#SubAccountStatRouterGetAllAggregateSubAccountStatsByGroup) | **Get** /subaccount/stat/aggregate/group | 
[**SubAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**](SubaccountstatApi.md#SubAccountStatRouterGetAllAggregatedGroupStatsForASubAccount) | **Get** /subaccount/stat/aggregate/groups | 
[**SubAccountStatRouterGetAllAggregatedIPStatsForASubAccount**](SubaccountstatApi.md#SubAccountStatRouterGetAllAggregatedIPStatsForASubAccount) | **Get** /subaccount/stat/aggregate/ips | 
[**SubAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount**](SubaccountstatApi.md#SubAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount) | **Get** /subaccount/stat/aggregate/ip/{ipid}/providers | 
[**SubAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**](SubaccountstatApi.md#SubAccountStatRouterGetAllAggregatedProviderStatsForASubAccount) | **Get** /subaccount/stat/aggregate/providers | 
[**SubAccountStatRouterGetAllSubAccountStats**](SubaccountstatApi.md#SubAccountStatRouterGetAllSubAccountStats) | **Get** /subaccount/stat/ | 
[**SubAccountStatRouterGetAllSubAccountStatsByGroup**](SubaccountstatApi.md#SubAccountStatRouterGetAllSubAccountStatsByGroup) | **Get** /subaccount/stat/group | 


# **SubAccountStatRouterGetAllAggregateSubAccountStats**
> ModelsStat SubAccountStatRouterGetAllAggregateSubAccountStats(ctx, xSubAccountApiKey, optional)


Get All Aggregate Sub-Account Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllAggregateSubAccountStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllAggregateSubAccountStatsOpts struct

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

# **SubAccountStatRouterGetAllAggregateSubAccountStatsByGroup**
> ModelsStat SubAccountStatRouterGetAllAggregateSubAccountStatsByGroup(ctx, xSubAccountApiKey, group, optional)


Get All Aggregate Sub-Account Stats by Group

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **group** | **string**| the group whose stats you want | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllAggregateSubAccountStatsByGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllAggregateSubAccountStatsByGroupOpts struct

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

# **SubAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**
> []ModelsAgStat SubAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(ctx, xSubAccountApiKey, optional)


Get All Aggregated Group Stats for a Sub-Account

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllAggregatedGroupStatsForASubAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllAggregatedGroupStatsForASubAccountOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsAgStat**](models.AGStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountStatRouterGetAllAggregatedIPStatsForASubAccount**
> []ModelsAipStat SubAccountStatRouterGetAllAggregatedIPStatsForASubAccount(ctx, xSubAccountApiKey, optional)


Get All Aggregated IP Stats for a Sub-Account

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllAggregatedIPStatsForASubAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllAggregatedIPStatsForASubAccountOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsAipStat**](models.AIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount**
> []ModelsPipStat SubAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount(ctx, xSubAccountApiKey, ipid, optional)


Get All Aggregated Provider Stats for a Specific IP of a Sub-Account

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccountOpts struct

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

# **SubAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**
> []ModelsPipStat SubAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(ctx, xSubAccountApiKey, optional)


Get All Aggregated Provider Stats for a Sub-Account

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllAggregatedProviderStatsForASubAccountOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllAggregatedProviderStatsForASubAccountOpts struct

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

# **SubAccountStatRouterGetAllSubAccountStats**
> []ModelsRStat SubAccountStatRouterGetAllSubAccountStats(ctx, xSubAccountApiKey, optional)


Get All Sub-Account Stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllSubAccountStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllSubAccountStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsRStat**](models.RStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountStatRouterGetAllSubAccountStatsByGroup**
> []ModelsRStat SubAccountStatRouterGetAllSubAccountStatsByGroup(ctx, xSubAccountApiKey, group, optional)


Get All Sub-Account Stats by Group

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **group** | **string**| the tag whose stats you want | 
 **optional** | ***SubaccountstatApiSubAccountStatRouterGetAllSubAccountStatsByGroupOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountstatApiSubAccountStatRouterGetAllSubAccountStatsByGroupOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsRStat**](models.RStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

