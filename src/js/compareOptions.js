let playerScore = 0;
let computerScore = 0;
export default function compareOptions(playerChoice, computerChoice) {
	const winner = document.querySelector('.game__match-winner');

	//Checking for a tie
	if (playerChoice === computerChoice) {
		winner.textContent = '=';
		return;
	}

	switch (`${playerChoice} ${computerChoice}`) {
		case 'rock scissors':
		case 'scissors paper':
		case 'paper rock':
			winner.textContent = 'o';
			playerScore++;
			updateScore();
			break;
		case 'rock paper':
		case 'paper scissors':
		case 'scissors rock':
			winner.textContent = 'x';
			computerScore++;
			updateScore();
			break;
	}

	function updateScore() {
		const playerScoreP = document.querySelector('.game__score-player-score p');
		const computerScoreP = document.querySelector('.game__score-computer-score p');
		playerScoreP.textContent = playerScore;
		computerScoreP.textContent = computerScore;
	}
}
