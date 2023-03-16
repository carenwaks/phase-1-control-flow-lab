function scuberGreetingForFeet(distance){
  
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500){
     return'I will gladly take your thirty bucks.';
  } else {
     return 'No can do.';
  }
 
}
console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
   return city == "NYC" ? "Ok, sounds good." 
           :"No go." ;
}
console.log(ternaryCheckCity("Pittsburgh"));


function switchOnCharmFromTip(status){
   // Write your code here!
    console.log(status);
 let message;
     switch (status) {
     case "generous":
         message="Thank you so much.";
         break;
        
     case ("not as generous"):
        //console.log(status); 
        message='Thank you.'
         break;

      default:
         message = 'Bye.'
         console.log('Bye.');
    }
    return message
 }
//console.log(switchOnCharmFromTip ("thanks for everything"));

 
