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
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.AccountdomainStatApi();
  });

  describe('(package)', function() {
    describe('AccountdomainStatApi', function() {
      describe('domainStatRouterGetAllAggregateDomainStatsByGroup', function() {
        it('should call domainStatRouterGetAllAggregateDomainStatsByGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for domainStatRouterGetAllAggregateDomainStatsByGroup call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var domainId = 789;
          var provider = "provider_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsStat);
            expect(data.clicked).to.be.a('number');
            expect(data.clicked).to.be("0");
            expect(data.delivered).to.be.a('number');
            expect(data.delivered).to.be("0");
            expect(data.dropped).to.be.a('number');
            expect(data.dropped).to.be("0");
            expect(data.hardBounced).to.be.a('number');
            expect(data.hardBounced).to.be("0");
            expect(data.opened).to.be.a('number');
            expect(data.opened).to.be("0");
            expect(data.processed).to.be.a('number');
            expect(data.processed).to.be("0");
            expect(data.sent).to.be.a('number');
            expect(data.sent).to.be("0");
            expect(data.softBounced).to.be.a('number');
            expect(data.softBounced).to.be("0");
            expect(data.spam).to.be.a('number');
            expect(data.spam).to.be("0");
            expect(data.unsubscribed).to.be.a('number');
            expect(data.unsubscribed).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainStatRouterGetStatsForASingleDomainStats', function() {
        it('should call domainStatRouterGetStatsForASingleDomainStats successfully', function(done) {
          // TODO: uncomment, update parameter values for domainStatRouterGetStatsForASingleDomainStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var domainId = "domainId_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsStat);
            expect(data.clicked).to.be.a('number');
            expect(data.clicked).to.be("0");
            expect(data.delivered).to.be.a('number');
            expect(data.delivered).to.be("0");
            expect(data.dropped).to.be.a('number');
            expect(data.dropped).to.be("0");
            expect(data.hardBounced).to.be.a('number');
            expect(data.hardBounced).to.be("0");
            expect(data.opened).to.be.a('number');
            expect(data.opened).to.be("0");
            expect(data.processed).to.be.a('number');
            expect(data.processed).to.be("0");
            expect(data.sent).to.be.a('number');
            expect(data.sent).to.be("0");
            expect(data.softBounced).to.be.a('number');
            expect(data.softBounced).to.be("0");
            expect(data.spam).to.be.a('number');
            expect(data.spam).to.be("0");
            expect(data.unsubscribed).to.be.a('number');
            expect(data.unsubscribed).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
