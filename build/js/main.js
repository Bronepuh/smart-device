'use strict';
(function () {
  var pageBody = document.querySelector('.page-body');
  var pageFooter = document.querySelector('.page-footer');
  var sections = document.querySelector('.sections');
  var contacts = document.querySelector('.contacts');
  var sectionsToggle = document.querySelector('.sections button');
  var contactsToggle = document.querySelector('.contacts button');

  if (pageBody && pageFooter && sections && contacts) {
    sections.classList.remove('sections--nojs');
    sections.classList.add('sections--closed');
    contacts.classList.remove('contacts--nojs');
    contacts.classList.add('contacts--closed');

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
  }
})();
