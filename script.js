document.querySelectorAll('.dropdown').forEach((dropDownWrapper) => {

   const containerDropDown = dropDownWrapper.querySelector('.dropdown'),
      dropDownButton = dropDownWrapper.querySelector('.dropdown__button'),
      dropDownList = dropDownWrapper.querySelector('.dropdown__list'),
      dropDownItems = dropDownList.querySelectorAll('.dropdown__list-item'),
      input = dropDownWrapper.querySelector('.dropdown__input-hidden'),
      dropDownImg = dropDownButton.querySelector('.dropdown__button-img');



   // Відкриваємо/скриваємо дропдаун
   dropDownButton.addEventListener('click', () => {

      dropDownList.classList.toggle('show');
      dropDownImg.style.transform = dropDownList.classList.contains('show') ? 'rotate(-180deg)' : '';

   });

   // Скриваємо дропдаун якщо клікнули не по ньому
   document.addEventListener('click', (e) => {

      const target = e.target;

      if (target !== dropDownButton) {
         dropDownList.classList.remove('show');
      }
   });

   // Скриваємо дропдаун якщо нажали клавішу Esc або Tab
   document.addEventListener('keydown', (e) => {

      if (e.key === 'Tab' || e.key === 'Escape') {
         dropDownList.classList.remove('show');
      }
      
   });

   // Вибирємо пункт дропдауна
   dropDownItems.forEach((item, i) => {

      item.addEventListener('click', () => {

         dropDownButton.innerText = item.innerText;
         dropDownList.classList.remove('show');

         input.value = item.dataset.value;

      });
   });
});