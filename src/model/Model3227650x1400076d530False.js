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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.Model3227650x1400076d530False = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Model3227650x1400076d530False model module.
   * @module model/Model3227650x1400076d530False
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Model3227650x1400076d530False</code>.
   * @alias module:model/Model3227650x1400076d530False
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Model3227650x1400076d530False</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model3227650x1400076d530False} obj Optional instance to populate.
   * @return {module:model/Model3227650x1400076d530False} The populated <code>Model3227650x1400076d530False</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }


  return exports;

}));
