const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated); 

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put("/games/:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);

gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);  

module.exports = gamesRouter;
