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
    instance = new SendPostApi.AccountstatApi();
  });

  describe('(package)', function() {
    describe('AccountstatApi', function() {
      describe('accountStatRouterGetAllAccountStats', function() {
        it('should call accountStatRouterGetAllAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAccountStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.accountStatRouterGetAllAccountStats(xAccountApiKey, opts, function(error, data, response) {
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
      describe('accountStatRouterGetAllAccountStatsByGroup', function() {
        it('should call accountStatRouterGetAllAccountStatsByGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAccountStatsByGroup call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var group = "group_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts, function(error, data, response) {
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
      describe('accountStatRouterGetAllAggregateAccountStats', function() {
        it('should call accountStatRouterGetAllAggregateAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAggregateAccountStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts, function(error, data, response) {
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
      describe('accountStatRouterGetAllAggregateAccountStatsByGroup', function() {
        it('should call accountStatRouterGetAllAggregateAccountStatsByGroup successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAggregateAccountStatsByGroup call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var group = "group_example";
          var opts = {};
          opts.from = "from_example";
          opts.to = "to_example";

          instance.accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts, function(error, data, response) {
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
      describe('accountStatRouterGetAllAggregateDomainStats', function() {
        it('should call accountStatRouterGetAllAggregateDomainStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAggregateDomainStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var from = "from_example";
          var to = "to_example";
          var opts = {};
          opts.filterBy = "filterBy_example";
          opts.filterValue = 789;
          opts.orderBy = "orderBy_example";
          opts.sortOrder = "sortOrder_example";
          opts.search = "search_example";
          opts.offset = 789;
          opts.limit = 789;

          instance.accountStatRouterGetAllAggregateDomainStats(xAccountApiKey, from, to, opts, function(error, data, response) {
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
      describe('accountStatRouterGetAllAggregateIPStats', function() {
        it('should call accountStatRouterGetAllAggregateIPStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAggregateIPStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var from = "from_example";
          var to = "to_example";
          var opts = {};
          opts.filterBy = "filterBy_example";
          opts.filterValue = 789;
          opts.limitBy = "limitBy_example";
          opts.limitValue = 789;
          opts.orderBy = "orderBy_example";
          opts.sortOrder = "sortOrder_example";
          opts.search = "search_example";
          opts.offset = 789;
          opts.limit = 789;

          instance.accountStatRouterGetAllAggregateIPStats(xAccountApiKey, from, to, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAGIPStat);
              expect(data.clicked).to.be.a('number');
              expect(data.clicked).to.be("0");
              expect(data.delivered).to.be.a('number');
              expect(data.delivered).to.be("0");
              expect(data.dropped).to.be.a('number');
              expect(data.dropped).to.be("0");
              expect(data.hardBounced).to.be.a('number');
              expect(data.hardBounced).to.be("0");
              expect(data.ipId).to.be.a('number');
              expect(data.ipId).to.be("0");
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
      describe('accountStatRouterGetAllAggregateSubAccountStats', function() {
        it('should call accountStatRouterGetAllAggregateSubAccountStats successfully', function(done) {
          // TODO: uncomment, update parameter values for accountStatRouterGetAllAggregateSubAccountStats call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var from = "from_example";
          var to = "to_example";
          var opts = {};
          opts.filterBy = "filterBy_example";
          opts.filterValue = 789;
          opts.orderBy = "orderBy_example";
          opts.sortOrder = "sortOrder_example";
          opts.search = "search_example";
          opts.offset = 789;
          opts.limit = 789;

          instance.accountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, from, to, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsAGSubAccountStat);
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
              expect(data.subAccountId).to.be.a('number');
              expect(data.subAccountId).to.be("0");
              expect(data.subAccountName).to.be.a('string');
              expect(data.subAccountName).to.be("");
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
    });
  });

}));
