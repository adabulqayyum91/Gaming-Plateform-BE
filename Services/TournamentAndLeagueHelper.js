const mongoose = require("mongoose");

// helper
const TeamHelper = require("../Services/TeamHelper");
const UserHelper = require("../Services/UserHelper");
const FantasyTeamHelper = require("../Services/FantasyTeamHelper");
//
exports.shuffle = (array) => {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
};
/// random match id generator
exports.getRandomNmmber = async () => {
	let length = 8;
	let result = "";
	let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
	let charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
/// random match id generator
exports.getRandomRoundId = async () => {
	let length = 4;
	let result = "";
	let characters = "123456789";
	let charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
////Get Team name
exports.getTeamName = async (teamId) => {
	let teamViewName = "";

	let teamDeatil = await TeamHelper.findTeamDeatilByTeamId(teamId);

	if (teamDeatil != null) {
		teamViewName = teamDeatil.teamViewName;
	} else {
		console.log("team not found!");
	}
	return teamViewName;
};
////Get Team Profile Image
exports.getTeamProfileImage = async (teamId) => {
	let teamProfileImage = "";

	let teamDeatil = await TeamHelper.findTeamDeatilByTeamId(teamId);

	if (teamDeatil != null) {
		teamProfileImage = teamDeatil.teamTitleImage;
	} else {
		console.log("team not found! - profileImage");
	}
	return teamProfileImage;
};
// update(add) user points tournament,league schedule
exports.addUserPoints = async (userId, killPoints) => {
	let userDetail = await UserHelper.foundUserById(userId);
	if (userDetail != null) {
		let userPoints = userDetail.userPoints;
		let finalPoints = parseFloat(userPoints) + parseFloat(killPoints);
		// console.log("final points : ", finalPoints);
		await UserHelper.updateUserPoints(userId, finalPoints);
	} else {
		console.log("user not find for update points.");
	}
};

// update(subtract) user points tournament.league schedule
exports.subtractUserPoints = async (userId, killPoints) => {
	let userDetail = await UserHelper.foundUserById(userId);
	// console.log("userDetail :", userDetail);
	if (userDetail != null) {
		let userPoints = userDetail.userPoints;
		// console.log("user points : ", userPoints);
		let finalPoints = parseFloat(userPoints) - parseFloat(killPoints);
		await UserHelper.updateUserPoints(userId, finalPoints);
	} else {
		console.log("user not find for update points.");
	}
};
////Get Fantasy Team name
exports.getFantasyTeamName = async (fantasyTeamId) => {
	let teamViewName = "";
	if (fantasyTeamId != null) {
		let teamDeatil =
			await FantasyTeamHelper.findFantasyTeamDetailByFantasyTeamId(
				fantasyTeamId
			);
		if (teamDeatil != null) {
			teamViewName = teamDeatil.teamViewName;
		} else {
			console.log("team not found : ", fantasyTeamId);
		}
	}
	return teamViewName;
};
////Get Fantasy Team Profile Image
exports.getFantasyTeamProfileImage = async (teamId) => {
	let teamProfileImage = "";

	let teamDeatil = await FantasyTeamHelper.findFantasyTeamDeatilByTeamId(
		teamId
	);

	if (teamDeatil != null) {
		teamProfileImage = teamDeatil.teamTitleImage;
	} else {
		console.log("team not found! - profileImage");
	}
	return teamProfileImage;
};
// tournament/league schedule dummy data for sixteen teams
exports.dummyTeamsStructureForSisteenTeams = async () => {
	let dummyTeamsStructureArr = [
		{
			_id: new mongoose.Types.ObjectId(),
			id: 1,
			name: "round 2 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 9,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 2,
			name: "round 2 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 9,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 3,
			name: "round 2 - match 3",
			matchId: "",
			winner: "",
			nextMatchId: 10,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 4,
			name: "round 2 - match 4",
			matchId: "",
			winner: "",
			nextMatchId: 10,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 5,
			name: "round 2 - match 5",
			matchId: "",
			winner: "",
			nextMatchId: 11,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 6,
			name: "round 2 - match 6",
			matchId: "",
			winner: "",
			nextMatchId: 11,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 7,
			name: "round 2 - match 7",
			matchId: "",
			winner: "",
			nextMatchId: 12,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 8,
			name: "round 2 - match 8",
			matchId: "",
			winner: "",
			nextMatchId: 12,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},

		//////
		{
			_id: new mongoose.Types.ObjectId(),
			id: 9,
			name: "playoff 1 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 13,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 10,
			name: "playoff 1 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 13,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 11,
			name: "playoff 1 - match 3",
			matchId: "",
			winner: "",
			nextMatchId: 14,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 12,
			name: "playoff 1 - match 4",
			matchId: "",
			winner: "",
			nextMatchId: 14,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		///
		{
			_id: new mongoose.Types.ObjectId(),
			id: 13,
			name: "playoff 2 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 15,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 14,
			name: "playoff 2 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 15,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},

		{
			_id: new mongoose.Types.ObjectId(),
			id: 15,
			name: "final",
			matchId: "",
			winner: "",
			nextMatchId: 0,
			nextLooserMatchId: 0,
			tournamentRoundText: 4,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					picture: null,
				},
			],
		},
	];
	return dummyTeamsStructureArr;
};
// tournament/league schedule dummy data for eigth teams
exports.dummyTeamsStructureForEightTeams = async () => {
	let dummyTeamsStructureArr = [
		{
			_id: new mongoose.Types.ObjectId(),
			id: 1,
			name: "round 2 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 5,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 2,
			name: "round 2 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 5,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 3,
			name: "round 2 - match 3",
			matchId: "",
			winner: "",
			nextMatchId: 6,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 4,
			name: "round 2 - match 4",
			matchId: "",
			winner: "",
			nextMatchId: 6,
			nextLooserMatchId: 0,
			tournamentRoundText: 2,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 5,
			name: "playoff 1 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 7,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 6,
			name: "playoff 1 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 7,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 7,
			name: "final",
			matchId: "",
			winner: "",
			nextMatchId: 0,
			nextLooserMatchId: 0,
			tournamentRoundText: 4,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					picture: null,
				},
			],
		},
	];
	return dummyTeamsStructureArr;
};
// tournament/league schedule dummy data for four teams
exports.dummyTeamsStructureForFourTeams = async () => {
	let dummyTeamsStructureArr = [
		{
			_id: new mongoose.Types.ObjectId(),
			id: 1,
			name: "playoff 1 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 3,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 2,
			name: "playoff 1 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 3,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 3,
			name: "final",
			matchId: "",
			winner: "",
			nextMatchId: 0,
			nextLooserMatchId: 0,
			tournamentRoundText: 4,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					picture: null,
				},
			],
		},
	];
	return dummyTeamsStructureArr;
};
// tournament/league schedule dummy data for two teams
exports.dummyTeamsStructureForTwoTeams = async () => {
	let dummyTeamsStructureArr = [
		{
			_id: new mongoose.Types.ObjectId(),
			id: 1,
			name: "playoff 1 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 3,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 2,
			name: "playoff 1 - match 2",
			matchId: "",
			winner: "",
			nextMatchId: 3,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 3,
			name: "final",
			matchId: "",
			winner: "",
			nextMatchId: 0,
			nextLooserMatchId: 0,
			tournamentRoundText: 4,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					picture: null,
				},
			],
		},
	];
	return dummyTeamsStructureArr;
};
// tournament/league schedule dummy data for one team
exports.dummyTeamsStructureForOneTeams = async () => {
	let dummyTeamsStructureArr = [
		{
			_id: new mongoose.Types.ObjectId(),
			id: 1,
			name: "playoff 1 - match 1",
			matchId: "",
			winner: "",
			nextMatchId: 2,
			nextLooserMatchId: 0,
			tournamentRoundText: 3,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
			],
		},
		{
			_id: new mongoose.Types.ObjectId(),
			id: 2,
			name: "final",
			matchId: "",
			winner: "",
			nextMatchId: 0,
			nextLooserMatchId: 0,
			tournamentRoundText: 4,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					picture: null,
				},
			],
		},
	];
	return dummyTeamsStructureArr;
};
// tournament/league schedule dummy data for one final team
exports.dummyTeamsStructureForOneFinalTeam = async () => {
	let dummyTeamsStructureArr = [
		{
			_id: new mongoose.Types.ObjectId(),
			id: 1,
			name: "final",
			matchId: "",
			winner: "",
			nextMatchId: 0,
			nextLooserMatchId: 0,
			tournamentRoundText: 4,
			participants: [
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					status: null,
					picture: null,
				},
				{
					id: new mongoose.Types.ObjectId(),
					name: "TBA",
					resultText: null,
					isWinner: false,
					picture: null,
				},
			],
		},
	];
	return dummyTeamsStructureArr;
};
