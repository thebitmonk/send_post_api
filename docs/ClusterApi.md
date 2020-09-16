# SendPostApi.ClusterApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterRouterAddItemsToAccountWebhookCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterAddItemsToAccountWebhookCacheOfEveryNodeInCluster) | **POST** /cluster/webhook/cache | 
[**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
[**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 
[**clusterRouterDeleteItemsFromWebhookFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemsFromWebhookFilterOfEveryNodeInCluster) | **DELETE** /cluster/webhook/cache | 


<a name="clusterRouterAddItemsToAccountWebhookCacheOfEveryNodeInCluster"></a>
# **clusterRouterAddItemsToAccountWebhookCacheOfEveryNodeInCluster**
> clusterRouterAddItemsToAccountWebhookCacheOfEveryNodeInCluster(body)



Add items to account webhook cache of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = new SendPostApi.ModelsAccountWebhook(); // ModelsAccountWebhook | Add account webhooks to account webhook cache


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterAddItemsToAccountWebhookCacheOfEveryNodeInCluster(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsAccountWebhook**](ModelsAccountWebhook.md)| Add account webhooks to account webhook cache | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**
> clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body)



Add items to suppression filter of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Add suppressions to suppression filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsSuppression**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**
> clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body)



Delete items from suppression filter of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Delete suppressions from suppression filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsSuppression**](ModelsSuppression.md)| Delete suppressions from suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemsFromWebhookFilterOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemsFromWebhookFilterOfEveryNodeInCluster**
> clusterRouterDeleteItemsFromWebhookFilterOfEveryNodeInCluster(body)



Delete items from webhook filter of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = new SendPostApi.ModelsAccountWebhook(); // ModelsAccountWebhook | Delete webhooks from webhook filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemsFromWebhookFilterOfEveryNodeInCluster(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsAccountWebhook**](ModelsAccountWebhook.md)| Delete webhooks from webhook filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

