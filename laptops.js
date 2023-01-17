const laptopsElement = document.getElementById("laptop");
const specsElement = document.getElementById("specs");
const buyButtonElement = document.getElementById("buy");
const missingImage = "assets/images/5.png";
let laptops = [];

fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then((res) => res.json())
  .then((data) => {
    laptops = data;
    addLaptopsToCard(laptops);
  });

const addLaptopsToCard = (laptops) => {
  laptops.forEach((x) => addLaptopToMenu(x));
  setFirstLaptop(laptops);
};

const setFirstLaptop = (laptops) => {
  document.getElementById("description").innerHTML = laptops[0].description;
  document.getElementById("title").innerHTML = laptops[0].title;
  document.getElementById("price").innerHTML = laptops[0].price;
  document.getElementById(
    "image"
  ).src = `https://hickory-quilled-actress.glitch.me/${laptops[0].image}`;
  const specList = document.createElement("li");

  laptops[0].specs.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    specList.appendChild(li);
  });
  specsElement.innerHTML = "";
  specsElement.appendChild(specList);
};

const addLaptopToMenu = (laptop) => {
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));
  laptopsElement.appendChild(laptopElement);
};

const handleChange = () => {
  selectedLaptop = laptops[laptopsElement.selectedIndex];
  document.getElementById("description").innerHTML = selectedLaptop.description;
  document.getElementById("title").innerHTML = selectedLaptop.title;
  document.getElementById("price").innerHTML = selectedLaptop.price;

  if (selectedLaptop.image == "assets/images/5.jpg") {
    document.getElementById(
      "image"
    ).src = `https://hickory-quilled-actress.glitch.me/${missingImage}`;
  } else {
    document.getElementById(
      "image"
    ).src = `https://hickory-quilled-actress.glitch.me/${selectedLaptop.image}`;
  }

  const specList = document.createElement("li");

  selectedLaptop.specs.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    specList.appendChild(li);
  });
  specsElement.innerHTML = "";
  specsElement.appendChild(specList);
};

const handleBuy = () => {
  let balance = Number(document.getElementById("balance").innerHTML);
  let price = Number(document.getElementById("price").innerHTML);
  let laptopName = document.getElementById("title").innerHTML;
  if (price > balance) {
    alert("You cannot afford this");
  } else {
    let newBalance = balance - price;
    document.getElementById("balance").innerHTML = newBalance;
    alert(`You have succefully purchased ${laptopName}`);
  }
};

buyButtonElement.addEventListener("click", handleBuy);
laptopsElement.addEventListener("change", handleChange);
