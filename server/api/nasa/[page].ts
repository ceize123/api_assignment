export default defineEventHandler(async (event) => {
  const { page } = event.context.params as any;
  const { nasaApiKey: apiKey } = useRuntimeConfig();

  const baseUrl =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
  const url = `${baseUrl}&page=${page}&api_key=${apiKey}`;
  const data = (await $fetch(url)) as any;
  return data.photos;
});
