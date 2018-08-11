window.addEventListener('load', function(){
  const target = document.querySelector(".btn");

  target.addEventListener('click', request);

  function request() {
    window.location = '../apache-dist/apache-v2.4.34.tar.gz';
  }
});
