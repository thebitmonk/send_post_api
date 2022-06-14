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
    define(['ApiClient', 'model/ModelsGlockappsMonitorStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsGlockappsMonitorStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsRGlockappsMonitorStat = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsGlockappsMonitorStat);
  }
}(this, function(ApiClient, ModelsGlockappsMonitorStat) {
  'use strict';

  /**
   * The ModelsRGlockappsMonitorStat model module.
   * @module model/ModelsRGlockappsMonitorStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsRGlockappsMonitorStat</code>.
   * @alias module:model/ModelsRGlockappsMonitorStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsRGlockappsMonitorStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsRGlockappsMonitorStat} obj Optional instance to populate.
   * @return {module:model/ModelsRGlockappsMonitorStat} The populated <code>ModelsRGlockappsMonitorStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ModelsGlockappsMonitorStat.constructFromObject(data['stat']);
    }
    return obj;
  }

  /**
   * @member {String} _date
   */
  exports.prototype._date = undefined;

  /**
   * @member {module:model/ModelsGlockappsMonitorStat} stat
   */
  exports.prototype.stat = undefined;


  return exports;

}));
