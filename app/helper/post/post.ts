import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.baseUrl;

type PostData<T> = {
  url: string;
  data: T;
  config?: AxiosRequestConfig;
};

async function post<T, R>(postData: PostData<T>): Promise<R> {
  const { url, data, config } = postData;

  try {
    const response: AxiosResponse<R> = await axios.post(`${API_BASE_URL}${url}`, data, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`Erreur lors de la requête POST : ${error.response.status} ${error.response.statusText}`);
    } else {
      console.error('Erreur inconnue lors de la requête POST');
    }
    throw error;
  }
}
export default post;
