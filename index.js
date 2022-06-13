// Code your solutions in this file
function writeCards(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let message = `Thank you, ${arr[i]}, for the wonderful surprise gift!`

        newArr.push(message)
        // create thank you message
        // add thank you message to new arr
    }

    return newArr
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}

