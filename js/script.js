let petName = prompt("What is yout pets name");
let choice = prompt ("walk, pet or feed");

let energy = 0; 
let happiness = 0;

for  ( i = 0; i < 6; i++ ){
    var action = prompt ("walk, pet or feed?" );
    while (action === 0 & action === "") { action = prompt ("walk, pet or feed?");
}

while  (action === "walk" , energy > 0 ) {happiness +=2, energy -=1; }

 if (action === "pet") {happiness +=1; }

else if (action === "feed") {energy = energy +=2; }
    
else if (energy === 0) { alert("I'm too tired");}

}
{
happiness = (happiness + 2);
energy = (energy - 1); }

console.log (petName, " energy is", energy, " and happiness is", happiness);


