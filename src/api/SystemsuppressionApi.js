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
import {ModelsRSuppression} from '../model/ModelsRSuppression';
import {ModelsSuppression} from '../model/ModelsSuppression';

/**
* Systemsuppression service.
* @module api/SystemsuppressionApi
* @version 1.0.0
*/
export class SystemsuppressionApi {

    /**
    * Constructs a new SystemsuppressionApi. 
    * @alias module:api/SystemsuppressionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the systemSuppressionRouterCreateSuppressionsViaSendX operation.
     * @callback moduleapi/SystemsuppressionApi~systemSuppressionRouterCreateSuppressionsViaSendXCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSuppression{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression List
     * @param {module:model/ModelsRSuppression} body Suppression content
     * @param {String} xSystemApiKey System API Key
     * @param {Number} subAccountId The SubAccountId you want to delete
     * @param {module:api/SystemsuppressionApi~systemSuppressionRouterCreateSuppressionsViaSendXCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    systemSuppressionRouterCreateSuppressionsViaSendX(body, xSystemApiKey, subAccountId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling systemSuppressionRouterCreateSuppressionsViaSendX");
      }
      // verify the required parameter 'xSystemApiKey' is set
      if (xSystemApiKey === undefined || xSystemApiKey === null) {
        throw new Error("Missing the required parameter 'xSystemApiKey' when calling systemSuppressionRouterCreateSuppressionsViaSendX");
      }
      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling systemSuppressionRouterCreateSuppressionsViaSendX");
      }

      let pathParams = {
        'subAccountId': subAccountId
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-System-ApiKey': xSystemApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelsSuppression;

      return this.apiClient.callApi(
        '/system/suppression/{subAccountId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}