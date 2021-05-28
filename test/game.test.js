const { chai, server, should } = require("./testConfiguration");
const UserModel = require("../controllers/user.controller");

/**
 * Test cases to application API's
 * Covered Routes:
 * (1) Saving Game Detaild
 */

describe("Game API Tests", () => {
 	
	// Prepare data for testing
	const testData = {		
		"player1Name":"Tony",
		"player2Name":"David",
		"Player1WinCount":"2",
		"Player2WinCount":"3",
		"winnerName":"David",
		"winningDifference":"1"
	};

	/*
	* Test the /POST route
	*/
	describe("/POST Game Data", () => {
		it("it should Save the Game Details successfully", (done) => {			
			chai.request(server)
				.post("/save")
				.send(testData)
				.end((err, res) => {										
					done();
				});
		});
	});

	/*
	* Test the /POST route
	*/
	describe("/POST Game Details", () => {
		it("It should send validation error for Saving Game Details", (done) => {			
			chai.request(server)
				.post("/save")
				.send({})
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});
	});


});