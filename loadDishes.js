async function loadDishes() {
    const apiUrl = "http://lab7-api.std-900.ist.mospolytech.ru/api/dishes";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const dishes = await response.json();
        renderDishes(dishes); // функция для отображения блюд на странице
    } catch (error) {
        console.error("Ошибка при загрузке блюд:", error);
        alert("Не удалось загрузить блюда. Попробуйте позже.");
    }
}

// Пример функции renderDishes для отображения данных
function renderDishes(dishes) {
    const container = document.getElementById("dishes-container");
    container.innerHTML = ""; // Очистить предыдущие данные

    dishes.forEach(dish => {
        const dishElement = document.createElement("div");
        dishElement.className = "dish";

        dishElement.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="dish-image">
            <h3 class="dish-name">${dish.name}</h3>
            <p class="dish-category">${dish.category}</p>
            <p class="dish-price">${dish.price} руб.</p>
        `;

        container.appendChild(dishElement);
    });
}
