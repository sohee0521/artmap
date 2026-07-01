const tabItems = document.querySelectorAll(".select_1 h4");

for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener("click", function() {
    
    for (let j = 0; j < tabItems.length; j++) {
      tabItems[j].classList.remove("active");
    }

    this.classList.add("active");
  });
}
// select_1 end