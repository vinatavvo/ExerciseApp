function showDiv(int){ 
    var x = document.getElementById("vid" + int);
    console.log(x);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}