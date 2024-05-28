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
 * Swagger Codegen version: 2.4.41
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
    root.SendPostApi.ModelsPricing = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsPricing model module.
   * @module model/ModelsPricing
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsPricing</code>.
   * @alias module:model/ModelsPricing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsPricing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsPricing} obj Optional instance to populate.
   * @return {module:model/ModelsPricing} The populated <code>ModelsPricing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('baseLimit'))
        obj.baseLimit = ApiClient.convertToType(data['baseLimit'], 'Number');
      if (data.hasOwnProperty('basePrice'))
        obj.basePrice = ApiClient.convertToType(data['basePrice'], 'Number');
      if (data.hasOwnProperty('basePriceId'))
        obj.basePriceId = ApiClient.convertToType(data['basePriceId'], 'String');
      if (data.hasOwnProperty('overageLimit'))
        obj.overageLimit = ApiClient.convertToType(data['overageLimit'], 'Number');
      if (data.hasOwnProperty('overagePrice'))
        obj.overagePrice = ApiClient.convertToType(data['overagePrice'], 'Number');
      if (data.hasOwnProperty('planName'))
        obj.planName = ApiClient.convertToType(data['planName'], 'String');
      if (data.hasOwnProperty('subscriptionProductId'))
        obj.subscriptionProductId = ApiClient.convertToType(data['subscriptionProductId'], 'String');
      if (data.hasOwnProperty('usagePriceId'))
        obj.usagePriceId = ApiClient.convertToType(data['usagePriceId'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} baseLimit
   */
  exports.prototype.baseLimit = undefined;

  /**
   * @member {Number} basePrice
   */
  exports.prototype.basePrice = undefined;

  /**
   * @member {String} basePriceId
   */
  exports.prototype.basePriceId = undefined;

  /**
   * @member {Number} overageLimit
   */
  exports.prototype.overageLimit = undefined;

  /**
   * @member {Number} overagePrice
   */
  exports.prototype.overagePrice = undefined;

  /**
   * @member {String} planName
   */
  exports.prototype.planName = undefined;

  /**
   * @member {String} subscriptionProductId
   */
  exports.prototype.subscriptionProductId = undefined;

  /**
   * @member {String} usagePriceId
   */
  exports.prototype.usagePriceId = undefined;


  return exports;

}));
