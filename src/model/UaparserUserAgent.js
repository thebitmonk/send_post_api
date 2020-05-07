/*
 * SendPost API
 * SendPost API to send fast transactional emails to inbox
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
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
    root.SendPostApi.UaparserUserAgent = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UaparserUserAgent model module.
   * @module model/UaparserUserAgent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UaparserUserAgent</code>.
   * @alias module:model/UaparserUserAgent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UaparserUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UaparserUserAgent} obj Optional instance to populate.
   * @return {module:model/UaparserUserAgent} The populated <code>UaparserUserAgent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Family'))
        obj.family = ApiClient.convertToType(data['Family'], 'String');
      if (data.hasOwnProperty('Major'))
        obj.major = ApiClient.convertToType(data['Major'], 'String');
      if (data.hasOwnProperty('Minor'))
        obj.minor = ApiClient.convertToType(data['Minor'], 'String');
      if (data.hasOwnProperty('Patch'))
        obj.patch = ApiClient.convertToType(data['Patch'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} family
   */
  exports.prototype.family = undefined;

  /**
   * @member {String} major
   */
  exports.prototype.major = undefined;

  /**
   * @member {String} minor
   */
  exports.prototype.minor = undefined;

  /**
   * @member {String} patch
   */
  exports.prototype.patch = undefined;

  return exports;

}));
