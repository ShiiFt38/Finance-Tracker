const data = {
    labels: ['Groceries', 'Gas', 'Restaurants', 'Transportation', 'Healthcare', 'Personal Care', 'Entertainment', 'Clothing', 'Travel', 'Miscellaneous'],
    datasets: [
      {
        label: 'Expenses',
        data: [120, 192, 350, 543, 221, 321, 453, 211, 653, 230],
        backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(0, 174, 239)",
            "rgb(0, 255, 127)",
            "rgb(159, 95, 159)",
            "rgb(255, 215, 0)",
            "rgb(128, 128, 128)",
            "rgb(255, 192, 203)",
            "rgb(255, 165, 0)",
            "rgb(65, 105, 225)",
            "rgb(34, 139, 34)"
        ],
        borderWidth: 1,
      },
    ],options: {
        responsive: true,
        maintainAspectRatio: false
      }
  };

export default data;