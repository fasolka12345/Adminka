const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, checkEmptyFields, checkIfCategoriesAvaliable, checkIsGameExists, createGame, sendGameCreated); 

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put("/games/:id", findGameById, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, updateGame, sendGameUpdated);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);  

module.exports = gamesRouter;
