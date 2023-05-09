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
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAccountTemplate', 'model/ModelsCountStat', 'model/ModelsDeleteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAccountTemplate'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccounttemplateApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAccountTemplate, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse);
  }
}(this, function(ApiClient, ModelsAccountTemplate, ModelsCountStat, ModelsDeleteResponse) {
  'use strict';

  /**
   * Accounttemplate service.
   * @module api/AccounttemplateApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccounttemplateApi. 
   * @alias module:api/AccounttemplateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountTemplateRouterCopy operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterCopyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy AccountTemplate <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid The id of the template you want to copy
     * @param {module:api/AccounttemplateApi~accountTemplateRouterCopyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    this.accountTemplateRouterCopy = function(xAccountApiKey, templateid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterCopy");
      }

      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterCopy");
      }


      var pathParams = {
        'templateid': templateid
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
      var returnType = ModelsAccountTemplate;

      return this.apiClient.callApi(
        '/account/template/{templateid}/copy', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterCount operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count total templates <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.search search term
     * @param {module:api/AccounttemplateApi~accountTemplateRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.accountTemplateRouterCount = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterCount");
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
        '/account/template/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterCreate operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new template <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsAccountTemplate} body The AccountTemplate content
     * @param {module:api/AccounttemplateApi~accountTemplateRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    this.accountTemplateRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountTemplateRouterCreate");
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
      var returnType = ModelsAccountTemplate;

      return this.apiClient.callApi(
        '/account/template/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterDelete operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AccountTemplate <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid The id of the template you want to delete
     * @param {module:api/AccounttemplateApi~accountTemplateRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.accountTemplateRouterDelete = function(xAccountApiKey, templateid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterDelete");
      }

      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterDelete");
      }


      var pathParams = {
        'templateid': templateid
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
        '/account/template/{templateid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterGet operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single template <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid ID of the template required
     * @param {module:api/AccounttemplateApi~accountTemplateRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    this.accountTemplateRouterGet = function(xAccountApiKey, templateid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterGet");
      }

      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterGet");
      }


      var pathParams = {
        'templateid': templateid
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
      var returnType = ModelsAccountTemplate;

      return this.apiClient.callApi(
        '/account/template/{templateid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterGetAll operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAccountTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all templates <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/AccounttemplateApi~accountTemplateRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAccountTemplate>}
     */
    this.accountTemplateRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterGetAll");
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
      var returnType = [ModelsAccountTemplate];

      return this.apiClient.callApi(
        '/account/template/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterUpdate operation.
     * @callback module:api/AccounttemplateApi~accountTemplateRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update template <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid The id of the template you want to update
     * @param {module:model/ModelsAccountTemplate} body The template content
     * @param {module:api/AccounttemplateApi~accountTemplateRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    this.accountTemplateRouterUpdate = function(xAccountApiKey, templateid, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterUpdate");
      }

      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountTemplateRouterUpdate");
      }


      var pathParams = {
        'templateid': templateid
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
      var returnType = ModelsAccountTemplate;

      return this.apiClient.callApi(
        '/account/template/{templateid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
