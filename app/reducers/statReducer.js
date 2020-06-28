import { STATS_TYPE } from '../components/action/types';

const initialState = {
    stats: []
}

export default function (state = initialState.stats, action) {
    console.log(action);
    switch (action.type) {
        case STATS_TYPE:
            return [...action.data]
            break;
        default:
            return state;
    }
}