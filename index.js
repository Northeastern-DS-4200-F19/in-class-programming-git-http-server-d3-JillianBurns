 // javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500,
    svgHeight = 400,
    svgPadding = {x:10, y:10},
    barPadding = 20,
    barWidth = (svgWidth-(svgPadding.x*2)) / dataset.length; //width of bar including padding

var svg = d3.select('.bar-chart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", d => svgHeight - d) 
    .attr("height", d => d)
    .attr("width", barWidth - barPadding)
    .style("fill", "red")
    //.attr("visibility", "hidden")
    .attr("transform", function (d, i) {
        let translate = [svgPadding.x + (barWidth*i) + (barPadding/2), 0]; 
        return "translate("+ translate +")";
    });

var barChart = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cy", d => svgHeight - d) 
    .attr("r", 5)
    .style("fill", "white")
    //.attr("visibility", "hidden")
    .attr("transform", function (d, i) {
        let translate = [svgPadding.x + (barWidth*i) + (barWidth/2), 0]; 
        return "translate("+ translate +")";
    });
