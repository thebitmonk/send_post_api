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
 * The ModelsRAssumeAccount model module.
 * @module model/ModelsRAssumeAccount
 * @version 1.0.0
 */
class ModelsRAssumeAccount {
    /**
     * Constructs a new <code>ModelsRAssumeAccount</code>.
     * @alias module:model/ModelsRAssumeAccount
     */
    constructor() { 
        
        ModelsRAssumeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsRAssumeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsRAssumeAccount} obj Optional instance to populate.
     * @return {module:model/ModelsRAssumeAccount} The populated <code>ModelsRAssumeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsRAssumeAccount();

            if (data.hasOwnProperty('customToken')) {
                obj['customToken'] = ApiClient.convertToType(data['customToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsRAssumeAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsRAssumeAccount</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customToken'] && !(typeof data['customToken'] === 'string' || data['customToken'] instanceof String)) {
            throw new Error("Expected the field `customToken` to be a primitive type in the JSON string but got " + data['customToken']);
        }

        return true;
    }


}



/**
 * @member {String} customToken
 */
ModelsRAssumeAccount.prototype['customToken'] = undefined;






export default ModelsRAssumeAccount;

