function monsters(){ 
var destiny1 = prompt("The moster will give u 3 choises RUN , FIGHT , PAY ","Type here your dessiccion").toUpperCase();
   document.write('<link href="style.css" type="text/css" rel="stylesheet">');   
    document.write('<a href="#" id="monsters" class="play">Play again</a>');
     document.write('<script src="print.js"></script>');     
switch (destiny1){
    case "RUN" :
   var destiny2 = prompt("Can u run faster than 8 Km/hour ?" , "Yes or No").toUpperCase();
    if (destiny2==="YES") {    
     document.write("<p class=contex> u survived </p>");
    }else {   
      document.write("<p class=contex> u r dead </p>");  
    }
    break ;
        case "FIGHT" :
   var destiny2 = prompt("R U strong ?" , "Yes or No").toUpperCase();
    if (destiny2==="YES") {
     document.write("<p class=contex> u could beat the monster </p>");
    }else {   
      document.write("<p class=contex> u should not do this.. u r dead dude </p>");   
    }
    break ;
         case "PAY" :
   var destiny2 = prompt("Di u have 100$ ?" , "Yes or No").toUpperCase();
    if (destiny2==="YES") {  
     document.write("<p class=contex>Thanks for the money i will eat u anyway </p>");
    }else {  
      document.write("<p class=contex> Sorry dude u have to pay </p>");   
    }
    break ;
    default :
    document.write("<p class=contex> I dont understand u dude </p>")
    break;
}
}

document.getElementById("monsters").onclick =   monsters;
