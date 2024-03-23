/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAGDomainStat', 'model/ModelsAGStat', 'model/ModelsAIPStat', 'model/ModelsAPStat', 'model/ModelsRStat', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAGDomainStat'), require('../model/ModelsAGStat'), require('../model/ModelsAIPStat'), require('../model/ModelsAPStat'), require('../model/ModelsRStat'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountsubaccountstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAGDomainStat, root.SendPostApi.ModelsAGStat, root.SendPostApi.ModelsAIPStat, root.SendPostApi.ModelsAPStat, root.SendPostApi.ModelsRStat, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsAGDomainStat, ModelsAGStat, ModelsAIPStat, ModelsAPStat, ModelsRStat, ModelsStat) {
  'use strict';

  /**
   * Accountsubaccountstat service.
   * @module api/AccountsubaccountstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountsubaccountstatApi. 
   * @alias module:api/AccountsubaccountstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregateSubAccountStats operation.
     * @callback module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregateSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Sub-Account Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the subaccount id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregateSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.subAccountStatRouterGetAllAggregateSubAccountStats = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountStatRouterGetAllAggregateSubAccountStats");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling subAccountStatRouterGetAllAggregateSubAccountStats");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsStat;

      return this.apiClient.callApi(
        '/account/subaccount/stat/{sid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount operation.
     * @callback module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedDomainStatsForASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAGDomainStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Domain Stats for a Sub-Account
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the subaccount id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedDomainStatsForASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAGDomainStat>}
     */
    this.subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsAGDomainStat];

      return this.apiClient.callApi(
        '/account/subaccount/stat/{sid}/aggregate/domain', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount operation.
     * @callback module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedGroupStatsForASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAGStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Group Stats for a Sub-Account
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the subaccount id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedGroupStatsForASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAGStat>}
     */
    this.subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsAGStat];

      return this.apiClient.callApi(
        '/account/subaccount/stat/{sid}/aggregate/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedIPStatsForASubAccount operation.
     * @callback module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedIPStatsForASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated IP Stats for a Sub-Account
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the subaccount id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedIPStatsForASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAIPStat>}
     */
    this.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountStatRouterGetAllAggregatedIPStatsForASubAccount");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling subAccountStatRouterGetAllAggregatedIPStatsForASubAccount");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsAIPStat];

      return this.apiClient.callApi(
        '/account/subaccount/stat/{sid}/aggregate/ip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount operation.
     * @callback module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedProviderStatsForASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Sub-Account
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the subaccount id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllAggregatedProviderStatsForASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAPStat>}
     */
    this.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsAPStat];

      return this.apiClient.callApi(
        '/account/subaccount/stat/{sid}/aggregate/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllSubAccountStats operation.
     * @callback module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sub-Account Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the subaccount id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsubaccountstatApi~subAccountStatRouterGetAllSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStat>}
     */
    this.subAccountStatRouterGetAllSubAccountStats = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountStatRouterGetAllSubAccountStats");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling subAccountStatRouterGetAllSubAccountStats");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsRStat];

      return this.apiClient.callApi(
        '/account/subaccount/stat/{sid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
