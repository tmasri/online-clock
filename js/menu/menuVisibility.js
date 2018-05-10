
var v = 0;
var a = 0;


function changeH(i) {
   if (i == 1) {
      // turn 12 to gray (remove selection)
      $("#on").removeClass('on');
      $("#on").addClass('chosen');
      // turn 24 to blue (add selection)
      $("#off").removeClass('chosen');
      $("#off").addClass('on');

      $("#menu-button").addClass("hide");
   } else {
      // turn 12 to blue (add selection)
      $("#on").removeClass('chosen');
      $("#on").addClass('on');
      // turn 24 to gray (remove selection)
      $("#off").removeClass('on');
      $("#off").addClass('chosen');

      $("#menu-button").removeClass("hide");
   }
   // v = i;
}