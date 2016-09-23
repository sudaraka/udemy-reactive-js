import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

// const
//   arrReduce = (arr, f, init) => {
//     let
//       value = init
//
//     for(const item of arr) {
//       value = f(value, item)
//     }
//
//     return value
//   },
//
//   values = [ 342, 432, 23, 1, 4 ],
//
  // max = arrReduce(
  //   values,
  //   (acc, i) => {
  //     if(acc < i) {
  //       return i
  //     }
  //
  //     return acc
  //   },
  //   -1
  // ),
  // max = arrReduce(values, Math.max, -1)

// console.log(arrReduce(values, (acc, i) => acc + i, 0))
// console.log(max)

// Rx.Observable.range(1, 10)
//   // .merge(Rx.Observable.never())
//   .reduce((acc, value) => acc + value)
//   .subscribe(createSubscriber('reduce'))

// Rx.Observable.range(1, 10)
//   .merge(Rx.Observable.never())
//   .scan((acc, value) => acc + value)
//   .subscribe(createSubscriber('reduce'))

Rx.Observable.range(1, 10)
  .map(a => a * a)
  .scan(([ last, _ ], current) => [ current, last ], [])
  .subscribe(createSubscriber('reduce'))
