import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

const
  getApi = () => {
    // console.log('Getting API')

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // resolve('Hello')
    //     reject(new Error('Boom!!!!'))
    //   }, 1000)
    // })

    return new Rx.Observable(observer => {
      console.log('Getting API')

      setTimeout(() => {
        // observer.next('Hello')
        // observer.complete()
        observer.error(new Error('Boom!!!!'))
      }, 1000)
    })
  }

// Rx.Observable.concat(
//   Rx.Observable.of(42),
//   Rx.Observable.throw(new Error('Blah!!')),
//   Rx.Observable.of(10)
// )
// .subscribe(createSubscriber('catch'))

// Rx.Observable.fromPromise(getApi())
getApi()
  .retry(3)
  .catch(err => Rx.Observable.of(err))
  .do(a => console.log('From do', a))
//   .map(a => a * a)
  .subscribe(createSubscriber('api'))
//
// Rx.Observable.range(1, 10)
//   .finally(() => console.log('from finally'))
//   .map(a => a * 2)
//   .subscribe(createSubscriber('finally'))
//
// Rx.Observable.range(1, 10)
//   .filter(a => 2 > a || 4 < a)
//   .subscribe(createSubscriber('filter'))
//
// Rx.Observable.interval(1000)
//   .startWith(-1)
//   .subscribe(createSubscriber('interval'))
