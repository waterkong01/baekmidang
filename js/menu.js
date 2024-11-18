// 페이지 로드
window.addEventListener("load", () => {
    // 메뉴 이미지 컨테이너를 선택
    const menuContainer = document.querySelector('.menu-container');

    // 각 이미지를 메뉴 항목으로 추가
    menuImages.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `<img src="${item.path}" alt="${item.name}" data-item-no="${item.item_no}">`;
        menuItem.dataset.category = item.category;
        menuContainer.appendChild(menuItem);

        // 각 이미지에 클릭 이벤트 핸들러 등록
        menuItem.addEventListener("click", () => {
            const item_no = parseInt(menuItem.querySelector('img').getAttribute("data-item-no"));
            const imageSrc = menuItem.querySelector('img').src;
            handleImageClick(item_no);
            showModal(item); // 모달 창을 보여줍니다.
        });
    });

    // 네비게이션 바 항목 클릭 시 필터링
    document.querySelectorAll('.navigation a').forEach((navItem) => {
        navItem.addEventListener('click', (event) => {
            event.preventDefault();
            const category = navItem.getAttribute('data-category');
            filterImagesByCategory(category);

            document.querySelectorAll('.navigation a').forEach((item) => {
                item.classList.remove('active');
            });

            navItem.classList.add('active');
        });
    });

    // 초기에 모든 이미지 표시
    filterImagesByCategory('all');
});

// 이미지 클릭 이벤트 핸들러
function handleImageClick(item_no) {
    // 여기에서 선택한 상품의 정보를 가져와 페이지에 표시
    const selectedItem = menuImages.find(item => item.item_no === item_no);
    if (selectedItem) {
        // 선택한 item 정보를 사용하여 페이지 표시
        showModal(selectedItem.path);
    } else {
        console.log('Item not found');
    }
}

// 카테고리에 따라 이미지 필터링
function filterImagesByCategory(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((menuItem) => {
        const imageCategory = menuItem.dataset.category;

        if (category === 'all' || category === imageCategory) {
            menuItem.style.display = 'block';
        } else {
            menuItem.style.display = 'none';
        }
    });
}

// 모달 보이기
function showModal(item) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const menuName = document.getElementById('menu-name');
    const menuDescription = document.getElementById('menu-description');
    const menuDescription2 = document.getElementById('menu-description2');
    const menuDescription3 = document.getElementById('menu-description3');
    const menuDescription4 = document.getElementById('menu-description4');
    const menuDescription5 = document.getElementById('menu-description5');
    const menuDescription6 = document.getElementById('menu-description6');
    const menuDescription7 = document.getElementById('menu-description7');
    const menuDescription8 = document.getElementById('menu-description8');
    const menuDescription9 = document.getElementById('menu-description9');
    const menuSize_s = document.getElementById('menu-s');
    const menuSize_r = document.getElementById('menu-r');
    const menuSize_l = document.getElementById('menu-l');
    const menuSize_o = document.getElementById('menu-o');
    const menuSize_m = document.getElementById('menu-m');
    const menuEgg_price = document.getElementById('menu-egg');
    const menuTuna_price = document.getElementById('menu-tuna');
    const menuCapre_price = document.getElementById('menu-capre');

    modalImage.src = item.path;
    menuName.textContent = item.name;
    menuDescription.textContent = item.description;
    menuDescription2.textContent = item.description2;
    menuDescription3.textContent = item.description3;
    menuDescription4.textContent = item.description4;
    menuDescription5.textContent = item.description5;
    menuDescription6.textContent = item.description6;
    menuDescription7.textContent = item.description7;
    menuDescription8.textContent = item.description8;
    menuDescription9.textContent = item.description9;
    menuSize_s.textContent = item.size_s;
    menuSize_r.textContent = item.size_r;
    menuSize_l.textContent = item.size_l;
    menuSize_o.textContent = item.size_o;
    menuSize_m.textContent = item.size_m;
    menuEgg_price.textContent = item.egg_price;
    menuTuna_price.textContent = item.tuna_price;
    menuCapre_price.textContent = item.capre_price;

    modal.style.display = "block";

    // 모달 닫기
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // 모달 외부 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}