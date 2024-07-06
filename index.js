const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");

const haxvalue = ()=>{
    let numberrandom = "0123456789ABCDEF";
    let colors = "#";
        for(let i=0;i<6;i++){
           colors = colors+(numberrandom[Math.floor(Math.random()*16)])
        }
        return colors;
       
}

let rgb1 = "#40C9FF";
let rgb2= "#E81CFF";
const handlebutton1 = ()=>{
    rgb1= haxvalue();
    document.getElementById('btn-1').innerText=rgb1;
    document.body.style.backgroundImage = `linear-gradient(90deg ,${rgb1},${rgb2})`;
    document.getElementById("backgrond_code").innerText=`background:linear-gradient(to right ,${rgb1},${rgb2})`;
    document.getElementById('btn-1').style.backgroundColor=`${rgb1}`;
}

const handlebutton2 = ()=>{
     rgb2= haxvalue();
    document.getElementById('btn-2').innerText=rgb2;
    document.body.style.backgroundImage = `linear-gradient(to left,${rgb1},${rgb2}`;
    document.getElementById("backgrond_code").innerText=`background:linear-gradient(to right ,${rgb1},${rgb2})`;
    document.getElementById('btn-2').style.backgroundColor=`${rgb2}`;
}

const background_div = document.getElementById('backgrond_code');
background_div.addEventListener("click",()=>{
navigator.clipboard.writeText(background_div.innerText);
})

button1.addEventListener("click",handlebutton1)
button2.addEventListener("click",handlebutton2)
