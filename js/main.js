const con2Info = [
  {
    img: "./img/con2Img1.png",
    tag: "공예",
    title: "MMCA 이건희컬렉션 《피카소 도예》",
    date: "2026.03.18 ~ 2026.06.28",
    location_1: "경남",
    location_2: "경남도미술관",
  },
  {
    img: "./img/con2Img2.png",
    tag: "디자인",
    title: "베르디(VERDY)개인전 《아이 빌리브 인 미(I Believe in Me)》",
    date: "2026.05.22  ~ 2026.07.19",
    location_1: "서울",
    location_2: "마르코미술관",
  },
  {
    img: "./img/con2Img3.png",
    tag: "회화",
    title: "정보경 개인전 《사유를 앞질러 Outruns Thought》",
    date: "2026.06.12 ~ 2026.07.05",
    location_1: "서울",
    location_2: "OMG SEOUL",
  },
  {
    img: "./img/con2Img4.png",
    tag: "회화",
    title: "추사의 그림 수업",
    date: "2026.04.07 ~ 2026.07.05 ",
    location_1: "대구",
    location_2: "대구간송미술관",
  },
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
}

// section 2 end

const con3Info = [
  {
    img1: "./img/con3Img1_1.png",
    img2: "./img/con3Img1_2.png",
    img3: "./img/con3Img1_3.png",
  },
  {
    img1: "./img/con3Img2_1.png",
    img2: "./img/con3Img2_2.png",
    img3: "./img/con3Img2_3.png",
  },
  {
    img1: "./img/con3Img3_1.png",
    img2: "./img/con3Img3_2.png",
    img3: "./img/con3Img3_3.png",
  },
];

const con3Img1El = document.querySelectorAll(".img_wrap_3 .img_wrap_left");
const con3Img2El = document.querySelectorAll(".img_wrap_3 .img_wrap_right");

for (let i = 0; i < con3Info.length; i++) {
  con3Img1El[i].innerHTML = `<img src="${con3Info[i].img1}" alt="" />`;
  con3Img2El[i].innerHTML =
    `<img src="${con3Info[i].img2}" alt="" /><img src="${con3Info[i].img3}" alt="" />`;
}

// section 3 end

const con5Info = [
  {
    img: "./img/con5Img1.png",
    title:
      "경계의 시간 ‘새벽’, 불완전한 존재들이 건네는 조용한 위로: 《새벽에 남은 새》 ",
  },
  {
    img: "./img/con5Img2.png",
    title: "국내 최대 규모, 우고 론디노네 개인전 《BURN TO SHINE》",
  },
  {
    img: "./img/con5Img3.png",
    title:
      "<예화랑/ 베니스비엔날레 한국관 건립 30주년 기획전 《30 Years: Passages》",
  },
  {
    img: "./img/con5Img4.png",
    title: "신미정 애도와 복원의 미술: 망각의 이미지와 은폐된 이름으로부터",
  },
  {
    img: "./img/con5Img5.png",
    title: "인공지능을 활용하는 창작자에게 묻는다: 동시대 예술가 36인 인터뷰",
  },
  {
    img: "./img/con5Img1.png",
    title:
      "경계의 시간 ‘새벽’, 불완전한 존재들이 건네는 조용한 위로: 《새벽에 남은 새》 ",
  },
  {
    img: "./img/con5Img2.png",
    title: "국내 최대 규모, 우고 론디노네 개인전 《BURN TO SHINE》",
  },
  {
    img: "./img/con5Img3.png",
    title:
      "<예화랑/ 베니스비엔날레 한국관 건립 30주년 기획전 《30 Years: Passages》",
  },
  {
    img: "./img/con5Img4.png",
    title: "신미정 애도와 복원의 미술: 망각의 이미지와 은폐된 이름으로부터",
  },
  {
    img: "./img/con5Img5.png",
    title: "인공지능을 활용하는 창작자에게 묻는다: 동시대 예술가 36인 인터뷰",
  },
];

const con5ImgEl = document.querySelectorAll(".img_wrap_5");
const con5TitleEl = document.querySelectorAll(".con_title_5");

for (let i = 0; i < con5Info.length; i++) {
  con5ImgEl[i].innerHTML = `<img src="${con5Info[i].img}" alt="" />`;
  con5TitleEl[i].innerHTML = `<h5>${con5Info[i].title}</h5>`;
}
