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

// ... setup() 維持不動 ...

function draw() {
    // 1. 維持背景透明塗層，製造溫馨的漸隱殘影
    background(255, 255, 255, 10); 

    // 🌟 ✨ NATIVE MAGIC ✨ 🌟
    // 在 draw 裡面，我們先對底層的 canvas 內容施展陰影魔法
    // `drawingContext` 讓我們可以直接跟瀏覽器的 native 繪圖層說話
    
    // 設定陰影的模糊程度（數值越大越模糊，就像是筆觸的擴散範圍）
    // 妳可以試著調整這裡的 50 到 20（稍微模糊）或 100（超級模糊）
    drawingContext.shadowBlur = 80; 
    
    // 設定陰影的顏色 (跟之前一樣的黃色，但稍微帶一點透明度)
    // 我們讓陰影顏色稍微淡一點，模糊看起來才不會太生硬
    drawingContext.shadowColor = 'rgba(255, 241, 51, 0.7)'; 


    // 2. 設定 p5.js 的線條樣式 (原本的設定)
    // 這裡我們把主線條的顏色也稍微調淡一點點 (透明度 180)，讓模糊光暈透出來
    stroke(255, 220, 50, 180);   
    strokeWeight(30);           // 可以稍微把線條調細一點點，模糊效果會更好看
    strokeCap(ROUND);           // 維持圓頭筆頭

    // 3. 畫線！(有了陰影魔法，畫出來的線條邊緣就會自動散開)
    line(pmouseX, pmouseY, mouseX, mouseY);

    // 🌟 重要！在畫完之後，記得要把陰影魔法關掉！
    // 這樣它才不會影響到網頁上其他可能有的 p5.js 畫圖內容
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'transparent';
}

// ✨ 進階小貼士：當使用者拉扯、改變瀏覽器視窗大小時，畫布也要自動跟著變形！
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}