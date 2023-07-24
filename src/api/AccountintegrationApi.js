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
    define(['ApiClient', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsEIntegration', 'model/ModelsIntegration', 'model/ModelsRHetrixtoolsMonitorStat', 'model/ModelsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEIntegration'), require('../model/ModelsIntegration'), require('../model/ModelsRHetrixtoolsMonitorStat'), require('../model/ModelsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountintegrationApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsEIntegration, root.SendPostApi.ModelsIntegration, root.SendPostApi.ModelsRHetrixtoolsMonitorStat, root.SendPostApi.ModelsResponse);
  }
}(this, function(ApiClient, ModelsCountStat, ModelsDeleteResponse, ModelsEIntegration, ModelsIntegration, ModelsRHetrixtoolsMonitorStat, ModelsResponse) {
  'use strict';

  /**
   * Accountintegration service.
   * @module api/AccountintegrationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountintegrationApi. 
   * @alias module:api/AccountintegrationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountIntegrationRouterCount operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total AccountIntegrations <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.accountIntegrationRouterCount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterCount");
      }


      var pathParams = {
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/integration/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterCreate operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIntegration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Integration <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} itype The integration type you want to create
     * @param {module:model/ModelsEIntegration} body The Integration content
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIntegration}
     */
    this.accountIntegrationRouterCreate = function(xAccountApiKey, itype, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterCreate");
      }

      // verify the required parameter 'itype' is set
      if (itype === undefined || itype === null) {
        throw new Error("Missing the required parameter 'itype' when calling accountIntegrationRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIntegrationRouterCreate");
      }


      var pathParams = {
        'itype': itype
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
      var returnType = ModelsIntegration;

      return this.apiClient.callApi(
        '/account/integration/{itype}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterDelete operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Integration <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} itype The integration type you want to update
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.accountIntegrationRouterDelete = function(xAccountApiKey, itype, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterDelete");
      }

      // verify the required parameter 'itype' is set
      if (itype === undefined || itype === null) {
        throw new Error("Missing the required parameter 'itype' when calling accountIntegrationRouterDelete");
      }


      var pathParams = {
        'itype': itype
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
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/account/integration/{itype}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterDisableHetrixToolsIPMonitoring operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterDisableHetrixToolsIPMonitoringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable IP Monitoring for a single IP <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to disable monitoring for
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterDisableHetrixToolsIPMonitoringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.accountIntegrationRouterDisableHetrixToolsIPMonitoring = function(xAccountApiKey, ipid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterDisableHetrixToolsIPMonitoring");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling accountIntegrationRouterDisableHetrixToolsIPMonitoring");
      }


      var pathParams = {
        'ipid': ipid
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
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/account/integration/hetrixtools/monitor/{ipid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterEnableHetrixToolsIPMonitoring operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterEnableHetrixToolsIPMonitoringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable IP Monitoring for a single IP <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to enable monitoring for
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterEnableHetrixToolsIPMonitoringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsResponse}
     */
    this.accountIntegrationRouterEnableHetrixToolsIPMonitoring = function(xAccountApiKey, ipid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterEnableHetrixToolsIPMonitoring");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling accountIntegrationRouterEnableHetrixToolsIPMonitoring");
      }


      var pathParams = {
        'ipid': ipid
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
      var returnType = ModelsResponse;

      return this.apiClient.callApi(
        '/account/integration/hetrixtools/monitor/{ipid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterGetAll operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsIntegration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Integrations <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsIntegration>}
     */
    this.accountIntegrationRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterGetAll");
      }


      var pathParams = {
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
      var returnType = [ModelsIntegration];

      return this.apiClient.callApi(
        '/account/integration/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterGetMonitoredIPStats operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterGetMonitoredIPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRHetrixtoolsMonitorStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Monitored IP Stats <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId for which you want monitored stats
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterGetMonitoredIPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRHetrixtoolsMonitorStat>}
     */
    this.accountIntegrationRouterGetMonitoredIPStats = function(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterGetMonitoredIPStats");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling accountIntegrationRouterGetMonitoredIPStats");
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
      var returnType = [ModelsRHetrixtoolsMonitorStat];

      return this.apiClient.callApi(
        '/account/integration/hetrixtools/monitor/stat/{ipid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterUpdate operation.
     * @callback module:api/AccountintegrationApi~accountIntegrationRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIntegration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Integration <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} itype The integration type you want to update
     * @param {module:model/ModelsEIntegration} body The Integration content
     * @param {module:api/AccountintegrationApi~accountIntegrationRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIntegration}
     */
    this.accountIntegrationRouterUpdate = function(xAccountApiKey, itype, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterUpdate");
      }

      // verify the required parameter 'itype' is set
      if (itype === undefined || itype === null) {
        throw new Error("Missing the required parameter 'itype' when calling accountIntegrationRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIntegrationRouterUpdate");
      }


      var pathParams = {
        'itype': itype
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
      var returnType = ModelsIntegration;

      return this.apiClient.callApi(
        '/account/integration/{itype}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
