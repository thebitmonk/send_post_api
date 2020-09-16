# \SubaccountmessageApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MessageRouterGet**](SubaccountmessageApi.md#MessageRouterGet) | **Get** /subaccount/message/{messageId} | 
[**MessageRouterGetAllEventsForAMessageId**](SubaccountmessageApi.md#MessageRouterGetAllEventsForAMessageId) | **Get** /subaccount/message/{messageId}/events | 
[**MessageRouterGetAllEventsForAMessageIdFromANode**](SubaccountmessageApi.md#MessageRouterGetAllEventsForAMessageIdFromANode) | **Get** /subaccount/message/node/{subAccountId}/{messageId}/events | 
[**MessageRouterGetAllMessages**](SubaccountmessageApi.md#MessageRouterGetAllMessages) | **Get** /subaccount/message/ | 
[**MessageRouterGetAllMessagesFromANode**](SubaccountmessageApi.md#MessageRouterGetAllMessagesFromANode) | **Get** /subaccount/message/node/{subAccountId} | 
[**MessageRouterGetMessageFromNode**](SubaccountmessageApi.md#MessageRouterGetMessageFromNode) | **Get** /subaccount/message/node/{subAccountId}/{messageId} | 


# **MessageRouterGet**
> ModelsQEmailMessage MessageRouterGet(ctx, xSubAccountApiKey, messageId)


Find Message By Id

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **messageId** | **string**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](models.QEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MessageRouterGetAllEventsForAMessageId**
> []ModelsQEvent MessageRouterGetAllEventsForAMessageId(ctx, xSubAccountApiKey, messageId)


Find all events associated with a message id

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **messageId** | **string**| the messageId that you want to retrieve | 

### Return type

[**[]ModelsQEvent**](models.QEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MessageRouterGetAllEventsForAMessageIdFromANode**
> []ModelsQEvent MessageRouterGetAllEventsForAMessageIdFromANode(ctx, xSubAccountApiKey, messageId, subAccountId)


Find all message events associated with a message id from a specific node

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **messageId** | **string**| the messageId that you want to retrieve | 
  **subAccountId** | **int64**| the subAccountId whose message you want to retrieve | 

### Return type

[**[]ModelsQEvent**](models.QEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MessageRouterGetAllMessages**
> []ModelsQEmailMessage MessageRouterGetAllMessages(ctx, xSubAccountApiKey, optional)


Find all messages of a sub-account based on time-range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountmessageApiMessageRouterGetAllMessagesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountmessageApiMessageRouterGetAllMessagesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 
 **from** | **optional.String**| from date | 
 **to** | **optional.String**| to date | 

### Return type

[**[]ModelsQEmailMessage**](models.QEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MessageRouterGetAllMessagesFromANode**
> []ModelsQEmailMessage MessageRouterGetAllMessagesFromANode(ctx, subAccountId)


Get all messages of a sub-account from a specific node based on time-range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **subAccountId** | **int64**| the subAccountId whose message you want to retrieve | 

### Return type

[**[]ModelsQEmailMessage**](models.QEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **MessageRouterGetMessageFromNode**
> ModelsQEmailMessage MessageRouterGetMessageFromNode(ctx, subAccountId, messageId)


Find Message from node by specific Id

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **subAccountId** | **int64**| the subAccountId whose message you want to retrieve | 
  **messageId** | **string**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](models.QEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

