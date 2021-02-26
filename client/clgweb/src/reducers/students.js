export default (students=[], action) => {
    switch(action.type) {
        case 'FETCH_STUDENTS':
            return action.payload;
        case 'CREATE_STUDENTS':
            return students;
        default:
        return students;
             
    }
} 