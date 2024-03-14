const data = {
    labels: ['Salary', 'Wages', 'Freelance', 'Investments', 'Side Hustle', 'Gifts', 'Reimbursements', 'Royalties', 'Other'],
    datasets: [
      {
        label: 'Expenses',
        data: [5000, 0, 350, 250, 2000, 150, 453, 211, 653, 230],
        backgroundColor: [
            "rgb(128, 128, 128)",
            "rgb(255, 140, 0)",
            "rgb(255, 20, 147)",
            "rgb(0, 128, 128)",
            "rgb(218, 112, 214)",
            "rgb(0, 0, 128)",
            "rgb(0, 174, 239)",
            "rgb(255, 192, 203)"
        ],
        borderWidth: 1,
      },
    ],options: {
        responsive: true,
        maintainAspectRatio: false
      }
  };

  export default data;