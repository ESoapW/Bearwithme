// JavaScript Document
var t=1;
function test()
{
if(t==5)
t=1;
change(t++);
setTimeout(test,1000);
}

function change(x)//让imgx显示 而让其他的不显示
{
for(i=1;i<5;i++)
{
document.getElementById("img"+i).style.display="none";
document.getElementById("t"+i).style.backgroundColor="#ffffff"//让所有的标题 背景变白
}
document.getElementById("img"+x).style.display="block"; 
document.getElementById("t"+x).style.backgroundColor="#cccccc"; //让特定的标题背景变成灰色
}// JavaScript Document