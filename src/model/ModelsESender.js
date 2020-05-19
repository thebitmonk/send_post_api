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
 * Swagger Codegen version: 2.4.14
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
    root.SendPostApi.ModelsESender = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsESender model module.
   * @module model/ModelsESender
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsESender</code>.
   * @alias module:model/ModelsESender
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsESender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsESender} obj Optional instance to populate.
   * @return {module:model/ModelsESender} The populated <code>ModelsESender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('fromEmail'))
        obj.fromEmail = ApiClient.convertToType(data['fromEmail'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('replyToEmail'))
        obj.replyToEmail = ApiClient.convertToType(data['replyToEmail'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} domain
   */
  exports.prototype.domain = undefined;

  /**
   * @member {String} fromEmail
   */
  exports.prototype.fromEmail = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} replyToEmail
   */
  exports.prototype.replyToEmail = undefined;

  return exports;

}));
