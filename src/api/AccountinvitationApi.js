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
    define(['ApiClient', 'model/ModelsDeleteResponse', 'model/ModelsEInvitation', 'model/ModelsEMember', 'model/ModelsInvitation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEInvitation'), require('../model/ModelsEMember'), require('../model/ModelsInvitation'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountinvitationApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsEInvitation, root.SendPostApi.ModelsEMember, root.SendPostApi.ModelsInvitation);
  }
}(this, function(ApiClient, ModelsDeleteResponse, ModelsEInvitation, ModelsEMember, ModelsInvitation) {
  'use strict';

  /**
   * Accountinvitation service.
   * @module api/AccountinvitationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountinvitationApi. 
   * @alias module:api/AccountinvitationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the invitationRouterCreate operation.
     * @callback module:api/AccountinvitationApi~invitationRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsInvitation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Invitation <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEInvitation} body The Invitation content
     * @param {module:api/AccountinvitationApi~invitationRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsInvitation}
     */
    this.invitationRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling invitationRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling invitationRouterCreate");
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
      var returnType = ModelsInvitation;

      return this.apiClient.callApi(
        '/account/invitation/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the invitationRouterDelete operation.
     * @callback module:api/AccountinvitationApi~invitationRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Invitation <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} invitationId The InvitationId you want to delete
     * @param {module:model/ModelsEMember} body The triggering action member
     * @param {module:api/AccountinvitationApi~invitationRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.invitationRouterDelete = function(xAccountApiKey, invitationId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling invitationRouterDelete");
      }

      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling invitationRouterDelete");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling invitationRouterDelete");
      }


      var pathParams = {
        'invitationId': invitationId
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
        '/account/invitation/{invitationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the invitationRouterGetAll operation.
     * @callback module:api/AccountinvitationApi~invitationRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Invitations <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountinvitationApi~invitationRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsInvitation>}
     */
    this.invitationRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling invitationRouterGetAll");
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
      var returnType = [ModelsInvitation];

      return this.apiClient.callApi(
        '/account/invitation/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
