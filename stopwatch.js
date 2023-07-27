let hrs = "00";
let min = "00";
let sec = "00";
//let time = hrs+":"+min+":"+sec;
var myInterval;
function display()
{
    
    time = hrs+":"+min+":"+sec;
    document.getElementById('timepart').innerHTML=time;
}
function reset()
{
    hrs = 0;
    min = 0;
    sec = 0;
    clearInterval(myInterval);
    display();
}
function start()
{
    myInterval = setInterval(() => {
        sec++;
        if(sec>=60)
        {
            sec='00';
            min++;
        }
        if(min>=60)
        {
            min='00';
            hrs++;
        }
        display();
    }, 1000);
}
function stop()
{
    clearInterval(myInterval);
    display();
}