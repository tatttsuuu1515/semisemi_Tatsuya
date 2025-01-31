document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.news-list li');
    items.forEach(item => {
        item.classList.add('show-tooltip'); // 初期状態でツールチップを表示
    });
    const edoPeriodItem = document.querySelector('.news-list li'); // 最初の項目をターゲットに
    edoPeriodItem.classList.add('initial-tooltip'); // 初期表示のためのクラスを追加

    // 4秒後にフェードアウトを開始
    setTimeout(() => {
        edoPeriodItem.classList.add('fade-out');
    }, 2500);

    // 4.5秒後に初期ツールチップを完全に非表示にし、ホバー用のツールチップを有効化
    setTimeout(() => {
        edoPeriodItem.classList.remove('initial-tooltip', 'fade-out');
        edoPeriodItem.classList.add('show-tooltip'); // ホバー用のクラスを追加
    }, 3000); // 500ミリ秒のフェードアウト時間後
});

function toggleDetails(element) {
    const details = element.querySelector('.details');
    const isVisible = details.style.maxHeight;

    if (isVisible) {
        // 詳細を非表示にしてツールチップを表示
        details.style.maxHeight = null;
        details.style.padding = "0 10px";
        element.classList.add('show-tooltip');
    } else {
        // 詳細を表示してツールチップを非表示
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.padding = "10px";
        element.classList.remove('show-tooltip');
    }
}
