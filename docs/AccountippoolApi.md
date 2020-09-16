# \AccountippoolApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AccountIPPoolRouterCount**](AccountippoolApi.md#AccountIPPoolRouterCount) | **Get** /account/ippool/count | 
[**AccountIPPoolRouterCreate**](AccountippoolApi.md#AccountIPPoolRouterCreate) | **Post** /account/ippool/ | 
[**AccountIPPoolRouterDelete**](AccountippoolApi.md#AccountIPPoolRouterDelete) | **Delete** /account/ippool/{ippoolid} | 
[**AccountIPPoolRouterGet**](AccountippoolApi.md#AccountIPPoolRouterGet) | **Get** /account/ippool/{ippoolid} | 
[**AccountIPPoolRouterGetAll**](AccountippoolApi.md#AccountIPPoolRouterGetAll) | **Get** /account/ippool/ | 
[**AccountIPPoolRouterUpdate**](AccountippoolApi.md#AccountIPPoolRouterUpdate) | **Put** /account/ippool/{ippoolid} | 


# **AccountIPPoolRouterCount**
> ModelsCountStat AccountIPPoolRouterCount(ctx, xAccountApiKey)


Count Total AccountIPPools

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

# **AccountIPPoolRouterCreate**
> ModelsAccountIpPool AccountIPPoolRouterCreate(ctx, xAccountApiKey, body)


Create AccountIPPool

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **body** | [**ModelsEipPool**](ModelsEipPool.md)| The AccountIPPool content | 

### Return type

[**ModelsAccountIpPool**](models.AccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountIPPoolRouterDelete**
> ModelsDeleteResponse AccountIPPoolRouterDelete(ctx, xAccountApiKey, ippoolid)


Delete AccountIPPool

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ippoolid** | **int64**| The AccountIPPoolId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountIPPoolRouterGet**
> ModelsAccountIpPool AccountIPPoolRouterGet(ctx, xAccountApiKey, ippoolid)


Find AccountIPPool by AccountIPPoolId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ippoolid** | **int64**| the AccountIPPoolId you want to get | 

### Return type

[**ModelsAccountIpPool**](models.AccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountIPPoolRouterGetAll**
> []ModelsAccountIpPool AccountIPPoolRouterGetAll(ctx, xAccountApiKey, optional)


Get All AccountIPPools

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
 **optional** | ***AccountippoolApiAccountIPPoolRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountippoolApiAccountIPPoolRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 

### Return type

[**[]ModelsAccountIpPool**](models.AccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountIPPoolRouterUpdate**
> ModelsAccountIpPool AccountIPPoolRouterUpdate(ctx, xAccountApiKey, ippoolid, body)


Update AccountIPPool

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ippoolid** | **int64**| The AccountIPPoolId you want to update | 
  **body** | [**ModelsEipPool**](ModelsEipPool.md)| The body | 

### Return type

[**ModelsAccountIpPool**](models.AccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

