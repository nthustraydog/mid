import {getDog as getDogFromApi} from 'api/dog.js';

export function startLoading() {
    return {
        type: '@EACH/STARTLOAD',
    };
}
export function endLoading() {
    return {
        type: '@EACH/ENDLOAD',
    };
}
export function endGetDog(dog) {
    return {
        type: '@EACH/ENDGETDOG',
        dog
    };
}

export function getDog(dogID, loading = false) {
    return (dispatch, getState) => {
        if(!loading)
           dispatch(startLoading());

        return getDogFromApi(dogID).then(dog => {
            dispatch(endGetDog(dog));
            setTimeout(() => {
                dispatch(endLoading());
            }, 1000);
        }).catch(err => {
            console.error('Error get dog information', err);
            dispatch(endLoading());
        });
    };
}
