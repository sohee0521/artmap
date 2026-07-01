
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

const artistWrap = document.querySelector('.artist_wrap');
const artistData = [
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
  { imgSrc: "./img/artmap_20200114_13848048.jpg",
    major: "사진 한국",
    name: "전명은" },
]
  




