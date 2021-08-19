const count = document.querySelector(".time")
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")

let min = 0, sec = 0, ms = 0;
let timeRef; 

//run the time 
function runTime() {
    timeRef = setInterval ( () => { 
        count.innerHTML = `${min} : ${sec} : ${ms}`; 
        ms++;
        if (ms === 100) 
        {
            ms = 0;
            sec++;
            if (sec === 60) 
            {
                sec = 0;
                min++;
            }
        }
} , 1000 ) 
}

//start button - it will start the time from 0 
function timeStart() {
    runTime();
    }

//stop button - it will stop the time
function timeStop() {
    clearInterval(timeRef );
    
}

//reset button - it will reset , the value will be 0 again . 
function timeReset() {
    count.innerHTML = ` 0 : 0 : 0`;
    min = 0, sec = 0, ms = 0;
    timeStop()

}

//**********************event Listnears **********************
btnStart.addEventListener('click', function () 
{
    timeStart(); 
});

btnStop.addEventListener('click', function () 
{
    timeStop();
});

btnReset.addEventListener('click', function () 
{
    timeReset();
});

