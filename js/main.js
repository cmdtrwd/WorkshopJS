let count = 0;
let pushInterval;

function NotifyPush() {
	// alert("Push!");
    count++;
    console.log("Push button is clicked");
    console.log("Push " + count + " times");

    document.getElementById("circle").classList.add("active");    
    pushInterval = setInterval(DeactivatePush, 1000);
}


function DeactivatePush(){
    document.getElementById("circle").classList.remove("active");
    clearInterval(pushInterval);
}