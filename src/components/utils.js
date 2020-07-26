
export function colorlist(size) {
    var colors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      ]
      
      var newcolor = [];
      var repeat = Math.floor(size/6) +1
      console.log("inside colorlist: size:" + size)

      for (let i=0; i < repeat; i++) {
        for (let n = 0 ; n< 6; n++)
          newcolor.push(colors[n])
      }
      return newcolor
  }
  