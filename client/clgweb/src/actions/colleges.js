import * as api from '../api/colleges'

//action Creators

export const getColleges = () => async (dispatch) => {
    try {
            const {data} = await api.fetchColleges();
            dispatch({type:'FETCH_COLLEGES', payload:data})
    }catch(err){
        console.log(err)
    }
}