const tabItems = document.querySelectorAll(".select_1 h4");

for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener("click", function () {
    for (let j = 0; j < tabItems.length; j++) {
      tabItems[j].classList.remove("active");
    }

    this.classList.add("active");
  });
}
// select_1 end

const artistInfo = [
  {
    img: "./img/1_1.jpg",
    major: "사진 한국",
    name: "전명은",
  },
  {
    img: "./img/1_2.png",
    major: "회화 스페인",
    name: "파블로 피카소",
  },
  {
    img: "./img/1_3.jpg",
    major: "회화 한국",
    name: "박래현",
  },
  {
    img: "./img/2_1.jpg",
    major: "조각 한국",
    name: "김기창",
  },
  {
    img: "./img/2_2.jpg",
    major: "회화 한국",
    name: "박생광",
  },
  {
    img: "./img/2_3.jpg",
    major: "회화 한국",
    name: "정보영",
  },
  {
    img: "./img/3_1.jpg",
    major: "설치미술 한국",
    name: "최찬숙",
  },
  {
    img: "./img/3_2.jpg",
    major: "설치미술 한국",
    name: "황수현",
  },
  {
    img: "./img/3_3.png",
    major: "설치미술 한국",
    name: "우한나",
  },
  {
    img: "./img/4_1.jpg",
    major: "미디어 한국",
    name: "오민",
  },
  {
    img: "./img/4_2.gif",
    major: "회화 한국",
    name: "김선두",
  },
  {
    img: "./img/4_3.png",
    major: "회화 한국",
    name: "임현경",
  },
];

const artistWrapEl = document.querySelector(".artist_wrap");

let artistHTML = "";

for (let i = 0; i < artistInfo.length; i++) {
  artistHTML += `
    <div class="artist_con">
        <a href="#">
            <div class="img_wrap">
                <img class="artist_img" src="${artistInfo[i].img}" alt="작가">
                <div class="hover_black">
                    <h4>더보기 &rarr;</h4>
                </div>
            </div>

            <div class="like">
                <img class="like_img" src="./img/heart_icon.png" alt="하트">
            </div>

            <div class="text_wrap">
                    <small class="artist_major">${artistInfo[i].major}</small>
                    <h4 class="artist_name">${artistInfo[i].name}</h4>
            </div>
        </a>
    </div>
  `;
}

artistWrapEl.innerHTML = artistHTML;

const artistLikeEl = document.querySelectorAll(".artist_con .like_img");

for (let i = 0; i < artistLikeEl.length; i++) {
  artistLikeEl[i].addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.src.includes("red")) {
      this.src = "./img/heart_icon.png";
    } else {
      this.src = "./img/red_heart_icon.png";
    }
  });
}
// like end
