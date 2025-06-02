function init() {
  addNotiBanner();
  initInterval();
}

function initInterval() {
  hIntv = setInterval(intervalFunc, 5000);
}

function intervalFunc() {
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

  // 중간에 나오는 다음 버튼튼
  const sumNextBtn = frame.contentWindow.document.getElementById("sum_nextBtn");
  if (sumNextBtn === null) {
    console.warn("sum_nextBtn is null. skip...");
  } else {
    sumNextBtn.click();
  }

  const finishBtn = finishButton(document);
  if (finishBtn !== null) {
    console.log("finish button found. click...");
    finishBtn.click();
    return;
  } else {
    console.warn("finish button not found. skip...");
  }

  const btn = frame.contentWindow.document.getElementById("nextBtn");
  if (btn === null) {
    console.warn("can't find next button. skip...");
    return;
  }

  console.log("next button found. click...");
  btn.click();
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

function quiz() {
  const innerDocument = getInnerDocument();

  const quizCheckBtn = innerDocument.getElementById("multipleQuiz_checkBtn");
  if (quizCheckBtn !== null) {
    console.log("quiz check phase...");
    console.log(quizData);
    return;
  }

  const quizStartBtn = innerDocument.getElementById("quiz_start_btn");
  if (quizStartBtn !== null) {
    quizStartBtn.click();
  }

  const quizNextBtn = innerDocument.getElementById("multipleQuiz_nextBtn");
  if (quizNextBtn !== null) {
    quizNextBtn.click();
  }
}

function getInnerDocument() {
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

  return frame.contentWindow.document;
}

function solveQuiz() {
  setInterval(() => {
    const questionNumber = getQuestionNumber();
    console.log(questionNumber);
    console.log(quizData);
  }, 5000);
}

function getQuestionNumber() {
  let rtn = 1;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.forEach((number) => {
    const question = document.getElementsByClassName(`q${number}`);
    if (question.length > 0) {
      rtn = number;
      return;
    }
  });
  return null;
}

/**
 * <div class="btn-group bottom">
    <!-- <a href="javascript:void(0);" class="btn primary md" onclick="fnSessionExtend()" title="세션연장">
        <span>세션연장</span>
    </a> -->
    <a href="javascript:void(0);" class="btn primary md" onclick="fnClose()" title="학습저장 후 닫기">
        <span id="spanFinish">학습완료</span>
    </a>
</div>

 * @param {*} contentDocument 
 * @returns 
 */
function finishButton(contentDocument) {
  //   const selector =
  //     "#frm > div > div.popup-container > div.btn-group.bottom > a";
  //   const btn = contentDocument.querySelector(selector);

  const btn = contentDocument.getElementById("spanFinish");
  if (btn.innerHTML === "학습완료") {
    return btn;
  }
  if (btn !== null) {
    console.warn("finish button found. but not match. skip...");
  }
  return null;
}

init();
