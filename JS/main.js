const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");
const contactDialog = document.querySelector(".contact-dialog");
const contactForm = document.querySelector("#contact-form");
const contactFeedback = document.querySelector("#contact-feedback");

function setMenuOpen(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    siteNavigation.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenuOpen(false);
    }
});

document.querySelectorAll(".js-open-contact").forEach((button) => {
    button.addEventListener("click", () => {
        contactDialog.showModal();
        setMenuOpen(false);
    });
});

document.querySelectorAll(".js-close-contact").forEach((button) => {
    button.addEventListener("click", () => contactDialog.close());
});

contactDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        contactDialog.close();
    }
});

contactDialog.addEventListener("click", (event) => {
    if (event.target === contactDialog) {
        contactDialog.close();
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const formData = new FormData(contactForm);
    const draft = [
        "Mensagem para Guilherme Farias",
        "",
        `Nome: ${formData.get("name")}`,
        `E-mail: ${formData.get("email")}`,
        "",
        "Mensagem:",
        formData.get("message"),
        "",
    ].join("\r\n");
    const file = new Blob([draft], { type: "text/plain;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "rascunho-de-mensagem.txt";
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);

    contactForm.reset();
    contactDialog.close();
    contactFeedback.textContent = "Rascunho baixado. A mensagem não foi enviada.";
});
