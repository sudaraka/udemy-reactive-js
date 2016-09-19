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

    setInterval(() => {
      index += 1
      observer.next(index)
    }, time)
  }),

  createSubscriber = tag => ({
    'next': item => console.log(`${tag}.next: ${item}`),
    'error': err => console.log(`${tag}.err: ${err.stack || err}`),
    'complete': () => console.log(`${tag}.complete`)
  }),

  everySecond = createInterval$(1000)

everySecond.subscribe(createSubscriber('one'))
