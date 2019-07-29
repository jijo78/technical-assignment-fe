export default function startGame() {
	const playBtn = document.querySelector('.game__intro button');
	const introScreen = document.querySelector('.game__intro');
	const match = document.querySelector('.game__match');

	playBtn.addEventListener('click', () => {
		introScreen.classList.add('fadeOut');
		match.classList.add('fadeIn');
	});
}
