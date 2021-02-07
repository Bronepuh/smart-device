'use strict';

(function () {
  var pageBody = document.querySelector('.page-body');
  var pageFooter = document.querySelector('.page-footer');
  var sections = document.querySelector('.sections');
  var contacts = document.querySelector('.contacts');
  var sectionsToggle = document.querySelector('.sections button');
  var contactsToggle = document.querySelector('.contacts button');
  var popupOpenButton = document.querySelector('.top-menu__button');
  var popupCloseButton = document.querySelector('.popup__toggle');
  var popup = document.querySelector('.popup');
  var popupForm = popup.querySelector('form');
  var overlay = document.querySelector('.page-body__overlay');
  var nameInput = document.querySelector('input[name="name-2"]');
  var telInput = document.querySelector('input[name="tel-2"]');
  var questionsInput = document.querySelector('textarea[name="questions-2"]');


  if (pageBody && pageFooter && sections && contacts) {
    sections.classList.remove('sections--nojs');
    sections.classList.add('sections--closed');
    contacts.classList.remove('contacts--nojs');
    contacts.classList.add('contacts--closed');

    // аккордеон

    var toggleSections = function () {
      if (sections.classList.contains('sections--closed')) {
        sections.classList.remove('sections--closed');
        sections.classList.add('sections--opened');
      } else {
        sections.classList.add('sections--closed');
        sections.classList.remove('sections--opened');
      }
    };

    sectionsToggle.addEventListener('click', function () {
      toggleSections();
    });

    var toggleContacts = function () {
      if (contacts.classList.contains('contacts--closed')) {
        contacts.classList.remove('contacts--closed');
        contacts.classList.add('contacts--opened');
      } else {
        contacts.classList.add('contacts--closed');
        contacts.classList.remove('contacts--opened');
      }
    };

    contactsToggle.addEventListener('click', function () {
      toggleContacts();
    });

    // попап

    var onPopupEscPress = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopup();
      }
    };

    var openPopup = function () {
      popup.classList.remove('popup--closed');
      popup.classList.add('popup--opened');
      pageBody.classList.add('page-body--overlay');
      overlay.classList.add('page-body__overlay--active');
      overlay.addEventListener('click', closePopup);
      document.addEventListener('keydown', onPopupEscPress);
      nameInput.focus();
    };

    var clearInputs = function () {
      nameInput.value = '';
      telInput.value = '';
      questionsInput.value = '';
    };

    var closePopup = function () {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      pageBody.classList.remove('page-body--overlay');
      overlay.classList.remove('page-body__overlay--active');
      overlay.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', onPopupEscPress);
      clearInputs();
    };

    popupOpenButton.addEventListener('click', openPopup);
    popupCloseButton.addEventListener('click', closePopup);

    popupForm.addEventListener('submit', function () {
      localStorage.clear();
      localStorage.setItem('name', nameInput.value);
      localStorage.setItem('tel', telInput.value);
      localStorage.setItem('questions', questionsInput.value);
      clearInputs();
    });
  }
})();
