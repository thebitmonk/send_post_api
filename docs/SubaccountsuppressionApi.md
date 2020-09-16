# \SubaccountsuppressionApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SuppressionRouterCount**](SubaccountsuppressionApi.md#SuppressionRouterCount) | **Get** /subaccount/suppression/count | 
[**SuppressionRouterCreateSuppressions**](SubaccountsuppressionApi.md#SuppressionRouterCreateSuppressions) | **Post** /subaccount/suppression/ | 
[**SuppressionRouterCreateSuppressionsInSuppressionFilter**](SubaccountsuppressionApi.md#SuppressionRouterCreateSuppressionsInSuppressionFilter) | **Post** /subaccount/suppression/filter | 
[**SuppressionRouterDeleteSuppression**](SubaccountsuppressionApi.md#SuppressionRouterDeleteSuppression) | **Delete** /subaccount/suppression/ | 
[**SuppressionRouterDeleteSuppressionsInSuppressionFilter**](SubaccountsuppressionApi.md#SuppressionRouterDeleteSuppressionsInSuppressionFilter) | **Delete** /subaccount/suppression/filter | 
[**SuppressionRouterGetAllSuppressions**](SubaccountsuppressionApi.md#SuppressionRouterGetAllSuppressions) | **Get** /subaccount/suppression/ | 


# **SuppressionRouterCount**
> ModelsCountStat SuppressionRouterCount(ctx, xSubAccountApiKey)


Count Total Suppressions

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 

### Return type

[**ModelsCountStat**](models.CountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SuppressionRouterCreateSuppressions**
> ModelsSuppression SuppressionRouterCreateSuppressions(ctx, xSubAccountApiKey, body)


Add Email Addresses To Suppression List

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsRSuppression**](ModelsRSuppression.md)| Suppression content | 

### Return type

[**ModelsSuppression**](models.Suppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SuppressionRouterCreateSuppressionsInSuppressionFilter**
> SuppressionRouterCreateSuppressionsInSuppressionFilter(ctx, body)


Add Email Addresses To Suppression Filter

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ModelsSuppression**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SuppressionRouterDeleteSuppression**
> ModelsSuppression SuppressionRouterDeleteSuppression(ctx, xSubAccountApiKey, body)


Delete specific emails which are in suppression list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsRdSuppression**](ModelsRdSuppression.md)| Suppression content | 

### Return type

[**ModelsSuppression**](models.Suppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SuppressionRouterDeleteSuppressionsInSuppressionFilter**
> SuppressionRouterDeleteSuppressionsInSuppressionFilter(ctx, body)


Delete specific emails which are in suppression list

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ModelsSuppression**](ModelsSuppression.md)| Suppression content | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SuppressionRouterGetAllSuppressions**
> []ModelsSuppression SuppressionRouterGetAllSuppressions(ctx, xSubAccountApiKey, optional)


Get all suppressions

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountsuppressionApiSuppressionRouterGetAllSuppressionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountsuppressionApiSuppressionRouterGetAllSuppressionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search | 

### Return type

[**[]ModelsSuppression**](models.Suppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

