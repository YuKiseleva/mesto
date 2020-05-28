
const windowOpen = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');


 function openWindow(){
  windowOpen.classList.add('popup_opened');
  let inputName = document.querySelector('.popup__input_name-input'); 
  let inputActivity = document.querySelector('.popup__input_job-input');
  let nameProfile = document.querySelector('.profile__name');
  let activityProfile = document.querySelector('.profile__activity');
  inputName.value = nameProfile.textContent;
  inputActivity.value = activityProfile.textContent;
 }
 editButton.addEventListener('click', openWindow);
 
 function closeWindow(){
    windowOpen.classList.remove('popup_opened');
   }
   closeButton.addEventListener('click', closeWindow);





const formElement = document.querySelector('.popup__save-button'); 



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__input_name-input'); 
    let jobInput = document.querySelector('.popup__input_job-input'); 

    nameInput.value;
    jobInput.value;   // Получить значение полей из свойства value

    let profileName = document.querySelector('.profile__name');
    let profileActivity = document.querySelector('.profile__activity');    // Выберать элементы, куда должны быть вставлены значения полей

    profileName.textContent =nameInput.value;
    profileActivity.textContent = jobInput.value; 
    windowOpen.classList.remove('popup_opened'); 
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
 formElement.addEventListener('click', formSubmitHandler);

