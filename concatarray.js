function concat (array1, array2) {
  for (var i = 0; i <= array2.length-1; i++) {
  console.log(array1);
  array1.push(array2[i]);
  }
  return array1
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);