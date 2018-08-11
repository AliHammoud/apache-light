window.addEventListener('load', function(){
  const target = document.querySelector(".btn");

  target.addEventListener('click', request);

  function request() {
    window.location = 'https://github.com/AliHammoud/apache-light/raw/master/apache-dist/apache-v2.4.34.tar.gz';
  }
});
