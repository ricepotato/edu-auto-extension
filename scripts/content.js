function init() {
  addNotiBanner();
  initInterval();
}

function initInterval() {
  hIntv = setInterval(() => {
    console.log("checking for next button...");
    const contentsFrame = document.getElementById("contentsFrame");
    if (contentsFrame === null) {
      console.warn("contentsFrame is null. skip...");
      return;
    }

    const frame = contentsFrame.contentWindow.document.getElementById("frame");
    if (frame === null) {
      console.warn("frame is null. skip...");
      return;
    }

    const btn = frame.contentWindow.document.getElementById("nextBtn");
    if (btn === null) {
      console.warn("can't find next button. skip...");
      return;
    }

    console.log("next button found. click...");
    btn.click();
  }, 5000);
}

function addNotiBanner() {
  const headers = document.getElementsByClassName("popup-head");
  headers[0].style = "position: relative;";
  headers[0].appendChild(bannerElement());
}

function bannerElement() {
  const banner = document.createElement("div");
  banner.innerHTML = "자동 Next 버튼 클릭 중...";
  banner.style =
    "display: flex; align-items: center; justify-content: center; position: absolute; top: 0; right: 0; width: 250px; height: 25px; background-color: #808080; color: white;";
  return banner;
}

init();
