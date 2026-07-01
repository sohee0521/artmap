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

const ongoingButtons = document.querySelectorAll(".ongoing_btn .ongoing");

for (let a = 0; a < ongoingButtons.length; a++) {
  ongoingButtons[a].addEventListener("click", function() {
    
    this.classList.toggle("btn_active");
  });
}

// ongoing end