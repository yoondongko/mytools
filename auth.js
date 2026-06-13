document.addEventListener('DOMContentLoaded', function () {
  var link = document.querySelector('a[href="life-log.html"]');
  if (!link) return;
  link.addEventListener('click', function (e) {
    if (sessionStorage.getItem('lifeLogAuth') === '1') return;
    e.preventDefault();
    var pw = prompt('비밀번호를 입력하세요:');
    if (pw === '1029') {
      sessionStorage.setItem('lifeLogAuth', '1');
      location.href = 'life-log.html';
    } else if (pw !== null) {
      alert('비밀번호가 틀렸습니다');
    }
  });
});
