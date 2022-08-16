const a = [73, 67, 38, 33];

function fli(a) {
  a.forEach(function(grade, i) {
    const rest = 5 - grade % 5;
    if (grade >= 38 && rest < 3) {
      a[i] += rest;
    }
  });
  return a;
}

gradingStudents(a);
