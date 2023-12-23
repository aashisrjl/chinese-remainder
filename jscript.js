function calculate(event)
    {
        event.preventDefault();
    var a1=parseInt(document.getElementById("a1").value);
    var a2=parseInt(document.getElementById("a2").value);
    var a3=parseInt(document.getElementById("a3").value);

    var m1=parseInt(document.getElementById("m1").value);
    var m2=parseInt(document.getElementById("m2").value);
    var m3=parseInt(document.getElementById("m3").value);
    
    
    // calculate value of M    
    var M = m1 * m2 * m3;
    console.log("M=" + M);

   // calculate M1,M2,M3
    var M1 = M/m1;
	var M2 = M/m2;
	var M3 = M/m3;
    console.log("\n");
    console.log(M1,M2,M3);


    //calculate X1,X2,X3
    var x1 = 0;
    var x2 = 0;
    var x3 = 0;

            // Calculate x1
        for (var x = 0; x <= 10; x++) {
          if ((M1 * x) % m1 === 1) {
            x1 = x;
            break;
          }
        }

        // Calculate x2
   
        for (var x = 0; x <= 10; x++) {
          if ((M2 * x) % m2 === 1) {
            x2 = x;
            break;
          }
        }

        // Calculate x3
     
        for (var x = 0; x <= 10; x++) {
          if ((M3 * x) % m3 === 1) {
            x3 = x;
            break;
          }
        }
        console.log(x1,x2,x3);
        

        // main value of the program which have to display in the form as result

      var  X = (M1*a1*x1 + M2*a2*x2 + M3*a3*x3) % M;

      document.getElementById('result').value = X;

      //----------------------------------------------------------------------------------//

      // click function
    document.getElementById('mm').addEventListener("click",function()
    {
      document.getElementById('result').innerHTML = "M:"+ M;
    })
// click function
    document.getElementById('M1').addEventListener("click",function()
    {
      document.getElementById('result').value = M1;
    })
    // click function
  document.getElementById('M2').addEventListener("click",function()
    {
      document.getElementById('result').value = M2;
    })
// click function
    document.getElementById('M3').addEventListener("click",function()
    {
      document.getElementById('result').value = M3;
    })
    // click function
  document.getElementById('X1').addEventListener("click",function()
    {
      document.getElementById('result').value = x1;
    })
// click function
    document.getElementById('X2').addEventListener("click",function()
    {
      document.getElementById('result').value = x2;
    })
    // click function
  document.getElementById('X3').addEventListener("click",function()
    {
      document.getElementById('result').value = x3;
    })





          /*  var M = a1 + a2 + a3 ;
            document.getElementById('result').value = M;*/
    
    
    
    }
