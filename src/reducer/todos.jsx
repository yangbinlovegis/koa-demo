
const initState = {
    name: 'test',
    value: '1'
}
export default function todos(state = initState, action) {
    switch(action.type) {
        case 'ADD_TODOS':
            return {
                ...state,
                value: '2'
            }
    }
    return initState;
}