'use strict';

import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const tableBody = document.querySelector('#target');
const modal = document.querySelector('#modal');

const getRestaurants = async () => await fetchData(`${baseUrl}/restaurants`);

const getDailyMenu = async (id, lang = 'fi') =>
  await fetchData(`${baseUrl}/restaurants/daily/${id}/${lang}`);

const init = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants) {
    tableBody.innerHTML = '<tr><td colspan="2">Failed to load data</td></tr>';
    return;
  }

  restaurants.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      // highlight
      document
        .querySelectorAll('.highlight')
        .forEach((el) => el.classList.remove('highlight'));

      row.classList.add('highlight');

      modal.showModal();

      const menu = await getDailyMenu(restaurant._id);

      modal.innerHTML = restaurantModal(restaurant, menu);
      // Modal kapatma butonu
      const closeBtn = modal.querySelector('#closeModal');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.close();
        });
      }
    });

    tableBody.appendChild(row);
  });
};

init();
