(function () {

  var form = document.querySelector('form');
  var formData = {
    firstName:  document.querySelector('input[name="firstname"]'),
    lastName:  document.querySelector('input[name="lastname"]'),
      email:  document.querySelector('input[name="email"]')
  };

  // uzpildo forma
  function fillForm (name, surename, email) {
    formData.firstName.value = name;
    formData.lastName.value = surename;
    formData.email.value = email;
  }
  // uzpildome forma testiniais duomenimis
  // fillForm("tautvydas", "Kaleda", "a@a.lt");

  



  console.log("Duomenys . Vardas: ", formData.firstName.value,
  " pavarde: ", formData.lastName.value,
   " email: " , formData.email.value);
})();
