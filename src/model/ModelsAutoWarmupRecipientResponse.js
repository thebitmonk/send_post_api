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
    define(['ApiClient', 'model/ModelsEmailErrorCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsEmailErrorCode'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAutoWarmupRecipientResponse = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEmailErrorCode);
  }
}(this, function(ApiClient, ModelsEmailErrorCode) {
  'use strict';

  /**
   * The ModelsAutoWarmupRecipientResponse model module.
   * @module model/ModelsAutoWarmupRecipientResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAutoWarmupRecipientResponse</code>.
   * @alias module:model/ModelsAutoWarmupRecipientResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAutoWarmupRecipientResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAutoWarmupRecipientResponse} obj Optional instance to populate.
   * @return {module:model/ModelsAutoWarmupRecipientResponse} The populated <code>ModelsAutoWarmupRecipientResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('errorCode'))
        obj.errorCode = ModelsEmailErrorCode.constructFromObject(data['errorCode']);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {module:model/ModelsEmailErrorCode} errorCode
   */
  exports.prototype.errorCode = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;


  return exports;

}));
