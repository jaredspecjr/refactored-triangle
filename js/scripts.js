
$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var number1 = parseInt($("#side1").val());
    var number2 = parseInt($("#side2").val());
    var number3 = parseInt($("#side3").val());
    console.log(number1);
    if(number1 === number2 && number2 === number3 && number1 === number3){
      alert("Equilateral");
    }
    else if(number1+number2 <= number3 || number1+number3 <= number2 || number2+number3 <= number1){
      alert("Not a triangle");
    }
    else if(number1 != number2 && number1 != number3 && number2 != number3){
      alert("Scalene");
    }
    else if((number1 === number2 && number1 != number3) || (number2 === number3 && number1 != number2) || (number1 === number3 && number1 != number2)){
      alert("Isosceles");
    }
  });
});
