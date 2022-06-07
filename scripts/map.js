let myImage = document.getElementById("slider1")

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');    

    if(mySrc === "docs/slide02.png") {
        myImage.setAttribute('src', "docs/slide01.png");
    }
    else if (mySrc === "docs/slide01.png") 
    {
        myImage.setAttribute('src', "docs/slide03.png");
    } else if (mySrc === "docs/slide03.png"){

        myImage.setAttribute('src', "docs/slide02.png");
    } else {
        return console.error();
    }
}


