import { DEC_NUMBER, INC_NUMBER } from '../actions';

const performAction = (state = { num: 0 }, action) => {
    switch (action.type) {
        case INC_NUMBER:
            return {
                ...state,
                num: state.num + 1
            };
        case DEC_NUMBER:
            return {
                ...state,
                num: state.num < 1 ? 0 : state.num - 1
            }
        default:
            return state;
    }
}

export default performAction;