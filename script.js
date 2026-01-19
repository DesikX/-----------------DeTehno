// 1. Подготовка данных для предпросмотра категории
const productData = {
    pc: [
        { name: "Ігровий ПК ASUS ROG Strix G15", price: "45 000 грн", img: "./img_catalog/pc (1).png"}, 
        { name: "Офісний ПК Lenovo ThinkCentre M70", price: "25 000 грн", img: "./img_catalog/pc (2).png"},
        { name: "Комп'ютер для дому HP Pavilion", price: "30 000 грн", img: "./img_catalog/pc (3).png"},
        { name: "Ігровий ПК MSI Trident X", price: "50 000 грн", img: "./img_catalog/pc (4).png"},
        { name: "Міні-ПК Intel NUC 11", price: "20 000 грн", img: "./img_catalog/pc (5).png"},
        { name: "Ігровий ПК Dell Alienware Aurora", price: "70 000 грн", img: "./img_catalog/pc (6).png"},
        { name: "Офісний ПК Acer Aspire TC", price: "18 000 грн", img: "./img_catalog/pc (7).png"},
        { name: "Комп'ютер для творчості Apple Mac Mini", price: "35 000 грн", img: "./img_catalog/pc (8).png"}
    ],
    phones: [
        { name: "Xiaomi 13", price: "15 000 грн", img: "./img_catalog/phones (1).png"}, 
        { name: "Xiaomi 13 Pro", price: "17 000 грн", img: "./img_catalog/phones (2).png"},
        { name: "Samsung Galaxy S23", price: "20 000 грн", img: "./img_catalog/phones (3).png"},
        { name: "Xiaomi POCO X8", price: "22 000 грн", img: "./img_catalog/phones (4).png"},
        { name: "iPhone 14 Pro", price: "18 000 грн", img: "./img_catalog/phones (5).png"},
        { name: "Samsung Galaxy S20", price: "22 000 грн", img: "./img_catalog/phones (6).png"},
        { name: "Huawei P50 Pro", price: "14 000 грн", img: "./img_catalog/phones (7).png"},
        { name: "iPhone 17 Pro", price: "45 000 грн", img: "./img_catalog/phones (8).png"}
    ],
    portable: [
        { name: "Електронна книга Kindle Paperwhite", price: "5 000 грн", img: "./img_catalog/portables (1).png"}, 
        { name: "Зарядна станція Xiaomi", price: "1 000 грн", img: "./img_catalog/portables (2).png"},
        { name: "Електронна книга Kindle Paperwhite MegG2", price: "8 000 грн", img: "./img_catalog/portables (3).png"},
        { name: "Гнучкий ліхтарик", price: "300 грн", img: "./img_catalog/portables (4).png"},
        { name: "Зарядна станція Huawei", price: "2 000 грн", img: "./img_catalog/portables (5).png"}
    ],
    photo_video: [
        { name: "Фотоапарат Canon EOS R5", price: "3 200 грн", img: "./img_catalog/photo_video (1).png"}, 
        { name: "Відеокамера Sony A7S III", price: "150 000 грн", img: "./img_catalog/photo_video (2).png"},
        { name: "Об'єктив Nikon AF-S 50mm", price: "8 000 грн", img: "./img_catalog/photo_video (3).png"},
        { name: "Дрон DJI Mavic 3", price: "4 000 грн", img: "./img_catalog/photo_video (4).png"},
        { name: "Відеокамера Nikon E8X IV", price: "105 000 грн", img: "./img_catalog/photo_video (5).png"}
    ],
    tv: [
        { name: "PlayStation 5 Red\"", price: "37 000 грн", img: "./img_catalog/tv (1).png"}, 
        { name: "LG OLED C1 65\"", price: "60 000 грн", img: "./img_catalog/tv (2).png"},
        { name: "Sony Bravia A80J 55\"", price: "45 000 грн", img: "./img_catalog/tv (3).png"},
        { name: "Samsung QLED 55\"", price: "15 000 грн", img: "./img_catalog/tv (4).png"},
        { name: "TCL 4K UHD 43\"", price: "25 000 грн", img: "./img_catalog/tv (5).png"},
        { name: "PlayStation 5\"", price: "30 000 грн", img: "./img_catalog/tv (6).png"},
        { name: "PlayStation 4\"", price: "20 000 грн", img: "./img_catalog/tv (7).png"},
        { name: "Samsung The Frame 43\"", price: "30 000 грн", img: "./img_catalog/tv (3).png"}
    ],
    office: [
        { name: "Принтер HP LaserJet", price: "8 000 грн", img: "./img_catalog/office (1).png"}, 
        { name: "Принтер HP LaserJet Pro", price: "6 000 грн", img: "./img_catalog/office (2).png"},
        { name: "Сканер Epson Perfection", price: "12 000 грн", img: "./img_catalog/office (3).png"},
        { name: "Відеокамера BenQ", price: "25 000 грн", img: "./img_catalog/office (4).png"},
        { name: "Настільна лампа Casio", price: "500 грн", img: "./img_catalog/office (5).png"},
        { name: "Дошка для презентації", price: "3 000 грн", img: "./img_catalog/office (6).png"},
        { name: "3D принтер Rexel", price: "34 000 грн", img: "./img_catalog/office (7).png"},
        { name: "Офісний принтер IKEA", price: "5 000 грн", img: "./img_catalog/office (8).png"},
        { name: "Принтер Dell 27\"", price: "10 000 грн", img: "./img_catalog/office (9).png"}
    ],
    auto: [ 
        { name: "Чохли на сидіння", price: "1 500 грн", img: "./img_catalog/auto (2).png"},
        { name: "Парасолька від сонця в машину", price: "800 грн", img: "./img_catalog/auto (3).png"},
        { name: "Подушка на сидінні", price: "700 грн", img: "./img_catalog/auto (4).png"},
        { name: "Чохли на сидіння", price: "1 000 грн", img: "./img_catalog/auto (5).png"},
        { name: "Подушка для шиї", price: "400 грн", img: "./img_catalog/auto (6).png"},
        { name: "Чохли на колеса", price: "500 грн", img: "./img_catalog/auto (7).png"},
        { name: "Чохли на колеса", price: "600 грн", img: "./img_catalog/auto (7).png"},
        { name: "Щітка для авто", price: "200 грн", img: "./img_catalog/auto (8).png"},
        { name: "Щітка для авто", price: "300 грн", img: "./img_catalog/auto (9).png"},
        { name: "Чохли на сидіння", price: "999 грн", img: "./img_catalog/auto (10).png"}
    ],
    gaming: [
        { name: "Ігровий джойстик Logitech ", price: "1 200 грн", img: "./img_catalog/gaming (1).png"}, 
        { name: "Ігрові навушники HyperX Cloud", price: "5 000 грн", img: "./img_catalog/gaming (2).png"},
        { name: "Ігрові навушники HyperX Cloud", price: "3 500 грн", img: "./img_catalog/gaming (3).png"},
        { name: "Ігрові навушники HyperX Cloud", price: "2 000 грн", img: "./img_catalog/gaming (4).png"},
        { name: "Ігрові навушники HyperX Cloud", price: "1 500 грн", img: "./img_catalog/gaming (5).png"},
        { name: "Ігрова миша Logitech G2g", price: "2 000 грн", img: "./img_catalog/gaming (6).png"},
        { name: "Ігрова миша Logitech G1 pro", price: "5 000 грн", img: "./img_catalog/gaming (7).png"},
        { name: "Ігрова миша Logitech G02", price: "5 000 грн", img: "./img_catalog/gaming (7).png"},
        { name: "Ігрова миша Logitech Dark Core", price: "4 000 грн", img: "./img_catalog/gaming (8).png"},
        { name: "Клавіатура механічна Keychron", price: "6 000 грн", img: "./img_catalog/gaming (9).png"},
        { name: "Клавіатура Razer BlackWidow", price: "3 000 грн", img: "./img_catalog/gaming (10).png"}
    ],
    audio: [
        { name: "Колонки WH-1000XM5", price: "15 000 грн", img: "./img_catalog/audio (1).png"}, 
        { name: "Мікрофон Shure SM7B", price: "2 000 грн", img: "./img_catalog/audio (2).png"},
        { name: "Посилювач Marshall Major III", price: "55 000 грн", img: "./img_catalog/audio (3).png"},
        { name: "Колонки JBL Go 3", price: "20 000 грн", img: "./img_catalog/audio (4).png"},
        { name: "Колонки BL SSr5", price: "22 000 грн", img: "./img_catalog/audio (5).png"}
    ],
    smart: [
        { name: "Розумне кільце Nest Dot", price: "2 500 грн", img: "./img_catalog/smart (1).png"}, 
        { name: "Розумні годинники Amazon Echo", price: "2 000 грн", img: "./img_catalog/smart (2).png"},
        { name: "Розумні окуляри Philip", price: "21 500 грн", img: "./img_catalog/smart (3).png"},
        { name: "Окуляри віртуальної реальності", price: "10 000 грн", img: "./img_catalog/smart (4).png"},
        { name: "Окуляри віртуальної реальності", price: "18 000 грн", img: "./img_catalog/smart (5).png"},
        { name: "Розумний браслет Xiaomi Mi Band 7", price: "2 200 грн", img: "./img_catalog/smart (6).png"},
        { name: "Розумний браслет Ring Indoor", price: "3 000 грн", img: "./img_catalog/smart (7).png"},
        { name: "Розумний браслет Roborock S7", price: "2 000 грн", img: "./img_catalog/smart (7).png"},
        { name: "Розумні годинники Samsung Galaxy Watch 5", price: "5 000 грн", img: "./img_catalog/smart (8).png"},
        { name: "Розумний браслет LG InstaView", price: "2 000 грн", img: "./img_catalog/smart (9).png"},
        { name: "Розумне кільце De'Longhi", price: "1 000 грн", img: "./img_catalog/smart (10).png"}
    ],
    bloggers: [
        { name: "Кільцева лампа для селфі", price: "1 500 грн", img: "./img_catalog/bloggers (1).png"}, 
        { name: "Штатив для телефону", price: "800 грн", img: "./img_catalog/bloggers (2).png"},
        { name: "Мікрофон Rode NT1-A", price: "12 000 грн", img: "./img_catalog/bloggers (3).png"},
        { name: "Веб-камера Logitech C920", price: "3 000 грн", img: "./img_catalog/bloggers (4).png"},
        { name: "Зелений екран для монтажу", price: "2 000 грн", img: "./img_catalog/bloggers (5).png"},
        { name: "Світлодіодна панель", price: "4 000 грн", img: "./img_catalog/bloggers (6).png"},
        { name: "Стабілізатор для смартфона", price: "5 000 грн", img: "./img_catalog/bloggers (7).png"},
        { name: "Фон для фото/відео", price: "1 000 грн", img: "./img_catalog/bloggers (7).png"},
        { name: "Аудіо-інтерфейс Focusrite Scarlett", price: "8 000 грн", img: "./img_catalog/bloggers (8).png"},
        { name: "Програмне забезпечення Adobe Creative Suite", price: "30 000 грн", img: "./img_catalog/bloggers (9).png"},
        { name: "Дрон для зйомки DJI Mini 2", price: "20 000 грн", img: "./img_catalog/bloggers (10).png"}
    ],
    appliances: [
        { name: "Холодильник Samsung RB37A52N0SA", price: "25 000 грн", img: "./img_catalog/appliances (1).webp"}, 
        { name: "Пральна машина LG F2J3WS2W", price: "18 000 грн", img: "./img_catalog/appliances (2).webp"},
        { name: "Посудомийна машина Bosch SMS46MI01T", price: "20 000 грн", img: "./img_catalog/appliances (3).webp"},
        { name: "Мікрохвильовка Panasonic NN-ST34", price: "4 000 грн", img: "./img_catalog/appliances (4).webp"},
        { name: "Кавомашина De'Longhi EC685", price: "12 000 грн", img: "./img_catalog/appliances (5).webp"},
        { name: "Мультиварка Redmond RMC-M4502", price: "3 000 грн", img: "./img_catalog/appliances (6).webp"},
        { name: "Блендер KitchenAid", price: "8 000 грн", img: "./img_catalog/appliances (7).webp"},
        { name: "Тостер Philips HD2581", price: "1 500 грн", img: "./img_catalog/appliances (7).webp"},
        { name: "Пароварка Tefal VC1016", price: "2 500 грн", img: "./img_catalog/appliances (8).webp"}
    ],
    home: [
        { name: "Ванна акрилова Roca", price: "15 000 грн", img: "./img_catalog/home (1).png"}, 
        { name: "Душева кабіна Niagara", price: "20 000 грн", img: "./img_catalog/home (2).png"},
        { name: "Раковина з тумбою IKEA", price: "5 000 грн", img: "./img_catalog/home (3).png"},
        { name: "Змішувач Grohe", price: "3 000 грн", img: "./img_catalog/home (4).png"},
        { name: "Дзеркало з підсвіткою", price: "2 000 грн", img: "./img_catalog/home (5).png"},
        { name: "Туалетний столик", price: "8 000 грн", img: "./img_catalog/home (6).png"},
        { name: "Рушникосушарка", price: "1 500 грн", img: "./img_catalog/home (7).png"},
        { name: "Водонагрівач Ariston", price: "6 000 грн", img: "./img_catalog/home (7).png"},
        { name: "Кран для ванни", price: "1 000 грн", img: "./img_catalog/home (8).png"}
    ]    
};

// 2. ПОИСК ЭЛЕМЕНТОВ
const menuItems = document.querySelectorAll('#catalog li'); // Все пункты меню
const previewBox = document.getElementById('category-preview'); // Само вылетающее окно
const previewContent = document.getElementById('preview-content'); // Контейнер внутри окна

// 3. ЛОГИКА НАВЕДЕНИЯ (MOUSE ENTER)
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => { 

        const cat = item.dataset.category; 
        const products = productData[cat]; 

          if (products) {
    

              const imgStyle = cat === 'auto' ? 'style="width: 65%; display: block; margin: 0 auto;"' : '';
                previewContent.innerHTML = products.map(prod => `
                    <div class="card-div5" style="min-width: 150px;"> 
                        <img src="${prod.img}" alt="${prod.name}" ${imgStyle}> 
                        <div class="text-bottom">
                            <p>${prod.name}</p>
                            <span class="price">${prod.price}</span>
                            <div class="card-actions">
                                <button class="btn-cart">У кошик</button>
                                <button class="btn-heart">❤</button>
                            </div>
                        </div>
                    </div>
                `).join('');

                previewBox.classList.add('active'); 
          }
    });
});

// 4. ЛОГИКА УХОДА МЫШКИ (MOUSE LEAVE)
const hidePreview = (e) => {
    
    const movedToPreview = previewBox.contains(e.relatedTarget);
    const movedToMenuItem = Array.from(menuItems).some(item => item.contains(e.relatedTarget));

    // Если мышка ушла НЕ на окно и НЕ на другое меню — закрываем
    if (!movedToPreview && !movedToMenuItem) {
        previewBox.classList.remove('active');
    }
}

// ИСПРАВЛЕНО: везде используем previewBox вместо previewBlock
document.querySelector('.div1').addEventListener('mouseleave', hidePreview);
previewBox.addEventListener('mouseleave', hidePreview);



const userBlock = document.getElementById('user_block');

document.getElementById('user_icon').addEventListener('click', () => {
    userBlock.classList.toggle('active');
});

// Закрываем блок при клике вне него или на иконку повторно
document.addEventListener('click', (e) => {
    if (!userBlock.contains(e.target) && e.target.id !== 'user_icon') {
        userBlock.classList.remove('active');
    }
});

const allBlock = document.getElementById('block_none');

document.getElementById('filter').addEventListener('click', () => {
    allBlock.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!allBlock.contains(e.target) && e.target.id !== 'filter') {
        allBlock.classList.remove('active');
    }
});

const heartBlock = document.getElementById('heart_block');

document.getElementById('heart').addEventListener('click', () => {
    heartBlock.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!heartBlock.contains(e.target) && e.target.id !== 'heart') {
        heartBlock.classList.remove('active');
    }
});

const cartBlock = document.getElementById('cart_block');

document.getElementById('cart').addEventListener('click', () => {
    cartBlock.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!cartBlock.contains(e.target) && e.target.id !== 'cart') {
        cartBlock.classList.remove('active');
    }
});


// ПОИСК ТОВАРОВ

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-query');
const mainContent = document.querySelector('.parent'); // Сюда выведем результаты

// Функция для самого поиска
function performSearch(query) {
    const results = [];
    const lowerQuery = query.toLowerCase().trim();

    if (lowerQuery === "") return;

    // Пробегаем по всем категориям в productData
    for (let category in productData) {
        productData[category].forEach(product => {
            if (product.name.toLowerCase().includes(lowerQuery)) {
                results.push(product);
            }
        });
    }

    renderSearchResults(results, query);
}

// Функция для отрисовки результатов вместо главного баннера и новинок
function renderSearchResults(results, query) {
   
    const resultsContainer = document.querySelector('.div5');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `<h1 id="logo">Нічого не знайдено за запитом "${query}"</h1>`;
        return;
    }

    resultsContainer.innerHTML = `
        <h1 id="logo">Результати пошуку: ${query}</h1><br>
        <div id="cards-div5" style="flex-wrap: wrap; overflow: visible;">
            ${results.map(prod => `
                <div class="card-div5"> 
                    <img src="${prod.img}" alt="${prod.name}"> 
                    <p>${prod.name}</p>
                    <a class="price"><p>${prod.price}</p></a>
                </div>
            `).join('')}
        </div>
    `;
    
    // Скроллим пользователя к результатам
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Слушатель на кнопку "Шукати"
searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Чтобы страница не перезагружалась
    performSearch(searchInput.value);
});

// (Опционально) Поиск "на лету" при вводе текста
searchInput.addEventListener('input', (e) => {
    if (e.target.value.length > 2) { // Начинаем искать от 3-х символов
        performSearch(e.target.value);
    }
});



// Функція авторизації/реєстрації

const loginBtn = document.getElementById('login_btn');
const logoutBtn = document.getElementById('logout_btn');
const usernameInput = document.getElementById('username_input');
const passwordInput = document.getElementById('password_input');
const authSection = document.getElementById('auth_section');
const profileSection = document.getElementById('profile_section');
const userNameDisplay = document.getElementById('user_name_display');

function updateUI() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        authSection.style.display = 'none';
        profileSection.style.display = 'block';
        userNameDisplay.textContent = savedName;
    } else {
        authSection.style.display = 'block';
        profileSection.style.display = 'none';
    }
}

loginBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    // Пытаемся получить пароль, который уже сохранен для этого имени
    const savedPass = localStorage.getItem(`pass_${name}`);

    if (!savedPass) {
        // РЕЖИМ РЕГИСТРАЦИИ: если такого пользователя еще нет
        localStorage.setItem(`pass_${name}`, pass);
        localStorage.setItem('userName', name);
        alert("Ви успішно зареєстровані та увійшли!");
        updateUI();
    } else {
        // РЕЖИМ ВХОДА: если пользователь уже есть, проверяем пароль
        if (savedPass === pass) {
            localStorage.setItem('userName', name);
            updateUI();
        } else {
            alert("Невірний пароль для цього користувача!");
        }
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userName');
    updateUI();
});

updateUI();

alert("Цей сайт є навчальним проєктом і не здійснює реальних продажів товарів.");
alert("Також деякі функції сайту можуть бути недоступні або працювати некоректно.");