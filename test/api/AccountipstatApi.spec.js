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
 * Swagger Codegen version: 2.4.27
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
    instance = new SendPostApi.AccountipstatApi();
  });

  describe('(package)', function() {
    describe('AccountipstatApi', function() {
      describe('iPStatRouterGetAllAggregateIPStats', function() {
        it('should call iPStatRouterGetAllAggregateIPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for iPStatRouterGetAllAggregateIPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts, function(error, data, response) {
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
      describe('iPStatRouterGetAllAggregateIPStatsByProvider', function() {
        it('should call iPStatRouterGetAllAggregateIPStatsByProvider successfully', function(done) {
          // TODO: uncomment, update parameter values for iPStatRouterGetAllAggregateIPStatsByProvider call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.iPStatRouterGetAllAggregateIPStatsByProvider(xAccountApiKey, ipid, opts, function(error, data, response) {
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
      describe('iPStatRouterGetAllAggregatedProviderStatsForAIP', function() {
        it('should call iPStatRouterGetAllAggregatedProviderStatsForAIP successfully', function(done) {
          // TODO: uncomment, update parameter values for iPStatRouterGetAllAggregatedProviderStatsForAIP call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsPIPStat);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.stat).to.be.a(SendPostApi.ModelsIPStat);
                    expect(data.stat.clicked).to.be.a('number');
                expect(data.stat.clicked).to.be("0");
                expect(data.stat.day).to.be.a('number');
                expect(data.stat.day).to.be("0");
                expect(data.stat.delivered).to.be.a('number');
                expect(data.stat.delivered).to.be("0");
                expect(data.stat.dropped).to.be.a('number');
                expect(data.stat.dropped).to.be("0");
                expect(data.stat.hardBounced).to.be.a('number');
                expect(data.stat.hardBounced).to.be("0");
                expect(data.stat.month).to.be.a('number');
                expect(data.stat.month).to.be("0");
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
                expect(data.stat.year).to.be.a('number');
                expect(data.stat.year).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP', function() {
        it('should call iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP successfully', function(done) {
          // TODO: uncomment, update parameter values for iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var sid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP(xAccountApiKey, ipid, sid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsPIPStat);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.stat).to.be.a(SendPostApi.ModelsIPStat);
                    expect(data.stat.clicked).to.be.a('number');
                expect(data.stat.clicked).to.be("0");
                expect(data.stat.day).to.be.a('number');
                expect(data.stat.day).to.be("0");
                expect(data.stat.delivered).to.be.a('number');
                expect(data.stat.delivered).to.be("0");
                expect(data.stat.dropped).to.be.a('number');
                expect(data.stat.dropped).to.be("0");
                expect(data.stat.hardBounced).to.be.a('number');
                expect(data.stat.hardBounced).to.be("0");
                expect(data.stat.month).to.be.a('number');
                expect(data.stat.month).to.be("0");
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
                expect(data.stat.year).to.be.a('number');
                expect(data.stat.year).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('iPStatRouterGetAllAggregatedSubAccountStatsForAnIP', function() {
        it('should call iPStatRouterGetAllAggregatedSubAccountStatsForAnIP successfully', function(done) {
          // TODO: uncomment, update parameter values for iPStatRouterGetAllAggregatedSubAccountStatsForAnIP call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";
          opts.sortBy = "sortBy_example";

          instance.iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSIPStat);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.sid).to.be.a('number');
              expect(data.sid).to.be("0");
              expect(data.stat).to.be.a(SendPostApi.ModelsIPStat);
                    expect(data.stat.clicked).to.be.a('number');
                expect(data.stat.clicked).to.be("0");
                expect(data.stat.day).to.be.a('number');
                expect(data.stat.day).to.be("0");
                expect(data.stat.delivered).to.be.a('number');
                expect(data.stat.delivered).to.be("0");
                expect(data.stat.dropped).to.be.a('number');
                expect(data.stat.dropped).to.be("0");
                expect(data.stat.hardBounced).to.be.a('number');
                expect(data.stat.hardBounced).to.be("0");
                expect(data.stat.month).to.be.a('number');
                expect(data.stat.month).to.be("0");
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
                expect(data.stat.year).to.be.a('number');
                expect(data.stat.year).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('iPStatRouterGetAllIPStats', function() {
        it('should call iPStatRouterGetAllIPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for iPStatRouterGetAllIPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var ipid = 789;
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";
          opts.provider = "provider_example";

          instance.iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsRIPStat);
              expect(data._date).to.be.a('string');
              expect(data._date).to.be("");
              expect(data.stat).to.be.a(SendPostApi.ModelsIPStat);
                    expect(data.stat.clicked).to.be.a('number');
                expect(data.stat.clicked).to.be("0");
                expect(data.stat.day).to.be.a('number');
                expect(data.stat.day).to.be("0");
                expect(data.stat.delivered).to.be.a('number');
                expect(data.stat.delivered).to.be("0");
                expect(data.stat.dropped).to.be.a('number');
                expect(data.stat.dropped).to.be("0");
                expect(data.stat.hardBounced).to.be.a('number');
                expect(data.stat.hardBounced).to.be("0");
                expect(data.stat.month).to.be.a('number');
                expect(data.stat.month).to.be("0");
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
                expect(data.stat.year).to.be.a('number');
                expect(data.stat.year).to.be("0");
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
