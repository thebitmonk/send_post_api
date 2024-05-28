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
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsQEmailMessage', 'model/ModelsQEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsQEmailMessage'), require('../model/ModelsQEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountmessageApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsQEmailMessage, root.SendPostApi.ModelsQEvent);
  }
}(this, function(ApiClient, ModelsQEmailMessage, ModelsQEvent) {
  'use strict';

  /**
   * Accountmessage service.
   * @module api/AccountmessageApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountmessageApi. 
   * @alias module:api/AccountmessageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the messageRouterGet operation.
     * @callback module:api/AccountmessageApi~messageRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEmailMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Message By Id <br>
     * @param {String} xAccountApiKey Sub-Account API Key
     * @param {String} messageId the messageId that you want to retrieve
     * @param {module:api/AccountmessageApi~messageRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEmailMessage}
     */
    this.messageRouterGet = function(xAccountApiKey, messageId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling messageRouterGet");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling messageRouterGet");
      }


      var pathParams = {
        'messageId': messageId
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
      var returnType = ModelsQEmailMessage;

      return this.apiClient.callApi(
        '/account/message/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messageRouterGetAllEventsForAMessageId operation.
     * @callback module:api/AccountmessageApi~messageRouterGetAllEventsForAMessageIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events associated with a message id <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} messageId the messageId that you want to retrieve
     * @param {module:api/AccountmessageApi~messageRouterGetAllEventsForAMessageIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.messageRouterGetAllEventsForAMessageId = function(xAccountApiKey, messageId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling messageRouterGetAllEventsForAMessageId");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling messageRouterGetAllEventsForAMessageId");
      }


      var pathParams = {
        'messageId': messageId
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/account/message/{messageId}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messageRouterGetMessageFromBadger operation.
     * @callback module:api/AccountmessageApi~messageRouterGetMessageFromBadgerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEmailMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Message By Id <br>
     * @param {String} xAccountApiKey Sub-Account API Key
     * @param {String} messageId the messageId that you want to retrieve
     * @param {module:api/AccountmessageApi~messageRouterGetMessageFromBadgerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEmailMessage}
     */
    this.messageRouterGetMessageFromBadger = function(xAccountApiKey, messageId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling messageRouterGetMessageFromBadger");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling messageRouterGetMessageFromBadger");
      }


      var pathParams = {
        'messageId': messageId
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
      var returnType = ModelsQEmailMessage;

      return this.apiClient.callApi(
        '/account/message/badger/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messageRouterGetMessageFromNode operation.
     * @callback module:api/AccountmessageApi~messageRouterGetMessageFromNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEmailMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Message from node by specific Id <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} messageId the messageId that you want to retrieve
     * @param {module:api/AccountmessageApi~messageRouterGetMessageFromNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEmailMessage}
     */
    this.messageRouterGetMessageFromNode = function(xAccountApiKey, messageId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling messageRouterGetMessageFromNode");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling messageRouterGetMessageFromNode");
      }


      var pathParams = {
        'messageId': messageId
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
      var returnType = ModelsQEmailMessage;

      return this.apiClient.callApi(
        '/account/message/node/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
