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
    define(['ApiClient', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsDomain', 'model/ModelsEDomain', 'model/ModelsVerifyByTokenRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsDomain'), require('../model/ModelsEDomain'), require('../model/ModelsVerifyByTokenRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountdomainApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsDomain, root.SendPostApi.ModelsEDomain, root.SendPostApi.ModelsVerifyByTokenRequest);
  }
}(this, function(ApiClient, ModelsCountStat, ModelsDeleteResponse, ModelsDomain, ModelsEDomain, ModelsVerifyByTokenRequest) {
  'use strict';

  /**
   * Subaccountdomain service.
   * @module api/SubaccountdomainApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountdomainApi. 
   * @alias module:api/SubaccountdomainApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainRouterCount operation.
     * @callback module:api/SubaccountdomainApi~domainRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Domains
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountdomainApi~domainRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.domainRouterCount = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterCount");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/subaccount/domain/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterCreate operation.
     * @callback module:api/SubaccountdomainApi~domainRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Domain
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsEDomain} body The Domain content
     * @param {module:api/SubaccountdomainApi~domainRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterCreate = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainRouterCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterDelete operation.
     * @callback module:api/SubaccountdomainApi~domainRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Domain
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId The DomainId you want to delete
     * @param {module:api/SubaccountdomainApi~domainRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.domainRouterDelete = function(xSubAccountApiKey, domainId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterDelete");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterDelete");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterGet operation.
     * @callback module:api/SubaccountdomainApi~domainRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Domain by DomainId
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId the DomainId you want to get
     * @param {module:api/SubaccountdomainApi~domainRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterGet = function(xSubAccountApiKey, domainId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterGet");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterGet");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterGetAll operation.
     * @callback module:api/SubaccountdomainApi~domainRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsDomain>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Domains
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/SubaccountdomainApi~domainRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsDomain>}
     */
    this.domainRouterGetAll = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterGetAll");
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
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsDomain];

      return this.apiClient.callApi(
        '/subaccount/domain/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterUpdate operation.
     * @callback module:api/SubaccountdomainApi~domainRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Domain
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId The DomainId you want to update
     * @param {module:model/ModelsEDomain} body The body
     * @param {module:api/SubaccountdomainApi~domainRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterUpdate = function(xSubAccountApiKey, domainId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterUpdate");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainRouterUpdate");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterVerify operation.
     * @callback module:api/SubaccountdomainApi~domainRouterVerifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Domain By Domain Id
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId the DomainId you want to get
     * @param {module:api/SubaccountdomainApi~domainRouterVerifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterVerify = function(xSubAccountApiKey, domainId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterVerify");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterVerify");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}/verify', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterVerifyByToken operation.
     * @callback module:api/SubaccountdomainApi~domainRouterVerifyByTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Domain By Signed Token
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId the DomainId you want to get
     * @param {String} token The signed token used to verify
     * @param {module:api/SubaccountdomainApi~domainRouterVerifyByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterVerifyByToken = function(xSubAccountApiKey, domainId, token, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterVerifyByToken");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterVerifyByToken");
      }

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling domainRouterVerifyByToken");
      }


      var pathParams = {
        'domainId': domainId,
        'token': token
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}/verify/email/{token}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterVerifyRequest operation.
     * @callback module:api/SubaccountdomainApi~domainRouterVerifyRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Domain By Email Request
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId the DomainId you want to get
     * @param {module:model/ModelsVerifyByTokenRequest} body The Email to be used to verify
     * @param {Object} opts Optional parameters
     * @param {String} opts.redirectPath redirectPath
     * @param {module:api/SubaccountdomainApi~domainRouterVerifyRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.domainRouterVerifyRequest = function(xSubAccountApiKey, domainId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterVerifyRequest");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterVerifyRequest");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainRouterVerifyRequest");
      }


      var pathParams = {
        'domainId': domainId
      };
      var queryParams = {
        'redirectPath': opts['redirectPath'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}/verify/email', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
