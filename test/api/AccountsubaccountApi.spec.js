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
    instance = new SendPostApi.AccountsubaccountApi();
  });

  describe('(package)', function() {
    describe('AccountsubaccountApi', function() {
      describe('subAccountRouterCount', function() {
        it('should call subAccountRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.filterBy = "filterBy_example";
          opts.filterValue = 789;
          opts.search = "search_example";

          instance.subAccountRouterCount(xAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterCreate', function() {
        it('should call subAccountRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsESubAccount();
          body.name = "";
          body.labels = [""];

          instance.subAccountRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSubAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsLabel);
                expect(data.color).to.be.a('string');
                expect(data.color).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            {
              let dataCtr = data.smtpAuths;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.password).to.be.a('string');
                expect(data.password).to.be("");
                expect(data.updated).to.be.a('number');
                expect(data.updated).to.be("0");
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");

                      }
            }
            expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterDelete', function() {
        it('should call subAccountRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;

          instance.subAccountRouterDelete(xAccountApiKey, subAccountId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterGet', function() {
        it('should call subAccountRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;

          instance.subAccountRouterGet(xAccountApiKey, subAccountId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSubAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsLabel);
                expect(data.color).to.be.a('string');
                expect(data.color).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            {
              let dataCtr = data.smtpAuths;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.password).to.be.a('string');
                expect(data.password).to.be("");
                expect(data.updated).to.be.a('number');
                expect(data.updated).to.be("0");
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");

                      }
            }
            expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterGetAll', function() {
        it('should call subAccountRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.filterBy = "filterBy_example";
          opts.filterValue = 789;
          opts.search = "search_example";

          instance.subAccountRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsSubAccount);
              expect(data.apiKey).to.be.a('string');
              expect(data.apiKey).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              {
                let dataCtr = data.labels;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsLabel);
                  expect(data.color).to.be.a('string');
                  expect(data.color).to.be("");
                  expect(data.created).to.be.a('number');
                  expect(data.created).to.be("0");
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              {
                let dataCtr = data.smtpAuths;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                  expect(data.created).to.be.a('number');
                  expect(data.created).to.be("0");
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.password).to.be.a('string');
                  expect(data.password).to.be("");
                  expect(data.updated).to.be.a('number');
                  expect(data.updated).to.be("0");
                  expect(data.username).to.be.a('string');
                  expect(data.username).to.be("");
  
                        }
              }
              expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
      
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterGetAllSubAccountIncidents', function() {
        it('should call subAccountRouterGetAllSubAccountIncidents successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterGetAllSubAccountIncidents call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;

          instance.subAccountRouterGetAllSubAccountIncidents(xAccountApiKey, subAccountId, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsIncident);
              expect(data.author).to.be.a(SendPostApi.ModelsMember);
                    expect(data.author.companyName).to.be.a('string');
                expect(data.author.companyName).to.be("");
                expect(data.author.created).to.be.a('number');
                expect(data.author.created).to.be("0");
                expect(data.author.email).to.be.a('string');
                expect(data.author.email).to.be("");
                expect(data.author.id).to.be.a('number');
                expect(data.author.id).to.be("0");
                expect(data.author.isForbidden).to.be.a('boolean');
                expect(data.author.isForbidden).to.be(false);
                expect(data.author.isVerified).to.be.a('boolean');
                expect(data.author.isVerified).to.be(false);
                expect(data.author.name).to.be.a('string');
                expect(data.author.name).to.be("");
                expect(data.author.onboardQAnswered).to.be.a('boolean');
                expect(data.author.onboardQAnswered).to.be(false);
                expect(data.author.phoneNumber).to.be.a('string');
                expect(data.author.phoneNumber).to.be("");
                expect(data.author.url).to.be.a('string');
                expect(data.author.url).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.relatedIP).to.be.a(SendPostApi.ModelsIP);
                    expect(data.relatedIP.aolSettings).to.be.a('string');
                expect(data.relatedIP.aolSettings).to.be("");
                expect(data.relatedIP.comcastSettings).to.be.a('string');
                expect(data.relatedIP.comcastSettings).to.be("");
                expect(data.relatedIP.created).to.be.a('number');
                expect(data.relatedIP.created).to.be("0");
                expect(data.relatedIP.defaultSettings).to.be.a('string');
                expect(data.relatedIP.defaultSettings).to.be("");
                expect(data.relatedIP.gmailSettings).to.be.a('string');
                expect(data.relatedIP.gmailSettings).to.be("");
                expect(data.relatedIP.gmxSettings).to.be.a('string');
                expect(data.relatedIP.gmxSettings).to.be("");
                expect(data.relatedIP.icloudSettings).to.be.a('string');
                expect(data.relatedIP.icloudSettings).to.be("");
                expect(data.relatedIP.id).to.be.a('number');
                expect(data.relatedIP.id).to.be("0");
                expect(data.relatedIP.infraClassification).to.be.a('string');
                expect(data.relatedIP.infraClassification).to.be("");
                expect(data.relatedIP.infraMonitor).to.be.a('boolean');
                expect(data.relatedIP.infraMonitor).to.be(false);
                expect(data.relatedIP.mailruSettings).to.be.a('string');
                expect(data.relatedIP.mailruSettings).to.be("");
                expect(data.relatedIP.microsoftSettings).to.be.a('string');
                expect(data.relatedIP.microsoftSettings).to.be("");
                expect(data.relatedIP.publicIP).to.be.a('string');
                expect(data.relatedIP.publicIP).to.be("");
                expect(data.relatedIP.qqSettings).to.be.a('string');
                expect(data.relatedIP.qqSettings).to.be("");
                expect(data.relatedIP.reverseDNSHostname).to.be.a('string');
                expect(data.relatedIP.reverseDNSHostname).to.be("");
                expect(data.relatedIP.systemDomain).to.be.a(SendPostApi.ModelsSystemDomain);
                      expect(data.relatedIP.systemDomain.created).to.be.a('number');
                  expect(data.relatedIP.systemDomain.created).to.be("0");
                  expect(data.relatedIP.systemDomain.dkim).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.relatedIP.systemDomain.dkim.host).to.be.a('string');
                    expect(data.relatedIP.systemDomain.dkim.host).to.be("");
                    expect(data.relatedIP.systemDomain.dkim.textValue).to.be.a('string');
                    expect(data.relatedIP.systemDomain.dkim.textValue).to.be("");
                    expect(data.relatedIP.systemDomain.dkim.type).to.be.a('string');
                    expect(data.relatedIP.systemDomain.dkim.type).to.be("");
                  expect(data.relatedIP.systemDomain.dkimConfig).to.be.a('string');
                  expect(data.relatedIP.systemDomain.dkimConfig).to.be("");
                  expect(data.relatedIP.systemDomain.dkimVerified).to.be.a('boolean');
                  expect(data.relatedIP.systemDomain.dkimVerified).to.be(false);
                  expect(data.relatedIP.systemDomain.id).to.be.a('number');
                  expect(data.relatedIP.systemDomain.id).to.be("0");
                  expect(data.relatedIP.systemDomain.mailboxVerified).to.be.a('boolean');
                  expect(data.relatedIP.systemDomain.mailboxVerified).to.be(false);
                  expect(data.relatedIP.systemDomain.name).to.be.a('string');
                  expect(data.relatedIP.systemDomain.name).to.be("");
                  expect(data.relatedIP.systemDomain.spf).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.relatedIP.systemDomain.spf.host).to.be.a('string');
                    expect(data.relatedIP.systemDomain.spf.host).to.be("");
                    expect(data.relatedIP.systemDomain.spf.textValue).to.be.a('string');
                    expect(data.relatedIP.systemDomain.spf.textValue).to.be("");
                    expect(data.relatedIP.systemDomain.spf.type).to.be.a('string');
                    expect(data.relatedIP.systemDomain.spf.type).to.be("");
                  expect(data.relatedIP.systemDomain.spfVerified).to.be.a('boolean');
                  expect(data.relatedIP.systemDomain.spfVerified).to.be(false);
                  expect(data.relatedIP.systemDomain.track).to.be.a(SendPostApi.ModelsSystemDNSRecord);
                        expect(data.relatedIP.systemDomain.track.host).to.be.a('string');
                    expect(data.relatedIP.systemDomain.track.host).to.be("");
                    expect(data.relatedIP.systemDomain.track.textValue).to.be.a('string');
                    expect(data.relatedIP.systemDomain.track.textValue).to.be("");
                    expect(data.relatedIP.systemDomain.track.type).to.be.a('string');
                    expect(data.relatedIP.systemDomain.track.type).to.be("");
                  expect(data.relatedIP.systemDomain.trackVerified).to.be.a('boolean');
                  expect(data.relatedIP.systemDomain.trackVerified).to.be(false);
                expect(data.relatedIP.type).to.be.a(SendPostApi.ModelsIPType);
                    expect(data.relatedIP.warmUpNotComplete).to.be.a('boolean');
                expect(data.relatedIP.warmUpNotComplete).to.be(false);
                expect(data.relatedIP.yahooSettings).to.be.a('string');
                expect(data.relatedIP.yahooSettings).to.be("");
                expect(data.relatedIP.yandexSettings).to.be.a('string');
                expect(data.relatedIP.yandexSettings).to.be("");
                expect(data.relatedIP.zohoSettings).to.be.a('string');
                expect(data.relatedIP.zohoSettings).to.be("");
              expect(data.relatedSubAccount).to.be.a(SendPostApi.ModelsSubAccount);
                    expect(data.relatedSubAccount.apiKey).to.be.a('string');
                expect(data.relatedSubAccount.apiKey).to.be("");
                expect(data.relatedSubAccount.created).to.be.a('number');
                expect(data.relatedSubAccount.created).to.be("0");
                expect(data.relatedSubAccount.id).to.be.a('number');
                expect(data.relatedSubAccount.id).to.be("0");
                {
                  let dataCtr = data.relatedSubAccount.labels;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsLabel);
                    expect(data.color).to.be.a('string');
                    expect(data.color).to.be("");
                    expect(data.created).to.be.a('number');
                    expect(data.created).to.be("0");
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                expect(data.relatedSubAccount.name).to.be.a('string');
                expect(data.relatedSubAccount.name).to.be("");
                {
                  let dataCtr = data.relatedSubAccount.smtpAuths;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                    expect(data.created).to.be.a('number');
                    expect(data.created).to.be("0");
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.password).to.be.a('string');
                    expect(data.password).to.be("");
                    expect(data.updated).to.be.a('number');
                    expect(data.updated).to.be("0");
                    expect(data.username).to.be.a('string');
                    expect(data.username).to.be("");
    
                          }
                }
                expect(data.relatedSubAccount.type).to.be.a(SendPostApi.ModelsSubAccountType);
        
              expect(data.status).to.be.a(SendPostApi.ModelsIncidentStatus);
                  expect(data.summary).to.be.a('string');
              expect(data.summary).to.be("");
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsTag);
                  expect(data.color).to.be.a('string');
                  expect(data.color).to.be("");
                  expect(data.created).to.be.a('number');
                  expect(data.created).to.be("0");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.updated).to.be.a('number');
                  expect(data.updated).to.be("0");
  
                        }
              }
              expect(data.updated).to.be.a('number');
              expect(data.updated).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('subAccountRouterUpdate', function() {
        it('should call subAccountRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for subAccountRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var subAccountId = 789;
          var body = new SendPostApi.ModelsESubAccount();
          body.name = "";
          body.labels = [""];

          instance.subAccountRouterUpdate(xAccountApiKey, subAccountId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsSubAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsLabel);
                expect(data.color).to.be.a('string');
                expect(data.color).to.be("");
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            {
              let dataCtr = data.smtpAuths;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsSMTPAuth);
                expect(data.created).to.be.a('number');
                expect(data.created).to.be("0");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.password).to.be.a('string');
                expect(data.password).to.be("");
                expect(data.updated).to.be.a('number');
                expect(data.updated).to.be("0");
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");

                      }
            }
            expect(data.type).to.be.a(SendPostApi.ModelsSubAccountType);
    
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
