
var v = 0;
var a = 0;

/* calls timer every second make makes sure to
 * send the clock type (12 or 24)
 */
function getTimer() {
   timer(v);
   setTimeout(function() {
      getTimer();
   }, 1000);
}

/* changes clock type to 12 or 24
 * depending on the users input, and
 * moves the highlight color to the
 * button that the user chose
 */
function changeV(i) {
   if (i == 1) {
      // turn 12 to gray (remove selection)
      $("#12").removeClass('on');
      $("#12").addClass('chosen');
      // turn 24 to blue (add selection)
      $("#24").removeClass('chosen');
      $("#24").addClass('on');
   } else {
      // turn 12 to blue (add selection)
      $("#12").removeClass('chosen');
      $("#12").addClass('on');
      // turn 24 to gray (remove selection)
      $("#24").removeClass('on');
      $("#24").addClass('chosen');
   }
   v = i;
}