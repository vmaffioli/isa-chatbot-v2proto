const parse = require('./src/parser');




//  -------------  node - get user input ----------- //
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ask me something: ', msg => {

    //  -------------  declaration area ----------- //
    const original_message = msg


    //  -------------  memorize things ----------- //
    require('./src/receive').save(msg);


    //  -------------  outputs ----------- //
    console.log("-------------  outputs -----------")

    console.log(original_message)
    console.log(parse.str(msg));

    console.log("-------------  end of outputs -----------")

    readline.close();
});




