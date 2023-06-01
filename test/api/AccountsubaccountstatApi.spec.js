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
    instance = new SendPostApi.AccountsubaccountstatApi();
  });

  describe('(package)', function() {
    describe('AccountsubaccountstatApi', function() {
      describe('subAccountStatRouterGetAllAggregateSubAccountStats', function() {
        it('should call subAccountStatRouterGetAllAggregateSubAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountStatRouterGetAllAggregateSubAccountStats call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.subAccountStatRouterGetAllAggregateSubAccountStats(xSubAccountApiKey, sid, opts, function(error, data, response) {
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
      describe('subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount', function() {
        it('should call subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xSubAccountApiKey, sid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsAGDomainStat);
              expect(data.clicked).to.be.a('number');
              expect(data.clicked).to.be("0");
              expect(data.delivered).to.be.a('number');
              expect(data.delivered).to.be("0");
              expect(data.domain).to.be.a('string');
              expect(data.domain).to.be("");
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
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount', function() {
        it('should call subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xSubAccountApiKey, sid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsAGStat);
              expect(data.clicked).to.be.a('number');
              expect(data.clicked).to.be("0");
              expect(data.delivered).to.be.a('number');
              expect(data.delivered).to.be("0");
              expect(data.dropped).to.be.a('number');
              expect(data.dropped).to.be("0");
              expect(data.group).to.be.a('string');
              expect(data.group).to.be("");
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
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountStatRouterGetAllAggregatedIPStatsForASubAccount', function() {
        it('should call subAccountStatRouterGetAllAggregatedIPStatsForASubAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountStatRouterGetAllAggregatedIPStatsForASubAccount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xSubAccountApiKey, sid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsAIPStat);
              expect(data.clicked).to.be.a('number');
              expect(data.clicked).to.be("0");
              expect(data.delivered).to.be.a('number');
              expect(data.delivered).to.be("0");
              expect(data.dropped).to.be.a('number');
              expect(data.dropped).to.be("0");
              expect(data.hardBounced).to.be.a('number');
              expect(data.hardBounced).to.be("0");
              expect(data.ipid).to.be.a('number');
              expect(data.ipid).to.be("0");
              expect(data.opened).to.be.a('number');
              expect(data.opened).to.be("0");
              expect(data.processed).to.be.a('number');
              expect(data.processed).to.be("0");
              expect(data.publicIP).to.be.a('string');
              expect(data.publicIP).to.be("");
              expect(data.sent).to.be.a('number');
              expect(data.sent).to.be("0");
              expect(data.softBounced).to.be.a('number');
              expect(data.softBounced).to.be("0");
              expect(data.spam).to.be.a('number');
              expect(data.spam).to.be("0");
              expect(data.unsubscribed).to.be.a('number');
              expect(data.unsubscribed).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount', function() {
        it('should call subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xSubAccountApiKey, sid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsAPStat);
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
              expect(data.provider).to.be.a('string');
              expect(data.provider).to.be("");
              expect(data.sent).to.be.a('number');
              expect(data.sent).to.be("0");
              expect(data.softBounced).to.be.a('number');
              expect(data.softBounced).to.be("0");
              expect(data.spam).to.be.a('number');
              expect(data.spam).to.be("0");
              expect(data.unsubscribed).to.be.a('number');
              expect(data.unsubscribed).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountStatRouterGetAllSubAccountStats', function() {
        it('should call subAccountStatRouterGetAllSubAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountStatRouterGetAllSubAccountStats call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.subAccountStatRouterGetAllSubAccountStats(xSubAccountApiKey, sid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsRStat);
              expect(data._date).to.be.a('string');
              expect(data._date).to.be("");
              expect(data.stat).to.be.a(SendPostApi.ModelsStat);
                    expect(data.stat.clicked).to.be.a('number');
                expect(data.stat.clicked).to.be("0");
                expect(data.stat.delivered).to.be.a('number');
                expect(data.stat.delivered).to.be("0");
                expect(data.stat.dropped).to.be.a('number');
                expect(data.stat.dropped).to.be("0");
                expect(data.stat.hardBounced).to.be.a('number');
                expect(data.stat.hardBounced).to.be("0");
                expect(data.stat.opened).to.be.a('number');
                expect(data.stat.opened).to.be("0");
                expect(data.stat.processed).to.be.a('number');
                expect(data.stat.processed).to.be("0");
                expect(data.stat.sent).to.be.a('number');
                expect(data.stat.sent).to.be("0");
                expect(data.stat.softBounced).to.be.a('number');
                expect(data.stat.softBounced).to.be("0");
                expect(data.stat.spam).to.be.a('number');
                expect(data.stat.spam).to.be("0");
                expect(data.stat.unsubscribed).to.be.a('number');
                expect(data.stat.unsubscribed).to.be("0");
            }

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
