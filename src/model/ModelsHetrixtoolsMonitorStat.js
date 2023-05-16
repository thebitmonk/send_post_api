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
    define(['ApiClient', 'model/ModelsHetrixtoolsBlacklist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsHetrixtoolsBlacklist'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsHetrixtoolsMonitorStat = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsHetrixtoolsBlacklist);
  }
}(this, function(ApiClient, ModelsHetrixtoolsBlacklist) {
  'use strict';

  /**
   * The ModelsHetrixtoolsMonitorStat model module.
   * @module model/ModelsHetrixtoolsMonitorStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsHetrixtoolsMonitorStat</code>.
   * @alias module:model/ModelsHetrixtoolsMonitorStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsHetrixtoolsMonitorStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsHetrixtoolsMonitorStat} obj Optional instance to populate.
   * @return {module:model/ModelsHetrixtoolsMonitorStat} The populated <code>ModelsHetrixtoolsMonitorStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('day'))
        obj.day = ApiClient.convertToType(data['day'], 'Number');
      if (data.hasOwnProperty('listedCount'))
        obj.listedCount = ApiClient.convertToType(data['listedCount'], 'Number');
      if (data.hasOwnProperty('listedIn'))
        obj.listedIn = ApiClient.convertToType(data['listedIn'], [ModelsHetrixtoolsBlacklist]);
      if (data.hasOwnProperty('month'))
        obj.month = ApiClient.convertToType(data['month'], 'Number');
      if (data.hasOwnProperty('year'))
        obj.year = ApiClient.convertToType(data['year'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} day
   */
  exports.prototype.day = undefined;

  /**
   * @member {Number} listedCount
   */
  exports.prototype.listedCount = undefined;

  /**
   * @member {Array.<module:model/ModelsHetrixtoolsBlacklist>} listedIn
   */
  exports.prototype.listedIn = undefined;

  /**
   * @member {Number} month
   */
  exports.prototype.month = undefined;

  /**
   * @member {Number} year
   */
  exports.prototype.year = undefined;


  return exports;

}));
