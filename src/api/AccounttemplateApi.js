/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ModelsAccountTemplate from '../model/ModelsAccountTemplate';
import ModelsCountStat from '../model/ModelsCountStat';
import ModelsDeleteResponse from '../model/ModelsDeleteResponse';

/**
* AccountTemplate service.
* @module api/AccountTemplateApi
* @version 1.0.0
*/
export default class AccountTemplateApi {

    /**
    * Constructs a new AccountTemplateApi. 
    * @alias module:api/AccountTemplateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountTemplateRouterCopy operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterCopyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy AccountTemplate
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid The id of the template you want to copy
     * @param {module:api/AccountTemplateApi~accountTemplateRouterCopyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    accountTemplateRouterCopy(xAccountApiKey, templateid, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterCopy");
      }
      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterCopy");
      }

      let pathParams = {
        'templateid': templateid
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
      let returnType = ModelsAccountTemplate;
      return this.apiClient.callApi(
        '/account/template/{templateid}/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterCount operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count total templates
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} [search] search term
     * @param {module:api/AccountTemplateApi~accountTemplateRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    accountTemplateRouterCount(xAccountApiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterCount");
      }

      let pathParams = {
      };
      let queryParams = {
        'search': opts['search']
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
        '/account/template/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterCreate operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new template
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsAccountTemplate} body The AccountTemplate content
     * @param {module:api/AccountTemplateApi~accountTemplateRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    accountTemplateRouterCreate(xAccountApiKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterCreate");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountTemplateRouterCreate");
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
      let returnType = ModelsAccountTemplate;
      return this.apiClient.callApi(
        '/account/template/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterDelete operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AccountTemplate
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid The id of the template you want to delete
     * @param {module:api/AccountTemplateApi~accountTemplateRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    accountTemplateRouterDelete(xAccountApiKey, templateid, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterDelete");
      }
      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterDelete");
      }

      let pathParams = {
        'templateid': templateid
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
        '/account/template/{templateid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterGet operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single template
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid ID of the template required
     * @param {module:api/AccountTemplateApi~accountTemplateRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    accountTemplateRouterGet(xAccountApiKey, templateid, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterGet");
      }
      // verify the required parameter 'templateid' is set
      if (templateid === undefined || templateid === null) {
        throw new Error("Missing the required parameter 'templateid' when calling accountTemplateRouterGet");
      }

      let pathParams = {
        'templateid': templateid
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
      let returnType = ModelsAccountTemplate;
      return this.apiClient.callApi(
        '/account/template/{templateid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterGetAll operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAccountTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all templates
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] offset
     * @param {Number} [limit] limit
     * @param {String} [search] search term
     * @param {module:api/AccountTemplateApi~accountTemplateRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAccountTemplate>}
     */
    accountTemplateRouterGetAll(xAccountApiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountTemplateRouterGetAll");
      }

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsAccountTemplate];
      return this.apiClient.callApi(
        '/account/template/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountTemplateRouterUpdate operation.
     * @callback module:api/AccountTemplateApi~accountTemplateRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update template
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} templateid The id of the template you want to update
     * @param {module:model/ModelsAccountTemplate} body The template content
     * @param {module:api/AccountTemplateApi~accountTemplateRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountTemplate}
     */
    accountTemplateRouterUpdate(xAccountApiKey, templateid, body, callback) {
      let postBody = body;
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

      let pathParams = {
        'templateid': templateid
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
      let returnType = ModelsAccountTemplate;
      return this.apiClient.callApi(
        '/account/template/{templateid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
