

import * as userSaga from './user.saga';


const sagas = {
    ...userSaga
}


export default function registerSaga(middleware) {

    console.log('all sagas = ', sagas);

    for (let name in sagas) {
        middleware.run(sagas[name]);
    }
}