/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ModelsAPStat model module.
 * @module model/ModelsAPStat
 * @version 1.0.0
 */
class ModelsAPStat {
    /**
     * Constructs a new <code>ModelsAPStat</code>.
     * @alias module:model/ModelsAPStat
     */
    constructor() { 
        
        ModelsAPStat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsAPStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsAPStat} obj Optional instance to populate.
     * @return {module:model/ModelsAPStat} The populated <code>ModelsAPStat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsAPStat();

            if (data.hasOwnProperty('clicked')) {
                obj['clicked'] = ApiClient.convertToType(data['clicked'], 'Number');
            }
            if (data.hasOwnProperty('delivered')) {
                obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
            }
            if (data.hasOwnProperty('dropped')) {
                obj['dropped'] = ApiClient.convertToType(data['dropped'], 'Number');
            }
            if (data.hasOwnProperty('hardBounced')) {
                obj['hardBounced'] = ApiClient.convertToType(data['hardBounced'], 'Number');
            }
            if (data.hasOwnProperty('opened')) {
                obj['opened'] = ApiClient.convertToType(data['opened'], 'Number');
            }
            if (data.hasOwnProperty('processed')) {
                obj['processed'] = ApiClient.convertToType(data['processed'], 'Number');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('sent')) {
                obj['sent'] = ApiClient.convertToType(data['sent'], 'Number');
            }
            if (data.hasOwnProperty('softBounced')) {
                obj['softBounced'] = ApiClient.convertToType(data['softBounced'], 'Number');
            }
            if (data.hasOwnProperty('spam')) {
                obj['spam'] = ApiClient.convertToType(data['spam'], 'Number');
            }
            if (data.hasOwnProperty('unsubscribed')) {
                obj['unsubscribed'] = ApiClient.convertToType(data['unsubscribed'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsAPStat</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsAPStat</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }

        return true;
    }


}



/**
 * @member {Number} clicked
 */
ModelsAPStat.prototype['clicked'] = undefined;

/**
 * @member {Number} delivered
 */
ModelsAPStat.prototype['delivered'] = undefined;

/**
 * @member {Number} dropped
 */
ModelsAPStat.prototype['dropped'] = undefined;

/**
 * @member {Number} hardBounced
 */
ModelsAPStat.prototype['hardBounced'] = undefined;

/**
 * @member {Number} opened
 */
ModelsAPStat.prototype['opened'] = undefined;

/**
 * @member {Number} processed
 */
ModelsAPStat.prototype['processed'] = undefined;

/**
 * @member {String} provider
 */
ModelsAPStat.prototype['provider'] = undefined;

/**
 * @member {Number} sent
 */
ModelsAPStat.prototype['sent'] = undefined;

/**
 * @member {Number} softBounced
 */
ModelsAPStat.prototype['softBounced'] = undefined;

/**
 * @member {Number} spam
 */
ModelsAPStat.prototype['spam'] = undefined;

/**
 * @member {Number} unsubscribed
 */
ModelsAPStat.prototype['unsubscribed'] = undefined;






export default ModelsAPStat;

