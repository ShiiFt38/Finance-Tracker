const data = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{
    type: 'bar',
    label: 'Income',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }, {
    type: 'line',
    label: 'Expenses',
    data: [2240, 3000, 450, 7650],
    fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }]
};

export default data;