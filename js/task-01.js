const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(function (categoryItem) {
  const title = categoryItem.querySelector("h2");
  const listItem = categoryItem.querySelectorAll("ul > li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${listItem.length}`);
});
