function run(fn) {
    fn()
}
function sayHello() {
    console.log('Hello')
}
run(sayHello)

// tambem posso passar uma funcao anonima
run(function () {
    console.log('run!!!')
})
