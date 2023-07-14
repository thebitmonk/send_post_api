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
    define(['ApiClient', 'model/ModelsDomainCheckResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDomainCheckResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountdomainReportApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDomainCheckResult);
  }
}(this, function(ApiClient, ModelsDomainCheckResult) {
  'use strict';

  /**
   * AccountdomainReport service.
   * @module api/AccountdomainReportApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountdomainReportApi. 
   * @alias module:api/AccountdomainReportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainReportRouterReputation operation.
     * @callback module:api/AccountdomainReportApi~domainReportRouterReputationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomainCheckResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get reputation of domain <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.ip ip
     * @param {String} opts.host host
     * @param {module:api/AccountdomainReportApi~domainReportRouterReputationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomainCheckResult}
     */
    this.domainReportRouterReputation = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainReportRouterReputation");
      }


      var pathParams = {
      };
      var queryParams = {
        'ip': opts['ip'],
        'host': opts['host'],
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
      var returnType = ModelsDomainCheckResult;

      return this.apiClient.callApi(
        '/account/domainReport/reputation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
