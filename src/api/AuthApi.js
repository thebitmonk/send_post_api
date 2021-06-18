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
 * Swagger Codegen version: 2.4.20
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAccount', 'model/ModelsAuthInfo', 'model/ModelsEAccount', 'model/ModelsEAccountMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAccount'), require('../model/ModelsAuthInfo'), require('../model/ModelsEAccount'), require('../model/ModelsEAccountMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AuthApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAccount, root.SendPostApi.ModelsAuthInfo, root.SendPostApi.ModelsEAccount, root.SendPostApi.ModelsEAccountMember);
  }
}(this, function(ApiClient, ModelsAccount, ModelsAuthInfo, ModelsEAccount, ModelsEAccountMember) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the authRouterCreate operation.
     * @callback module:api/AuthApi~authRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Account, sub-account and member
     * @param {module:model/ModelsEAccount} body The Account content
     * @param {String} xToken Firebase dynamic token
     * @param {module:api/AuthApi~authRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccount}
     */
    this.authRouterCreate = function(body, xToken, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authRouterCreate");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling authRouterCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Token': xToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsAccount;

      return this.apiClient.callApi(
        '/auth/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the authRouterGetAuthInfo operation.
     * @callback module:api/AuthApi~authRouterGetAuthInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAuthInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Auth Info Details
     * @param {module:model/ModelsEAccount} body The Account content
     * @param {String} xToken Firebase dynamic token
     * @param {module:api/AuthApi~authRouterGetAuthInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAuthInfo}
     */
    this.authRouterGetAuthInfo = function(body, xToken, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authRouterGetAuthInfo");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling authRouterGetAuthInfo");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Token': xToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsAuthInfo;

      return this.apiClient.callApi(
        '/auth/info', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the authRouterUpdateAuthInfo operation.
     * @callback module:api/AuthApi~authRouterUpdateAuthInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAuthInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates member and accounts related for email verification and on boarding answers
     * @param {module:model/ModelsEAccountMember} body The Account Member content
     * @param {String} xToken Firebase dynamic token
     * @param {module:api/AuthApi~authRouterUpdateAuthInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAuthInfo}
     */
    this.authRouterUpdateAuthInfo = function(body, xToken, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authRouterUpdateAuthInfo");
      }

      // verify the required parameter 'xToken' is set
      if (xToken === undefined || xToken === null) {
        throw new Error("Missing the required parameter 'xToken' when calling authRouterUpdateAuthInfo");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Token': xToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsAuthInfo;

      return this.apiClient.callApi(
        '/auth/info', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
