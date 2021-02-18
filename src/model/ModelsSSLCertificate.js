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
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsCertificateDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsCertificateDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSSLCertificate = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCertificateDetails);
  }
}(this, function(ApiClient, ModelsCertificateDetails) {
  'use strict';

  /**
   * The ModelsSSLCertificate model module.
   * @module model/ModelsSSLCertificate
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSSLCertificate</code>.
   * @alias module:model/ModelsSSLCertificate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSSLCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSSLCertificate} obj Optional instance to populate.
   * @return {module:model/ModelsSSLCertificate} The populated <code>ModelsSSLCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('details'))
        obj.details = ModelsCertificateDetails.constructFromObject(data['details']);
      if (data.hasOwnProperty('fingerprint'))
        obj.fingerprint = ApiClient.convertToType(data['fingerprint'], 'String');
      if (data.hasOwnProperty('found'))
        obj.found = ApiClient.convertToType(data['found'], 'Boolean');
      if (data.hasOwnProperty('nameMatch'))
        obj.nameMatch = ApiClient.convertToType(data['nameMatch'], 'Boolean');
      if (data.hasOwnProperty('validPeer'))
        obj.validPeer = ApiClient.convertToType(data['validPeer'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsCertificateDetails} details
   */
  exports.prototype.details = undefined;

  /**
   * @member {String} fingerprint
   */
  exports.prototype.fingerprint = undefined;

  /**
   * @member {Boolean} found
   */
  exports.prototype.found = undefined;

  /**
   * @member {Boolean} nameMatch
   */
  exports.prototype.nameMatch = undefined;

  /**
   * @member {Boolean} validPeer
   */
  exports.prototype.validPeer = undefined;


  return exports;

}));
