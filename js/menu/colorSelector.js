
/* This file will handle all the color changing
 * and the selection highlight, it will change
 * the setting of the background
 * 
 * @ background() -> will continuously and smoothly change
 *                   the background of the page to the
 *                   primary colors, and will save the color
 *                   value that was last done (Default)
 * @ goWhite() ->    will change the background of the page
 *                   to white, it wont change
 * @ newColor() ->   will change the background of the page
 *                   to the color that the user selected, it
 *                   wont change
 * col ->            the variable that holds the value that
 *                   the user selected
 */

let col = 0;
let elements = ["blue", "purple", "red", "orange", "yellow", "green"];

// Will change the background of the page to white
function goWhite() {
   $("body").css('background-color', '#fff');
}

/* Changes the pages background to the color that
 * the user chose
 */
function newColor() {
   var el = document.getElementById(elements[col-2]);
   switch(col) {
      case 2:
         $("body").css('background-color', '#3C82FF');
         break;
      case 3:
         $("body").css('background-color', '#FF3CFF');
         break;
      case 4:
         $("body").css('background-color', '#FF3C3C');
         break;
      case 5:
         $("body").css('background-color', '#FF823C');
         break;
      case 6:
         $("body").css('background-color', '#FFFF3C');
         break;
      case 7:
         $("body").css('background-color', '#3CFF82');
         break;
   }
   addCheck(el);
}

/* Calls the function that the user selected
 * and will call the value that the user
 * selected every 20 milliseconds
 */
function setColor() {
   if (col == 0) {
      background(); // all the colors
   } else if (col == 1) {
      goWhite(); // only white
   } else {
      newColor(); // user selected
   }
   setTimeout(function() {
      setColor();
   }, 20);
}

// Changes the selection highlight and change value of col
function changeColor(i) {

   switch(i) {
      case 0:
         changeSelect("multi","one","none"); // chooses multicolor
         break;
      case 1:
         changeSelect("none","one","multi"); // chooses none (white)
         break;
   }
   if (i > 1) changeSelect("one","multi","none"); // chooses one (user selection)
   removeCheck();
   col = i;
}

// Add highlight to selected color option
// Remove highlight from all the others
function changeSelect(on, off1, off2) {
   $("#" + on).addClass('chosen');
   $("#" + off1).removeClass('chosen');
   $("#" + off2).removeClass('chosen');
}

// Adds the check image to the color box
// that the user selected
function addCheck(el) {
   if ($("#" + elements[col-2]).children().length == 0) {
      var elem = document.createElement("img");
      elem.setAttribute("src","pics/check.png");
      elem.setAttribute("id", "check");
      el.appendChild(elem);
   }
}

// Goes through all the color boxes
// and removes the check image if the
// box has it
function removeCheck() {
   var removeElement;
   for (var i = 0; i < elements.length; i++) {
      if ($("#" + elements[i]).children().length > 0) {
         removeElement = document.getElementById(elements[i]);
         removeElement.removeChild(document.getElementById("check"));
      }
   }
}