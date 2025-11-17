


let count = 0;

document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("counter").innerHTML = count ;
    console.log(count);
}
