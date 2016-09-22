import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

const
  // simple$ = new Rx.Subject(),
  // interval$ = Rx.Observable.interval(1000).take(5),
  // intervalSubject$ = new Rx.Subject(),
  // currentUser$ = new Rx.BehaviorSubject({ 'isLoggedIn': false }),
  // isLoggedIn$ = currentUser$.map(u => u.isLoggedIn),
  // replay$ = new Rx.ReplaySubject(3),
  apiCall$ = new Rx.AsyncSubject()

// simple$.subscribe(createSubscriber('simple'))
//
// simple$.next('Hello')
// simple$.next('World')
// simple$.complete()

// interval$.subscribe(intervalSubject$)
//
// intervalSubject$.subscribe(createSubscriber('sub1'))
// intervalSubject$.subscribe(createSubscriber('sub2'))
// intervalSubject$.subscribe(createSubscriber('sub3'))
//
// setTimeout(() => {
//   intervalSubject$.subscribe(createSubscriber('LOOK AT ME!'))
// }, 3000)

// isLoggedIn$.subscribe(createSubscriber('Is logged in?'))
//
// currentUser$.next({ 'isLoggedIn': false })
//
// setTimeout(() => {
//   currentUser$.next({ 'isLoggedIn': true })
// }, 2000)
//
// setTimeout(() => {
//   isLoggedIn$.subscribe(createSubscriber('delayed'))
// }, 1000)

// replay$.next(1)
// replay$.next(2)
//
// replay$.subscribe(createSubscriber('replay 1'))
//
// replay$.next(3)
// replay$.next(4)
// replay$.next(5)
//
// replay$.subscribe(createSubscriber('replay 2'))
//
// replay$.next(6)

apiCall$.next(1)

apiCall$.subscribe(createSubscriber('api 1'))

apiCall$.next(2)

apiCall$.complete()

setTimeout(() => {
  apiCall$.subscribe(createSubscriber('api 2'))
}, 2000)
