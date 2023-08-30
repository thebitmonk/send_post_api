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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.AccountStatApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountStatApi', function() {
    describe('accountStatRouterGetAccountCycleUsage', function() {
      it('should call accountStatRouterGetAccountCycleUsage successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAccountCycleUsage
        //instance.accountStatRouterGetAccountCycleUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAccountStats', function() {
      it('should call accountStatRouterGetAllAccountStats successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAccountStats
        //instance.accountStatRouterGetAllAccountStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAccountStatsByGroup', function() {
      it('should call accountStatRouterGetAllAccountStatsByGroup successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAccountStatsByGroup
        //instance.accountStatRouterGetAllAccountStatsByGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateAccountStats', function() {
      it('should call accountStatRouterGetAllAggregateAccountStats successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateAccountStats
        //instance.accountStatRouterGetAllAggregateAccountStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateAccountStatsByGroup', function() {
      it('should call accountStatRouterGetAllAggregateAccountStatsByGroup successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateAccountStatsByGroup
        //instance.accountStatRouterGetAllAggregateAccountStatsByGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateDomainStats', function() {
      it('should call accountStatRouterGetAllAggregateDomainStats successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateDomainStats
        //instance.accountStatRouterGetAllAggregateDomainStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateDomainStatsCount', function() {
      it('should call accountStatRouterGetAllAggregateDomainStatsCount successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateDomainStatsCount
        //instance.accountStatRouterGetAllAggregateDomainStatsCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateIPStats', function() {
      it('should call accountStatRouterGetAllAggregateIPStats successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateIPStats
        //instance.accountStatRouterGetAllAggregateIPStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateIPStatsCount', function() {
      it('should call accountStatRouterGetAllAggregateIPStatsCount successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateIPStatsCount
        //instance.accountStatRouterGetAllAggregateIPStatsCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateSubAccountStats', function() {
      it('should call accountStatRouterGetAllAggregateSubAccountStats successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateSubAccountStats
        //instance.accountStatRouterGetAllAggregateSubAccountStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateSubAccountStatsCount', function() {
      it('should call accountStatRouterGetAllAggregateSubAccountStatsCount successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateSubAccountStatsCount
        //instance.accountStatRouterGetAllAggregateSubAccountStatsCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateThirdPartyProvidersStats', function() {
      it('should call accountStatRouterGetAllAggregateThirdPartyProvidersStats successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateThirdPartyProvidersStats
        //instance.accountStatRouterGetAllAggregateThirdPartyProvidersStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount', function() {
      it('should call accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount successfully', function(done) {
        //uncomment below and update the code to test accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount
        //instance.accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
