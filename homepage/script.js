document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.style.display = "block";
        formMessage.textContent = "送信が完了しました！";
        contactForm.reset();
    });

    // ギャラリーの画像をクリックで拡大表示
    const galleryImages = document.querySelectorAll(".gallery-container img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<div class="modal-content"><span class="close">&times;</span><img src="${img.src}" alt="拡大画像"></div>`;
            document.body.appendChild(modal);

            document.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});
