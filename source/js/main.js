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
  var overlay = document.querySelector('.overlay');
  var nameInput2 = document.querySelector('input[name="name2"]');
  var telInput2 = document.querySelector('input[name="tel2"]');
  var telInput1 = document.querySelector('input[name="tel"]');
  var questionsInput2 = document.querySelector('textarea[name="questions2"]');

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
      overlay.classList.add('overlay--active');
      overlay.addEventListener('click', closePopup);
      document.addEventListener('keydown', onPopupEscPress);
      nameInput2.focus();
    };

    var clearInputs = function () {
      nameInput2.value = '';
      telInput2.value = '';
      questionsInput2.value = '';
    };

    var closePopup = function () {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      pageBody.classList.remove('page-body--overlay');
      overlay.classList.remove('overlay--active');
      overlay.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', onPopupEscPress);
      clearInputs();
    };

    popupOpenButton.addEventListener('click', openPopup);
    popupCloseButton.addEventListener('click', closePopup);

    popupForm.addEventListener('submit', function () {
      localStorage.clear();
      localStorage.setItem('name', nameInput2.value);
      localStorage.setItem('tel', telInput2.value);
      localStorage.setItem('questions', questionsInput2.value);
      clearInputs();
    });
  }

  // маски
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = new window.IMask(telInput1, maskOptions);
  mask.value = telInput1.value;

  var mask2 = new window.IMask(telInput2, maskOptions);
  mask2.value = telInput2.value;
})();
