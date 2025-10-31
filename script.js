// Элементы DOM
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const profileImage = document.getElementById("profile-image");
const body = document.body;
const projectViews = document.querySelectorAll(".project-view");

// Состояние темы
let isDarkTheme = true;

// Загружаем сохраненную тему при загрузке страницы
window.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        isDarkTheme = false;
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeIcon.textContent = "☀️";
        profileImage.src = "./img/photo-light.jpg";
    }
});

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.replace("dark-theme", "light-theme");
        profileImage.src = "./img/photo-light.jpg";
    } else {
        body.classList.replace("light-theme", "dark-theme");
        profileImage.src = "./img/photo-dark.jpg";
    }

    // Обновляем цвета всех элементов терминала
    document.querySelectorAll(".terminal-body").forEach((el) => {
        el.style.backgroundColor = getComputedStyle(body).getPropertyValue(
            "--color-terminal-bg",
        );
        el.style.color =
            getComputedStyle(body).getPropertyValue("--color-primary");
    });
    document.querySelectorAll(".label").forEach((el) => {
        el.style.color =
            getComputedStyle(body).getPropertyValue("--color-label");
    });
    document.querySelectorAll(".separator").forEach((el) => {
        el.style.color =
            getComputedStyle(body).getPropertyValue("--color-separator");
    });
    document.querySelectorAll(".value").forEach((el) => {
        el.style.color =
            getComputedStyle(body).getPropertyValue("--color-primary");
    });
});

// Мобильное меню
mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

// Закрытие меню при клике на ссылку
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
    });
});

// Плавная прокрутка колёсиком мыши
let isScrolling = false;
let scrollTarget = window.scrollY;

// Перехватываем событие прокрутки колёсиком
window.addEventListener(
    "wheel",
    function (e) {
        e.preventDefault();

        // Определяем направление и величину прокрутки
        const delta = e.deltaY;
        const scrollSpeed = 1.5; // Множитель скорости (можно настроить)

        scrollTarget += delta * scrollSpeed;

        // Ограничиваем прокрутку в пределах страницы
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
        scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));

        // Запускаем плавную анимацию, если она еще не запущена
        if (!isScrolling) {
            smoothScroll();
        }
    },
    { passive: false },
);

// Функция плавной прокрутки
function smoothScroll() {
    isScrolling = true;
    const currentScroll = window.scrollY;
    const difference = scrollTarget - currentScroll;

    // Если разница меньше 1 пикселя, останавливаем анимацию
    if (Math.abs(difference) < 1) {
        isScrolling = false;
        window.scrollTo(0, scrollTarget);
        return;
    }

    // Плавное движение (easing)
    const ease = 0.1; // Коэффициент плавности (0.05-0.2)
    window.scrollTo(0, currentScroll + difference * ease);

    // Продолжаем анимацию
    requestAnimationFrame(smoothScroll);
}

// Обработка прокрутки клавишами
let keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);

        // Управление стрелками и клавишами
        let scrollAmount = 100;
        if (e.keyCode === 38) scrollTarget -= scrollAmount; // Вверх
        if (e.keyCode === 40) scrollTarget += scrollAmount; // Вниз
        if (e.keyCode === 33) scrollTarget -= window.innerHeight; // Page Up
        if (e.keyCode === 34) scrollTarget += window.innerHeight; // Page Down
        if (e.keyCode === 36) scrollTarget = 0; // Home
        if (e.keyCode === 35)
            scrollTarget = document.documentElement.scrollHeight; // End
        if (e.keyCode === 32) scrollTarget += window.innerHeight * 0.8; // Space

        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
        scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));

        if (!isScrolling) {
            smoothScroll();
        }

        return false;
    }
}

// Применяем обработчики для клавиатуры
window.addEventListener("keydown", preventDefaultForScrollKeys, false);

const headerOffset = 70; // высота шапки

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Вычисляем позицию с учётом шапки
            scrollTarget = targetElement.offsetTop - headerOffset;

            const maxScroll =
                document.documentElement.scrollHeight - window.innerHeight;
            scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));

            if (!isScrolling) {
                smoothScroll();
            }
        }
    });
});

const projects = {
    project1: {
        name: "Warden Guard Bot",
        status: "🔵 В активной стадии разработки",
        description: `Телеграм-бот для модерации серверов<br>
            и управления пользователями.`,
        links: [{ text: "Telegram", url: "https://t.me/ward_guard_bot" }],
        images: ["warden_guard_bot.jpg"],
    },
    project2: {
        name: "Reactive Canvas",
        status: "🟡 Временно преостановлен",
        description: `Библеотека для реативной работы<br>
            с компонентом canvas,<br>
            используя ECS архитектуру.`,
        links: [],
        images: [],
    },
};

const workspace = document.getElementById("workspace");
const apps = document.querySelectorAll(".app");
let currentProjectIndex = 0;
const projectKeys = Object.keys(projects);

function renderAllProjects() {
    workspace.innerHTML = projectKeys
        .map((key) => {
            const p = projects[key];
            return `
                <div class="project-view" id="${key}">
                    <div class="project-name mb-1">${p.name}</div>
                    <div class="project-status mb-3">${p.status}</div>
                    <p class="project-description mb-3">${p.description}</p>
                    ${
                        p.links.length
                            ? `<div class="project-links space-x-3 mb-3">
                                ${p.links
                                    .map(
                                        (l) =>
                                            `<a href="${l.url}" target="_blank" class="project-link">${l.text}</a>`,
                                    )
                                    .join("")}
                               </div>`
                            : ``
                    }
                    <div class="carousel">
                        ${p.images
                            .map(
                                (img) =>
                                    `<img src="./img/projects/${img}" alt="${p.name}" />`,
                            )
                            .join("")}
                    </div>
                </div>
            `;
        })
        .join("");
}

function switchProject(index) {
    const offset = index * -100;
    workspace.style.transform = `translateX(${offset}%)`;

    document
        .querySelectorAll(".project-view")
        .forEach((el, i) => el.classList.toggle("active", i === index));
    apps.forEach((app, i) => app.classList.toggle("active", i === index));

    currentProjectIndex = index;
}

apps.forEach((app, index) => {
    app.addEventListener("click", () => switchProject(index));
});

// Инициализация
renderAllProjects();
switchProject(0);
