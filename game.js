var toss = ["BATTING","BOWLING"];
var tossf = toss[Math.floor(Math.random()*toss.length)];
document.getElementById('toss').innerText = "YOU ARE "+ tossf;
var pwicket = 0;
var pscore = 0;
var bwicket = 0;
var bscore = 0;
var play = 0;
var rand = 0; 
/*
var k=1;
for(i=0;i<6;i++)
{
    document.getElementById((i+1)+'ch').addEventListener("click",()=>{
        document.getElementById('finalp').innerHTML ="<img src='i"+(k+1)+".png'>"
    });
    k++;
}
*/
document.getElementById('1ch').addEventListener("click",()=>{check(1)});
document.getElementById('2ch').addEventListener("click",()=>{check(2)});
document.getElementById('3ch').addEventListener("click",()=>{check(3)});
document.getElementById('4ch').addEventListener("click",()=>{check(4)});
document.getElementById('5ch').addEventListener("click",()=>{check(5)});
document.getElementById('6ch').addEventListener("click",()=>{check(6)});
function check(ch)
{
if((pwicket<3)||(bwicket<3))
{
if(tossf == "BATTING")
{
    if((pscore>bscore)&&(bwicket == 3))
    {
        console.log("game over");
        document.getElementById('win').style.display = "block";
    }
    else{
    play = ch;
    document.getElementById('finalp').innerHTML = "<img src='i"+play+".png' style='margin-left:30%;width:40%;height:200px'><br>";
    rand = (Math.floor(Math.random()*6))+1;
    document.getElementById('finalb').innerHTML = "<img src='i"+rand+".png' style='margin-left:30%;width:40%;height:200px'><br>";
    if(pwicket>=3)
    {
        if(bwicket<3)
        {
            alert("1ST INNINGS COMPLETED");
            console.log("1st half over");
            tossf = "BOWLING";
            document.getElementById('toss').innerText = "YOU ARE "+ tossf;
        }
    }
    if(pwicket<3)
    {
        if(play == rand)
        {
            pwicket++;
        }
        else
        {
            pscore += play;
        }
    }
    document.getElementById('statsp').innerText = "SCORE: "+pscore+" / "+pwicket;
}
}
else if(tossf == "BOWLING")
{
    if((bscore>pscore)&&(pwicket == 3))
    {
        console.log("game over");
        document.getElementById('lose').style.display = "block";
    }
    else{
    play = ch;   
    document.getElementById('finalp').innerHTML = "<img src='i"+play+".png' style='margin-left:30%;width:40%;height:200px'><br>";
    rand = (Math.floor(Math.random()*6))+1;
    document.getElementById('finalb').innerHTML = "<img src='i"+rand+".png' style='margin-left:30%;width:40%;height:200px'><br>";
    if(bwicket == 3)
    {
        if(pwicket<3)
        {
            alert("1ST INNINGS COMPLETED");
            console.log("1st half over");
            tossf = "BATTING";
            document.getElementById('toss').innerText = "YOU ARE "+ tossf;
        }
    }
    if(bwicket<3)
    {
        if(play == rand)
        { 
            bwicket++;
        }
        else
        {
            bscore += rand;
        }
    }
    document.getElementById('statsb').innerText = "SCORE: "+bscore+" / "+bwicket;
}
}
}
else
{
console.log("game over");
if(pscore>bscore)
{
    document.getElementById('win').style.display = "block";
}
else if(bscore>pscore)
{
    document.getElementById('lose').style.display = "block";
}
else
{
    document.getElementById('win').style.display = "block";
}
}
}