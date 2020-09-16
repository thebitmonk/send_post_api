# \SubaccountdomainApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DomainRouterCount**](SubaccountdomainApi.md#DomainRouterCount) | **Get** /subaccount/domain/count | 
[**DomainRouterCreate**](SubaccountdomainApi.md#DomainRouterCreate) | **Post** /subaccount/domain/ | 
[**DomainRouterDelete**](SubaccountdomainApi.md#DomainRouterDelete) | **Delete** /subaccount/domain/{domainId} | 
[**DomainRouterGet**](SubaccountdomainApi.md#DomainRouterGet) | **Get** /subaccount/domain/{domainId} | 
[**DomainRouterGetAll**](SubaccountdomainApi.md#DomainRouterGetAll) | **Get** /subaccount/domain/ | 
[**DomainRouterUpdate**](SubaccountdomainApi.md#DomainRouterUpdate) | **Put** /subaccount/domain/{domainId} | 


# **DomainRouterCount**
> ModelsCountStat DomainRouterCount(ctx, xSubAccountApiKey)


Count Total Domains

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

# **DomainRouterCreate**
> ModelsDomain DomainRouterCreate(ctx, xSubAccountApiKey, body)


Create Domain

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsEDomain**](ModelsEDomain.md)| The Domain content | 

### Return type

[**ModelsDomain**](models.Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DomainRouterDelete**
> ModelsDeleteResponse DomainRouterDelete(ctx, xSubAccountApiKey, domainId)


Delete Domain

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **domainId** | **int64**| The DomainId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DomainRouterGet**
> ModelsDomain DomainRouterGet(ctx, xSubAccountApiKey, domainId)


Find Domain by DomainId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **domainId** | **int64**| the DomainId you want to get | 

### Return type

[**ModelsDomain**](models.Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DomainRouterGetAll**
> []ModelsDomain DomainRouterGetAll(ctx, xSubAccountApiKey, optional)


Get All Domains

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountdomainApiDomainRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountdomainApiDomainRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 

### Return type

[**[]ModelsDomain**](models.Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DomainRouterUpdate**
> ModelsDomain DomainRouterUpdate(ctx, xSubAccountApiKey, domainId, body)


Update Domain

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **domainId** | **int64**| The DomainId you want to update | 
  **body** | [**ModelsEDomain**](ModelsEDomain.md)| The body | 

### Return type

[**ModelsDomain**](models.Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

