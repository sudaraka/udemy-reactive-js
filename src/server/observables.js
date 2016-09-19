import Rx from 'rxjs/Rx'

/* -- Part 1 --
const
  simple$ = new Rx.Observable(observer => {
    console.log('Generating observable...')

    setTimeout(() => {
      observer.next('An Item!')

      setTimeout(() => {
        observer.next('Another Item!')
        observer.complete()
      }, 1000)

    }, 1000)
  }),

  error$ = new Rx.Observable(observer => {
    observer.error(new Error('Boom!!'))
  })

error$.subscribe(
  item => console.log('One', item),
  err => console.log('ERROR one:', err),
  () => console.log('DONE one')
)

setTimeout(() => {
  simple$.subscribe({
    'next': item => console.log('Two', item),
    'error': err => console.log('ERROR tow:', err),
    'complete': () => console.log('DONE two')
  })
}, 3000)
*/


const
  createInterval$ = time => new Rx.Observable(observer => {
    let
      index = 0

    const
      interval = setInterval(() => {
        index += 1

        console.log('Generating', index)

        observer.next(index)
      }, time)

    return () => clearInterval(interval)
  }),

  createSubscriber = tag => ({
    'next': item => console.log(`${tag}.next: ${item}`),
    'error': err => console.log(`${tag}.err: ${err.stack || err}`),
    'complete': () => console.log(`${tag}.complete`)
  }),

  take$ = (sourceObservable$, amount) => new Rx.Observable(observer => {
    let
      count = 0

    const
      innerSubscription = sourceObservable$.subscribe(
        item => {
          observer.next(item)
          count += 1

          if(count >= amount) {
            observer.complete()
          }
        },
        observer.error,
        observer.complete
      )

    return () => innerSubscription.unsubscribe()
  }),

  everySecond = createInterval$(1000),
  firstFiveSeconds = take$(everySecond, 5),
  subscription = firstFiveSeconds.subscribe(createSubscriber('one'))

// setTimeout(() => {
//   subscription.unsubscribe()
// }, 3500)
