// 페이지 로드 후 Cloudinary 데이터 로딩 및 렌더링
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('data/images.json');
    const { images } = await res.json();
    const ul = document.querySelector('.shelf');

    images.forEach(({ url, title, alt }) => {
      const li = document.createElement('li');
      const img = document.createElement('img');

      // Cloudinary 트랜스포메이션 추가
      const transformation = 'w_80,q_60,f_auto';
      img.src = url.replace('/upload/', `/upload/${transformation}/`);
      img.setAttribute('title', title || '');
      img.setAttribute('alt', alt || 'Book spine image');
      img.setAttribute('loading', 'lazy');

      li.appendChild(img);
      ul.appendChild(li);
    });
  } catch (error) {
    console.error('이미지 로드 오류:', error);
  }
});
