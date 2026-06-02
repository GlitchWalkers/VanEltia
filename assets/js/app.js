const ToTop = document.getElementById("ToTop");
let Counter=0;
const Cambio = document.getElementById("Origen");

ToTop.onclick = function()
{
Counter++;
window.scrollTo({top:0,behavior:"instant"});
console.log(Counter);

if(Counter==1)
    {
        Cambio.style.backgroundColor = "blue";
    }
else
    {
        Cambio.style.backgroundColor = "transparent";
    };
}