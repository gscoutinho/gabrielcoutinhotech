export default function getSecretPassword(arrayLength) {
    let arr = new Array(arrayLength)

    for (let i = 0; i < arrayLength; i++) {
        arr[i] = getMeRandom(0, 9)

        while(arr.filter(item => item === arr[i]).length > 1){
            arr[i] = getMeRandom(0, 9)
        }
    }

    return arr
}

function getMeRandom(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)); // The maximum is inclusive and the minimum is inclusive
}


