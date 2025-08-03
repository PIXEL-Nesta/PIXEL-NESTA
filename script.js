// Category filter
const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".image-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "all" || cardCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Reset search on category switch
    document.getElementById("searchInput").value = "";
  });
});

// Live search
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();

  cards.forEach(card => {
    const altText = card.querySelector("img").alt.toLowerCase();
    if (altText.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Remove active highlight from category when searching
  buttons.forEach(b => b.classList.remove("active"));
});