let str = 'aasdasdsadasdadsdasds'
undefined
str= str.split("")
(21) ["a", "a", "s", "d", "a", "s", "d", "s", "a", "d", "a", "s", "d", "a", "d", "s", "d", "a", "s", "d", "s"]
let longWords = str.filter(str => str==='a');
undefined
longWords
(7) ["a", "a", "a", "a", "a", "a", "a"]
longWords.length
7









function stat (enstr,static){

    enstr=enstr.split("")
    let stat = enstr.filter(enstr => enstr===static)
    
    return `${static} = ${stat.length} `
    
    
    }
