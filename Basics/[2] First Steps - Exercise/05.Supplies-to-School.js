﻿function MaterialsSum(pens, markers, boardCleaner, discount)
{
    pens = pens * 5.80;
    markers = markers * 7.20;
    boardCleaner = boardCleaner * 1.20;
    let sumDisc = (pens + markers + boardCleaner) * (discount * 0.01);
    let summary  = pens + markers + boardCleaner - sumDisc;
    console.log(summary);
}
MaterialsSum(2, 3, 4, 25);