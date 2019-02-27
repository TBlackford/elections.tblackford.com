import { getMap } from '_api/map';
import { setMap } from '_actions/map';

import { dispatchError } from '_utils/api';

export const attemptGetMap = (country, year, type) => dispatch =>
    getMap(country, year, type)
        .then(data => {
            const map = data.map
            dispatch(
                setMap(map)
            );
            
            return map;
        })
        .catch(dispatchError(dispatch));