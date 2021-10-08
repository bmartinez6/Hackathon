// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var lastClicked;
var grid = clickableGrid(40, 80, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    //el.id = 'color-picker';
    if (lastClicked) lastClicked.className = '';
    //if (lastClicked) lastClicked.id = '';
    lastClicked = el;
});

document.body.appendChild(grid);

function clickableGrid(rows, cols, callback) {
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < cols; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.addEventListener('click', (function (el, r, c, i) {
                //Test();
                return function () {
                    callback(el, r, c, i);
                }
            })(cell, r, c, i), false);
        }
    }
    return grid;
}

$(function () {
    $("grid.td[type=color]").change(function (e) { alert(e.target.value); });
    $('#color-picker').spectrum({
        type: "component",
        showPalette: false,
        showPaletteOnly: true,
        showInput: true,
        showInitial: true
    });
});
