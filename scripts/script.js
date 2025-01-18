const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.querySelector("#cars-content");

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const filterText = item.textContent.toLowerCase();
    carItems.forEach((car) => {
      if (
        filterText === "все марки" ||
        car.querySelector("h4").textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = "flex";
      } else {
        car.style.display = "none";
      }
    });
    carsContent.scrollIntoView({ block: "start", behavior: "instant" });
  };
});

const carField = document.querySelector("#car");
const nameField = document.querySelector("#name");
const phoneField = document.querySelector("#phone");

document.querySelector("#order-action").addEventListener("click", function () {
  const fields = [carField, nameField, phoneField];

  let hasError = false;

  // Обработчик с дополнительной проверкой
  fields.forEach((field) => {
    if (field.value.trim() === "") {
      field.style.borderColor = "red";
      hasError = true;
    } else if (field === phoneField && field.value.trim().length < 10) {
      field.style.borderColor = "red";
      hasError = true;
    } else {
      field.style.borderColor = "white";
    }
  });

  if (!hasError) {
    setTimeout(() => {
      alert("Спасибо за заявку! Мы скоро свяжемся с вами");
      fields.forEach((field) => (field.value = ""));
    }, 100);
  }
});
