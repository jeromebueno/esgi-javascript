function ucfirst(value) {
    return typeof value == 'string' ? value[0].toUpperCase() + value.slice(1): "";
}

function capitalize(value) {
    if(typeof value != 'string'){
        return ""
    }

    var result = ""
    var string = value.split(" ")
    for (var i = 0; i < string.length; i++) {
        result += ucfirst(string[i]) + (i < string.length - 1 ? " " : "")
    }
    return result
}

function camelCase(value) {
    return typeof value == 'string' ? capitalize(value).split(" ").toString().replace(/,/g, ""):"";
}

function snakeCase(value){
    return typeof value == 'string' ? capitalize(value).replace(/ /g, "_"):"";
}

function leet(value){
    result = value.split('');
    var crypt = {'A':'4','E':'3','I':'1','O':'0','U':'(_)','Y':'7'}
    for (var i = 0; i < result.length; i++) {
        if(result[i].toUpperCase() in crypt){
            console.log(result[i]+" = " +crypt[value[i].toUpperCase()])
            result[i] = crypt[value[i].toUpperCase()]
        }
    }
    return result.toString().replace(/,/g, "")
}

console.log(snakeCase("test de phrase"))