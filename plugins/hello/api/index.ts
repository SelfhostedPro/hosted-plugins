import { defineEventHandler }from 'h3'

const helloWorld = defineEventHandler((event) => {
    return 'Hello World'
})

export default helloWorld