/**
 * Helper function to select navel data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - names
 * index 1 - metadata
 * index 2 - samples
 */

//  Load data from json
d3.json("../../samples.json").then(function(navelData) {
    console.log(navelData);
}).catch(function(error) {
    console.log(error);
  });

var dropdownMenu = d3.select("#selDataset")

dropdownMenu.selectAll()

//  Drop down menu hanlder
function handleDropDown() {
    // Prevent page refresh
    d3.event.preventDefault();

    // Select input value from drop down menu
    var dataset =  dropdownMenu.node().value;
    console.log(dataset);
}