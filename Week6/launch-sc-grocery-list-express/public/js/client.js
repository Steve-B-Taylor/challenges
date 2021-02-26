const fetchItems = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/groceries/random"
    );
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const responseBody = await response.json();
    console.log("responseBody:", responseBody);
    return responseBody;
  } catch (err) {
    console.error("Error in fetch!");
    console.error(err);
  }
};

function genRandom(max) {
  return Math.floor(Math.random() * max - 1);
}

const addRandomItem = async () => {
  const items = await fetchItems();
  findRandomItem = genRandom(items.length);
  const rndItem = document.getElementById("grocery-item");
  rndItem.innerHTML += `<li>${items[findRandomItem].name}</li>`;
};
let editButton = document.getElementById("randomItem");

editButton.addEventListener("click", () => {
  addRandomItem();
});
