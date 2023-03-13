// Mongoose
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Moment
const moment = require("moment");
// Helpers
const GeneralHelper = require("../Services/GeneralHelper");
// Models
const User = require("../Models/User");
const Tournament = require("../Models/Tournament");
const TournamentSchedule = require("../Models/TournamentSchedule");
const Team = require("../Models/Team");
////////////////////////////////
exports.findTournamentScheduleByTournamentId = async (tournamentId) => {
	return await TournamentSchedule.find({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
	});
};
exports.saveTournamentSchedule = async (
	roundNumber,
	srNo,
	id,
	scheduleType,
	randomNumber,
	tournamentId,
	teamOneId,
	teamTwoId,
	playOffRoundNumber
) => {
	const tournamentSchedule = new TournamentSchedule({
		_id: new mongoose.Types.ObjectId(),
		roundNumber: roundNumber,
		rowNumber: srNo,
		scheduleType: scheduleType,
		randomMatchId: randomNumber,
		tournamentId: tournamentId,
		teamOne: teamOneId,
		teamTwo: teamTwoId,
		id: id,
		playOffRoundNumber: playOffRoundNumber,
	});
	await tournamentSchedule.save();
	return tournamentSchedule._id;
};
exports.updateNextMatchId = async (
	tournamentId,
	teamId,
	previousRoundNumber,
	id
) => {
	await TournamentSchedule.updateOne(
		{
			tournamentId: mongoose.Types.ObjectId(tournamentId),
			roundNumber: previousRoundNumber,
			$or: [
				{ teamOne: mongoose.Types.ObjectId(teamId) },
				{ teamTwo: mongoose.Types.ObjectId(teamId) },
			],
		},
		{ $set: { nextMatchId: id } }
	);
	return true;
};
exports.findTournamentByMatchIdAndTournamentId = async (
	tournamentId,
	matchId
) => {
	return await TournamentSchedule.findOne({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
		randomMatchId: matchId,
	});
};
exports.checkTournamentTeamAndMatchId = async (teamId, matchId) => {
	return await TournamentSchedule.find({
		randomMatchId: matchId,
		$or: [
			{ teamOne: mongoose.Types.ObjectId(teamId) },
			{ teamTwo: mongoose.Types.ObjectId(teamId) },
		],
	});
};
exports.findTypeAndRoundNumber = async (matchId) => {
	return await TournamentSchedule.findOne({ randomMatchId: matchId });
};
exports.checkTournamentSchedule = async (tournamentId) => {
	return await TournamentSchedule.find({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
	});
};
exports.updateWinnerTeamByMatchId = async (matchId, teamId) => {
	return await TournamentSchedule.updateOne(
		{ randomMatchId: matchId },
		{ $set: { winner: mongoose.Types.ObjectId(teamId) } }
	);
};
exports.getTournamentDetailForMaxRoundNumber = async (tournamentId) => {
	return await TournamentSchedule.find({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
	})
		.sort({ roundNumber: -1 })
		.limit(1);
};
exports.checkAlreadyTournamentSchedule = async (tournamentId, roundNumber) => {
	return await TournamentSchedule.find({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
		roundNumber: roundNumber,
		winner: null,
	});
};
exports.checkAlreadyTournamentScheduleResult = async (tournamentId) => {
	return await TournamentSchedule.find({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
	});
};
exports.checkTournamentFinalExist = async (tournamentId) => {
	return await TournamentSchedule.findOne({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
		scheduleType: "final",
	});
};
exports.findTournamentScheduleByMatchId = async (matchId) => {
	return await TournamentSchedule.findOne({ randomMatchId: matchId });
};
/////////////////////// for developer
exports.softDeleteTournamentScheduleByTornamentId = async (tournamentId) => {
	await TournamentSchedule.updateOne(
		{ tournamentId: mongoose.Types.ObjectId(tournamentId) },
		{ $set: { isDeleted: true } }
	);
	return true;
};
exports.deleteTournamentScheduleByTornamentId = async (tournamentId) => {
	await TournamentSchedule.deleteOne({
		tournamentId: mongoose.Types.ObjectId(tournamentId),
	});
	return true;
};
exports.allTournamentSchedule = async () => {
	return await TournamentSchedule.find();
};
