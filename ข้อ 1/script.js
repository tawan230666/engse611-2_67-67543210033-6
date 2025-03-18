const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
   
    const newSrc = thumb.src.replace('/100/100', '/600/400');
    mainImage.src = newSrc;
    mainImage.alt = thumb.alt;
  });


  thumb.addEventListener('mouseover', () => {
    thumb.style.transform = 'scale(1.05)';
    thumb.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  });


  thumb.addEventListener('mouseout', () => {
    thumb.style.transform = 'scale(1)';
    thumb.style.boxShadow = 'none';
  });
});