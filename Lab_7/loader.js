let loader = document.getElementById("loader");
let loaderProgress = document.getElementById("progress");

let main = document.querySelector("main");
let progress = 0;

let interval = setInterval(function() {
    loaderProgress.style.width = `${progress}%`;
    
    if (progress == 100) {
        stopLoader();
    } else {
        progress += 10;
    }
}, 200);

function stopLoader() {
    clearInterval(interval);
    loader.style.display = "none";
    main.style.display = "block";
}