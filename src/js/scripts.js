const scrollButton = document.querySelector('.scrollButton img');
const body = document.querySelector ('html body');

console.log(scrollButton);


scrollButton.onclick = function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    let n = $('html body').height();
    body.animate({ scrollTop: 100 }, 50);
};

