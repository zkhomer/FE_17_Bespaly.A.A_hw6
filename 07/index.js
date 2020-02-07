funkobj={
    cube:  function cube(b){
          return b**3
      },
  avg2: function avg2(a,b){return (a + b)/2
  },
  sum3: function sum3 (a,b,c=0){
      return a+b+c
  },
  intRandom: function intRandom(min,max){
      min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
      },
     greatAll: function greatAll() {
          for (let i of arguments) {
              alert(`Hello, ${i}!`)
          }},
         sum: function sum() {
              let sum = 0;
              for (let i of arguments) {
                  sum += i;
              }
              return sum;},
    a:  function a(b){
          alert(b)
          }
  }