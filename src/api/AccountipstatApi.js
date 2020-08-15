/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsPIPStat', 'model/ModelsRIPStat', 'model/ModelsSIPStat', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsPIPStat'), require('../model/ModelsRIPStat'), require('../model/ModelsSIPStat'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountipstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsPIPStat, root.SendPostApi.ModelsRIPStat, root.SendPostApi.ModelsSIPStat, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsPIPStat, ModelsRIPStat, ModelsSIPStat, ModelsStat) {
  'use strict';

  /**
   * Accountipstat service.
   * @module api/AccountipstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountipstatApi. 
   * @alias module:api/AccountipstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iPStatRouterGetAllAggregateIPStats operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllAggregateIPStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllAggregateIPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.iPStatRouterGetAllAggregateIPStats = function(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllAggregateIPStats");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllAggregateIPStats");
      }


      var pathParams = {
        'ipid': ipid
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
        '/account/ip/stat/{ipid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPStatRouterGetAllAggregateIPStatsByGroup operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllAggregateIPStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats by Group
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllAggregateIPStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.iPStatRouterGetAllAggregateIPStatsByGroup = function(xAccountApiKey, ipid, provider, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllAggregateIPStatsByGroup");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllAggregateIPStatsByGroup");
      }

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling iPStatRouterGetAllAggregateIPStatsByGroup");
      }


      var pathParams = {
        'ipid': ipid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': provider,
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
        '/account/ip/stat/{ipid}/aggregate/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPStatRouterGetAllAggregatedProviderStatsForAIP operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllAggregatedProviderStatsForAIPCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllAggregatedProviderStatsForAIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPIPStat>}
     */
    this.iPStatRouterGetAllAggregatedProviderStatsForAIP = function(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllAggregatedProviderStatsForAIP");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllAggregatedProviderStatsForAIP");
      }


      var pathParams = {
        'ipid': ipid
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
      var returnType = [ModelsPIPStat];

      return this.apiClient.callApi(
        '/account/ip/stat/{ipid}/aggregate/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIPCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Specific Sub-Account of a IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Number} sid the Sub Account Id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPIPStat>}
     */
    this.iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP = function(xAccountApiKey, ipid, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP");
      }


      var pathParams = {
        'ipid': ipid,
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
      var returnType = [ModelsPIPStat];

      return this.apiClient.callApi(
        '/account/ip/stat/{ipid}/aggregate/sid/{sid}/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPStatRouterGetAllAggregatedSubAccountStatsForAnIP operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllAggregatedSubAccountStatsForAnIPCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Sub-Account Stats for an IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllAggregatedSubAccountStatsForAnIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSIPStat>}
     */
    this.iPStatRouterGetAllAggregatedSubAccountStatsForAnIP = function(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllAggregatedSubAccountStatsForAnIP");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllAggregatedSubAccountStatsForAnIP");
      }


      var pathParams = {
        'ipid': ipid
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
      var returnType = [ModelsSIPStat];

      return this.apiClient.callApi(
        '/account/ip/stat/{ipid}/aggregate/subaccounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPStatRouterGetAllIPStats operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllIPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All IP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllIPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRIPStat>}
     */
    this.iPStatRouterGetAllIPStats = function(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllIPStats");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllIPStats");
      }


      var pathParams = {
        'ipid': ipid
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
      var returnType = [ModelsRIPStat];

      return this.apiClient.callApi(
        '/account/ip/stat/{ipid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPStatRouterGetAllIPStatsByGroup operation.
     * @callback module:api/AccountipstatApi~iPStatRouterGetAllIPStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All IP Stats by Group
     * @param {Number} ipid the IPId you want to get
     * @param {String} xAccountApiKey Account API Key
     * @param {String} provider the provider whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountipstatApi~iPStatRouterGetAllIPStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRIPStat>}
     */
    this.iPStatRouterGetAllIPStatsByGroup = function(ipid, xAccountApiKey, provider, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling iPStatRouterGetAllIPStatsByGroup");
      }

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling iPStatRouterGetAllIPStatsByGroup");
      }

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling iPStatRouterGetAllIPStatsByGroup");
      }


      var pathParams = {
        'ipid': ipid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': provider,
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
      var returnType = [ModelsRIPStat];

      return this.apiClient.callApi(
        '/account/ip/stat/{ipid}/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
