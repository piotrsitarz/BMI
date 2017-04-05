$(document).ready(function(){
    $(".button").click(function(){
       $(this).parent().next().slideToggle();     
    });
});

function calculateBMI() {
    
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    height = height / 100;
    var BMI = (weight / (height*height));
    BMI = Math.round(BMI * 100) / 100;
    BMI = BMI.toFixed(1);
    
    
    if(weight == "" && height != "") {
        window.alert("Proszę podać swoją wagę.");
        return;
    }
    
    if(height == "" && weight != "" ) {
        window.alert("Proszę podać swój wzrost.");
        return;
    }
    
    if(weight == "" && height == "") {
        window.alert("Proszę uzupełnić wartości.");
        return;
    }
    
    if(BMI < 16) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI + "<br/>" + '<img src=cry.png>'  + "<h3>wygłodzenie</h3>";
    }
    
    if(BMI >= 16 && BMI < 17) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=scared.png>'  + " <h3>wychudzenie</h3>";
    }
    
    if(BMI >= 17 && BMI < 18.5) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=flushed.png>'  + " <h3>niedowaga</h3>";
    }
    
    if(BMI >= 18.5 && BMI < 25) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=happy.png>'  + " <h3>wartość prawidłowa</h3>";
    }
    
    if(BMI >= 25 && BMI < 30) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=flushed.png>'  + " <h3>nadwaga</h3>";
    }
    
    if(BMI >= 30 && BMI < 35) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=scared.png>'  + " <h3>I stopień otyłości</h3>";
    }
    
    if(BMI >= 35 && BMI < 40) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=cry.png>'  + " <h3>II stopień otyłości</h3>";
    }
    
    if(BMI > 40) {
        document.getElementById("score").innerHTML = "<h2>Twoje BMI wynosi</h2> " + "<br/>" + BMI  + "<br/>" + '<img src=cry.png>'  + " <h3>otyłość skrajna</h3>";
    }
    
    document.getElementById("score").style.display = "block";
}


document.getElementById("score").style.display = "none";


document.getElementById("calculator").onclick = function() { calculateBMI(); };









