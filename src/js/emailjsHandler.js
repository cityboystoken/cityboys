import { sendForm, init } from "@emailjs/browser";

const API_KEY = 'AmP09sgXBaIgn9Juz';
const SERVICE_ID = 'service_scvfsib';
const TEMPLATE_ID = 'template_s785j0c';

const contactForm = document.querySelector('#contact-form');

(() => {
  init(API_KEY);
})();

window.onload = function () {
  console.log('SUCCESS! onload');
  contactForm.onsubmit = function(event) {
    console.log('SUCCESS! onsubmit');
    event.preventDefault();

    sendForm(SERVICE_ID, TEMPLATE_ID, this).then(function() {
        console.log('SUCCESS!');
        clearFormData();
        closeModal();
      }, function(error) {
        console.log('FAILED...', error);
        clearFormData();
        closeModal();
      });
  };
};

function clearFormData() {
  contactForm.reset();
}

function closeModal() {
  const modalEl = document.querySelector('#modal')
  modalEl.classList.remove('show');
  document.body.style.overflow = 'auto';
}

