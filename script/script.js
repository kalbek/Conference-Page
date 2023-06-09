function main() {
  // create speakers object
  const speakers = [
    {
      id: 1,
      title: "Yochai Benkler",
      mainText:
        "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
      subText:
        "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
      imageUrl: "../images/home/speaker-01.png",
    },
    {
      id: 2,
      title: "SohYeong Noh",
      mainText: "Director of Art Centre Nabi and a board member of CC Korea",
      subText:
        "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
      imageUrl: "../images/home/speaker-03.png",
    },
    {
      id: 3,
      title: "Lila tretikov",
      mainText: "Director of Art Centre Nabi and a board member of CC Korea",
      subText:
        "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
      imageUrl: "../images/home/speaker-03.png",
    },
    {
      id: 4,
      title: "Kilnam Chon",
      mainText: "",
      subText:
        "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame",
      imageUrl: "../images/home/speaker-02.png",
    },
    {
      id: 5,
      title: "Julia Leda",
      mainText: "President of Young Pirates of Europe",
      subText:
        "European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July",
      imageUrl: "../images/home/speaker-04.png",
    },
    {
      id: 6,
      title: "Ryan Merkley",
      mainText: "CEO of Creativve Commons, ex COO of the Mozilla Foundation",
      subText: "",
      imageUrl: "../images/home/speaker-06.png",
    },
  ];

  // dynamically create speakers section
  const speakerDiv = document.querySelector(".speaker-group");
  speakers.forEach((speaker) => {
    speakerDiv.innerHTML += `
      <div class="speaker-container ${
        speaker.id > 2 ? "hidden" : "visible"
      }" id="speaker-container">
        <div class="speaker">
          <div class="image" style="background-image: url(${
            speaker.imageUrl
          })"></div>
            <div class="text-content">
              <div class="title">${speaker.title}</div>
              <div class="main-text">${speaker.mainText}</div>
            <div class="sub-text">${speaker.subText}</div>
          </div>
        </div>
      </div>
        `;
  });
  //   handle MORE button action to toggle display for speakers
  const more = document.querySelector(".more-button");
  const moreOrLess = document.getElementById("more-less");
  more.addEventListener("click", () => {
    speakerDiv.innerHTML = ``;
    speakers.forEach((speaker) => {
      speakerDiv.innerHTML += `
        <div class="speaker-container ${"speaker" + speaker.id} ${
        moreOrLess.textContent === "MORE" ? "visible" : "hidden"
      }" id="speaker-container">
            <div class="speaker">
                <div class="image" style="background-image: url(${
                  speaker.imageUrl
                })"></div>
                    <div class="text-content">
                        <div class="title">${speaker.title}</div>
                        <div class="main-text">${speaker.mainText}</div>
                    <div class="sub-text">${speaker.subText}</div>
                </div>
            </div>
        </div>
        `;
    });
    //   toogle text content for MORE / LESS button and flip arrow direction on more or less
    const speakerContainer = document.getElementById("speaker-container");
    const moreOrLessArrow = document.querySelector(".arrow");
    if (speakerContainer.classList.contains("visible")) {
      {
        moreOrLess.innerHTML = "LESS";
        moreOrLessArrow.classList.add("rotate180");
      }
    } else {
      moreOrLess.innerHTML = "MORE";
      moreOrLessArrow.classList.remove("rotate180");
    }
    //   keep first two speakers visible when LESS is selected
    const firstSpeaker = document.querySelector(".speaker1");
    const secondSpeaker = document.querySelector(".speaker2");
    firstSpeaker.classList.remove("hidden");
    secondSpeaker.classList.remove("hidden");
    firstSpeaker.classList.add("visible");
    secondSpeaker.classList.add("visible");
  });
  // check screen width to specify no of speaker cards visible
}
// handle mobile menu opening and closing
const indexMenu = document.getElementById("open-mobile-menu");
const aboutMenu = document.getElementById("open-mobile-menu-about");
const mobileMenu = document.getElementById("mobile-menu-active");
const closeMobileMenu = document.getElementById("close-mobile-menus");
const aboutOption = document.getElementById("mobile-about");
// function to handle closing mobile menu
function handleCloseMobileMenu() {
  mobileMenu.classList.contains("visible") &&
    mobileMenu.classList.remove("visible");
  mobileMenu.classList.add("hidden");
}
// function to handle opening mobile menu
function handleOpenMobileMenu() {
  mobileMenu.classList.contains("hidden") &&
    mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("visible");
}
// open mobile menu on hamburger icon click (index page)
indexMenu !== null &&
  indexMenu.addEventListener("click", () => {
    handleOpenMobileMenu();
  });
// open mobile menu on hamburger icon click (about page)
aboutMenu !== null &&
  aboutMenu.addEventListener("click", () => {
    handleOpenMobileMenu();
  });
closeMobileMenu.addEventListener("click", () => {
  handleCloseMobileMenu();
});
aboutOption.addEventListener("click", () => {
  handleCloseMobileMenu();
});
// control number of speakers displayed for mobile and desktop views initially
function controlSpeakers() {
  const screenWidth = screen.width;
  const speakers = document.querySelectorAll(".speaker-container");
  speakers.forEach((speaker, index) => {
    if (screenWidth > 768) {
      speaker.classList.contains("hidden") &&
        speaker.classList.remove("hidden");
      speaker.classList.add("visible");
      handleCloseMobileMenu();
    } else {
      if (index < 2) {
        speaker.classList.contains("hidden") &&
          speaker.classList.remove("hidden");
        speaker.classList.add("visible");
      } else {
        speaker.classList.contains("visible") &&
          speaker.classList.remove("visible");
        speaker.classList.add("hidden");
      }
    }
  });
}
window.addEventListener("resize", () => {
  controlSpeakers();
});
window.onload = () => controlSpeakers();
window.removeEventListener("resize", () => {});
main();
