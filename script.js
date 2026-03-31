let medicines = JSON.parse(localStorage.getItem("medicines")) || [];

function addMedicine() {
  let name = document.getElementById("medName").value;
  let time = document.getElementById("medTime").value;

  if (name === "" || time === "") {
    alert("Please fill all fields");
    return;
  }

  medicines.push({ name, time });
  localStorage.setItem("medicines", JSON.stringify(medicines));

  displayMedicines();
}

function deleteMedicine(index) {
  medicines.splice(index, 1);
  localStorage.setItem("medicines", JSON.stringify(medicines));
  displayMedicines();
}

function displayMedicines() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  medicines.forEach((med, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${med.name} at ${med.time}
      <button class="delete-btn" onclick="deleteMedicine(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

setInterval(() => {
  let now = new Date();
  let currentTime = now.toTimeString().slice(0,5);

  medicines.forEach(med => {
    if (med.time === currentTime) {
      alert("Time to take " + med.name);
    }
  });
}, 60000);

displayMedicines();