document.getElementById('submit').addEventListener('click', gameStart);

let target = Math.floor(Math.random() * 100 + 1);
function gameStart() {
    console.log(target);
    let inp = parseInt(document.getElementById('number').value);
    console.log(inp);
    const feed = document.getElementById('feedbackpara');
    if (target < inp) {
        // const txtclear = document.createTextNode("");
        // feed.appendChild(txtclear);
        document.getElementById("feedbackpara").innerHTML = "";
        const txt = document.createTextNode('Guess is higher');
        console.log(txt);

        feed.appendChild(txt);
    }
    else if (target > inp) {
        // const txtclear = document.createTextNode("");
        // feed.appendChild(txtclear);
        document.getElementById("feedbackpara").innerHTML = "";
        const txt = document.createTextNode(" Guess is lower");
        console.log(txt);
        feed.appendChild(txt);
    }
    else {
        // const txtclear = document.createTextNode("");
        // feed.appendChild(txtclear);
        document.getElementById("feedbackpara").innerHTML = "";
        const txt = document.createTextNode("Congratulation, You won the game");
        console.log(txt);
        feed.appendChild(txt);
    }
}





