function generatePassword(data){
    const lowercase =  'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const number =  '1234567890'
    const symbol =  '~`!@#$%^&*()_-+={}?[]/<>;:'
    const exclude = data.exclude
    
    const data = {
        length: '12',
        lowercase: 'on',
        uppercase: 'on',
        number: 'on',
        exclude:'04'
    }

    let collection = []
    let password = ''

    if(data.lowercase === "on"){
        collection = collection.concat(lowercase.split(''))
    }

    if(data.uppercase === "on"){
        collection = collection.concat(uppercase.split(''))
    }

    if(data.number === "on"){
        collection = collection.concat(number.split(''))
    }

    if(data.symbol === "on"){
        collection = collection.concat(symbol.split(''))
    }

    //exclude Characters
    if(exclude){
        console.log(`exclude characters: ${data.exclude}`)
        collection = collection.filter((word) => !exclude.includes(word))
    }
    console.log('collection', collection)

    if(collection.length === 0){
        return password = 'There is no valid conditions'
    }

    if(data.length < 4 || data.length > 16){
        return password = 'Please select the number between 4~16'
    }

    if(data.lowercase !=="on"|| data.uppercase !=="on" || data.number !== "on" || data.symbol !== "on"){
        return password = 'Please select at least one'
    }

    for(i=0 ; i< data.length ; i++){
        const collection = Math.floor(Math.random() * collection.length)
        password += collection[collection]
    }
    return password
    // console.log('This function will generate password')
}

 export default generatePassword;
