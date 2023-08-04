/**
 * 검색창 제어
 */
// // 검색창 요소(.search) 찾기.
// const searchEl = document.querySelector(".search");
// const searchInputEl = searchEl.querySelector("input");
// // 검색창 요소를 클릭하면 실행.
// searchEl.addEventListener("click", function () {
//   searchInputEl.focus();
// });
// // 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
// searchInputEl.addEventListener("focus", function () {
//   searchEl.classList.add("focused");
//   searchInputEl.setAttribute("placeholder", "통합검색");
// });
// // 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
// searchInputEl.addEventListener("blur", function () {
//   searchEl.classList.remove("focused");
//   searchInputEl.setAttribute("placeholder", "");
// });

// $(function () {
//   // tabs
//   const tabEl = $(".tab-item");
//   const tabTit = tabEl.find(".tit");

//   // tab-item 옆 .on 삭제
//   tabEl.removeClass("on");
//   // .tab-item:first-child에게 .on 추가
//   // $(".tab-item:first-child").addClass("on");
//   tabEl.first().addClass("on");

//   // .tab-item .tit을 클릭했을 때
//   tabTit.on("click", function () {
//     // .tab-item .on 삭제
//     tabEl.removeClass("on");
//     // 방금 클릭한 나(this)의 부모(parent()에게 .on 추가
//     $(this).parents().addClass("on");
//   });
// });

// // document.addEventListener("DOMContentLoaded", function () {
// //   const tabTits = document.querySelectorAll(".tab-item .tit");
// //   const depth2Menus = document.querySelectorAll(".depth2");

// //   // tabTits.classList.add("on");
// //   tabTits.forEach(function (tabTit) {
// //     tabTit.addEventListener("click", function () {
// //       // 모든 하위 메뉴 숨기기
// //       depth2Menus.forEach(function (depth2) {
// //         depth2.classList.remove("checked");
// //       });
// //       // 클릭한 탭의 하위 메뉴 표시
// //       const parentTab = this.parentElement;
// //       const depth2ToDisplay = parentTab.querySelector(".depth2");
// //       if (depth2ToDisplay) {
// //         depth2ToDisplay.classList.add("checked");
// //       }
// //     });
// //   });
// // });
