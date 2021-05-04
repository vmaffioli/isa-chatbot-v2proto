const aw = require('about-words');
const parse = require('./src/parser');



//  -------------  declaration area ----------- //
let original_message, parsed_message, parse_result;
let parsed_words = [];

//  -------------  inputs for test ----------- //
const inputs = [
    "meu primeiro teste",
    "teste de AFIRMAçÃO com, Virgula e exclamaÇÂO!"
]
original_message = inputs[1]




//  -------------  parser call ----------- //
parsed_message = parse(original_message) // in str - out obj

parsed_message.words.forEach(word => {
    parsed_words.push(aw(word));
    
});

parse_result = {
    type: parsed_message.type,
    words: parsed_words
}


//  -------------  outputs ----------- //
console.log("-------------  outputs -----------")
console.log(parse_result.words)
console.log("-------------  end of outputs -----------")


