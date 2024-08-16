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
    const response: AxiosResponse<R> = await axios.post(`${API_BASE_URL}`, data, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`Error while POST : ${error.response.status} ${error.response.statusText}`);
    } else {
      console.error('Error POST');
    }
    throw error;
  }
}
export default post;
