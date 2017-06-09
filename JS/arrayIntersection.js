/*

  Given two arrays with id's, find the intersecting sub array a->b

*/

let a = [1,2,3,4,5],
    b = [3,4,6];

// findIntersect([n],[m])

function findIntersect(a,b){
  const aSet = new Set(a)
  return [... new Set(b)].filter((bInt) => aSet.has(bInt));
}

// intersect([n])([m])
// O(n+m)

var intersect = (a) =>
  (b) => {
    const aSet = new Set(a)
    return [... new Set(b)].filter((bInt) => aSet.has(bInt));
}
