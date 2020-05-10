/*
 * SendPost API
 * SendPost API to transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsRStats', 'model/ModelsStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsRStats'), require('../model/ModelsStats'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsRStats, root.SendPostApi.ModelsStats);
  }
}(this, function(ApiClient, ModelsRStats, ModelsStats) {
  'use strict';

  /**
   * Subaccountstat service.
   * @module api/SubaccountstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountstatApi. 
   * @alias module:api/SubaccountstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the subAccountStatsRouterGetAllAggregateSubAccountStats operation.
     * @callback module:api/SubaccountstatApi~subAccountStatsRouterGetAllAggregateSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Sub-Account Stats
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountstatApi~subAccountStatsRouterGetAllAggregateSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStats}
     */
    this.subAccountStatsRouterGetAllAggregateSubAccountStats = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatsRouterGetAllAggregateSubAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsStats;

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup operation.
     * @callback module:api/SubaccountstatApi~subAccountStatsRouterGetAllAggregateSubAccountStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Sub-Account Stats by Group
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {String} group the group whose stats you want
     * @param {module:api/SubaccountstatApi~subAccountStatsRouterGetAllAggregateSubAccountStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStats}
     */
    this.subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup = function(xSubAccountApiKey, group, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup");
      }


      var pathParams = {
        'group': group
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsStats;

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatsRouterGetAllSubAccountStats operation.
     * @callback module:api/SubaccountstatApi~subAccountStatsRouterGetAllSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStats>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sub-Account Stats
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountstatApi~subAccountStatsRouterGetAllSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStats>}
     */
    this.subAccountStatsRouterGetAllSubAccountStats = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatsRouterGetAllSubAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsRStats];

      return this.apiClient.callApi(
        '/subaccount/stat/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatsRouterGetAllSubAccountStatsByGroup operation.
     * @callback module:api/SubaccountstatApi~subAccountStatsRouterGetAllSubAccountStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStats>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sub-Account Stats by Group
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {String} group the tag whose stats you want
     * @param {module:api/SubaccountstatApi~subAccountStatsRouterGetAllSubAccountStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStats>}
     */
    this.subAccountStatsRouterGetAllSubAccountStatsByGroup = function(xSubAccountApiKey, group, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatsRouterGetAllSubAccountStatsByGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling subAccountStatsRouterGetAllSubAccountStatsByGroup");
      }


      var pathParams = {
        'group': group
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsRStats];

      return this.apiClient.callApi(
        '/subaccount/stat/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));