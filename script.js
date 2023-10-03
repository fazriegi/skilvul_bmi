const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});

function handleGetFormData() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  return { weight, height };
}

function validateFormData(obj) {
  if (obj.weight && obj.height && !isNaN(obj.weight) && !isNaN(obj.height)) {
    return true;
  }

  return false;
}

function checkBMI(weight, height) {
  const bmi = (weight / (height / 100) ** 2).toFixed(1);
  let status;

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
  } else if (bmi >= 30) {
    status = "Obesity";
  }

  return { bmi, status };
}

function submit() {
  let data = handleGetFormData();
  let result = document.getElementById("result");

  if (!validateFormData(data)) {
    result.innerHTML = "<p style='color:red'>Check the form once again!</p>";
    return;
  } else {
    let { bmi, status } = checkBMI(data.weight, data.height);
    result.innerHTML = `<p>Your BMI is <b>${bmi}</b> which means You are <b>${status}</b></p>`;
    return;
  }
}
