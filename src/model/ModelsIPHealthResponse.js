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
import ModelsProviderDetails from './ModelsProviderDetails';

/**
 * The ModelsIPHealthResponse model module.
 * @module model/ModelsIPHealthResponse
 * @version 1.0.0
 */
class ModelsIPHealthResponse {
    /**
     * Constructs a new <code>ModelsIPHealthResponse</code>.
     * @alias module:model/ModelsIPHealthResponse
     */
    constructor() { 
        
        ModelsIPHealthResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsIPHealthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsIPHealthResponse} obj Optional instance to populate.
     * @return {module:model/ModelsIPHealthResponse} The populated <code>ModelsIPHealthResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsIPHealthResponse();

            if (data.hasOwnProperty('providerStats')) {
                obj['providerStats'] = ApiClient.convertToType(data['providerStats'], [ModelsProviderDetails]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsIPHealthResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsIPHealthResponse</code>.
     */
    static validateJSON(data) {
        if (data['providerStats']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['providerStats'])) {
                throw new Error("Expected the field `providerStats` to be an array in the JSON data but got " + data['providerStats']);
            }
            // validate the optional field `providerStats` (array)
            for (const item of data['providerStats']) {
                ModelsProviderDetails.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ModelsProviderDetails>} providerStats
 */
ModelsIPHealthResponse.prototype['providerStats'] = undefined;






export default ModelsIPHealthResponse;

