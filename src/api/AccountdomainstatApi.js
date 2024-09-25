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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBlacklistResource', 'model/ModelsPDStat', 'model/ModelsPostmasterDomainStat', 'model/ModelsRDStat', 'model/ModelsSDStat', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsBlacklistResource'), require('../model/ModelsPDStat'), require('../model/ModelsPostmasterDomainStat'), require('../model/ModelsRDStat'), require('../model/ModelsSDStat'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountdomainstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBlacklistResource, root.SendPostApi.ModelsPDStat, root.SendPostApi.ModelsPostmasterDomainStat, root.SendPostApi.ModelsRDStat, root.SendPostApi.ModelsSDStat, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsBlacklistResource, ModelsPDStat, ModelsPostmasterDomainStat, ModelsRDStat, ModelsSDStat, ModelsStat) {
  'use strict';

  /**
   * Accountdomainstat service.
   * @module api/AccountdomainstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountdomainstatApi. 
   * @alias module:api/AccountdomainstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregateDomainStatsByGroup operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetAllAggregateDomainStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats by Group <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetAllAggregateDomainStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.domainStatRouterGetAllAggregateDomainStatsByGroup = function(xAccountApiKey, domainId, provider, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregateDomainStatsByGroup");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregateDomainStatsByGroup");
      }

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling domainStatRouterGetAllAggregateDomainStatsByGroup");
      }


      var pathParams = {
        'domainId': domainId
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
        '/account/domain/stat/{domainId}/aggregate/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregatedProviderStatsForADomain operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetAllAggregatedProviderStatsForADomainCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPDStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Domain <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetAllAggregatedProviderStatsForADomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPDStat>}
     */
    this.domainStatRouterGetAllAggregatedProviderStatsForADomain = function(xAccountApiKey, domainId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregatedProviderStatsForADomain");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregatedProviderStatsForADomain");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = [ModelsPDStat];

      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsPDStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Specific Sub-Account of a Domain <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {Number} sid the Sub Account Id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsPDStat}
     */
    this.domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain = function(xAccountApiKey, domainId, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain");
      }


      var pathParams = {
        'domainId': domainId,
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
      var returnType = ModelsPDStat;

      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/sid/{sid}/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetAllAggregatedSubAccountStatsForAnDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSDStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Sub-Account Stats for an Domain <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetAllAggregatedSubAccountStatsForAnDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSDStat}
     */
    this.domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain = function(xAccountApiKey, domainId, provider, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain");
      }

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = ModelsSDStat;

      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/subaccounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllDomainStats operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetAllDomainStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRDStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Domain Stats <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetAllDomainStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRDStat>}
     */
    this.domainStatRouterGetAllDomainStats = function(xAccountApiKey, domainId, provider, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllDomainStats");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllDomainStats");
      }

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling domainStatRouterGetAllDomainStats");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = [ModelsRDStat];

      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetCurrentDomainBlacklistStats operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetCurrentDomainBlacklistStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBlacklistResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Current Domain Blacklist stats <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetCurrentDomainBlacklistStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBlacklistResource}
     */
    this.domainStatRouterGetCurrentDomainBlacklistStats = function(xAccountApiKey, domainId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetCurrentDomainBlacklistStats");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetCurrentDomainBlacklistStats");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
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
      var returnType = ModelsBlacklistResource;

      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/hetrixtools/stat', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetCurrentDomainPostmasterStats operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetCurrentDomainPostmasterStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPostmasterDomainStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Current Domain Postmaster stats <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetCurrentDomainPostmasterStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPostmasterDomainStat>}
     */
    this.domainStatRouterGetCurrentDomainPostmasterStats = function(xAccountApiKey, domainId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetCurrentDomainPostmasterStats");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetCurrentDomainPostmasterStats");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = [ModelsPostmasterDomainStat];

      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/postmaster/stat', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetStatsForASingleDomainStats operation.
     * @callback module:api/AccountdomainstatApi~domainStatRouterGetStatsForASingleDomainStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} domainId the domainID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {Number} opts.filterValue filterValue
     * @param {module:api/AccountdomainstatApi~domainStatRouterGetStatsForASingleDomainStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.domainStatRouterGetStatsForASingleDomainStats = function(xAccountApiKey, domainId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetStatsForASingleDomainStats");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetStatsForASingleDomainStats");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'filterValue': opts['filterValue'],
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
        '/account/domain/stat/{domainId}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));