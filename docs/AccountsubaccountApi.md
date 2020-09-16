# \AccountsubaccountApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SubAccountRouterCount**](AccountsubaccountApi.md#SubAccountRouterCount) | **Get** /account/subaccount/count | 
[**SubAccountRouterCreate**](AccountsubaccountApi.md#SubAccountRouterCreate) | **Post** /account/subaccount/ | 
[**SubAccountRouterDelete**](AccountsubaccountApi.md#SubAccountRouterDelete) | **Delete** /account/subaccount/{subAccountId} | 
[**SubAccountRouterGet**](AccountsubaccountApi.md#SubAccountRouterGet) | **Get** /account/subaccount/{subAccountId} | 
[**SubAccountRouterGetAll**](AccountsubaccountApi.md#SubAccountRouterGetAll) | **Get** /account/subaccount/ | 
[**SubAccountRouterUpdate**](AccountsubaccountApi.md#SubAccountRouterUpdate) | **Put** /account/subaccount/{subAccountId} | 


# **SubAccountRouterCount**
> ModelsCountStat SubAccountRouterCount(ctx, xAccountApiKey)


Count Total Subaccounts

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 

### Return type

[**ModelsCountStat**](models.CountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountRouterCreate**
> ModelsSubAccount SubAccountRouterCreate(ctx, xAccountApiKey, body)


Create SubAccount

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **body** | [**ModelsESubAccount**](ModelsESubAccount.md)| The SubAccount content | 

### Return type

[**ModelsSubAccount**](models.SubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountRouterDelete**
> ModelsDeleteResponse SubAccountRouterDelete(ctx, xAccountApiKey, subAccountId)


Delete SubAccount

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **subAccountId** | **int64**| The SubAccountId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountRouterGet**
> ModelsSubAccount SubAccountRouterGet(ctx, xAccountApiKey, subAccountId)


Find SubAccount by SubAccountId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **subAccountId** | **int64**| the SubAccountId you want to get | 

### Return type

[**ModelsSubAccount**](models.SubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountRouterGetAll**
> []ModelsSubAccount SubAccountRouterGetAll(ctx, xAccountApiKey, optional)


Get All SubAccounts

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
 **optional** | ***AccountsubaccountApiSubAccountRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountsubaccountApiSubAccountRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 

### Return type

[**[]ModelsSubAccount**](models.SubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubAccountRouterUpdate**
> ModelsSubAccount SubAccountRouterUpdate(ctx, xAccountApiKey, subAccountId, body)


Update SubAccount

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **subAccountId** | **int64**| The SubAccountId you want to update | 
  **body** | [**ModelsESubAccount**](ModelsESubAccount.md)| The body | 

### Return type

[**ModelsSubAccount**](models.SubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

