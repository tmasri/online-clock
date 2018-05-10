
function changeH(i) {
   if (i == 1) {
      // turn visible to gray (remove selection)
      $("#on").removeClass('on');
      $("#on").addClass('chosen');
      // turn hidden to blue (add selection)
      $("#off").removeClass('chosen');
      $("#off").addClass('on');
      // hide the menu button
      $("#menu-button").addClass("hide");
   } else {
      // turn visible to blue (add selection)
      $("#on").removeClass('chosen');
      $("#on").addClass('on');
      // turn hidden to gray (remove selection)
      $("#off").removeClass('on');
      $("#off").addClass('chosen');
      // show the menu button
      $("#menu-button").removeClass("hide");
   }
}