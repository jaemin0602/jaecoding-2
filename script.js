// script.js
console.log("불필요한 스크립트 로딩 시작");

// 2초 동안 브라우저 메인 스레드를 멈추게 하는 의도적인 지연 코드
function delay(ms) {
    const start = performance.now();
    while (performance.now() < start + ms) {
        // 아무것도 안 함 (시간만 지연)
    }
}
delay(500); // 0.5초 지연
console.log("불필요한 스크립트 로딩 완료");