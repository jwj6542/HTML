function openNav() {
  // 사이드바를 열고
  document.getElementById("mySidebar").style.left = "0";
  // main 영역을 밀어서 사이드바와 겹치지 않게 설정
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  // 사이드바를 닫고
  document.getElementById("mySidebar").style.left = "-250px";
  // main 영역을 원래대로 복귀
  document.getElementById("main").style.marginLeft = "0";
}
