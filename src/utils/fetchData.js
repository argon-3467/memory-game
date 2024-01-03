const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;
const DOG_API_KEY = import.meta.env.VITE_DOG_API_KEY;
const url_cat = `https://api.thecatapi.com/v1/`;
const url_dog = `https://api.thedogapi.com/v1/`;

/**
 *
 * @param {Number} amount of images to fetch (limit 100)
 * @returns array of random images fetched
 */
export default async function fetchImages(animal, difficulty) {
  let url = '';
  let API_KEY = '';

  if (animal.value === 'cat') {
    url = url_cat;
    API_KEY = CAT_API_KEY;
  } else if (animal.value === 'dog') {
    url = url_dog;
    API_KEY = DOG_API_KEY;
  }

  try {
    const response = await fetch(
      url +
        `images/search?&size=small&has_breeds=true&limit=${difficulty.value}`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Using Fake data for local testing
// import { catImageList, dogImageList } from './fakeData';

// export default async function fetchImages(animal, difficulty) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error(`Can't fetch Images `));
//       if (animal.value === 'cat')
//         resolve(catImageList.slice(0, difficulty.value));
//       else if (animal.value === 'dog')
//         resolve(dogImageList.slice(0, difficulty.value));
//       else reject(new Error(`Can't fetch Images `));
//     }, 500);
//   });

//   return await promise;
// }
