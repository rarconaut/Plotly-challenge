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
    var names = navelData.map(data => data.names)
    var metadata = navelData.map(data => data.metadata)
    var samples = navelData.map(data => data.samples)
}).catch(function(error) {
    console.log(error);
  });

console.log(names);
console.log(metadata);
console.log(samples);

// Select drop down menu
var dropdownMenu = d3.select("#selDataset")
// Create menu options from json 'names' data 
dropdownMenu.selectAll("option")
  .data(navelData)
  .enter()
  .append("option")
  .attr("value", d => d.names)
  .text(d => d.names)
 

//  Drop down menu hanlder
function handleDropDown() {
    // Prevent page refresh
    d3.event.preventDefault();

    // Select input value from drop down menu
    var dataset =  dropdownMenu.node().value;
    console.log(dataset);
}