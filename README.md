# edu auto

자동 Next 버튼 클릭 extension

### DEV 설치 방법

#### 압축 해제된 확장 프로그램 로드 https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=ko#load-unpacked

개발자 모드에서 압축해제된 확장 프로그램을 로드하려면 다음 단계를 따르세요.

1. 새 탭에서 chrome://extensions 를 입력하여 확장 프로그램 페이지로 이동합니다. (기본적으로 chrome:// URL은 연결할 수 없습니다.) 또는 확장 프로그램 메뉴 퍼즐 버튼을 클릭하고 메뉴 하단에서 확장 프로그램 관리를 선택합니다. 또는 Chrome 메뉴를 클릭하고 도구 더보기 위로 마우스를 가져간 다음 확장 프로그램을 선택합니다.
2. 개발자 모드 옆에 있는 전환 스위치를 클릭하여 개발자 모드를 사용 설정합니다.
3. 압축 해제된 항목 로드 버튼을 클릭하고 확장 프로그램 디렉터리를 선택합니다.

```
#frm > div > div.popup-container > div.btn-group.bottom


```

```
<div class="btn-group bottom">
    <!-- <a href="javascript:void(0);" class="btn primary md" onclick="fnSessionExtend()" title="세션연장">
        <span>세션연장</span>
    </a> -->
    <a href="javascript:void(0);" class="btn primary md" onclick="fnClose()" title="학습저장 후 닫기">
        <span id="spanFinish">학습완료</span>
    </a>
</div>
```
