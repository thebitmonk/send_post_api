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
 * Swagger Codegen version: 2.4.20
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBlacklistStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsBlacklistStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsGlockappsBlacklist = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBlacklistStatus);
  }
}(this, function(ApiClient, ModelsBlacklistStatus) {
  'use strict';

  /**
   * The ModelsGlockappsBlacklist model module.
   * @module model/ModelsGlockappsBlacklist
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsGlockappsBlacklist</code>.
   * @alias module:model/ModelsGlockappsBlacklist
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsGlockappsBlacklist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsGlockappsBlacklist} obj Optional instance to populate.
   * @return {module:model/ModelsGlockappsBlacklist} The populated <code>ModelsGlockappsBlacklist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('server'))
        obj.server = ApiClient.convertToType(data['server'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ModelsBlacklistStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('txt'))
        obj.txt = ApiClient.convertToType(data['txt'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} server
   */
  exports.prototype.server = undefined;

  /**
   * @member {module:model/ModelsBlacklistStatus} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} txt
   */
  exports.prototype.txt = undefined;


  return exports;

}));
