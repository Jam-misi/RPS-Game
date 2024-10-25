
function animateChoice(choice) {
    choice.classList.add('selected');
    setTimeout(() => {
        choice.classList.remove('selected');
    }, 500);
}
