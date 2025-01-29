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
    define(['ApiClient', 'model/ModelsHubspotTicket', 'model/ModelsRequestCreateTicket', 'model/ModelsUploadFileResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsHubspotTicket'), require('../model/ModelsRequestCreateTicket'), require('../model/ModelsUploadFileResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountcustomerPortalApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsHubspotTicket, root.SendPostApi.ModelsRequestCreateTicket, root.SendPostApi.ModelsUploadFileResponse);
  }
}(this, function(ApiClient, ModelsHubspotTicket, ModelsRequestCreateTicket, ModelsUploadFileResponse) {
  'use strict';

  /**
   * AccountcustomerPortal service.
   * @module api/AccountcustomerPortalApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountcustomerPortalApi. 
   * @alias module:api/AccountcustomerPortalApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the customerPortalRouterCreateTicketWithAssContactAndCompany operation.
     * @callback module:api/AccountcustomerPortalApi~customerPortalRouterCreateTicketWithAssContactAndCompanyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * CreateTicketWithAssContactAndCompany <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId The member id who is creating the ticket
     * @param {module:model/ModelsRequestCreateTicket} body The ticket request content
     * @param {module:api/AccountcustomerPortalApi~customerPortalRouterCreateTicketWithAssContactAndCompanyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.customerPortalRouterCreateTicketWithAssContactAndCompany = function(xAccountApiKey, memberId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling customerPortalRouterCreateTicketWithAssContactAndCompany");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling customerPortalRouterCreateTicketWithAssContactAndCompany");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling customerPortalRouterCreateTicketWithAssContactAndCompany");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/account/customer_portal/{memberId}/tickets', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPortalRouterGetCompanyTickets operation.
     * @callback module:api/AccountcustomerPortalApi~customerPortalRouterGetCompanyTicketsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsHubspotTicket>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GetCompanyTickets <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountcustomerPortalApi~customerPortalRouterGetCompanyTicketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsHubspotTicket>}
     */
    this.customerPortalRouterGetCompanyTickets = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling customerPortalRouterGetCompanyTickets");
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
      var returnType = [ModelsHubspotTicket];

      return this.apiClient.callApi(
        '/account/customer_portal/tickets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPortalRouterGetTicketDetails operation.
     * @callback module:api/AccountcustomerPortalApi~customerPortalRouterGetTicketDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsHubspotTicket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GetTicketDetails <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} id The ticket id you want
     * @param {module:api/AccountcustomerPortalApi~customerPortalRouterGetTicketDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsHubspotTicket}
     */
    this.customerPortalRouterGetTicketDetails = function(xAccountApiKey, id, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling customerPortalRouterGetTicketDetails");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customerPortalRouterGetTicketDetails");
      }


      var pathParams = {
        'id': id
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
      var returnType = ModelsHubspotTicket;

      return this.apiClient.callApi(
        '/account/customer_portal/tickets/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPortalRouterUploadFileToHubspot operation.
     * @callback module:api/AccountcustomerPortalApi~customerPortalRouterUploadFileToHubspotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsUploadFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file to HubSpot
     * @param {File} file File to upload
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountcustomerPortalApi~customerPortalRouterUploadFileToHubspotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsUploadFileResponse}
     */
    this.customerPortalRouterUploadFileToHubspot = function(file, xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling customerPortalRouterUploadFileToHubspot");
      }

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling customerPortalRouterUploadFileToHubspot");
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
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ModelsUploadFileResponse;

      return this.apiClient.callApi(
        '/account/customer_portal/upload', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
