function GetBasketballGerSum(startSum) {
    let tax = startSum;
    let shoes = tax - tax * 0.40;
    tax = shoes;
    let jourcey = tax - tax * 0.20;
    tax = jourcey;
    let ball = tax * 0.25;
    tax = ball;
    let acesories = tax * 0.20;
    let finalSum = startSum + shoes + jourcey + ball + acesories;
    console.log(finalSum); 
}
GetBasketballGerSum(365);