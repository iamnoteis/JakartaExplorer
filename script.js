function ubah(pilih) {
    if (pilih == 1) document.getElementById('gambar').src = 'Assets/monas.jpg';
    else if (pilih == 2) document.getElementById('gambar').src = 'Assets/taman_suropati.jpg';
    else if (pilih == 3) document.getElementById('gambar').src = 'Assets/trio.jpg';
    else if (pilih == 4) document.getElementById('gambar').src = 'Assets/istiqlal.jpg';
}

window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 0)
});

let burger = document.querySelector('.burgerMenu');
let mobilenav = document.querySelector('.mobile-nav');

burger.addEventListener('click', function(){
    mobilenav.classList.toggle('active');
})

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      let scrollDistance = document.documentElement.clientHeight;
      if (btn.className.split(' ').includes('scroll-up')) {
        scrollDistance *= -1;
      }
      window.scrollBy(0, scrollDistance);
    });
  });
  
