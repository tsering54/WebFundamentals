

randomChance(var quarters){
    var result1 = Math.floor(Math.random());

    while (quarters>0) {
        var result2 = Math.random();

        if(result1==result2){
            quarters+=quarters;
        }
        return quarters;
    }
    return 0;

}
