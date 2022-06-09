function ageInDays(){
var age = prompt("your age?");
var h1 = document.createElement("h1");
var text = document.createTextNode(age);
h1.appendChild(text);
h1.setAttribute('id', 'age-in-box');
document.getElementById('box').appendChild(h1);
}

function reset(){
    document.getElementById('age-in-box').remove();
}




function catGenerator(){
    var catDiv = document.getElementById('cat-div');
    var image = document.createElement('img');
    image.src = "https://cataas.com/cat?width=100";
    image.setAttribute("class", "cat");
    image.setAttribute("id", "cat");
    catDiv.appendChild(image);    
}
function catReset(){
    var image = document.getElementById('cat');
    image.remove();
}




function rockClick(){
    var rock = document.getElementById("img-r");
    var paper = document.getElementById("img-p");
    var scisors = document.getElementById("img-s");
    var rpsDiv = document.getElementById("rps-div");
    rock.remove();
    paper.remove();
    scisors.remove();

    var itemDiv0 = document.createElement("div")
    var itemDiv1 = document.createElement("div")
    var itemDiv2 = document.createElement("div")
    var rock1 = document.createElement("img")
    rock1.setAttribute("class", "your-pick")
    rock1.src = "http://images.clipartpanda.com/rock-clipart-niEXaqXrT.png"
    var rock2 = document.createElement("img")
    rock2.setAttribute("class", "your-pick")
    rock2.src = "http://images.clipartpanda.com/rock-clipart-niEXaqXrT.png"
    var paper2 = document.createElement("img")
    paper2.src = "http://images.clipartpanda.com/paper-clip-art-4i9kbAxiE.png"
    var scisors2 = document.createElement("img")
    scisors2.src = "http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg"

    var rnd = Math.floor(Math.random() * 3);


    itemDiv0.appendChild(rock1);
    switch(rnd){
        case 0:
            itemDiv2.appendChild(rock2);
            var text = document.createTextNode("tie")
            break;
        case 1:
            var text = document.createTextNode("lose")
            itemDiv2.appendChild(paper2);
            break;
        default:
            var text = document.createTextNode("win")
            itemDiv2.appendChild(scisors2);
    }

    itemDiv1.appendChild(text);
    rpsDiv.appendChild(itemDiv0);
    rpsDiv.appendChild(itemDiv1);
    rpsDiv.appendChild(itemDiv2);
}



function paperClick(){
    var rock = document.getElementById("img-r");
    var paper = document.getElementById("img-p");
    var scisors = document.getElementById("img-s");
    var rpsDiv = document.getElementById("rps-div");
    rock.remove();
    paper.remove();
    scisors.remove();

    var itemDiv0 = document.createElement("div")
    var itemDiv1 = document.createElement("div")
    var itemDiv2 = document.createElement("div")
    var text = document.createTextNode("sdasda")
    var paper1 = document.createElement("img")
    paper1.setAttribute("class", "your-pick")
    paper1.src = "http://images.clipartpanda.com/paper-clip-art-4i9kbAxiE.png"


    var rock2 = document.createElement("img")
    rock2.setAttribute("class", "your-pick")
    rock2.src = "http://images.clipartpanda.com/rock-clipart-niEXaqXrT.png"
    var paper2 = document.createElement("img")
    paper2.src = "http://images.clipartpanda.com/paper-clip-art-4i9kbAxiE.png"
    var scisors2 = document.createElement("img")
    scisors2.src = "http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg"

    var rnd = Math.floor(Math.random() * 3);


    itemDiv0.appendChild(paper1);
    
    switch(rnd){
        case 0:
            itemDiv2.appendChild(rock2);
            var text = document.createTextNode("win")
            break;
        case 1:
            var text = document.createTextNode("tie")
            itemDiv2.appendChild(paper2);
            break;
        default:
            var text = document.createTextNode("lose")
            itemDiv2.appendChild(scisors2);
    }

    itemDiv1.appendChild(text);
    rpsDiv.appendChild(itemDiv0);
    rpsDiv.appendChild(itemDiv1);
    rpsDiv.appendChild(itemDiv2);
}

function scisorsClick(){
    var rock = document.getElementById("img-r");
    var paper = document.getElementById("img-p");
    var scisors = document.getElementById("img-s");
    var rpsDiv = document.getElementById("rps-div");
    rock.remove();
    paper.remove();
    scisors.remove();

    var itemDiv0 = document.createElement("div")
    var itemDiv1 = document.createElement("div")
    var itemDiv2 = document.createElement("div")
    var text = document.createTextNode("sdasda")
    var scisors1 = document.createElement("img")
    scisors1.setAttribute("class", "your-pick")
    scisors1.src = "http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg"


    var rock2 = document.createElement("img")
    rock2.setAttribute("class", "your-pick")
    rock2.src = "http://images.clipartpanda.com/rock-clipart-niEXaqXrT.png"
    var paper2 = document.createElement("img")
    paper2.src = "http://images.clipartpanda.com/paper-clip-art-4i9kbAxiE.png"
    var scisors2 = document.createElement("img")
    scisors2.src = "http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg"

    var rnd = Math.floor(Math.random() * 3);


    itemDiv0.appendChild(scisors1);
    
    switch(rnd){
        case 0:
            itemDiv2.appendChild(rock2);
            var text = document.createTextNode("lose")
            break;
        case 1:
            var text = document.createTextNode("win")
            itemDiv2.appendChild(paper2);
            break;
        default:
            var text = document.createTextNode("tie")
            itemDiv2.appendChild(scisors2);
    }

    itemDiv1.appendChild(text);
    rpsDiv.appendChild(itemDiv0);
    rpsDiv.appendChild(itemDiv1);
    rpsDiv.appendChild(itemDiv2);
}