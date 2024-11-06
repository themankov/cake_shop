
// export async function getData(
//   page,
//   limit,
//   ...args
// ) {
//   try {
//     const url = `https://63f0de4b5b7cf4107e284139.mockapi.io/ballons?&categoryId=${categoryId}&limit=${limit}&page=${page}&sortBy=${sortByParams}&completed=false${
//       sortByAscDesc ? '&order=desc' : ''
//     }`;

//     const { data } = await axios.get(url);
//     return data;
//   } catch (e) {
//     alert(e);
//   }
// }
import axios from 'axios';

const API_URL = 'https://cloud-api.yandex.net/v1/disk';
const ACCESS_TOKEN = 'y0_AgAAAABpLP7zAAy8NAAAAAEXcWkTAABHyry06WdP-6DnQ2jCJIF2iopVHQ'; 

export const getFiles = async () => {
    try {
        const response = await axios.get(`${API_URL}/resources/files`, {
            headers: {
                Authorization: `OAuth ${ACCESS_TOKEN}`,
            },
        });
        console.log(response.data.items)
        return response.data.items;
    } catch (error) {
        console.error('Ошибка при получении списка файлов:', error);
        return [];
    }
};
