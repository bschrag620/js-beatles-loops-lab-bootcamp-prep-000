function theBeatlesPlay(musicians, instruments) {
  var comments = []
  for (var i = 0; i < instruments.length; i++) {
    comments.push(musicians[i] + ' plays ' + instruments[i])
  }
  
  return comments
}

function johnLennonFacts(jlFacts) {
  var comments = []
  for (var i = 0; i < jlFacts.length; i++) {
    comments.push(jlFacts[i] + '!!!')
  }
  
  return comments
}

function iLoveTheBeatles(n) {
  var loveBeatles = 'I love the Beatles!'
  var array = []
  
  do {
    array.push(loveBeatles)
    n++
  }
  while (n<15)
  return array
}