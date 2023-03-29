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
    define(['ApiClient', 'model/ModelsIPStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIPStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsPIPStat = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIPStat);
  }
}(this, function(ApiClient, ModelsIPStat) {
  'use strict';

  /**
   * The ModelsPIPStat model module.
   * @module model/ModelsPIPStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsPIPStat</code>.
   * @alias module:model/ModelsPIPStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsPIPStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsPIPStat} obj Optional instance to populate.
   * @return {module:model/ModelsPIPStat} The populated <code>ModelsPIPStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ModelsIPStat.constructFromObject(data['stat']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/ModelsIPStat} stat
   */
  exports.prototype.stat = undefined;


  return exports;

}));
