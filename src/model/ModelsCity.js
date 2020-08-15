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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsCity = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsCity model module.
   * @module model/ModelsCity
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsCity</code>.
   * @alias module:model/ModelsCity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsCity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsCity} obj Optional instance to populate.
   * @return {module:model/ModelsCity} The populated <code>ModelsCity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cityID'))
        obj.cityID = ApiClient.convertToType(data['cityID'], 'Number');
      if (data.hasOwnProperty('continentCode'))
        obj.continentCode = ApiClient.convertToType(data['continentCode'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], 'String');
      if (data.hasOwnProperty('time_zone'))
        obj.timeZone = ApiClient.convertToType(data['time_zone'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} cityID
   */
  exports.prototype.cityID = undefined;

  /**
   * @member {String} continentCode
   */
  exports.prototype.continentCode = undefined;

  /**
   * @member {String} countryCode
   */
  exports.prototype.countryCode = undefined;

  /**
   * @member {String} postalCode
   */
  exports.prototype.postalCode = undefined;

  /**
   * @member {String} timeZone
   */
  exports.prototype.timeZone = undefined;

  return exports;

}));
