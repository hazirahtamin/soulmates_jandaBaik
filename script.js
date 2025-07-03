function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}

function toggleDishes() {
  const dishList = document.getElementById("dish-list");
  if (dishList) {
    dishList.style.display = (dishList.style.display === "none" || dishList.style.display === "") ? "block" : "none";
  }
}



