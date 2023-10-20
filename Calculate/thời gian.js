function updateGreeting() {
    const timeElenment2 = document.getElementById('time2');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const timeString2 = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;
    timeElenment2.textContent = timeString2;
}
setInterval(updateGreeting, 1000);
updateGreeting();
function tinhtong(){
    var gia = 50000;
    let soluong = document.getElementById("soluong").value;
    var total = soluong * gia;
    if (total >= 100000){
        total *= 0.95;
    }else{
        total = total;
    }
    document.getElementById("total").innerHTML = total;
    
}