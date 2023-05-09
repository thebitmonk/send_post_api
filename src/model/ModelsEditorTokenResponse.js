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
    root.SendPostApi.ModelsEditorTokenResponse = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEditorTokenResponse model module.
   * @module model/ModelsEditorTokenResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEditorTokenResponse</code>.
   * @alias module:model/ModelsEditorTokenResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEditorTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEditorTokenResponse} obj Optional instance to populate.
   * @return {module:model/ModelsEditorTokenResponse} The populated <code>ModelsEditorTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('.expires'))
        obj.expires = ApiClient.convertToType(data['.expires'], 'String');
      if (data.hasOwnProperty('.issued'))
        obj.issued = ApiClient.convertToType(data['.issued'], 'String');
      if (data.hasOwnProperty('access_token'))
        obj.accessToken = ApiClient.convertToType(data['access_token'], 'String');
      if (data.hasOwnProperty('as:client_id'))
        obj.asclientId = ApiClient.convertToType(data['as:client_id'], 'String');
      if (data.hasOwnProperty('as:region'))
        obj.asregion = ApiClient.convertToType(data['as:region'], 'String');
      if (data.hasOwnProperty('expires_in'))
        obj.expiresIn = ApiClient.convertToType(data['expires_in'], 'Number');
      if (data.hasOwnProperty('refresh_token'))
        obj.refreshToken = ApiClient.convertToType(data['refresh_token'], 'String');
      if (data.hasOwnProperty('token_type'))
        obj.tokenType = ApiClient.convertToType(data['token_type'], 'String');
      if (data.hasOwnProperty('userName'))
        obj.userName = ApiClient.convertToType(data['userName'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} expires
   */
  exports.prototype.expires = undefined;

  /**
   * @member {String} issued
   */
  exports.prototype.issued = undefined;

  /**
   * @member {String} accessToken
   */
  exports.prototype.accessToken = undefined;

  /**
   * @member {String} asclientId
   */
  exports.prototype.asclientId = undefined;

  /**
   * @member {String} asregion
   */
  exports.prototype.asregion = undefined;

  /**
   * @member {Number} expiresIn
   */
  exports.prototype.expiresIn = undefined;

  /**
   * @member {String} refreshToken
   */
  exports.prototype.refreshToken = undefined;

  /**
   * @member {String} tokenType
   */
  exports.prototype.tokenType = undefined;

  /**
   * @member {String} userName
   */
  exports.prototype.userName = undefined;


  return exports;

}));
