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
    define(['ApiClient', 'model/ModelsSuppressionReason'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSuppressionReason'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSuppression = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSuppressionReason);
  }
}(this, function(ApiClient, ModelsSuppressionReason) {
  'use strict';

  /**
   * The ModelsSuppression model module.
   * @module model/ModelsSuppression
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSuppression</code>.
   * @alias module:model/ModelsSuppression
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSuppression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSuppression} obj Optional instance to populate.
   * @return {module:model/ModelsSuppression} The populated <code>ModelsSuppression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('reason'))
        obj.reason = ModelsSuppressionReason.constructFromObject(data['reason']);
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsSuppressionReason} reason
   */
  exports.prototype.reason = undefined;

  return exports;

}));
