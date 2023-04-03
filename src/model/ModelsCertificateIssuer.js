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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsCertificateIssuer = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsCertificateIssuer model module.
   * @module model/ModelsCertificateIssuer
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsCertificateIssuer</code>.
   * @alias module:model/ModelsCertificateIssuer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsCertificateIssuer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsCertificateIssuer} obj Optional instance to populate.
   * @return {module:model/ModelsCertificateIssuer} The populated <code>ModelsCertificateIssuer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('commonName'))
        obj.commonName = ApiClient.convertToType(data['commonName'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
      if (data.hasOwnProperty('organizationUnit'))
        obj.organizationUnit = ApiClient.convertToType(data['organizationUnit'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} commonName
   */
  exports.prototype.commonName = undefined;

  /**
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * @member {String} organization
   */
  exports.prototype.organization = undefined;

  /**
   * @member {String} organizationUnit
   */
  exports.prototype.organizationUnit = undefined;


  return exports;

}));
