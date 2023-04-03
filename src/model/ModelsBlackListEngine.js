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
 * The ModelsBlackListEngine model module.
 * @module model/ModelsBlackListEngine
 * @version 1.0.0
 */
export class ModelsBlackListEngine {
  /**
   * Constructs a new <code>ModelsBlackListEngine</code>.
   * @alias module:model/ModelsBlackListEngine
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsBlackListEngine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsBlackListEngine} obj Optional instance to populate.
   * @return {module:model/ModelsBlackListEngine} The populated <code>ModelsBlackListEngine</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsBlackListEngine();
      if (data.hasOwnProperty('confidence'))
        obj.confidence = ApiClient.convertToType(data['confidence'], 'String');
      if (data.hasOwnProperty('detected'))
        obj.detected = ApiClient.convertToType(data['detected'], 'Boolean');
      if (data.hasOwnProperty('elapsed'))
        obj.elapsed = ApiClient.convertToType(data['elapsed'], 'String');
      if (data.hasOwnProperty('engine'))
        obj.engine = ApiClient.convertToType(data['engine'], 'String');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} confidence
 */
ModelsBlackListEngine.prototype.confidence = undefined;

/**
 * @member {Boolean} detected
 */
ModelsBlackListEngine.prototype.detected = undefined;

/**
 * @member {String} elapsed
 */
ModelsBlackListEngine.prototype.elapsed = undefined;

/**
 * @member {String} engine
 */
ModelsBlackListEngine.prototype.engine = undefined;

/**
 * @member {String} reference
 */
ModelsBlackListEngine.prototype.reference = undefined;

