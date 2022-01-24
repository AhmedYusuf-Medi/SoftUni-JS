function GetBonusScore(input) {
    let startinScore = Number(input[0]);

    let bonusScore = 0.0;

    if (startinScore <= 100) 
    {
        bonusScore = 5;
    } 
    else if (startinScore > 1000) 
    {
        bonusScore = startinScore * 0.10;
    } 
    else 
    {
        bonusScore = startinScore * 0.20;
    }

    if (startinScore % 2 === 0) 
    {
        bonusScore += 1;
    } 
    else if (startinScore % 10 === 5) 
    {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(startinScore + bonusScore);
}

GetBonusScore(["20"]);