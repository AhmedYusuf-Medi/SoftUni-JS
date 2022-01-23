function AreaOfFigures(input) 
{
    let figureType = input[0];

    let result = 0;

    switch (figureType) 
    {
        case "square":
            let side = Number(input[1]);
            result = side * side;
            break;
        case "rectangle":
            let length = Number(input[1]);
            let width = Number(input[2]);
            result = length * width;
            break;
        case "circle":
            let radius = Number(input[1]);
            result = Math.PI * radius * radius;
            break;
        case "triangle":
            let sideHeight = Number(input[1]);
            let height = Number(input[2]);

            result = (sideHeight * height) / 2;
            break;
    }

    console.log(`${result.toFixed(3)}`);
}

AreaOfFigures(["square", "10"]);