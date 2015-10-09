var Lab = require("lab");
var lab = exports.lab = Lab.script();
var Code = require("code");
var server = require("../app.js");

lab.experiment("API Tests", function() {
    // tests
    lab.test("GET /api/user", function(done) {
        var options = {
            method: "GET",
            url: "/api/user"
        };
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
            done();
        });
    });
});