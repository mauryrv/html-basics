
console.log('Hi there');

function sleep (miliseconds)
{
let startTime = Date.now();
while(Date.now()< startTime+miliseconds);

}

sleep(2000);


console.log('Hi there after sleep');