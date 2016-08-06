import $ from 'jquery'
import Rx from 'rxjs/Rx'

function getItems(title) {  // eslint-disable-line func-style, require-jsdoc
  console.log('Querying', title)

  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve([ title, 'Item 2', `Another ${Math.random()}` ])
    }, 500 + (Math.random() * 1000))  // eslint-disable-line no-extra-parens
  })
}

const
  $title = $('#title'),
  $results = $('#results')

//   keyUps = Rx.Observable.fromEvent($title, 'keyup'),
//   queries = keyUps
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(250)
//     .switchMap(getItems)
//
// queries.subscribe(items => {
//   const
//     $items = items.map(item => $('<li />').text(item))
//
//   $results
//     .empty()
//     .append($items)
// })

Rx.Observable.fromEvent($title, 'keyup')
  .map(e => e.target.value)
  .distinctUntilChanged()
  .debounceTime(250)
  .switchMap(getItems)
  .subscribe(items => {
    const
      $items = items.map(item => $('<li />').text(item))

    $results
      .empty()
      .append($items)
  })
