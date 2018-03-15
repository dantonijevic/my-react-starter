import * as userSaga from './user.saga';

const sagas = {
  ...userSaga,
};

export default function registerSaga(middleware) {
  console.log('all sagas = ', sagas);

  // for (const name in sagas) {
  //   middleware.run(sagas[name]);
  // }

  Object.keys(sagas).forEach((saga) => {
    middleware.run(sagas[saga]);
  });
}
