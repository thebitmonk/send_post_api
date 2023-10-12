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
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBlackListResult', 'model/ModelsDomainAge', 'model/ModelsSSLInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsBlackListResult'), require('./ModelsDomainAge'), require('./ModelsSSLInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsDomainCheckResult = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBlackListResult, root.SendPostApi.ModelsDomainAge, root.SendPostApi.ModelsSSLInfo);
  }
}(this, function(ApiClient, ModelsBlackListResult, ModelsDomainAge, ModelsSSLInfo) {
  'use strict';

  /**
   * The ModelsDomainCheckResult model module.
   * @module model/ModelsDomainCheckResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDomainCheckResult</code>.
   * @alias module:model/ModelsDomainCheckResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsDomainCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDomainCheckResult} obj Optional instance to populate.
   * @return {module:model/ModelsDomainCheckResult} The populated <code>ModelsDomainCheckResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dmarcPresent'))
        obj.dmarcPresent = ApiClient.convertToType(data['dmarcPresent'], 'Boolean');
      if (data.hasOwnProperty('domainAge'))
        obj.domainAge = ModelsDomainAge.constructFromObject(data['domainAge']);
      if (data.hasOwnProperty('domainBlackList'))
        obj.domainBlackList = ModelsBlackListResult.constructFromObject(data['domainBlackList']);
      if (data.hasOwnProperty('domainSSL'))
        obj.domainSSL = ModelsSSLInfo.constructFromObject(data['domainSSL']);
      if (data.hasOwnProperty('spfPresent'))
        obj.spfPresent = ApiClient.convertToType(data['spfPresent'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} dmarcPresent
   */
  exports.prototype.dmarcPresent = undefined;

  /**
   * @member {module:model/ModelsDomainAge} domainAge
   */
  exports.prototype.domainAge = undefined;

  /**
   * @member {module:model/ModelsBlackListResult} domainBlackList
   */
  exports.prototype.domainBlackList = undefined;

  /**
   * @member {module:model/ModelsSSLInfo} domainSSL
   */
  exports.prototype.domainSSL = undefined;

  /**
   * @member {Boolean} spfPresent
   */
  exports.prototype.spfPresent = undefined;


  return exports;

}));
