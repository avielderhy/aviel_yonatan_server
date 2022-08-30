const axios = require('axios').default;
const server = require("../server.js");
const base_url = "http://localhost:3000/";

describe("when testing projects endpoint", () => {
    test("should return status OK", (done) => {
        axios.get(base_url+"isPrime/11").then(response => {
            expect(response.status).toBe(200);
            done();
           })
    });
    
    test("should return list of projects",(done) => {
        axios.get(base_url+'isPrime/11').then(response => {
            expect(response.data).toBe(true);
            done();
        })
    });
    
    // clean up... shutting down the server
    test('should clean up', () => {
        server.stop();
    })
});