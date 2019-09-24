(function () {

    var gallery = [
        "assets/scissors.png",
        "assets/rock.png",
        "assets/paper.png",
    ];


    var imgSourcePlayer = document.getElementById("img-you");
    var imgSourceComputer = document.getElementById("img-computer");

    document.querySelectorAll('.buttons').forEach(button => {
        button.addEventListener('click', function () {

            var chosenButton = button.getAttribute("id");

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


        imgSourceComputer.setAttribute("src", gallery[Math.floor(Math.random() * 3)]);

        var player = imgSourcePlayer.getAttribute("src");
        var computer = imgSourceComputer.getAttribute("src");

        if ((player === "assets/scissors.png" && computer === "assets/paper.png")
            || (player === "assets/rock.png" && computer === "assets/scissors.png")
            || (player === "assets/paper.png" && computer === "assets/rock.png")) {
            document.getElementById("winner-result").innerHTML = "Winner: You!!!";

            confetti.start();

        } else if ((player === "assets/scissors.png" && computer === "assets/rock.png")
            || (player === "assets/rock.png" && computer === "assets/paper.png")
            || (player === "assets/paper.png" && computer === "assets/scissors.png")) {
            document.getElementById("winner-result").innerHTML = "Winner: Evil Computer";

        } else {
            document.getElementById("winner-result").innerHTML = "Winner: Even!";
        }


    });


})();