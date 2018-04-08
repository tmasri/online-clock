
/* This is the color changer file, this is the file
 * that will handle the algorithm that is constantly
 * changing the background of the page, it will be called
 * once every 20 milliseconds to change the background
 * 
 * @ backColors[] ->	holds the colors that the background
 * 						will go through
 */
let backColors = ["blue", "purple", "orange", "yellow", "lime"];

function background(i) {

	$("body").css('background-color',backColors[i]);

}