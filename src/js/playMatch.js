import compareOptions from './compareOptions';

export default function playMatch() {
	const options = document.querySelectorAll('.game__match-options button');

	//Computer Options
	const computerOptions = ['rock', 'paper', 'scissors'];

	return options.forEach(option => {
		option.addEventListener('click', function() {
			//Computer Choice
			const computerNumber = Math.floor(Math.random() * 3);
			const computerChoice = computerOptions[computerNumber];
			compareOptions(this.textContent, computerChoice);
		});
	});
}
