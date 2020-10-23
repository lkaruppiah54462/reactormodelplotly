// // Part 1
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Programming Language Popularity"
// };

// Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Programming Language Popularity",
//   xaxis: { title: "Language"},
//   yaxis: { title: "Popularity"}
// };

// Plotly.newPlot("plot", data, layout);


// Part 3 - Line Chart
var Measured  = {
  y: [1289.0, 662.0, 1111.0, 334.0, 444.0, 539.0, 339.0, 418.0, 247.0, 1142.0, 317.0, 212.0, 773.0],
  x: [1500,600,1000,800,600,500,400,400,1000,800,600,500,500],
  name : 'Measured',
  mode: 'markers',
  type: 'scatter'
};

var Expected = {
  y: [200,400,600,800,1000,1200,1500],
  x: [200,400,600,800,1000,1200,1500],
  name:'Expected',
  type: 'line'
};

var data = [Measured,Expected];

var layout = {
  title: { 
    text : " Actual Time(ms) vs Predicted Time(ms)",
    font: {
      family: 'Courier New, monospace',
      size: 24,
      color : '#0f0f0f'
      },
    },
  xaxis :{
    title: {
      text : "Predicted Time(ms)",
      font: {
        family: 'Courier New, monospace',
        size: 18,
      }
    },
  },
  yaxis :{
    title: {
      text : "Actual Time(ms)",
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
};


Plotly.newPlot("plot", data, layout);

// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title:  "Programming Language Popularity",
// };

// Plotly.newPlot("plot", data, layout);


// Part 5 - Working Pie Chart
// var trace1 = {
//   labels: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   values: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: 'pie'
// };

// var data = [trace1];

// var layout = {
//   title:  "Programming Language Popularity",
// };

// Plotly.newPlot("plot", data, layout);

