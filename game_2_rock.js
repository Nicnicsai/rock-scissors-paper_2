(function () {

    var gallery = [
        "assets/scissors.png",
        "assets/rock.png",
        "assets/paper.png",
    ];

    var youScore = 0;

    function incrementCountYou(){
        youScore++;
    }

    var computerScore = 0;

    function incrementCountComputer(){
        computerScore++;
    }

    function restart() {
        document.getElementById("img-you").style.backgroundColor = "#75FAC7";
        document.getElementById("img-computer").style.backgroundColor = "#75FAC7";
        document.getElementById("GameBg").style.backgroundColor = "#75FAC7";
        confetti.stop();
    }


    var imgSourcePlayer = document.getElementById("img-you");
    var imgSourceComputer = document.getElementById("img-computer");

    document.querySelectorAll('.buttons').forEach(button => {
        button.addEventListener('click', function () {

            var chosenButton = button.getAttribute("id");
            restart();

            if (chosenButton === "scissors-btn") {
                imgSourcePlayer.setAttribute("src", gallery[0]);
            } else if (chosenButton === "rock-btn") {
                imgSourcePlayer.setAttribute("src", gallery[1]);
            } else {
                imgSourcePlayer.setAttribute("src", gallery[2]);
            }

        });
    });


    document.getElementById("play-btn").addEventListener("click", function () {

        restart();

        imgSourceComputer.setAttribute("src", gallery[Math.floor(Math.random() * 3)]);

        var player = imgSourcePlayer.getAttribute("src");
        var computer = imgSourceComputer.getAttribute("src");

        if ((player === "assets/scissors.png" && computer === "assets/paper.png")
            || (player === "assets/rock.png" && computer === "assets/scissors.png")
            || (player === "assets/paper.png" && computer === "assets/rock.png")) {
            document.getElementById("winner-result").innerHTML = "Winner: You!!!";
            document.getElementById("img-you").style.backgroundColor = "#33C191";
            incrementCountYou();
            document.getElementById("youScore").innerHTML = "You: " + youScore;
            if (youScore === 3) {
                confetti.start();
            }



        } else if ((player === "assets/scissors.png" && computer === "assets/rock.png")
            || (player === "assets/rock.png" && computer === "assets/paper.png")
            || (player === "assets/paper.png" && computer === "assets/scissors.png")) {
            document.getElementById("winner-result").innerHTML = "Winner: Evil Computer";
            document.getElementById("img-computer").style.backgroundColor = "#33C191";
            incrementCountComputer();
            document.getElementById("computerScores").innerHTML = "Computer: " + computerScore;

            if (computerScore === 3) {
                document.getElementById("GameBg").style.backgroundColor = "#c85733";
            }

        } else {
            document.getElementById("winner-result").innerHTML = "Winner: Even!";
        }

    });



})();