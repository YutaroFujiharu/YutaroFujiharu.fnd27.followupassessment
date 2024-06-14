'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);

function changeColor() {
  const colorRed = Math.floor(Math.random() * 256);
  const colorGreen = Math.floor(Math.random() * 256);
  const colorBlue = Math.floor(Math.random() * 256);

  const color = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;

  document.body.style.backgroundColor = color;
}

document.getElementById('birthday-button').addEventListener('click', birthday);

function birthday() {
  const birthdayText = document.getElementById('birthday');
  birthdayText.innerText = '🎉🎉Yutaro 37歳の誕生日!🎉🎉';

  const commentText = document.getElementById('comment');
  commentText.innerText =
    'assessment公開日が誕生日なんて🤣(これマジです 笑)\n最高の誕生日プレゼントですね🎁\nたくさんプログラミングして!たくさんライブに行く!そんな37歳の目標';

  const image = document.getElementById('image');
  image.style.display = 'block';
}
