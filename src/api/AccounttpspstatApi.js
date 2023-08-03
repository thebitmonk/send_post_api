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
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAPStat', 'model/ModelsASStat', 'model/ModelsRIPStat', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAPStat'), require('../model/ModelsASStat'), require('../model/ModelsRIPStat'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccounttpspstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAPStat, root.SendPostApi.ModelsASStat, root.SendPostApi.ModelsRIPStat, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsAPStat, ModelsASStat, ModelsRIPStat, ModelsStat) {
  'use strict';

  /**
   * Accounttpspstat service.
   * @module api/AccounttpspstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccounttpspstatApi. 
   * @alias module:api/AccounttpspstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats operation.
     * @callback module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspid the tpspId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats = function(xAccountApiKey, tpspid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats");
      }

      // verify the required parameter 'tpspid' is set
      if (tpspid === undefined || tpspid === null) {
        throw new Error("Missing the required parameter 'tpspid' when calling thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats");
      }


      var pathParams = {
        'tpspid': tpspid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': opts['provider'],
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
        '/account/tpsp/stat/{tpspid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider operation.
     * @callback module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProviderCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Third Party Provider
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspid the tpspId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAPStat>}
     */
    this.thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider = function(xAccountApiKey, tpspid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider");
      }

      // verify the required parameter 'tpspid' is set
      if (tpspid === undefined || tpspid === null) {
        throw new Error("Missing the required parameter 'tpspid' when calling thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider");
      }


      var pathParams = {
        'tpspid': tpspid
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
        '/account/tpsp/stat/{tpspid}/aggregate/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider operation.
     * @callback module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProviderCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsASStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Sub-Account Stats for an Third Party Provider
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspid the TPSPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {String} opts.sortBy the sorting order
     * @param {module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsASStat>}
     */
    this.thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider = function(xAccountApiKey, tpspid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider");
      }

      // verify the required parameter 'tpspid' is set
      if (tpspid === undefined || tpspid === null) {
        throw new Error("Missing the required parameter 'tpspid' when calling thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider");
      }


      var pathParams = {
        'tpspid': tpspid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': opts['provider'],
        'sortBy': opts['sortBy'],
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
      var returnType = [ModelsASStat];

      return this.apiClient.callApi(
        '/account/tpsp/stat/{tpspid}/aggregate/subaccount', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats operation.
     * @callback module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllThirdPartyProvidersStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Third Party Providers Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspid the tpspId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {module:api/AccounttpspstatApi~thirdPartyProviderStatRouterGetAllThirdPartyProvidersStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRIPStat>}
     */
    this.thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats = function(xAccountApiKey, tpspid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats");
      }

      // verify the required parameter 'tpspid' is set
      if (tpspid === undefined || tpspid === null) {
        throw new Error("Missing the required parameter 'tpspid' when calling thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats");
      }


      var pathParams = {
        'tpspid': tpspid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': opts['provider'],
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
        '/account/tpsp/stat/{tpspid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
