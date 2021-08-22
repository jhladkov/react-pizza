import axios from "axios";

export const setLoaded = payload => {
    return{
        type:'SET_LOADED',
        payload
    }
}

export const fetchPizzas = () => dispatch => {
    dispatch(setLoaded(false))
    axios.get(`https://resume-react-bb24d-default-rtdb.firebaseio.com/data/pizzas.json`)
        .then(data => {
            dispatch(setPizzas(data.data))
        })

}

export const setPizzas = items => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}


