function SumThreeSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    console.log(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
}

SumThreeSeconds(["35", "45", "44"]);