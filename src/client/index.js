import $ from 'jquery'

const
  $title = $('#title'),
  $results = $('#results'),

  getItems = title => {
    console.log('Querying', title)

    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve([ title, 'Item 2', `Another ${Math.random()}` ])
      }, 500 + (Math.random() * 1000))  // eslint-disable-line no-extra-parens
    })
  }

$title.on('keyup', e => {
  const
    title = e.target.value

  getItems(title)
    .then(items => {
      const
        $items = items.map(item => $('<li />').text(item))

      $results
        .empty()
        .append($items)

    })
})
