function merge (array1, array2) {
  for (var i = 0; i <= array2.length-1; i++) {
  array1.push(array2[i]);
  }
  array1.sort(function(a, b){return a - b});
  return array1;
  console.log(array1);
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);