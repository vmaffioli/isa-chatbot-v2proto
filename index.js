const parse = require('./src/parser');


//  -------------  declaration area ----------- //
let original_message, parsed_message, parsed_image;


//  -------------  inputs for test ----------- //

const inputs = [
    "Você consegue Me responder?",
    "teste de AFIRMAçÃO com, Virgula e excamaÇÂO!"
]

original_message = inputs[0]

//  -------------  memorize things ----------- //


//database call here - intial mysql and mongodb.
// needs initial configuration


//  -------------  parser call ----------- //
parsed_message = parse.str(original_message) // string
//parsed_image = parse.img(original_message) // image



//  -------------  outputs ----------- //
console.log("-------------  outputs -----------")

console.log(original_message)
console.log(parsed_message);

console.log("-------------  end of outputs -----------")


