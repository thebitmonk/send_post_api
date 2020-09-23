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
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsQEmailMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsQEmailMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountrecipientApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsQEmailMessage);
  }
}(this, function(ApiClient, ModelsQEmailMessage) {
  'use strict';

  /**
   * Subaccountrecipient service.
   * @module api/SubaccountrecipientApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountrecipientApi. 
   * @alias module:api/SubaccountrecipientApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the recipientRouterGetAllMessagesForARecipient operation.
     * @callback module:api/SubaccountrecipientApi~recipientRouterGetAllMessagesForARecipientCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEmailMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all messages sent to a specific recipient
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {String} recipient email of the recipient
     * @param {module:api/SubaccountrecipientApi~recipientRouterGetAllMessagesForARecipientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEmailMessage>}
     */
    this.recipientRouterGetAllMessagesForARecipient = function(xSubAccountApiKey, recipient, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling recipientRouterGetAllMessagesForARecipient");
      }

      // verify the required parameter 'recipient' is set
      if (recipient === undefined || recipient === null) {
        throw new Error("Missing the required parameter 'recipient' when calling recipientRouterGetAllMessagesForARecipient");
      }


      var pathParams = {
        'recipient': recipient
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
      var returnType = [ModelsQEmailMessage];

      return this.apiClient.callApi(
        '/subaccount/recipient/{recipient}/messages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recipientRouterGetAllMessagesForARecipientFromANode operation.
     * @callback module:api/SubaccountrecipientApi~recipientRouterGetAllMessagesForARecipientFromANodeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEmailMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all message sent to a recipient from a specific node
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {String} recipient email of the recipient
     * @param {module:api/SubaccountrecipientApi~recipientRouterGetAllMessagesForARecipientFromANodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEmailMessage>}
     */
    this.recipientRouterGetAllMessagesForARecipientFromANode = function(xSubAccountApiKey, recipient, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling recipientRouterGetAllMessagesForARecipientFromANode");
      }

      // verify the required parameter 'recipient' is set
      if (recipient === undefined || recipient === null) {
        throw new Error("Missing the required parameter 'recipient' when calling recipientRouterGetAllMessagesForARecipientFromANode");
      }


      var pathParams = {
        'recipient': recipient
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
      var returnType = [ModelsQEmailMessage];

      return this.apiClient.callApi(
        '/subaccount/recipient/node/{recipient}/messages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
