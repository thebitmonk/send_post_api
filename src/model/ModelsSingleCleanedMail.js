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
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsValidationReason'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsValidationReason'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSingleCleanedMail = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsValidationReason);
  }
}(this, function(ApiClient, ModelsValidationReason) {
  'use strict';

  /**
   * The ModelsSingleCleanedMail model module.
   * @module model/ModelsSingleCleanedMail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSingleCleanedMail</code>.
   * @alias module:model/ModelsSingleCleanedMail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSingleCleanedMail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSingleCleanedMail} obj Optional instance to populate.
   * @return {module:model/ModelsSingleCleanedMail} The populated <code>ModelsSingleCleanedMail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ModelsValidationReason.constructFromObject(data['reason']);
      if (data.hasOwnProperty('valid'))
        obj.valid = ApiClient.convertToType(data['valid'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {module:model/ModelsValidationReason} reason
   */
  exports.prototype.reason = undefined;

  /**
   * @member {Boolean} valid
   */
  exports.prototype.valid = undefined;


  return exports;

}));
