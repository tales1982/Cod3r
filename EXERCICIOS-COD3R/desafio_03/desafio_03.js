//Create a range function
//range_01 (5) -> [1, 2, 3, 4, 5]
function range_01(a, b, c) {
    let numeros = []
    for (let i = 1; i <= a; i++) {
        numeros.push(i)
    }
    return numeros
} console.log(range_01(5))

//range_02 (6, 11) -> [6, 7, 8, 9, 10, 11]
function range_02(a=6, b=11, c) {
    let numeros1 = b === undefined ? 1 : a
    let numeros2 = b === undefined ? a : b
    let numeros =[]
    for (let i = numeros1; i <= numeros2; i++) {
        numeros.push(i)
    }
    return numeros
}
console.log(range_02(6, 11))
//range_03(10, 19, 2) -> [10, 12, 14, 16, 18]

function range_03(a, b, c=1){
    let numeros1 = b === undefined ? 1 : a
    let numeros2 = b === undefined ? a : b
    let numeros =[]
    for (let i = numeros1; i <= numeros2; i+= c) {
        numeros.push(i)
    }
    return numeros
}
console.log(range_03(10,19,2))
//range_04 (6, 2) -> [6, 5, 4, 3, 2]

function range_04(a, b, s=1){
    let numeros1 = b === undefined ? 1 : a
    let numeros2 = b === undefined ? a : b
    let step = numeros1 <= numeros2 ? Math.abs(s) : -Math.abs(s)

    let numeros =[]
    for (let i = numeros1; numeros1 <= numeros2 ? i >= numeros2: i += step;){
        numeros.push(i)
    }
    return numeros
}
console.log(range_04(6, 2))
//range_05 (8, -3, 4) [8, 4, 0]
console.log(range_04(8, -3, 4))