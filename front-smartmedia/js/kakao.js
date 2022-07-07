const list = [
  {
    name: "석영",
    message: "ㅋ",
    music: "Heartbreaker - Tayo Sound",
    profile: "./img/seokyoung.jpg",
    birthday: "2000531",
    type: "mine",
    background: "./img/SY_back.jpeg"
  },
  {
    name: "카카오 채널",
    message: "",
    music: "",
    profile: "",
    birthday: "",
    type: "channel",
  },
  {
    name: "ㄱㅎ",
    message: "강아지를 좋아하심, 밥 먹을때 ",
    music: "이번 겨울 - 권진아",
    profile: "./img/GH.png",
    birthday: "20000324",
    type: "friend",
    background: "./img/GH_back.jpg"
  },
  {
    name: "김영현",
    message: "英賢하다, 제 친구 여친이랑 이름 같음",
    music: "살다 보면 - 차지연",
    profile: "./img/YH.png",
    birthday: "",
    type: "friend",
  },
  {
    name: "서지훈",
    message: "에이스, 결혼하셔야죠",
    music: "",
    profile: "./img/JH.png",
    birthday: "",
    type: "friend",
  },
  {
    name: "윤세영",
    message: "기타 잘침, 빡빡이",
    music: "",
    profile: "",
    birthday: "20000831",
    type: "friend",
  },
  {
    name: "이재석",
    message: "차를 좋아하심, 노력이 대단하십니다!",
    music: "",
    profile: "./img/JS.png",
    birthday: "",
    type: "friend",
  },
  {
    name: "정유경",
    message: "아픔...건강하세요",
    music: "와르르♥ - Colde(콜드)",
    profile: "./img/YK.png",
    birthday: "",
    type: "friend",
  },
  {
    name: "Bot1",
    message: "",
    music: "",
    profile: "",
    birthday: "",
    type: "friend",
  },
  {
    name: "Bot2",
    message: "",
    music: "",
    profile: "",
    birthday: "",
    type: "friend",
  },
  {
    name: "Bot3",
    message: "",
    music: "",
    profile: "",
    birthday: "",
    type: "friend",
  },
  {
    name: "Bot4",
    message: "",
    music: "",
    profile: "",
    birthday: "",
    type: "friend",
  }
];

const mine = document.getElementsByClassName("group mine")[0];

const modalEl = document.getElementById("modal");
const closeBtnEl = document.getElementById("close_btn");
closeBtnEl.addEventListener("click", () => {
  modalEl.style.display = "none";
});

refresh();

function refresh() {
  getList();
  addModalEvent();
}

function getList() {
  list.forEach( (v, i) => {
    setProfile(i);
  });
}

function addModalEvent() {
  Array.from(document.getElementsByClassName("user-img")).forEach((v) => {
    v.addEventListener("click", (e) => {
      setModal(e.target.getAttribute("data-index"));
      modalEl.style.display = "flex";
    });
  });
}

function setProfile(index) {
    const name = list[index].name;
    const message = list[index].message;
    const profile = list[index].profile;
    const music = list[index].music;
    let groupEL;
    if (list[index].type === "mine") {
      groupEL = document.querySelector(".group.mine")
    } else if (list[index].type === "friend") {
      groupEL = document.querySelector(".group.friend")
    }
    if (groupEL) {
      groupEL.innerHTML +=`
        <div class="profile">
          <div class="user-img" data-index="${index}"
          ${profile ? 'style="background-image: url(' + profile + ')"' : ""} "></div>
          <div class="user-info">
            <span class="user-name">${name}</span>
            <span class="user-message">${message}</span>
          </div>
          ${music ? '<div class="user-music">' + music + '</div>' : ''}
        </div>`;
    }
}

function setModal(index) {
  const content = document.querySelector("#modal .content");
  const profileImg = document.querySelector("#modal .profile_img");
  const profileName = document.querySelector("#modal .profile_name");
  const background = list[+index].background || "";
  const profile = list[+index].profile || "";
  // console.log(content, profileImg, profileName, index);
  content.style.backgroundImage = `url(${background})`;
  profileImg.style.backgroundImage = `url(${profile})`;
  profileName.innerText = list[+index].name;
}
