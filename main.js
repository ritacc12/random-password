function generatePassword(data) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '1234567890';
    const symbol = '~`!@#$%^&*()_-+={}?[]/<>;:';
    const exclude = data.exclude;

    let collection = '';
    let password = '';

    if (data.lowercase === "on") {
        collection += lowercase;
    }

    if (data.uppercase === "on") {
        collection += uppercase;
    }

    if (data.number === "on") {
        collection += number;
    }

    if (data.symbol === "on") {
        collection += symbol;
    }

    // Exclude Characters
    if (exclude) {
    collection = collection.filter(
      char => !exclude.includes(char)
    )
  }

    if (data.length < 4 || data.length > 16) {
        return 'Please select a length between 4 - 16';
    }

    if(data.lowercase !=="on" && data.uppercase !=="on" && data.number !=="on" && data.symbol !=="on"){
        return 'Please select at least one character type';   
    }

    for (let i = 0; i < data.length; i++) {
        console.log(typeof data.length, data.length);
        const randomIndex = Math.floor(Math.random() * collection.length);
        password += collection[randomIndex];
    }

    return password;
}

module.exports = generatePassword;