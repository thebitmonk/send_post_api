# \SubaccounteventApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**](SubaccounteventApi.md#EventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange) | **Get** /subaccount/event/node/{subAccountId}/count | 
[**EventRouterCountAllEventsFromASubAccountForAGivenTimeRange**](SubaccounteventApi.md#EventRouterCountAllEventsFromASubAccountForAGivenTimeRange) | **Get** /subaccount/event/count | 
[**EventRouterGet**](SubaccounteventApi.md#EventRouterGet) | **Get** /subaccount/event/{eventId} | 
[**EventRouterGetAllEventsFromASubAccountForAGivenTimeRange**](SubaccounteventApi.md#EventRouterGetAllEventsFromASubAccountForAGivenTimeRange) | **Get** /subaccount/event/ | 
[**EventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**](SubaccounteventApi.md#EventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange) | **Get** /subaccount/event/node/{subAccountId} | 
[**EventRouterGetEventInNode**](SubaccounteventApi.md#EventRouterGetEventInNode) | **Get** /subaccount/event/node/{subAccountId}/{eventId} | 


# **EventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**
> ModelsCountStat EventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange(ctx, xSubAccountApiKey, subAccountId)


Count all events from a node of a sub-account for a given time-range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **subAccountId** | **int64**| the subAccountId whose event you want to retrieve | 

### Return type

[**ModelsCountStat**](models.CountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EventRouterCountAllEventsFromASubAccountForAGivenTimeRange**
> ModelsCountStat EventRouterCountAllEventsFromASubAccountForAGivenTimeRange(ctx, xSubAccountApiKey)


Count all events from a sub-account for a given time-range

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

# **EventRouterGet**
> ModelsQEvent EventRouterGet(ctx, eventId)


Find Event By Id

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **eventId** | **string**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](models.QEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EventRouterGetAllEventsFromASubAccountForAGivenTimeRange**
> []ModelsQEvent EventRouterGetAllEventsFromASubAccountForAGivenTimeRange(ctx, xSubAccountApiKey, optional)


Find all events from a sub-account for a given time-range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccounteventApiEventRouterGetAllEventsFromASubAccountForAGivenTimeRangeOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccounteventApiEventRouterGetAllEventsFromASubAccountForAGivenTimeRangeOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 
 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsQEvent**](models.QEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**
> []ModelsQEvent EventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange(ctx, xSubAccountApiKey, subAccountId)


Find all events of a sub-account from a specific node for a give time-range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **subAccountId** | **int64**| the subAccountId whose event you want to retrieve | 

### Return type

[**[]ModelsQEvent**](models.QEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EventRouterGetEventInNode**
> ModelsQEvent EventRouterGetEventInNode(ctx, subAccountId, eventId)


Find Event From Node by id

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **subAccountId** | **int64**| the subAccountId whose event you want to retrieve | 
  **eventId** | **string**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](models.QEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

