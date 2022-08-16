const a = [1, 2, 3, 4, 1, 2, 3];

function lonelyInteger(a) {
  for (let i = 0; i < a.length; i++) {
    if (a.filter((x) => x === a[i]).length === 1) {
      return a[i];
    }
  }
}

lonelyInteger(a);
