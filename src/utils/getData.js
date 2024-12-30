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

const API_URL = 'https://cloud-api.yandex.net/v1/disk';
const ACCESS_TOKEN =
  'y0_AgAAAABpLP7zAADLWwAAAAEXc6WeAADAQDH86zJKj5USSGa7XLLGVQ44zQ';
// y0_AgAAAABpLP7zAAy8NAAAAAEXcWkTAABHyry06WdP-6DnQ2jCJIF2iopVHQ
// y0_AgAAAABpLP7zAADLWwAAAAEXc6WeAADAQDH86zJKj5USSGa7XLLGVQ44zQ

export async function getFolderContents(folderPath) {
  const url = `https://y-gamma-ecru.vercel.app/disk/resources?path=${encodeURIComponent(
    folderPath
  )}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `OAuth ${ACCESS_TOKEN}`,
    },
  });

  if (response.ok) {
    const data = await response.json();

    return data; // Возвращает информацию о папке и файлах в ней
  } else {
    console.error('Ошибка:', response.statusText);
  }
}

export async function loadJsonFile(filePath) {
  const url = `https://server-cake-1.onrender.com/disk${filePath}`;
  const response = await fetch(url, {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  } else {
    console.error('Ошибка при загрузке JSON:', response.statusText);
  }
}

// Функция для получения прямой ссылки на изображение
async function getImageUrl(filePath) {
  const url = `https://server-cake-1.onrender.com/disk${filePath}`;
  const response = await fetch(url, {
    method: 'GET',
  });

  if (response.ok) {
    return response.url;
  } else {
    console.error(
      'Ошибка при получении ссылки на изображение:',
      response.statusText
    );
  }
}

export async function prepareDisplayData(
  jsonFilePath,
  page = 'main',
  offset = 0,
  input = '',
  id = 0
) {
  let limit = 8;
  let currentOffset = 0;
  if (page === 'menu') {
    currentOffset = offset;
  }
  const endOffset = currentOffset + limit;
  const jsonData = await loadJsonFile(jsonFilePath);
  console.log(jsonData);
  const displayData = await Promise.all(
    jsonData.map(async (item, index) => {
      if (input) {
        if (item.name.toLowerCase().startsWith(input.trim().toLowerCase())) {
          const imageUrl = await getImageUrl(item.imagePath);
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            imageUrl: imageUrl,
          };
        }
        return null;
      } else if (page === 'card') {
        if (String(item.id) === id) {
          const imageUrl = await getImageUrl(item.imagePath);
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            imageUrl: imageUrl,
          };
        }
        return null;
      } else {
        if (index >= currentOffset && index < endOffset) {
          const imageUrl = await getImageUrl(item.imagePath);
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            imageUrl: imageUrl,
          };
        }
        return null;
      }
    })
  );

  const filteredData = displayData.filter((item) => item !== null);
  console.log('Filtered displayData:', filteredData);
  return filteredData;
}
