const redux = require('redux')

const initialState = {
    counter : 0
}

const reducer = (state = initialState, action) => {
    console.log('statesss',state);
    console.log('action',action);
    if(action.type === 'INC'){
        return{
            counter : state.counter + 1
        }
    } 
    if(action.type === 'DEC'){
        return {
            counter : state.counter + action.value
        }
    }
    return state
}
const store = redux.createStore(reducer)
console.log('value',store.getState());
store.subscribe(() => {
    console.log('initialstate',initialState);

    console.log('subscription', store.getState());
    console.log('exex',this.a);

})
store.dispatch({type: 'INC'})

store.dispatch({type: 'DEC', value:20})
console.log('new val',store.getState());
// let sa = () => {
//     return 'awais'
// }
((name) => {
    console.log('dd',name);
    return 'awais'
})('aaa');
// (function(){
//     console.log('dff');
// })()
// console.log(a);
// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }