const cursor = document.querySelector("#cursor")

document.addEventListener("mousemove",function(e){
    cursor.style.top = `${e.pageY-4}px`;
    cursor.style.left = `${e.pageX-4}px`;
})