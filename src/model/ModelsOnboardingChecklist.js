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
 * Swagger Codegen version: 2.4.30
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
    root.SendPostApi.ModelsOnboardingChecklist = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsOnboardingChecklist model module.
   * @module model/ModelsOnboardingChecklist
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsOnboardingChecklist</code>.
   * @alias module:model/ModelsOnboardingChecklist
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsOnboardingChecklist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsOnboardingChecklist} obj Optional instance to populate.
   * @return {module:model/ModelsOnboardingChecklist} The populated <code>ModelsOnboardingChecklist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('isDomainAdded'))
        obj.isDomainAdded = ApiClient.convertToType(data['isDomainAdded'], 'Boolean');
      if (data.hasOwnProperty('isDomainVerified'))
        obj.isDomainVerified = ApiClient.convertToType(data['isDomainVerified'], 'Boolean');
      if (data.hasOwnProperty('isFirstEmailSent'))
        obj.isFirstEmailSent = ApiClient.convertToType(data['isFirstEmailSent'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} isDomainAdded
   */
  exports.prototype.isDomainAdded = undefined;

  /**
   * @member {Boolean} isDomainVerified
   */
  exports.prototype.isDomainVerified = undefined;

  /**
   * @member {Boolean} isFirstEmailSent
   */
  exports.prototype.isFirstEmailSent = undefined;


  return exports;

}));
