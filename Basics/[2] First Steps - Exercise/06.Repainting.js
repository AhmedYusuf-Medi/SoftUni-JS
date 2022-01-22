function Repaint(cover, paint, thinner, hours)
{
  cover = (cover + 2) * 1.5;
  let plastic = 0.40;
  paint += (paint * 0.1);
  paint = paint * 14.50;
  thinner = thinner * 5.00;
  let workersForHour = ((cover + plastic + paint +  thinner) * 0.3) * hours;
  let painting = cover + plastic + paint + thinner + workersForHour;
  console.log(painting);
}
Repaint(10, 11, 4, 8);