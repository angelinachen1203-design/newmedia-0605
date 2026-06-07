function setup() {
    // 1. 建立一個跟「瀏覽器視窗」一模一樣大的畫布
    let canvas = createCanvas(windowWidth, windowHeight);
    
    // 2. 施展網頁魔法：把畫布推到最底層當背景！
    canvas.position(0, 0);             // 固定在左上角 (0,0) 的位置
    canvas.style('position', 'fixed'); // 讓畫布鎖死在畫面上，網頁上下滾動時它才不會跑走
    canvas.style('z-index', '-1');     // z-index 是圖層高度，-1 代表把它推到所有東西的「正後方」

    // 3. 一開始先清除背景，讓它是透明的
    clear(); 
}

function draw() {
    // 為了製造滑鼠的「殘影效果」，我們每次都塗上一層「極度透明的白色」
    // (255, 255, 255) 是白色，最後的 10 是透明度
    background(255, 255, 255, 10); 

    // 畫出跟隨滑鼠的橘色圓點
    noStroke(); 
    fill(255, 220, 50); 
    ellipse(mouseX, mouseY, 40, 40); 
}

// ✨ 進階小貼士：當使用者拉扯、改變瀏覽器視窗大小時，畫布也要自動跟著變形！
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}