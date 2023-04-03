# SendPostApi.ClusterApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
[**clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfEveryNodeInCluster) | **DELETE** /cluster/cache | 
[**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 
[**clusterRouterGetItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterGetItemFromCacheOfEveryNodeInCluster) | **GET** /cluster/cache | 
[**clusterRouterGetItemFromCacheOfSpecificNodeInCluster**](ClusterApi.md#clusterRouterGetItemFromCacheOfSpecificNodeInCluster) | **GET** /cluster/cache/node | 
[**clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0**](ClusterApi.md#clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0) | **DELETE** /cluster/cache/node | 

<a name="clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**
> clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body)



Add items to suppression filter of every node in cluster

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.ClusterApi();
let body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Add suppressions to suppression filter

apiInstance.clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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
 - **Accept**: Not defined

<a name="clusterRouterDeleteItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**
> clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts)



Delete item from cache of every node in cluster

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.ClusterApi();
let xSystemApiKey = "xSystemApiKey_example"; // String | System API Key
let opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};
apiInstance.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**
> clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body)



Delete items from suppression filter of every node in cluster

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.ClusterApi();
let body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Delete suppressions from suppression filter

apiInstance.clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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
 - **Accept**: Not defined

<a name="clusterRouterGetItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterGetItemFromCacheOfEveryNodeInCluster**
> ModelsAllClusterCache clusterRouterGetItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts)



Get item from cache of every node in cluster

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.ClusterApi();
let xSystemApiKey = "xSystemApiKey_example"; // String | System API Key
let opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};
apiInstance.clusterRouterGetItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

[**ModelsAllClusterCache**](ModelsAllClusterCache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clusterRouterGetItemFromCacheOfSpecificNodeInCluster"></a>
# **clusterRouterGetItemFromCacheOfSpecificNodeInCluster**
> ModelsClusterCache clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts)



Delete item from cache of specific node in cluster

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.ClusterApi();
let xSystemApiKey = "xSystemApiKey_example"; // String | System API Key
let opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};
apiInstance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

[**ModelsClusterCache**](ModelsClusterCache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0"></a>
# **clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0**
> clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0(xSystemApiKey, opts)



Get item from cache of specific node in cluster

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.ClusterApi();
let xSystemApiKey = "xSystemApiKey_example"; // String | System API Key
let opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};
apiInstance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0(xSystemApiKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

