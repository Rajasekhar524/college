import * as api from '../api/students'

//action Creators

export const getStudents = () => async (dispatch) => {
    try {
            const {data} = await api.fetchStudents();
            dispatch({type:'FETCH_STUDENTS', payload:data})
    }catch(err){
        console.log(err)
    }
}