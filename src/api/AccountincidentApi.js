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
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsComment', 'model/ModelsCountStat', 'model/ModelsEComment', 'model/ModelsEIncident', 'model/ModelsIncident'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsComment'), require('../model/ModelsCountStat'), require('../model/ModelsEComment'), require('../model/ModelsEIncident'), require('../model/ModelsIncident'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountincidentApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsComment, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsEComment, root.SendPostApi.ModelsEIncident, root.SendPostApi.ModelsIncident);
  }
}(this, function(ApiClient, ModelsComment, ModelsCountStat, ModelsEComment, ModelsEIncident, ModelsIncident) {
  'use strict';

  /**
   * Accountincident service.
   * @module api/AccountincidentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountincidentApi. 
   * @alias module:api/AccountincidentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the incidentRouterAdd operation.
     * @callback module:api/AccountincidentApi~incidentRouterAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add comment to Incident
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} incidentId the incident id
     * @param {module:model/ModelsEComment} body The Comment content
     * @param {module:api/AccountincidentApi~incidentRouterAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsComment}
     */
    this.incidentRouterAdd = function(xAccountApiKey, incidentId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterAdd");
      }

      // verify the required parameter 'incidentId' is set
      if (incidentId === undefined || incidentId === null) {
        throw new Error("Missing the required parameter 'incidentId' when calling incidentRouterAdd");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling incidentRouterAdd");
      }


      var pathParams = {
        'incidentId': incidentId
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
      var returnType = ModelsComment;

      return this.apiClient.callApi(
        '/account/incident/{incidentId}/comment', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incidentRouterCount operation.
     * @callback module:api/AccountincidentApi~incidentRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Incidents
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.status status
     * @param {Number} opts.tag status
     * @param {String} opts.search search term
     * @param {module:api/AccountincidentApi~incidentRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.incidentRouterCount = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterCount");
      }


      var pathParams = {
      };
      var queryParams = {
        'status': opts['status'],
        'tag': opts['tag'],
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
        '/account/incident/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incidentRouterCreate operation.
     * @callback module:api/AccountincidentApi~incidentRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIncident} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Incident
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEIncident} body The Incident content
     * @param {module:api/AccountincidentApi~incidentRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIncident}
     */
    this.incidentRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling incidentRouterCreate");
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
      var returnType = ModelsIncident;

      return this.apiClient.callApi(
        '/account/incident/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incidentRouterGetAll operation.
     * @callback module:api/AccountincidentApi~incidentRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsIncident>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Incidents
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {Number} opts.status status
     * @param {Number} opts.tag status
     * @param {module:api/AccountincidentApi~incidentRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsIncident>}
     */
    this.incidentRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterGetAll");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
        'status': opts['status'],
        'tag': opts['tag'],
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
      var returnType = [ModelsIncident];

      return this.apiClient.callApi(
        '/account/incident/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incidentRouterGetAllComments operation.
     * @callback module:api/AccountincidentApi~incidentRouterGetAllCommentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Comments Associated with Incident
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} incidentId the IncidentId you want to get comments for
     * @param {module:api/AccountincidentApi~incidentRouterGetAllCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsComment>}
     */
    this.incidentRouterGetAllComments = function(xAccountApiKey, incidentId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterGetAllComments");
      }

      // verify the required parameter 'incidentId' is set
      if (incidentId === undefined || incidentId === null) {
        throw new Error("Missing the required parameter 'incidentId' when calling incidentRouterGetAllComments");
      }


      var pathParams = {
        'incidentId': incidentId
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
      var returnType = [ModelsComment];

      return this.apiClient.callApi(
        '/account/incident/{incidentId}/comment', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incidentRouterGetIncident operation.
     * @callback module:api/AccountincidentApi~incidentRouterGetIncidentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIncident} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Incident by incidentId
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} incidentId the IncidentId you want to get
     * @param {module:api/AccountincidentApi~incidentRouterGetIncidentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIncident}
     */
    this.incidentRouterGetIncident = function(xAccountApiKey, incidentId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterGetIncident");
      }

      // verify the required parameter 'incidentId' is set
      if (incidentId === undefined || incidentId === null) {
        throw new Error("Missing the required parameter 'incidentId' when calling incidentRouterGetIncident");
      }


      var pathParams = {
        'incidentId': incidentId
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
      var returnType = ModelsIncident;

      return this.apiClient.callApi(
        '/account/incident/{incidentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incidentRouterUpdate operation.
     * @callback module:api/AccountincidentApi~incidentRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIncident} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Incident
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} incidentId the Incident Id you want to update
     * @param {module:model/ModelsEIncident} body The Incident content
     * @param {module:api/AccountincidentApi~incidentRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIncident}
     */
    this.incidentRouterUpdate = function(xAccountApiKey, incidentId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling incidentRouterUpdate");
      }

      // verify the required parameter 'incidentId' is set
      if (incidentId === undefined || incidentId === null) {
        throw new Error("Missing the required parameter 'incidentId' when calling incidentRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling incidentRouterUpdate");
      }


      var pathParams = {
        'incidentId': incidentId
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
      var returnType = ModelsIncident;

      return this.apiClient.callApi(
        '/account/incident/{incidentId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
