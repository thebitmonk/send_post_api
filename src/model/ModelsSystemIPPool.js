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
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIP'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIP'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSystemIPPool = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIP);
  }
}(this, function(ApiClient, ModelsIP) {
  'use strict';

  /**
   * The ModelsSystemIPPool model module.
   * @module model/ModelsSystemIPPool
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSystemIPPool</code>.
   * @alias module:model/ModelsSystemIPPool
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSystemIPPool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSystemIPPool} obj Optional instance to populate.
   * @return {module:model/ModelsSystemIPPool} The populated <code>ModelsSystemIPPool</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('IPs'))
        obj.iPs = ApiClient.convertToType(data['IPs'], [ModelsIP]);
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsIP>} iPs
   */
  exports.prototype.iPs = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
