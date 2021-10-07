const age = 25;
const firstName = 'Niels';
const totalAmount = 75;
if (age >= 18 && age <= 25){
    console.log('je krijgt 50% korting!');
};
if (firstName == 'Bram' || firstName == "Sarah"){
    console.log('gratis bier');
};
if (totalAmount >= 100){
    console.log('champagne');
} else if (totalAmount >= 50){
    console.log("nachos");
} else if (totalAmount >= 25){
    console.log('bitterballen');
};
