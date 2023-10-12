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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsPostmasterDomainStat = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsPostmasterDomainStat model module.
   * @module model/ModelsPostmasterDomainStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsPostmasterDomainStat</code>.
   * @alias module:model/ModelsPostmasterDomainStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsPostmasterDomainStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsPostmasterDomainStat} obj Optional instance to populate.
   * @return {module:model/ModelsPostmasterDomainStat} The populated <code>ModelsPostmasterDomainStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DKIMSuccess'))
        obj.dKIMSuccess = ApiClient.convertToType(data['DKIMSuccess'], 'String');
      if (data.hasOwnProperty('DMARCSuccess'))
        obj.dMARCSuccess = ApiClient.convertToType(data['DMARCSuccess'], 'String');
      if (data.hasOwnProperty('SPFSuccess'))
        obj.sPFSuccess = ApiClient.convertToType(data['SPFSuccess'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('domainReputation'))
        obj.domainReputation = ApiClient.convertToType(data['domainReputation'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('spam'))
        obj.spam = ApiClient.convertToType(data['spam'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} dKIMSuccess
   */
  exports.prototype.dKIMSuccess = undefined;

  /**
   * @member {String} dMARCSuccess
   */
  exports.prototype.dMARCSuccess = undefined;

  /**
   * @member {String} sPFSuccess
   */
  exports.prototype.sPFSuccess = undefined;

  /**
   * @member {String} _date
   */
  exports.prototype._date = undefined;

  /**
   * @member {String} domainReputation
   */
  exports.prototype.domainReputation = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} spam
   */
  exports.prototype.spam = undefined;


  return exports;

}));
