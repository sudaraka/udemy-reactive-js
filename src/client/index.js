import $ from 'jquery'
import Rx from 'rxjs/Rx'

// function getItems(title) {  // eslint-disable-line func-style, require-jsdoc
//   console.log('Querying', title)
//
//   return new Promise(resolve => {
//     window.setTimeout(() => {
//       resolve([ title, 'Item 2', `Another ${Math.random()}` ])
//     }, 500 + (Math.random() * 1000))  // eslint-disable-line no-extra-parens
//   })
// }

// const
//   $title = $('#title'),
//   $results = $('#results')

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

// Rx.Observable.fromEvent($title, 'keyup')
//   .map(e => e.target.value)
//   .distinctUntilChanged()
//   .debounceTime(250)
//   .switchMap(getItems)
//   .subscribe(items => {
//     const
//       $items = items.map(item => $('<li />').text(item))
//
//     $results
//       .empty()
//       .append($items)
//   })

const
  $drag = $('#drag'),
  $doc = $(document),
  $dropArea = $('.drop-area'),

  beginDrag$ = Rx.Observable.fromEvent($drag, 'mousedown'),
  endDrag$ = Rx.Observable.fromEvent($doc, 'mouseup'),
  mouseMove$ = Rx.Observable.fromEvent($doc, 'mousemove'),

  currentOverArea$ = Rx.Observable.merge(
    Rx.Observable.fromEvent($dropArea, 'mouseover').map(e => $(e.target)),
    Rx.Observable.fromEvent($dropArea, 'mouseout').map(() => null)
  ),

  drops$ = beginDrag$
    .do(e => {
      e.preventDefault()

      $drag.addClass('dragging')
    })
    .mergeMap(startEvent => mouseMove$
        .takeUntil(endDrag$)
        .do(moveEvent => moveDrag(startEvent, moveEvent))
        .last()
        .withLatestFrom(currentOverArea$, (_, $area) => $area)
    )
    .do(() => {
      $drag.removeClass('dragging').animate({
        'top': 0,
        'left': 0
      })
    }),

  moveDrag = (startEvent, moveEvent) => {
    $drag.css({
      'left': moveEvent.clientX - startEvent.offsetX,
      'top': moveEvent.clientY - startEvent.offsetY
    })
  }

drops$.subscribe($area => {
  $dropArea.removeClass('dropped')

  if($area) {
    $area.addClass('dropped')
  }
})
