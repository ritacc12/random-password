function generatePassword(character) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '1234567890';
    const symbol = '~`!@#$%^&*()_-+={}?[]/<>;:';
    const exclude = character.exclude;

    let collection = '';
    let password = '';

    if (character.lowercase === "on") {
        collection += lowercase;
    }

    if (character.uppercase === "on") {
        collection += uppercase;
    }

    if (character.number === "on") {
        collection += number;
    }

    if (character.symbol === "on") {
        collection += symbol;
    }

    // Exclude Characters
    if (exclude) {
    collection = collection.filter(
      char => !exclude.includes(char)
    )
  }

    if (character.length < 4 || character.length > 16) {
        return 'Please select a length between 4 - 16';
    }

    if(character.lowercase !=="on" && character.uppercase !=="on" && character.number !=="on" && character.symbol !=="on"){
        return 'Please select at least one character type';   
    }

    for (let i = 0; i < character.length; i++) {
        console.log(typeof character.length, character.length);
        const randomIndex = Math.floor(Math.random() * collection.length);
        password += collection[randomIndex];
    }

    return password;
}

module.exports = generatePassword;