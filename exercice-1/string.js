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
    if (typeof value != 'string') {
        return ""
    }

    result = ""
    string = value.split(" ")
    for (var i = 0; i < string.length; i++) {
        result += ucfirst(string[i])[0] + string[i].slice(1).toLowerCase()
    }
    return result
}

function snake_case(value){
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

function prop_access(obj,property){
    if(property === "" || property === undefined){
     return obj
    }

    prop = property.split('.')
    for (var i = 0; i < prop.length; i++) {
            if (obj[prop[i]] !== undefined){
                obj = obj[prop[i]]
            }
            else{
                return prop.join('.')+' n\'existe pas'
            }
    }
    return obj
}


function verlan(value){
    return value.split("").reverse().join("");
}

/*
testObject ={
    "animals":[
        {
            "type":{
                "name": "dog"
            }
        },
        {
            "type":{
                "name": "cat"
            }
        }
    ]
}

console.log(prop_access(testObject,'animals.1.type.name'))*/