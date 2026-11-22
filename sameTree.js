
var isSameTree = function(p, q) {
  let result = true;

  if (p.length !== q.length) return false;

    for(let i = 0;i < p.length;i++){
       if (p[i] !== q[i]) return false;
    }
    return result;
};



let value = isSameTree([1,2],[1,null,2]);
value

