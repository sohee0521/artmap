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

const con2Info = [
  {
    img: "./img/thumb-26015.png",
    tag: "디자인",
    title: "DROP YOUR OWN MOBILITY...",
    date: "2022-11-22 - 2022-11-28",
    location_1: "서울",
    location_2: "어바웃 프로젝트라운지",
  },
  {
    img: "./img/2afab04dba80c9f5f23e0b0de50ee6ef_file17.jpg",
    tag: "미디어",
    title: "아르코미술관 창작주제 연계 기획전 《어긋난 파동, 흔들리..",
    date: "2026-05-22 - 2026-07-19",
    location_1: "서울",
    location_2: "아르코 미술관",
  },
  {
    img: "./img/c.jpg",
    tag: "공예",
    title: "MMCA 이건희컬렉션 《피카소 도예》",
    date: "2026-03-18 - 2026-08-25",
    location_1: "성남",
    location_2: "성남아트센터",
  },
  {
    img: "./img/4.jpg",
    tag: "회화",
    title: "정보영 개인전 《사유를 앞질러 Outruns Thought》",
    date: "2026-06-12 - 2026-07-05",
    location_1: "서울",
    location_2: "OMGE SEOUL",
  },
  {
    img: "./img/5.jpg",
    tag: "회화",
    title: "추사의 그림 수업",
    date: "2026-04-07 - 2026-07-05",
    location_1: "대구",
    location_2: "대구간송미술관",
  },
  {
    img: "./img/6.png",
    tag: "특별전시",
    title: "《페르난도 보테로: 형태의 미학》",
    date: "2026-04-24 - 2026-08-30",
    location_1: "세종",
    location_2: "예술의전당 한가람디자인미술관",
  },
  {
    img: "./img/7.jpg",
    tag: "조각",
    title: "조각의 바깥에서 At the Edge of Sculpture",
    date: "2026-04-10 - 2026-07-26",
    location_1: "서울",
    location_2: "소마미술관",
  },
  {
    img: "./img/8.jpg",
    tag: "소장품전",
    title: "2026 소장품전 《블랑 블랙 파노라마》",
    date: "2026-02-12 - 2027-03-01",
    location_1: "수원",
    location_2: "수원시립미술관",
  },
  {
    img: "./img/9.jpg",
    tag: "디자인",
    title: "그림책이 살아있다!",
    date: "2026-04-17 - 2026-09-06",
    location_1: "서울",
    location_2: "소마미술관",
  },
  {
    img: "./img/10.jpg",
    tag: "디자인",
    title: "Distancing",
    date: "2026-02-24 - 2026-05-02",
    location_1: "서울",
    location_2: "타데우스 로팍 서울",
  },
  {
    img: "./img/11.jpg",
    tag: "디자인",
    title: "몸을 위한 변주곡 ㅡ 소목장세미 유휴공간 전시",
    date: "2026-04-02 - 2026-05-30",
    location_1: "서울",
    location_2: "서울시립미술관 북서울관",
  },
  {
    img: "./img/12.jpg",
    tag: "회화",
    title: "Unweaving the Rainbow 마르친 야누시 아누시…",
    date: "2026-04-11 - 2026-06-05",
    location_1: "서울",
    location_2: "페이지 파룸 갤러리",
  }
];

const con2ImgEl = document.querySelectorAll(".img_wrap_2");
const con2TagEl = document.querySelectorAll(".con_2 .tag_2");
const con2TitleEl = document.querySelectorAll(".con_title_wrap_2");
const con2DateEl = document.querySelectorAll(".date");
const con2location1El = document.querySelectorAll(".con_2 .location_1");
const con2location2El = document.querySelectorAll(".con_2 .location_2");

for (let i = 0; i < con2Info.length; i++) {
  con2ImgEl[i].innerHTML = `<img src="${con2Info[i].img}" alt="" />`;
  con2TagEl[i].innerHTML = `<small>${con2Info[i].tag}</small>`;
  con2TitleEl[i].innerHTML = `<h5>${con2Info[i].title}</h5>`;
  con2DateEl[i].innerHTML = `<small>${con2Info[i].date}</small>`;
  con2location1El[i].innerHTML = `<small>${con2Info[i].location_1}</small>`;
  con2location2El[i].innerHTML = `<small>${con2Info[i].location_2}</small>`;
  con2ImgEl[i].innerHTML = `
    <div class="tag_1"><small>전시중</small></div>
    <img src="${con2Info[i].img}" alt="전시">
    <div class="heart_icon_wrap">
        <img src="./img/heart_icon.png" alt="좋아요">
    </div>
  `;
}

// section 2 end

const heartEl = document.querySelectorAll('.heart_icon_wrap');

for (let i = 0; i < con2Info.length; i++) {

  heartEl[i].addEventListener('click', function(e) {
    e.preventDefault();
    
  const currentImg = heartEl[i].querySelector('img');
    
    if (currentImg.src.includes('red')) {
      currentImg.src = './img/heart_icon.png';
    } else {
      currentImg.src = './img/red_heart_icon.png';
    }
  });

}
// like end

