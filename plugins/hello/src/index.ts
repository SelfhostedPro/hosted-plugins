import { createPlugin } from '@h0st3d/plugin'


export default createPlugin({
    name: 'hello',
    init:() => {
        console.log('hello initialized')
    }
})