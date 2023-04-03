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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ModelsAccountIPPool} from '../model/ModelsAccountIPPool';
import {ModelsCountStat} from '../model/ModelsCountStat';
import {ModelsDeleteResponse} from '../model/ModelsDeleteResponse';
import {ModelsEIPPool} from '../model/ModelsEIPPool';

/**
* Accountippool service.
* @module api/AccountippoolApi
* @version 1.0.0
*/
export class AccountippoolApi {

    /**
    * Constructs a new AccountippoolApi. 
    * @alias module:api/AccountippoolApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the accountIPPoolRouterCount operation.
     * @callback moduleapi/AccountippoolApi~accountIPPoolRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total AccountIPPools
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountippoolApi~accountIPPoolRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    accountIPPoolRouterCount(xAccountApiKey, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterCount");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/ippool/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountIPPoolRouterCreate operation.
     * @callback moduleapi/AccountippoolApi~accountIPPoolRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountIPPool{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create AccountIPPool
     * @param {module:model/ModelsEIPPool} body The AccountIPPool content
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountippoolApi~accountIPPoolRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    accountIPPoolRouterCreate(body, xAccountApiKey, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIPPoolRouterCreate");
      }
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterCreate");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelsAccountIPPool;

      return this.apiClient.callApi(
        '/account/ippool/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountIPPoolRouterDelete operation.
     * @callback moduleapi/AccountippoolApi~accountIPPoolRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AccountIPPool
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ippoolid The AccountIPPoolId you want to delete
     * @param {module:api/AccountippoolApi~accountIPPoolRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    accountIPPoolRouterDelete(xAccountApiKey, ippoolid, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterDelete");
      }
      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling accountIPPoolRouterDelete");
      }

      let pathParams = {
        'ippoolid': ippoolid
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/account/ippool/{ippoolid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountIPPoolRouterGet operation.
     * @callback moduleapi/AccountippoolApi~accountIPPoolRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountIPPool{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find AccountIPPool by AccountIPPoolId
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ippoolid the AccountIPPoolId you want to get
     * @param {module:api/AccountippoolApi~accountIPPoolRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    accountIPPoolRouterGet(xAccountApiKey, ippoolid, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterGet");
      }
      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling accountIPPoolRouterGet");
      }

      let pathParams = {
        'ippoolid': ippoolid
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsAccountIPPool;

      return this.apiClient.callApi(
        '/account/ippool/{ippoolid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountIPPoolRouterGetAll operation.
     * @callback moduleapi/AccountippoolApi~accountIPPoolRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAccountIPPool>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All AccountIPPools
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/AccountippoolApi~accountIPPoolRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    accountIPPoolRouterGetAll(xAccountApiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterGetAll");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'offset': opts['offset'],'limit': opts['limit'],'search': opts['search']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsAccountIPPool];

      return this.apiClient.callApi(
        '/account/ippool/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountIPPoolRouterUpdate operation.
     * @callback moduleapi/AccountippoolApi~accountIPPoolRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountIPPool{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AccountIPPool
     * @param {module:model/ModelsEIPPool} body The body
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ippoolid The AccountIPPoolId you want to update
     * @param {module:api/AccountippoolApi~accountIPPoolRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    accountIPPoolRouterUpdate(body, xAccountApiKey, ippoolid, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIPPoolRouterUpdate");
      }
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterUpdate");
      }
      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling accountIPPoolRouterUpdate");
      }

      let pathParams = {
        'ippoolid': ippoolid
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelsAccountIPPool;

      return this.apiClient.callApi(
        '/account/ippool/{ippoolid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}