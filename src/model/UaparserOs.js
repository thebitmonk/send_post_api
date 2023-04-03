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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The UaparserOs model module.
 * @module model/UaparserOs
 * @version 1.0.0
 */
export class UaparserOs {
  /**
   * Constructs a new <code>UaparserOs</code>.
   * @alias module:model/UaparserOs
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UaparserOs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UaparserOs} obj Optional instance to populate.
   * @return {module:model/UaparserOs} The populated <code>UaparserOs</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UaparserOs();
      if (data.hasOwnProperty('Family'))
        obj.family = ApiClient.convertToType(data['Family'], 'String');
      if (data.hasOwnProperty('Major'))
        obj.major = ApiClient.convertToType(data['Major'], 'String');
      if (data.hasOwnProperty('Minor'))
        obj.minor = ApiClient.convertToType(data['Minor'], 'String');
      if (data.hasOwnProperty('Patch'))
        obj.patch = ApiClient.convertToType(data['Patch'], 'String');
      if (data.hasOwnProperty('PatchMinor'))
        obj.patchMinor = ApiClient.convertToType(data['PatchMinor'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} family
 */
UaparserOs.prototype.family = undefined;

/**
 * @member {String} major
 */
UaparserOs.prototype.major = undefined;

/**
 * @member {String} minor
 */
UaparserOs.prototype.minor = undefined;

/**
 * @member {String} patch
 */
UaparserOs.prototype.patch = undefined;

/**
 * @member {String} patchMinor
 */
UaparserOs.prototype.patchMinor = undefined;

