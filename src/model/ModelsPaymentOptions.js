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
 * The ModelsPaymentOptions model module.
 * @module model/ModelsPaymentOptions
 * @version 1.0.0
 */
export class ModelsPaymentOptions {
  /**
   * Constructs a new <code>ModelsPaymentOptions</code>.
   * @alias module:model/ModelsPaymentOptions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsPaymentOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsPaymentOptions} obj Optional instance to populate.
   * @return {module:model/ModelsPaymentOptions} The populated <code>ModelsPaymentOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsPaymentOptions();
      if (data.hasOwnProperty('customerId'))
        obj.customerId = ApiClient.convertToType(data['customerId'], 'String');
      if (data.hasOwnProperty('ipCount'))
        obj.ipCount = ApiClient.convertToType(data['ipCount'], 'Number');
      if (data.hasOwnProperty('paymentMethodId'))
        obj.paymentMethodId = ApiClient.convertToType(data['paymentMethodId'], 'String');
      if (data.hasOwnProperty('priceId'))
        obj.priceId = ApiClient.convertToType(data['priceId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} customerId
 */
ModelsPaymentOptions.prototype.customerId = undefined;

/**
 * @member {Number} ipCount
 */
ModelsPaymentOptions.prototype.ipCount = undefined;

/**
 * @member {String} paymentMethodId
 */
ModelsPaymentOptions.prototype.paymentMethodId = undefined;

/**
 * @member {String} priceId
 */
ModelsPaymentOptions.prototype.priceId = undefined;

