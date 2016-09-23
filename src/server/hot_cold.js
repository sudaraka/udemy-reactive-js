import Rx from 'rxjs/Rx'

import { createSubscriber } from '../utils'

const
  // interval$ = Rx.Observable.interval(1000)
  //   .take(10)
  //   .publish(),

  // socket = { 'on': () => ({}) },
  //
  // chatMessage$ = new Rx.Observable(observer => {
  //   console.log('subscibed!')
  //
  //   socket.on('chat:message', message => observer.next(message))
  // })
  // .publish(),

  // simple$ = new Rx.Observable(observer => {
  //   observer.next('one')
  //   observer.next('two')
  //   observer.next('three')
  //
  //   return () => console.log('Disposed')
  // }),
  // // published$ = simple$.publishLast()
  // published$ = simple$.publishReplay(2),

  simple$ = new Rx.Observable(observer => {
    observer.next('one')
    observer.next('two')
    observer.next('three')

    return () => console.log('Disposed')
  }),
  published$ = simple$.publishReplay(2).refCount()
  // published$ = simple$.publishReplay(2).share()

// setTimeout(() => {
//   interval$.connect()
// }, 5000)
//
// setTimeout(() => {
//   interval$.subscribe(createSubscriber('one'))
// }, 1200)
//
// setTimeout(() => {
//   interval$.subscribe(createSubscriber('two'))
// }, 3200)

// chatMessage$.connect()
// chatMessage$.subscribe(createSubscriber('one'))
// chatMessage$.subscribe(createSubscriber('two'))

// const
//   sub1 = published$.subscribe(createSubscriber('one')),
//   connection = published$.connect(),
//   sub2 = published$.subscribe(createSubscriber('tow'))
//
// // sub1.unsubscribe()
// // sub2.unsubscribe()
// connection.unsubscribe()

const
  sub1 = published$.subscribe(createSubscriber('one')),
  sub2 = published$.subscribe(createSubscriber('tow'))

sub1.unsubscribe()
sub2.unsubscribe()
