window.onload = () => {
  const minutes = document.getElementById("minutes");
  const tens = document.getElementById("tens");
  const seconds = document.getElementById("seconds");

  const lap = document.getElementById("laps");
  const lapTime = document.querySelector('.lap_time');

  const startBtn = document.getElementById("start_btn");
  const stopBtn = document.getElementById("stop_btn");
  const resetBtn = document.getElementById("reset_btn");

  
  initialOrReset(true)

  let minutesSet = 0;
  let secondsSet = 0;
  let tensSet = 0;
  let Interval;

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    dimEffect()
    initialOrReset(false)
  };
  stopBtn.onclick = () => {
    clearInterval(Interval);
    const li = document.createElement("li");
    li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML}. ${tens.innerHTML} </span>`;
    lap.appendChild(li);
    lapTime.classList.remove("diming-effect")
    initialOrReset(true)
  };
  resetBtn.onclick = () => {
    clearInterval(Interval);
    minutesSet = "00";
    secondsSet = "00";
    tensSet = "00";
    minutes.innerHTML = minutesSet;
    seconds.innerHTML = secondsSet;
    tens.innerHTML = tensSet;
    lap.innerHTML = ''
    lapTime.classList.remove("diming-effect")
    initialOrReset(true)
  };

  function startTimer() {
    stopBtn.disabled = false
    tensSet++;
    if (tensSet < 9) {
      tens.innerHTML = "0" + tensSet;
    }
    if (tensSet > 9) tens.innerHTML = tensSet;
    if (tensSet > 99) {
      secondsSet++;
      seconds.innerHTML = "0" + secondsSet;
      tensSet = 0;
      tens.innerHTML = "0" + 0;
    }
    if (secondsSet > 9) seconds.innerHTML = secondsSet;
    if (secondsSet > 60) {
      minutesSet++;
      minutes.innerHTML = "0" + minutesSet;
      secondsSet = 0;
      seconds.innerHTML = "0" + 0;
    }
    if (minutesSet > 9) minutes.innerHTML = minutesSet;
  }
  function dimEffect(){
    
    lapTime.classList.add("diming-effect")
  }
  
  function initialOrReset(isIt){
      if(isIt){
  
          stopBtn.disabled = true
          startBtn.disabled = false
      }else{
          stopBtn.disabled = false
          startBtn.disabled = true
      }
  }
};
