function ConvertSpeedToText(speed)
{
    if(speed < 10)
    {
       console.log('slow');
    }
    else if(speed > 10 && speed <= 50)
    {
        console.log('average');
    }
    else if(speed > 10 && speed <= 50)
    {
        console.log('fast');
    }
    else if(speed > 10 && speed <= 50)
    {
        console.log('ultra fast');

    }
    else
    {
        console.log('extreamly fast');

    }
}