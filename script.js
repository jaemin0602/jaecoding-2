// script.js
console.log("불필요한 스크립트 로딩 시작");

// 의도적인 시간 지연 코드 (실제 복잡한 코드를 시뮬레이션)
function delay(ms) {
    const start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}
delay(500); // 0.5초 지연
console.log("불필요한 스크립트 로딩 완료");