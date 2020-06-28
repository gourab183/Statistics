import { STATS_TYPE } from './types';
import axios from 'axios';
import queryString from 'querystring';

function fetchStats(pageNo) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=foo&tags=story&page=${pageNo}`);
            dispatch({
                type: STATS_TYPE,
                data: response.data.hits
            });
            return ({
                page: response.data.page,
                nbPage: response.data.nbPages,
                data: response.data.hits
            });
        } catch (error) {
            throw error;
        }
    }
}

export { fetchStats };