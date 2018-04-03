
let colors = ["midnightblue", "navy", "blue", "deepskyblue", "aqua", "teal", "pink", "hotpink", "red", "maroon", "fuchsia", "purple", "violet", "magenta", "indigo", "orange", "brown", "yellow", "gold", "olive", "green", "seagreen", "lightgreen", "lime", "greenyellow", "black", "gray", "silver"];

function fillColors() {

   var tr;
   var td;
   var k = 7;
   var table = document.getElementById("colorPicker");
   table.innerHTML = "";
   for (let i = 0; i < colors.length; i++) {
      tr = document.createElement("tr");
      for (let j = 0; j < k; j++) {
         if (j + (k * i) == colors.length) {
            i = colors.length;
            j = k;
         } else {
            td = document.createElement("td");
            td.setAttribute('id', colors[j + (k * i)]);
            td.setAttribute('onclick','changeColor('+(j + (k * i) + 2)+')');
            td.setAttribute('style','background-color:' + colors[j+(k*i)] + ';');
            tr.appendChild(td);
         }
      }
      table.appendChild(tr);
   }

}