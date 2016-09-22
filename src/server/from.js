import Rx from 'rxjs/Rx'
import fs from 'fs'

import { createSubscriber } from '../utils'

const
  readdir$ = Rx.Observable.bindNodeCallback(fs.readdir),

  getItem = () => new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello')
    }, 1000)
  })

// readdir$('./src/server')
//   .mergeMap(files => Rx.Observable.from(files))
//   .map(file => `Manipulated ${file}`)
//   .subscribe(createSubscriber('readir'))

Rx.Observable.fromPromise(getItem())
  .subscribe(createSubscriber('promise'))

