export default (colleges=[], action) => {
    switch(action.type) {
        case 'FETCH_COLLEGES':
            return action.payload;
        case 'CREATE_COLLEGES':
            return colleges;
        default:
        return colleges;
             
    }
} 