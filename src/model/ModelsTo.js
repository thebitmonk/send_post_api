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
import {ModelsCopyTo} from './ModelsCopyTo';

/**
 * The ModelsTo model module.
 * @module model/ModelsTo
 * @version 1.0.0
 */
export class ModelsTo {
  /**
   * Constructs a new <code>ModelsTo</code>.
   * @alias module:model/ModelsTo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsTo} obj Optional instance to populate.
   * @return {module:model/ModelsTo} The populated <code>ModelsTo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsTo();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('cc'))
        obj.cc = ApiClient.convertToType(data['cc'], [ModelsCopyTo]);
      if (data.hasOwnProperty('bcc'))
        obj.bcc = ApiClient.convertToType(data['bcc'], [ModelsCopyTo]);
      if (data.hasOwnProperty('customFields'))
        obj.customFields = ApiClient.convertToType(data['customFields'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
ModelsTo.prototype.name = undefined;

/**
 * @member {String} email
 */
ModelsTo.prototype.email = undefined;

/**
 * @member {Array.<module:model/ModelsCopyTo>} cc
 */
ModelsTo.prototype.cc = undefined;

/**
 * @member {Array.<module:model/ModelsCopyTo>} bcc
 */
ModelsTo.prototype.bcc = undefined;

/**
 * @member {Object} customFields
 */
ModelsTo.prototype.customFields = undefined;

