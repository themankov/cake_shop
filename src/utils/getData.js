
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
const ACCESS_TOKEN = 'y0_AgAAAABpLP7zAADLWwAAAAEXc6WeAADAQDH86zJKj5USSGa7XLLGVQ44zQ'; 
// y0_AgAAAABpLP7zAAy8NAAAAAEXcWkTAABHyry06WdP-6DnQ2jCJIF2iopVHQ
// y0_AgAAAABpLP7zAADLWwAAAAEXc6WeAADAQDH86zJKj5USSGa7XLLGVQ44zQ

export async function getFolderContents(folderPath) {
    const url = `https://cloud-api.yandex.net/v1/disk/resources?path=${encodeURIComponent(folderPath)}`;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `OAuth ${ACCESS_TOKEN}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data; // Возвращает информацию о папке и файлах в ней
    } else {
        console.error('Ошибка:', response.statusText);
    }
}

export async function loadJsonFile(filePath, page = "main") {
    let limit = 8;
    let currentOffset = 0;
    let offset = 0; 

    if (page === "menu") {
        currentOffset = offset;
    }

    const url = `https://cloud-api.yandex.net/v1/disk/resources/download?path=${encodeURIComponent(filePath)}&limit=${limit}&offset=${currentOffset}`;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `OAuth ${ACCESS_TOKEN}`
        }
    });

    if (response.ok) {
        if (page === "menu") {
            offset += 8; // Увеличиваем смещение для следующего запроса на странице меню
        } else {
            offset = 0; // Сбрасываем смещение для главной страницы
        }
        const data = await response.json();
        const jsonUrl = data.href; // Получаем прямую ссылку на JSON-файл
        const jsonResponse = await fetch(jsonUrl);
        const jsonData = await jsonResponse.json();
        
        return jsonData;
    } else {
        console.error('Ошибка при загрузке JSON:', response.statusText);
    }
}
// Функция для получения прямой ссылки на изображение
async function getImageUrl(filePath) {
    const url = `https://cloud-api.yandex.net/v1/disk/resources/download?path=${encodeURIComponent(filePath)}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `OAuth ${ACCESS_TOKEN}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.href; // Возвращаем прямую ссылку на изображение
    } else {
        console.error('Ошибка при получении ссылки на изображение:', response.statusText);
    }
}

// Основная функция для подготовки данных к отображению
export async function prepareDisplayData(jsonFilePath) {
    const jsonData = await loadJsonFile(jsonFilePath);
    
    const displayData = await Promise.all(jsonData.map(async (item) => {
        const imageUrl = await getImageUrl(item.imagePath); // Получаем прямую ссылку для каждого изображения
        return {
            id:item.id,
            name: item.name,
            description:item.description,
            imageUrl: imageUrl
        };
    }));

    return displayData;
}