import { MarsApiResponse, Photo } from '@/types/types';

export default defineEventHandler(async (event) => {
  const page = getRouterParam(event, 'page');
  const { nasaApiKey: apiKey } = useRuntimeConfig();

  const baseUrl =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
  const url = `${baseUrl}&page=${page}&api_key=${apiKey}`;
  const data = (await $fetch(url)) as MarsApiResponse;

  // Check if the response contains photos with URLs
  if (data.photos) {
    // Update photo URLs to use HTTPS
    data.photos = data.photos.map((photo: Photo) => {
      photo.img_src = photo.img_src.replace('http://', 'https://');
      return photo;
    });
  }
  return data.photos;
});
