var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);

//EventListener to clear previous scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

//Local storage
if (scores !== null) {
    for (var i = 0; i < scores.length; i++) {
        var liCreate = document.createElement("li");
        liCreate.textContent = scores[i].initials + " " + scores[i].score;
        highScore.appendChild(liCreate);
    }
}
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
