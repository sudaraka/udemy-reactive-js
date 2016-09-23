import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

// const
//   arrayMap = (arr, f) => {
//     const
//       returnArr = []
//
//     for(const item of arr) {
//       returnArr.push(f(item))
//     }
//
//     return returnArr
//   },
//
//   arrayMergeMap = (arr, f) => {
//     const
//       returnArr = []
//
//     for(const item of arr) {
//       const
//         fArr = f(item)
//
//       for(const fd of fArr) {
//         returnArr.push(fd)
//       }
//     }
//
//     return returnArr
//   },
//
//   albums = [
//     {
//       'title': 'Album 1',
//       'tracks': [
//         {
//           'id': 1,
//           'title': 'Track 1'
//         },
//         {
//           'id': 2,
//           'title': 'Track 2'
//         }
//       ]
//     },
//     {
//       'title': 'Album 2',
//       'tracks': [
//         {
//           'id': 3,
//           'title': 'Track 21'
//         },
//         {
//           'id': 4,
//           'title': 'Track 22'
//         }
//       ]
//     }
//   ],
//
//   tracksWrong = arrayMap(albums, album => album.tracks),
//   tracksRight = arrayMergeMap(albums, album => album.tracks)
//
// console.log(JSON.stringify(tracksWrong, null, 2))
// console.log(JSON.stringify(tracksRight, null, 2))

// Rx.Observable.range(1, 3)
//   .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `After ${i} seconds`))
//   .subscribe(createSubscriber('mergeMap'))

const
  // getTracks = () => new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve([ 'Track 1', 'Track 2', 'Track 3' ])
  //   }, 1000)
  // }),

  query = () => new Promise(resolve => {
    setTimeout(() => {
      resolve('THIS IS A VALUE')
    }, 1000)
  })

Rx.Observable.of('my query')
  .do(() => console.log('Querying'))
  .mergeMap(a => query(a))
  .do(() => console.log('After Querying'))
  .subscribe(createSubscriber('query'))
