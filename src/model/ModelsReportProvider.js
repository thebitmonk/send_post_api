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
 * The ModelsReportProvider model module.
 * @module model/ModelsReportProvider
 * @version 1.0.0
 */
class ModelsReportProvider {
    /**
     * Constructs a new <code>ModelsReportProvider</code>.
     * @alias module:model/ModelsReportProvider
     */
    constructor() { 
        
        ModelsReportProvider.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsReportProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsReportProvider} obj Optional instance to populate.
     * @return {module:model/ModelsReportProvider} The populated <code>ModelsReportProvider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsReportProvider();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsReportProvider</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsReportProvider</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ModelsReportProvider.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ModelsReportProvider.prototype['name'] = undefined;






export default ModelsReportProvider;

