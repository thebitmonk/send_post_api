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
import {ModelsSystemTemplate} from '../model/ModelsSystemTemplate';

/**
* Systemtemplate service.
* @module api/SystemtemplateApi
* @version 1.0.0
*/
export class SystemtemplateApi {

    /**
    * Constructs a new SystemtemplateApi. 
    * @alias module:api/SystemtemplateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the systemTemplateRouterGetAllSystemTemplates operation.
     * @callback moduleapi/SystemtemplateApi~systemTemplateRouterGetAllSystemTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSystemTemplate>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all System Templates
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/SystemtemplateApi~systemTemplateRouterGetAllSystemTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    systemTemplateRouterGetAllSystemTemplates(xAccountApiKey, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling systemTemplateRouterGetAllSystemTemplates");
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
      let returnType = [ModelsSystemTemplate];

      return this.apiClient.callApi(
        '/system/template/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}