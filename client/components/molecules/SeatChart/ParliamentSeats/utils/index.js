import roundTo from 'round-precision';

export const sum = (obj, subVal = "") => {
	var result  = 0;
	
    for(var key in obj) {
		result += (subVal == "") ? 
			obj[key] : 
			obj[key][subVal];
    }

    return result;
}

export const round = (x) => roundTo(x, 10);

export const merge = (arrays) => {
	let result = []
	for (let list of arrays) result = result.concat(list)
	return result
}

export const max = (array) => {
	var item = array[0];

	for(var i = 0; i < array.length; i++) {
		if(i > item) item = array[i];
	}

	return item;
}

export const min = (array) => {
	var item = array[0];

	for(var i = 0; i < array.length; i++) {
		if(i < item) item = array[i];
	}

	return item;
}

export const pi = Math.PI;
