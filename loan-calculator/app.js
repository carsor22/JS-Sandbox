//listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e) {
  //hide results
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1500);

  //show loader

  e.preventDefault();
});

function calculateResults() {
  console.log('Calculating...');

  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //retain amount value as decimal
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  //validation
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';

    // hide spinner
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Input Error');
  }
}

//show error

function showError(error) {
  //hide results
  document.getElementById('results').style.display = 'none';

  // hide spinner
  document.getElementById('loading').style.display = 'none';

  //create div
  const errorDiv = document.createElement('div');

  //get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //add class
  errorDiv.className = 'alert alert-danger';

  //create text node
  errorDiv.appendChild(document.createTextNode(error));

  //insert above heading
  card.insertBefore(errorDiv, heading);

  //clear error
  setTimeout(clearError, 1500);
}

function clearError() {
  document.querySelector('.alert').remove();
}
