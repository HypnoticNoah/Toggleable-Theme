function reset() {
    location.reload();
}
var all_colors = document.getElementsByTagName("body");
var getAllColors = [];
for (let i=0; i < all_colors.length; i++) {
    getAllColors.push(all_colors[i].classList[1]);
}
function colorChange(colorThingy) {
    if (colorThingy.value === 'dark') {
        darkTheme();
    } else if (colorThingy.value === 'light') {
        lightTheme();
    } else if (colorThingy.value === 'green') {
        greenTheme();
    } else if (colorThingy.value === 'red') {
        redTheme();
    } else if (colorThingy.value === 'yellow') {
        yellowTheme();
    } else if (colorThingy.value === 'blue') {
        blueTheme();
    } else if (colorThingy.value === 'random') {
        randomTheme();
    }
}
    function darkTheme() {
        for (let i = 0; i < all_colors.length; i++) {
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add('bg-dark');
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to Dark!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }
    function lightTheme() {
        for (let i = 0; i < all_colors.length; i++) {
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add('bg-light');
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to Light!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }
    function greenTheme() {
        for (let i = 0; i < all_colors.length; i++) {
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add('bg-success');
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to Green!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }
    function redTheme() {
        for (let i = 0; i < all_colors.length; i++) {
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add('bg-danger');
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to Red!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }
    function yellowTheme() {
        for (let i = 0; i < all_colors.length; i++) {
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add('bg-warning');
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to Yellow!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }
    function blueTheme() {
        for (let i = 0; i < all_colors.length; i++) {
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add('bg-primary');
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to Blue!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }
    function randomTheme() {
        let choices = ['bg-dark', 'bg-light', 'bg-success', 'bg-danger', 'bg-warning', 'bg-primary']

        for (let i=0; i < all_colors.length; i++) {
            let randomNumber = Math.floor(Math.random() * 4);
            all_colors[i].classList.remove(all_colors[i].classList[1]);
            all_colors[i].classList.add(choices[randomNumber]);
            var newDiv = document.createElement("h1");
            var newContent = document.createTextNode("You have changed your theme to a Random Color!");
            newDiv.appendChild(newContent);
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    }