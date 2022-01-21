function YardGreening(input) {
    let squareMeters = Number(input[0]);
    let sum = (squareMeters * 7.61);
    let discount = sum * 0.18;

    sum -= discount;

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The final price is: ${discount} lv.`);
}

YardGreening([550]);
YardGreening([150]);