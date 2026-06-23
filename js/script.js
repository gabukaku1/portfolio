// ボタンを拾う
// ハンバーガーボタンに js-gnav-button をつける(自分でつける。htmlにつける。)
const jsGnavButton = document.querySelector('#js-gnav-button');
// リストを拾う 親につける？直接つけたら順番的に処理されない？
// bodyに id="js-gnav" をつけると動く(自分でつける。htmlにつける。)
const jsGnav = document.querySelector('#js-gnav');
// 出てきたリストを拾う
// spメニューにつける
const jsGnavList = document.querySelector('#js-gnav-list');

// ハンバーガークリックしたら
jsGnavButton.addEventListener('click', function () {
  // bodyタグにクラスをつける
  jsGnav.classList.toggle('is-open');
});

// 出てきたリストクリックしたら
jsGnavList.addEventListener('click', function () {
  // bodyタグにクラスをつける
  jsGnav.classList.toggle('is-open');
});
