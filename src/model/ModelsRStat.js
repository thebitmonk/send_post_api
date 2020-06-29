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
    define(['ApiClient', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsRStat = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsStat) {
  'use strict';

  /**
   * The ModelsRStat model module.
   * @module model/ModelsRStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsRStat</code>.
   * @alias module:model/ModelsRStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsRStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsRStat} obj Optional instance to populate.
   * @return {module:model/ModelsRStat} The populated <code>ModelsRStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ModelsStat.constructFromObject(data['stat']);
    }
    return obj;
  }

  /**
   * @member {String} _date
   */
  exports.prototype._date = undefined;

  /**
   * @member {module:model/ModelsStat} stat
   */
  exports.prototype.stat = undefined;

  return exports;

}));