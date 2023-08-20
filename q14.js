let n1 = 5;
let n2 = 10;
let n3 = 15;

if(n1 > n2 && n1 > n3){
    console.log(n1 + " is greater");
}

else if(n2 > n1 && n2 > n3){
    console.log(n2 + " is greater");
}

else if(n3 > n1 && n3 > n2){
    console.log(n3 + " is greater");
}

else{
    console.log("All are equal");
}