let medicines = [];

function addMedicine() {
  let name = document.getElementById("medName").value;
  let time = document.getElementById("medTime").value;

  if(name === "" || time === "") {
    alert("Please fill all fields");
    return;
  }

  medicines.push({name, time});
  displayMedicines();
}

function displayMedicines() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  medicines.forEach(med => {
    let li = document.createElement("li");
    li.textContent = med.name + " at " + med.time;
    list.appendChild(li);
  });
}

setInterval(() => {
  let now = new Date();
  let currentTime = now.toTimeString().slice(0,5);

  medicines.forEach(med => {
    if(med.time === currentTime) {
      alert("Time to take " + med.name);
    }
  });
}, 60000);