
if(HOUR == 8 && MINUTE == 50 && PERIOD == "AM"){
    console.log("It's almost 9 in the morning")
}

else if(HOUR == 7 && MINUTE == 15 && PERIOD == "PM"){
    console.log("It's just after 7 in the evening")
}

//challenge

if(MINUTE<30){
    console.log("It is just after ", HOUR)
}

else{
    console.log("It is almost the next ", HOUR);
}

//am.pm

if(HOUR>12){
    HOUR = HOUR - 12;
    console.log("It is ", HOUR, " in the morning.");
}
else {
    console.log("It is ", HOUR, " in the evening.");
}
