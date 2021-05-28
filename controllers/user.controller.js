const fs = require("fs");
const {	Validator } = require('node-input-validator');

exports.create = async (req, res) => {
  	const {player1Name,player2Name,Player1WinCount,Player2WinCount,winnerName,winningDifference} = req.body
	const data = {player1Name,player2Name,Player1WinCount,Player2WinCount,winnerName,winningDifference};
	const validate = new Validator(data, {
		player1Name:"required", 
		player2Name:"required", 
		Player1WinCount:"required", 
		Player2WinCount:"required",
		winnerName:"required",
		winningDifference:"required"
	});

	let matched = await validate.check();
	if (!matched) {
		return res.status(400).json(validate.errors);
	}
	const gameData = JSON.stringify(req.body);
  	fs.writeFileSync("./data/user.json", gameData);

  res.status(200).send({statue: 200, ...req.body});
};
