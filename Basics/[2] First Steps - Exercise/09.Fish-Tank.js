function GetFishTanksLiters(input) {
    let tankLength = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = tankLength * tankWidth * tankHeight;
    let totalLiters = tankVolume * 0.001;

    percent *= 0.01;

    let realLiters = totalLiters * (1 - percent);

    console.log(realLiters);
}
GetFishTanksLiters(["85", "75", "47", "17"]);
GetFishTanksLiters(["105", "77", "89", "18.5"]);