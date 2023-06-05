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
    root.SendPostApi.ModelsAccount = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsAccount model module.
   * @module model/ModelsAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAccount</code>.
   * @alias module:model/ModelsAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAccount} obj Optional instance to populate.
   * @return {module:model/ModelsAccount} The populated <code>ModelsAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alertSlackEndpoint'))
        obj.alertSlackEndpoint = ApiClient.convertToType(data['alertSlackEndpoint'], 'String');
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
      if (data.hasOwnProperty('brandColor'))
        obj.brandColor = ApiClient.convertToType(data['brandColor'], 'String');
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('currentEmailServiceProvider'))
        obj.currentEmailServiceProvider = ApiClient.convertToType(data['currentEmailServiceProvider'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('incidentSlackEndpoint'))
        obj.incidentSlackEndpoint = ApiClient.convertToType(data['incidentSlackEndpoint'], 'String');
      if (data.hasOwnProperty('industry'))
        obj.industry = ApiClient.convertToType(data['industry'], 'String');
      if (data.hasOwnProperty('isAdmin'))
        obj.isAdmin = ApiClient.convertToType(data['isAdmin'], 'Boolean');
      if (data.hasOwnProperty('isCanceled'))
        obj.isCanceled = ApiClient.convertToType(data['isCanceled'], 'Boolean');
      if (data.hasOwnProperty('isLastPaymentFailed'))
        obj.isLastPaymentFailed = ApiClient.convertToType(data['isLastPaymentFailed'], 'Boolean');
      if (data.hasOwnProperty('isUpgraded'))
        obj.isUpgraded = ApiClient.convertToType(data['isUpgraded'], 'Boolean');
      if (data.hasOwnProperty('lockThreshold'))
        obj.lockThreshold = ApiClient.convertToType(data['lockThreshold'], 'Number');
      if (data.hasOwnProperty('locked'))
        obj.locked = ApiClient.convertToType(data['locked'], 'Boolean');
      if (data.hasOwnProperty('logoURL'))
        obj.logoURL = ApiClient.convertToType(data['logoURL'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('onboardCFinished'))
        obj.onboardCFinished = ApiClient.convertToType(data['onboardCFinished'], 'Boolean');
      if (data.hasOwnProperty('onboardQAnswered'))
        obj.onboardQAnswered = ApiClient.convertToType(data['onboardQAnswered'], 'Boolean');
      if (data.hasOwnProperty('sendingVolumePerMonth'))
        obj.sendingVolumePerMonth = ApiClient.convertToType(data['sendingVolumePerMonth'], 'String');
      if (data.hasOwnProperty('slackToken'))
        obj.slackToken = ApiClient.convertToType(data['slackToken'], 'String');
      if (data.hasOwnProperty('stripeBasePriceId'))
        obj.stripeBasePriceId = ApiClient.convertToType(data['stripeBasePriceId'], 'String');
      if (data.hasOwnProperty('stripeUsagePriceId'))
        obj.stripeUsagePriceId = ApiClient.convertToType(data['stripeUsagePriceId'], 'String');
      if (data.hasOwnProperty('switchingSendpostDescription'))
        obj.switchingSendpostDescription = ApiClient.convertToType(data['switchingSendpostDescription'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} alertSlackEndpoint
   */
  exports.prototype.alertSlackEndpoint = undefined;

  /**
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;

  /**
   * @member {String} brandColor
   */
  exports.prototype.brandColor = undefined;

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} currentEmailServiceProvider
   */
  exports.prototype.currentEmailServiceProvider = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} incidentSlackEndpoint
   */
  exports.prototype.incidentSlackEndpoint = undefined;

  /**
   * @member {String} industry
   */
  exports.prototype.industry = undefined;

  /**
   * @member {Boolean} isAdmin
   */
  exports.prototype.isAdmin = undefined;

  /**
   * @member {Boolean} isCanceled
   */
  exports.prototype.isCanceled = undefined;

  /**
   * @member {Boolean} isLastPaymentFailed
   */
  exports.prototype.isLastPaymentFailed = undefined;

  /**
   * @member {Boolean} isUpgraded
   */
  exports.prototype.isUpgraded = undefined;

  /**
   * @member {Number} lockThreshold
   */
  exports.prototype.lockThreshold = undefined;

  /**
   * @member {Boolean} locked
   */
  exports.prototype.locked = undefined;

  /**
   * @member {String} logoURL
   */
  exports.prototype.logoURL = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} onboardCFinished
   */
  exports.prototype.onboardCFinished = undefined;

  /**
   * @member {Boolean} onboardQAnswered
   */
  exports.prototype.onboardQAnswered = undefined;

  /**
   * @member {String} sendingVolumePerMonth
   */
  exports.prototype.sendingVolumePerMonth = undefined;

  /**
   * @member {String} slackToken
   */
  exports.prototype.slackToken = undefined;

  /**
   * @member {String} stripeBasePriceId
   */
  exports.prototype.stripeBasePriceId = undefined;

  /**
   * @member {String} stripeUsagePriceId
   */
  exports.prototype.stripeUsagePriceId = undefined;

  /**
   * @member {String} switchingSendpostDescription
   */
  exports.prototype.switchingSendpostDescription = undefined;


  return exports;

}));
