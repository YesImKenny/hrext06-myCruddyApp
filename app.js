$(document).ready(function(){
  console.log('jQuery loaded');

  //create helper function that creates new keyname for each new entry
  var num = 0;
  var value = 'inputFieldValue';
  var inputFieldValue = function() {
      
      // return value + (num++); 

    // return function() {
      num++
      value = 'inputFieldValue' + num;
      return value;
    // }
  } 
    // console.log(inputFieldValue()());

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem(inputFieldValue(), $('.text-entry').val());
    var myItemInStorage = localStorage.getItem(value);
    console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    if(num > 0){
      num--;
    }
    localStorage.removeItem(value);
  });

});