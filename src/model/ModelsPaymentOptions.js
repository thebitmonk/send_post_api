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
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsPaymentOptions = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsPaymentOptions model module.
   * @module model/ModelsPaymentOptions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsPaymentOptions</code>.
   * @alias module:model/ModelsPaymentOptions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsPaymentOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsPaymentOptions} obj Optional instance to populate.
   * @return {module:model/ModelsPaymentOptions} The populated <code>ModelsPaymentOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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

  /**
   * @member {String} customerId
   */
  exports.prototype.customerId = undefined;

  /**
   * @member {Number} ipCount
   */
  exports.prototype.ipCount = undefined;

  /**
   * @member {String} paymentMethodId
   */
  exports.prototype.paymentMethodId = undefined;

  /**
   * @member {String} priceId
   */
  exports.prototype.priceId = undefined;


  return exports;

}));
