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
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountdomainStatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsStat) {
  'use strict';

  /**
   * AccountdomainStat service.
   * @module api/AccountdomainStatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountdomainStatApi. 
   * @alias module:api/AccountdomainStatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregateDomainStatsByGroup operation.
     * @callback module:api/AccountdomainStatApi~domainStatRouterGetAllAggregateDomainStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats by Group
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainStatApi~domainStatRouterGetAllAggregateDomainStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/account/domainStat/{domainId}/aggregate/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetStatsForASingleDomainStats operation.
     * @callback module:api/AccountdomainStatApi~domainStatRouterGetStatsForASingleDomainStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {String} domainId the domainID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountdomainStatApi~domainStatRouterGetStatsForASingleDomainStatsCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/account/domainStat/{domainId}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
