var icon = document.getElementById("icon");
icon.onclick = function changetheme(e){
    e.preventDefault();
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="image/169367.png";
    }
    else{
        icon.src="image/moon.svg";
    }
};