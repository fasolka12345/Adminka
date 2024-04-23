const gamesRouter = require("express").Router(); 
const {deleteGame, sendAllGames, addGameController} = require('../controllers/games.js');
const {getAllGames} = require('../middlewares/games.js');

gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;
