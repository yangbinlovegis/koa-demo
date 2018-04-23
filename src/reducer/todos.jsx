
export const initState = {
    name: 'test',
    value: ''
}
export default function todos(state = initState, action) {
    switch(action.type) {
        case 'ADD_TODOS':
            return {
                ...state,
                value: action.value
            }
    }
    return initState;
}