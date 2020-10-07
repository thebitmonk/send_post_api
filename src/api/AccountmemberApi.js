/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsDeleteResponse', 'model/ModelsMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDeleteResponse'), require('../model/ModelsMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountmemberApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsMember);
  }
}(this, function(ApiClient, ModelsDeleteResponse, ModelsMember) {
  'use strict';

  /**
   * Accountmember service.
   * @module api/AccountmemberApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountmemberApi. 
   * @alias module:api/AccountmemberApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the memberRouterDelete operation.
     * @callback module:api/AccountmemberApi~memberRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Member
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId The MemberId you want to delete
     * @param {module:api/AccountmemberApi~memberRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.memberRouterDelete = function(xAccountApiKey, memberId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterDelete");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling memberRouterDelete");
      }


      var pathParams = {
        'memberId': memberId
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
        '/account/member/{memberId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberRouterGet operation.
     * @callback module:api/AccountmemberApi~memberRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Member by MemberId
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId the MemberId you want to get
     * @param {module:api/AccountmemberApi~memberRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsMember}
     */
    this.memberRouterGet = function(xAccountApiKey, memberId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterGet");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling memberRouterGet");
      }


      var pathParams = {
        'memberId': memberId
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
      var returnType = ModelsMember;

      return this.apiClient.callApi(
        '/account/member/{memberId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberRouterGetAll operation.
     * @callback module:api/AccountmemberApi~memberRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Members
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountmemberApi~memberRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsMember>}
     */
    this.memberRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterGetAll");
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
      var returnType = [ModelsMember];

      return this.apiClient.callApi(
        '/account/member/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
