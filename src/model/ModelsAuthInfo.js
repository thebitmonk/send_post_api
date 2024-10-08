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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAccount', 'model/ModelsMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAccount'), require('./ModelsMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAuthInfo = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAccount, root.SendPostApi.ModelsMember);
  }
}(this, function(ApiClient, ModelsAccount, ModelsMember) {
  'use strict';

  /**
   * The ModelsAuthInfo model module.
   * @module model/ModelsAuthInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAuthInfo</code>.
   * @alias module:model/ModelsAuthInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAuthInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAuthInfo} obj Optional instance to populate.
   * @return {module:model/ModelsAuthInfo} The populated <code>ModelsAuthInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Accounts'))
        obj.accounts = ApiClient.convertToType(data['Accounts'], [ModelsAccount]);
      if (data.hasOwnProperty('Member'))
        obj.member = ModelsMember.constructFromObject(data['Member']);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsAccount>} accounts
   */
  exports.prototype.accounts = undefined;

  /**
   * @member {module:model/ModelsMember} member
   */
  exports.prototype.member = undefined;


  return exports;

}));
