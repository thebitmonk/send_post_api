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
 * Swagger Codegen version: 2.4.31
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
    instance = new SendPostApi.EditorApi();
  });

  describe('(package)', function() {
    describe('EditorApi', function() {
      describe('editorApiRouterGetToken', function() {
        it('should call editorApiRouterGetToken successfully', function(done) {
          // TODO: uncomment, update parameter values for editorApiRouterGetToken call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.editorApiRouterGetToken(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsEditorTokenResponse);
            expect(data.expires).to.be.a('string');
            expect(data.expires).to.be("");
            expect(data.issued).to.be.a('string');
            expect(data.issued).to.be("");
            expect(data.accessToken).to.be.a('string');
            expect(data.accessToken).to.be("");
            expect(data.asclientId).to.be.a('string');
            expect(data.asclientId).to.be("");
            expect(data.asregion).to.be.a('string');
            expect(data.asregion).to.be("");
            expect(data.expiresIn).to.be.a('number');
            expect(data.expiresIn).to.be(0);
            expect(data.refreshToken).to.be.a('string');
            expect(data.refreshToken).to.be("");
            expect(data.tokenType).to.be.a('string');
            expect(data.tokenType).to.be("");
            expect(data.userName).to.be.a('string');
            expect(data.userName).to.be("");

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
