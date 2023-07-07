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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.EUpdateTPSP = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EUpdateTPSP model module.
   * @module model/EUpdateTPSP
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EUpdateTPSP</code>.
   * @alias module:model/EUpdateTPSP
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EUpdateTPSP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EUpdateTPSP} obj Optional instance to populate.
   * @return {module:model/EUpdateTPSP} The populated <code>EUpdateTPSP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }


  return exports;

}));
