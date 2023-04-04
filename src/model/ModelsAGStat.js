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
    define(['ApiClient', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAGStat = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsStat) {
  'use strict';

  /**
   * The ModelsAGStat model module.
   * @module model/ModelsAGStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAGStat</code>.
   * @alias module:model/ModelsAGStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAGStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAGStat} obj Optional instance to populate.
   * @return {module:model/ModelsAGStat} The populated <code>ModelsAGStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('group'))
        obj.group = ApiClient.convertToType(data['group'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ModelsStat.constructFromObject(data['stat']);
    }
    return obj;
  }

  /**
   * @member {String} group
   */
  exports.prototype.group = undefined;

  /**
   * @member {module:model/ModelsStat} stat
   */
  exports.prototype.stat = undefined;


  return exports;

}));
