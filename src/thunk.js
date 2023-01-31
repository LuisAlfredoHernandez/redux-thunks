import { maketype, asyncMac, createReducer } from './ducks-helper';
import {fetchReducer} from './hors'

const t = maketype('thunk')
const FETCH = t('fetch', true);
const fetchAc = asyncMac(FETCH)
const initialState = {
    data: {
        1: { name: 'Noticia' }
    },
    fetching: false,
    fetched: false,
    error: null
}

export default createReducer(initialState, fetchReducer(FETCH))

export const miThunk = payload =>
    async (dispatch, getState) => {
        dispatch(fetchAc.start())
        try {
            const url = "https://jsonplaceholder.typicode.com/users"
            const result = await fetch(url)
            const json = await result.json();
            dispatch(fetchAc.success(json))
        } catch (error) {
            dispatch(fetchAc.error(error))
        }
    }

