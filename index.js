 // javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500,
    svgHeight = 400,
    barPadding = 10,
    barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", d => svgHeight - d) 
    .attr("height", d => d)
    .attr("width", barWidth - barPadding)
    .style("fill", "red") //enter a color here
    .attr("transform", function (d, i) {
        let translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });
