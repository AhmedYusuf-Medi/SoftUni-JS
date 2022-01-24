function AddToTimeFifteenMinutes(input) 
{
    let passedHours = Number(input[0]);
    let passedMinutes = Number(input[1]);

    let hours = passedHours * 60;
    let minutes = hours + passedMinutes + 15;

    hours = Math.floor(minutes / 60);
    let minutesLeft = minutes % 60;

    if (hours >= 24) 
    {
        console.log(`0:${minutesLeft >= 10 ? minutesLeft : "0" + minutesLeft}`);
    } 
    else 
    {
        console.log(`${hours.toFixed(0)}:${minutesLeft >= 10 ? minutesLeft : "0" + minutesLeft}`);
    }
}

AddToTimeFifteenMinutes(["1", "46"]);