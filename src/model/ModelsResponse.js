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
import {ApiClient} from '../ApiClient';

/**
 * The ModelsResponse model module.
 * @module model/ModelsResponse
 * @version 1.0.0
 */
export class ModelsResponse {
  /**
   * Constructs a new <code>ModelsResponse</code>.
   * @alias module:model/ModelsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsResponse} obj Optional instance to populate.
   * @return {module:model/ModelsResponse} The populated <code>ModelsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsResponse();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
ModelsResponse.prototype.message = undefined;

/**
 * @member {String} status
 */
ModelsResponse.prototype.status = undefined;

