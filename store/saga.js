import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'

function* loadDataSaga() {
  const data = [
    {
      id: 1,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 1,
    },
    {
      id: 2,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 2,
    },
    {
      id: 3,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 3,
    },
    {
      id: 4,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 9,
    },
    {
      id: 5,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 1,
    },
    {
      id: 6,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 2,
    },
    {
      id: 7,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 3,
    },
    {
      id: 8,
      name: 'KDY',
      year: 2020,
      month: 2,
      company: 'MNS',
      pay: 500000,
      status: 9,
    },
  ]
  try {
    // const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    // const data = yield res.json()
    // yield put(loadDataSuccess(data))
    yield put({ type: 'LOAD_DATA_SUCCESS', payload: data })
    console.log('loadDataSaga success')
  } catch (err) {
    console.log('loadDataSaga error')
    // yield put(failure(err))
  }
}

function* rootSaga() {
  console.log('rootSaga')
  yield all([
    // call(runClockSaga),
    takeLatest('LOAD_DATA', loadDataSaga),
  ])
}

export default rootSaga
