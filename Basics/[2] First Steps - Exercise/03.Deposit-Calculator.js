function Calculate(sum, term, interest)
{
   let interestSoFar = sum * 0.057;
   let monthlyInterest = interestSoFar / 12;
    console.log(sum + 3 * monthlyInterest);
}
Calculate(200, 5, 7.7);