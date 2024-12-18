import axios from 'axios';

export async function searchImage(image, page, per_page) {
  const params = {
    key: '47705803-9103fa890a87563702eb048db',
    q: image.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
  };

  const response = await axios.get('https://pixabay.com/api/', { params });
  return response.data;
}
