/* JS- Carousel words */
let words = ['Computer Engineer', 'Dreamer', 'STEM-Major', 'Automotive Passionate', 'Problem solver', 'Leader of myself'];
let counter = 0;
let word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter=0;
    }
}

/* JS- Button to top */
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


/*SIDER BAR FUNCTION */
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


