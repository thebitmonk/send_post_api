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
    define(['ApiClient', 'model/ModelsAlert', 'model/ModelsAlertRequest', 'model/ModelsAlertResponse', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsDetailedAlert', 'model/ModelsEAlert'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAlert'), require('../model/ModelsAlertRequest'), require('../model/ModelsAlertResponse'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsDetailedAlert'), require('../model/ModelsEAlert'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountalertApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAlert, root.SendPostApi.ModelsAlertRequest, root.SendPostApi.ModelsAlertResponse, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsDetailedAlert, root.SendPostApi.ModelsEAlert);
  }
}(this, function(ApiClient, ModelsAlert, ModelsAlertRequest, ModelsAlertResponse, ModelsCountStat, ModelsDeleteResponse, ModelsDetailedAlert, ModelsEAlert) {
  'use strict';

  /**
   * Accountalert service.
   * @module api/AccountalertApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountalertApi. 
   * @alias module:api/AccountalertApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alertRouterCount operation.
     * @callback module:api/AccountalertApi~alertRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Alerts for account 
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.search search term
     * @param {module:api/AccountalertApi~alertRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.alertRouterCount = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling alertRouterCount");
      }


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
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
        '/account/alert/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertRouterCreateAlert operation.
     * @callback module:api/AccountalertApi~alertRouterCreateAlertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAlertResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create an alert 
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsAlertRequest} body The List to br sent
     * @param {module:api/AccountalertApi~alertRouterCreateAlertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAlertResponse}
     */
    this.alertRouterCreateAlert = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling alertRouterCreateAlert");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling alertRouterCreateAlert");
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
      var returnType = ModelsAlertResponse;

      return this.apiClient.callApi(
        '/account/alert/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertRouterDelete operation.
     * @callback module:api/AccountalertApi~alertRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Alert 
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} alertId The AlertId you want to delete
     * @param {module:api/AccountalertApi~alertRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.alertRouterDelete = function(xAccountApiKey, alertId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling alertRouterDelete");
      }

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw new Error("Missing the required parameter 'alertId' when calling alertRouterDelete");
      }


      var pathParams = {
        'alertId': alertId
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
        '/account/alert/{alertId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertRouterGetAll operation.
     * @callback module:api/AccountalertApi~alertRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsDetailedAlert>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Alerts 
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/AccountalertApi~alertRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsDetailedAlert>}
     */
    this.alertRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling alertRouterGetAll");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
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
      var returnType = [ModelsDetailedAlert];

      return this.apiClient.callApi(
        '/account/alert/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertRouterUpdate operation.
     * @callback module:api/AccountalertApi~alertRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAlert} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Alert 
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} alertId The alert you want to update
     * @param {module:model/ModelsEAlert} body The alert  Settings
     * @param {module:api/AccountalertApi~alertRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAlert}
     */
    this.alertRouterUpdate = function(xAccountApiKey, alertId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling alertRouterUpdate");
      }

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw new Error("Missing the required parameter 'alertId' when calling alertRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling alertRouterUpdate");
      }


      var pathParams = {
        'alertId': alertId
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
      var returnType = ModelsAlert;

      return this.apiClient.callApi(
        '/account/alert/{alertId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
