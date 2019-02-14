//TODO make this part of the api

export const getNameFromCode = (code) => {
    switch(code.toUpperCase()) {
        case "EE": return "Estonia"
        case "NZ": return "New Zealand"
        case "US": return "United States of America"
    }
    return "undefined";
}