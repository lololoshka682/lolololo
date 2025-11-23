// Общие функции для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация изображений для главной страницы
    initializeHomePage();
    
    // Анимация появления элементов
    initializeAnimations();
    
    // Установка активной навигации
    setActiveNavLink();
});

// Функции для главной страницы
function initializeHomePage() {
    if (document.getElementById('mainImage')) {
        // Установка основного изображения
        const imageElement = document.getElementById('mainImage');
        imageElement.src = 'https://avatars.mds.yandex.net/get-mpic/5209949/img_id2587518218470434877.jpeg/orig';
        imageElement.alt = 'Приветственное изображение команды Кримперы';
        
        // Установка нижней картинки
        const bottomImageElement = document.getElementById('bottomImage');
        bottomImageElement.src = 'https://i.pinimg.com/736x/8c/b6/1f/8cb61f5c432e146e4b9aad26cc5effbb.jpg';
        bottomImageElement.alt = 'Наша команда в работе';
    }
}

// Анимации
function initializeAnimations() {
    // Анимация появления элементов при загрузке
    const animatedElements = document.querySelectorAll('.feature-card, .team-member, .island-description-simple');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Обработка активного состояния навигации
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Плавная прокрутка для навигации (если будут якорные ссылки)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});