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
 * The ModelsEIP model module.
 * @module model/ModelsEIP
 * @version 1.0.0
 */
export class ModelsEIP {
  /**
   * Constructs a new <code>ModelsEIP</code>.
   * @alias module:model/ModelsEIP
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsEIP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEIP} obj Optional instance to populate.
   * @return {module:model/ModelsEIP} The populated <code>ModelsEIP</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsEIP();
      if (data.hasOwnProperty('publicIP'))
        obj.publicIP = ApiClient.convertToType(data['publicIP'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} publicIP
 */
ModelsEIP.prototype.publicIP = undefined;

