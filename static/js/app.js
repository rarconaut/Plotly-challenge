// /**
//  * Helper function to select navel data
//  * Returns an array of values
//  * @param {array} rows
//  * @param {integer} index
//  * index 0 - names
//  * index 1 - metadata
//  * index 2 - samples
//  */
// function unpack(rows, index) {
//     return rows.map(function (row) {
//         return row[index];
//     });
// }

// // Add event listener for submit button -ACTUALLY, I THINK THIS IS ALREADY IN THE HTML FILE(line 25)
// d3.select("#selDataset").on("change", optionChanged);

// Initialize Dashboard with default dataset
function init() {
  // Select the input value from the drop down menu
  var dropdownMenu = d3.select("#selDataset");
  // console.log(dropdownMenu);

  // Create menu options from json 'names' data 
  d3.json("../../samples.json").then(function (navelData) {
    var nameIDs = navelData.names;
    // console.log(nameIDs);

    nameIDs.forEach(function (id) {
      return dropdownMenu
        .append("option")
        .attr("value", id)
        .text(id);
    });

    // Build the initial plots/metadata with the first sample
    var defaultSample = nameIDs[0];
    console.log(defaultSample);

    grabMeta(defaultSample);
    buildPlots(defaultSample);
  });
}

// Call the init function to start the page
init()


//  Drop down menu hanlder
function optionChanged() {
  // Prevent page refresh
  // d3.event.preventDefault();

  // Select input value from drop down menu
  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.node().value;
  console.log(dataset);

  // Build plots/grab metadata with the new sample
  grabMeta(dataset);
  buildPlots(dataset);
}

function grabMeta(dataset) {
  // Access json data
  d3.json("../../samples.json").then(function (navelData) {

    // Grab metadata from the json object
    var sampleMeta = navelData.metadata.filter(sample => sample.id == dataset)[0];
    console.log(sampleMeta);

    // Clear any previous metadata value before displaying current
    displayMeta = d3.select("#sample-metadata");
    displayMeta.html("");

    // Use `Object.entries` and `forEach` to iterate through keys and values
    Object.entries(sampleMeta).forEach(([key, value]) => {
      console.log(`Key: ${key} and Value ${value}`)

      displayMeta
        .append("p")
        .text(`${key}: ${value}`)
    });
  });
}

  function buildPlots(dataset) {

      d3.json("../../samples.json").then(function (data) {
        // Grab values from the response json object to build the plots
        var selectedSample = data.samples.filter(sample => sample.id === dataset)[0];
        
        var sampleValues = selectedSample.sample_values
        var otuIDs = selectedSample.otu_ids;
        var otuLabels = selectedSample.otu_labels;

        // Print the names of the columns
        console.log(dataset)
        console.log(sampleValues, otuIDs, otuLabels);
        
        // var trace1 = {
        //   type: "scatter",
        //   mode: "lines",
        //   name: name,
        //   x: dates,
        //   y: closingPrices,
        //   line: {
        //     color: "#17BECF"
        //   }
        // };

        // var data = [trace1];

        // var layout = {
        //   title: `${stock} closing prices`,
        //   xaxis: {
        //     range: [startDate, endDate],
        //     type: "date"
        //   },
        //   yaxis: {
        //     autorange: true,
        //     type: "linear"
        //   }
        // };

        // Plotly.newPlot("plot", data, layout);

      });
    }
























// function init() {
//     d3.json("../../samples.json").then(function (data) {

//         console.log(data);

//         d3.select("#selDataset")
//             .selectAll("option")
//             .data(data)
//             .enter()
//             .append("option")
//             .attr("value", d => d.names)
//             .text(function (d) {
//                 return d.names;
//             });

//             d3.select(".container")
//             .selectAll("p")
//             .data(data)
//             .enter()
//             .append("p")
//             .text(function (d) {
//                 return d.names;
//             });
//         console.log(data.names);
//     });
//     // data = [{
//     //     x: [1, 2, 3, 4, 5],
//     //     y: [1, 2, 4, 8, 16]
//     // }];

//     // var CHART = d3.selectAll("#plot").node();

//     // Plotly.newPlot(CHART, data);
// }

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", optionChanged);

// // This function is called when a dropdown menu item is selected
// function optionChanged() {
//     // Prevent page refresh
//     d3.event.preventDefault();

//     d3.json("../../samples.json").then(function (data) {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.node().value;

//     var barCHART = d3.selectAll("#bar").node();
//     var gaugeCHART = d3.selectAll("#gauge").node();
//     var bubbleCHART = d3.selectAll("#bubble").node();

//     // Initialize x and y arrays
//     var x = [];
//     var y = [];

//     switch (dataset) {
//         case "dataset1":
//             x = [1, 2, 3, 4, 5];
//             y = [1, 2, 4, 8, 16];
//             break;

//         case "dataset2":
//             x = [10, 20, 30, 40, 50];
//             y = [1, 10, 100, 1000, 10000];
//             break;

//         case "dataset3":
//             x = [100, 200, 300, 400, 500];
//             y = [10, 100, 50, 10, 0];
//             break;

//         default:
//             x = [1, 2, 3, 4, 5];
//             y = [1, 2, 3, 4, 5];
//             break;
//     }


//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle(barCHART, "x", [x]);
//     Plotly.restyle(barCHART, "y", [y]);

//     Plotly.restyle(gaugeCHART, "x", [x]);
//     Plotly.restyle(gaugeCHART, "y", [y]);

//     Plotly.restyle(bubbleCHART, "x", [x]);
//     Plotly.restyle(bubbleCHART, "y", [y]);
// });
// }

// init();















//  Load data from json
// function buildPlot() {
//     d3.json("../../samples.json").then(function (data) {

//         console.log(data);

//         d3.select("#selDataset")
//             .selectAll("option")
//             .data(data)
//             .enter()
//             .append("option")
//             .attr("value", d => d.names)
//             .text(function (d) {
//                 return d.names;
//             });
//         console.log(data.names);

//     });

    // console.log(data);
    // // console.log(metadata);
    // // console.log(samples);

    // // Select drop down menu
    // var dropdownMenu = d3.select("#selDataset")
    // // Create menu options from json 'names' data 
    // dropdownMenu.selectAll("option")
    //     .data(navelData)
    //     .enter()
    //     .append("option")
    //     .attr("value", d => d.names)
    //     .text(d => d.names)


    // //  Drop down menu hanlder
    // function optionChanged() {
    //     // Prevent page refresh
    //     d3.event.preventDefault();

    //     // Select input value from drop down menu
    //     var dataset = dropdownMenu.node().value;
    //     console.log(dataset);
    // }

    // buildPlot();