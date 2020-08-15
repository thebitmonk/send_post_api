/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsSuppressionEmail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSuppressionEmail'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsRSuppression = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSuppressionEmail);
  }
}(this, function(ApiClient, ModelsSuppressionEmail) {
  'use strict';

  /**
   * The ModelsRSuppression model module.
   * @module model/ModelsRSuppression
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsRSuppression</code>.
   * @alias module:model/ModelsRSuppression
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsRSuppression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsRSuppression} obj Optional instance to populate.
   * @return {module:model/ModelsRSuppression} The populated <code>ModelsRSuppression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hardBounce'))
        obj.hardBounce = ApiClient.convertToType(data['hardBounce'], [ModelsSuppressionEmail]);
      if (data.hasOwnProperty('manual'))
        obj.manual = ApiClient.convertToType(data['manual'], [ModelsSuppressionEmail]);
      if (data.hasOwnProperty('spamComplaint'))
        obj.spamComplaint = ApiClient.convertToType(data['spamComplaint'], [ModelsSuppressionEmail]);
      if (data.hasOwnProperty('unsubscribe'))
        obj.unsubscribe = ApiClient.convertToType(data['unsubscribe'], [ModelsSuppressionEmail]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsSuppressionEmail>} hardBounce
   */
  exports.prototype.hardBounce = undefined;

  /**
   * @member {Array.<module:model/ModelsSuppressionEmail>} manual
   */
  exports.prototype.manual = undefined;

  /**
   * @member {Array.<module:model/ModelsSuppressionEmail>} spamComplaint
   */
  exports.prototype.spamComplaint = undefined;

  /**
   * @member {Array.<module:model/ModelsSuppressionEmail>} unsubscribe
   */
  exports.prototype.unsubscribe = undefined;

  return exports;

}));
