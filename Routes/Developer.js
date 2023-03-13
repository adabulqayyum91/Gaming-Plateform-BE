const multer = require("multer");
const path = require("path");
// Express Router
const express = require("express");
const router = express.Router();
// Middlewares
const jwtAuth = require("../Middleware/JWTAuth");
// Controllers
const AdminController = require("../Controllers/AdminController");
const AuthController = require("../Controllers/AuthController");
const TournamentController = require("../Controllers/TournamentController");
const LadderController = require("../Controllers/LadderController");
const CreditController = require("../Controllers/CreditController");
const MatchController = require("../Controllers/MatchController");
const FranchiseController = require("../Controllers/FranchiseController");
const LeagueController = require("../Controllers/LeagueController");
const FantasyLeagueController = require("../Controllers/FantasyLeagueController");
//
router.post("/deleteFranchise", AdminController.permanentDeleteFranchise);
router.post(
	"/deleteLeagueResultDetail",
	AdminController.deleteLeagueResultDetail
);
router.post(
	"/setWinnerToNullForLeagueSchedule",
	AdminController.setWinnerToNullForLeagueSchedule
);
router.post(
	"/deleteLeagueResultByResultId",
	AdminController.deleteLeagueResultByResultId
);
////////////////////////////for developers
router.post("/changeTournamentType", AdminController.changeTournamentType);
router.post("/deleteAllLeagues", AdminController.deleteAllLeagues);
router.post(
	"/deleteAllLeagueSchedule",
	AdminController.deleteAllLeagueSchedule
);
router.post("/deleteAllLeagueResult", AdminController.deleteAllLeagueResult);
router.post(
	"/deleteAllFantasyLeagues",
	AdminController.deleteAllFantasyLeagues
);
router.post(
	"/deleteAllFantasyLeaguesSchedule",
	AdminController.deleteAllFantasyLeaguesSchedule
);
router.post("/deleteAllFlTeamInvite", AdminController.deleteAllFlTeamInvite);

//////////////////////////////////////
router.post("/deleteLeagueById", AdminController.deleteLeagueById);
router.post("/deleteFlTeam", AdminController.deleteFantasyTeam);
router.post("/deleteFlTeamFromFl", AdminController.deleteFlTeamFromFl);
//tournament
router.post(
	"/softDeleteTounaments",
	TournamentController.softDeleteTournaments
);
router.post(
	"/softDeleteTournamentResults",
	TournamentController.softDeleteTournamentResults
);
router.post(
	"/changeDeleteStatusByTournamentId",
	TournamentController.changeTounamentDeleteStatusByTournamentId
);
router.post(
	"/changeTournamentResultDeleteStatusByTournamentId",
	TournamentController.changeTounamentResultDeleteStatusByTournamentId
);
router.post(
	"/softDeleteTournamentScheduleByTornamentId",
	TournamentController.softDeleteTournamentScheduleByTornamentId
);
router.post(
	"/showAllTournamentSchedule",
	TournamentController.showAllTournamentSchedule
);
router.post(
	"/deleteTournamentScheduleByTornamentId",
	TournamentController.deleteTournamentScheduleByTornamentId
);
router.post(
	"/showAllTournamentsWithDeleted",
	TournamentController.showAllTournamentsWithDeleted
);
module.exports = router;
