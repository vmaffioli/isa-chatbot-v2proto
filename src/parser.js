



module.exports = (str) => {    // analyze strings

    //  ------------- declarations  ----------- //
    let conclusion = {
        words: [],
        type: ""
    }

    //  ------------- defining types  ----------- //
    if(str.includes("?")) {  // isA question
        str = str.replaceAll("?","")
        conclusion.type = "question"
    } else {
        conclusion.type = "affirmation" //isA affirmation
    }

    //  ------------- convert to lower case  ----------- //
    str  = str.toLowerCase();

    //  -------------  removes grammatical accents  ----------- //
    let mapaAcentosHex = {   
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        //c: /\xE7/g,
        n: /\xF1/g
    };
    for (let letra in mapaAcentosHex) {
        let expressaoRegular = mapaAcentosHex[letra];
        str = str.replace(expressaoRegular, letra);
    };
    str = str.replace(/[^a-zA-Z ]/g, "");

    //  -------------  split str and save  ----------- //
    conclusion.words = str.split(" ");


    
    return conclusion
};





