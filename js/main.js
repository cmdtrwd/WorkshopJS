let count = 0;
let pushInterval;
let isEnabled = true;

function NotifyPush() {
	// alert("Push!");
    count++;
    console.log("Push button is clicked");
    console.log("Push " + count + " times");
    if (isEnabled){
        document.getElementById("circle").classList.add("active");    
        isEnabled = false;
        pushInterval = setInterval(DeactivatePush, 1000);
    }
}


function DeactivatePush(){
    let circle = document.getElementById("circle");
    circle.classList.remove("active");
    isEnabled = true;
    clearInterval(pushInterval);

    let box = circle.parentElement;
    console.log(box);
    box.classList.toggle("active");
}