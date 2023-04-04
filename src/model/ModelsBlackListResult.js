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
    define(['ApiClient', 'model/ModelsBlackListEngine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsBlackListEngine'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsBlackListResult = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBlackListEngine);
  }
}(this, function(ApiClient, ModelsBlackListEngine) {
  'use strict';

  /**
   * The ModelsBlackListResult model module.
   * @module model/ModelsBlackListResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsBlackListResult</code>.
   * @alias module:model/ModelsBlackListResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsBlackListResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsBlackListResult} obj Optional instance to populate.
   * @return {module:model/ModelsBlackListResult} The populated <code>ModelsBlackListResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alexaTop100k'))
        obj.alexaTop100k = ApiClient.convertToType(data['alexaTop100k'], 'Boolean');
      if (data.hasOwnProperty('alexaTop10k'))
        obj.alexaTop10k = ApiClient.convertToType(data['alexaTop10k'], 'Boolean');
      if (data.hasOwnProperty('alexaTop250k'))
        obj.alexaTop250k = ApiClient.convertToType(data['alexaTop250k'], 'Boolean');
      if (data.hasOwnProperty('blackLists'))
        obj.blackLists = ApiClient.convertToType(data['blackLists'], [ModelsBlackListEngine]);
      if (data.hasOwnProperty('domainLength'))
        obj.domainLength = ApiClient.convertToType(data['domainLength'], 'Number');
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('mostAbusedTld'))
        obj.mostAbusedTld = ApiClient.convertToType(data['mostAbusedTld'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} alexaTop100k
   */
  exports.prototype.alexaTop100k = undefined;

  /**
   * @member {Boolean} alexaTop10k
   */
  exports.prototype.alexaTop10k = undefined;

  /**
   * @member {Boolean} alexaTop250k
   */
  exports.prototype.alexaTop250k = undefined;

  /**
   * @member {Array.<module:model/ModelsBlackListEngine>} blackLists
   */
  exports.prototype.blackLists = undefined;

  /**
   * @member {Number} domainLength
   */
  exports.prototype.domainLength = undefined;

  /**
   * @member {String} host
   */
  exports.prototype.host = undefined;

  /**
   * @member {Boolean} mostAbusedTld
   */
  exports.prototype.mostAbusedTld = undefined;


  return exports;

}));
