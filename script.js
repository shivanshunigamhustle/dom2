// let bulb=document.querySelector("#box");
// let btn=document.querySelector("button");


// btn.addEventListener('click',function(){
//     var c1=Math.floor(Math.random()*256);
//     var c2=Math.floor(Math.random()*256);
//     var c3=Math.floor(Math.random()*256);
//     console.log(c1);
//     console.log(c2);
//     console.log(c3);
    
    

    
        
    
//     bulb.style.backgroundColor=`rgb(${c1}, ${c2},${c3})`;
//     bulb.innerHTML=`rgb(${c1}, ${c2},${c3})`
        

//     }
    
//  )

let arr=[{
    team: "CSK",
    primary: "yellow",
    secondary:"blue"
     ,trophies: 5,
    captain:"msd"
},{
     team: "MI",
    primary: "BLUE",
    secondary:"yellow"
    ,trophies: 5,
    captain:"HITMAN "

},{
     team: "RCB",
    primary: "RED",
    secondary:"BLACK"
     ,trophies: 1,
    captain:"vk"
},{
     team: "RR",
    primary: "PINK",
    secondary:"blue"
     ,trophies: 1,
    captain:"ssamson"
}
,{
    team: "PBKS",
    primary:"crimson",
    secondary:"silver"
     ,trophies: 1,
    captain:"cg"

}]

var btn=document.querySelector("button")
var h1=document.querySelector("h1")
var h3=document.querySelector("h3")
var h2=document.querySelector("h2")
var main=document.querySelector("main")

btn.addEventListener('click',function(){
   var winner=arr[Math.floor( Math.random()*arr.length)]
   h1.innerHTML=winner.team
   h1.style.backgroundColor=winner.secondary
   main.style.backgroundColor=winner.primary
   h2.innerHTML=winner.captain;
   h3.innerHTML=winner.trophies;
 h2.style.backgroundColor=winner.secondary
 h3.style.backgroundColor=winner.secondary
  
})