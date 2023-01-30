

const maketype = m => (a, isAsync) => {
    if (isAsync) {
        return {
            START: `${m}/${a}-start`,
            SUCCESS: `${m}/${a}-success`,
            ERROR: `${m}/${a}-error`
        }
    }
    return `${m}${a}`
}

const t = maketype('thunk')

const FETCH = t(fetch, true);

const fetchStart = () => ({
    type: FETCH.START
})

const fetchSuccess = payload => ({
    type: FETCH.SUCCESS,
    payload
})

const fetchError = error => ({
    type: FETCH.ERROR,
    error
})

const initialState = {
    data: {
        1: { name: 'Noticia' }
    },
    fetching: false,
    fetched: false,
    error: null
}

function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case FETCH.START:
            return {
                ...state,
                fetching: true
            }
        case FETCH.SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH.ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}


const url = "https://jsonplaceholder.typicode.com/users"




export default payload =>
    async (dispatch, getState) => {
        dispatch(fetchStart())
        try {
            const result = await fetch(url)
            const json = await result.json();
            dispatch(fetchSuccess(json))
        } catch (error) {
            dispatch(fetchError(error))
        }
    }

