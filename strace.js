"use strict";

const docStyle = document.documentElement.style; /* 本頁面 CSS */
let mouseX = 0;
let mouseY = 0;
let straceX = 0;
let straceY = 0;
/* 速度 */
let velX = 0;
let velY = 0;

/* mousemove 滑鼠移動 */
document.addEventListener("mousemove", (e) => {
  //   console.log(e.clientX);  抓 x
  //   console.log(e.clientY);  抓 y
  mouseX = e.clientX;
  mouseY = e.clientY;
  /* 每當滑鼠移動即取得新座標 */
});

const strength = 0.1; /* 特效強度 */

/* 將滑鼠座標存到欲追蹤之物件 */
function delayMotion() {
  //   straceX = mouseX;
  //   straceY = mouseY;

  //   docStyle.setProperty("--mouse-X", straceX); /* 設置到根目錄 var */
  //   docStyle.setProperty("--mouse-Y", straceY);

  // distance 做延遲 ( 控制每次移動不同距離, 使每次物件與滑鼠移動距離差固定 )
  let distanceX = mouseX - straceX;
  distanceX *= strength;
  straceX += distanceX;
  let distanceY = mouseY - straceY;
  distanceY *= strength;
  straceY += distanceY;

  // 移動越大放越大
  velX *= strength; /* 變 0 縮回來 */
  velX += distanceX;
  velY *= strength;
  velY += distanceY;

  docStyle.setProperty("--mouse-X", straceX); /* 設置到根目錄 var */
  docStyle.setProperty("--mouse-Y", straceY);
  docStyle.setProperty("--scale", (velX + velY) * strength);

  requestAnimationFrame(delayMotion); /* 每個 Frame 更新 */
}

delayMotion();
