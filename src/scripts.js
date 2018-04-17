import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './main.js';

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var newTriangle = new Triangle(side1, side2, side3);
    var output = newTriangle.checkType();
    $("#output").append("<li>" + output + "</li>");
  });
});
