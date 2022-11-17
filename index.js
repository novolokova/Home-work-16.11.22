// Написати функцію, яка повертає об'єкт родина з властивостями,
// які мають вигляд: ключ - ім'я члена родини, а значення - хто із членів родини
// (мінімум родина з 3 осіб) Інформацію про особу запитувати у користувача.
// Вивести отриманий об'єкт за допомогою for..in

const count = 3;
const familyMember = "Хто він тобі приходиться?";
const nameFamilyMember = "Ім'я члена родини";

/**
 *
 * @param {string} question
 * @returns {string}
 */
const getInfo = function (question) {
  const value = prompt(question);
  return checkInfo(value) ? value : getInfo(question);
};

// !!!!!!!!!!!!!!!!!!!! ЧОМУ ВИЩЕ ФУНКЦІЯ ПРАЦЮЄ, А НИЖЧА НІ

// const getInfo = function (question) {
//     let value = prompt(question);
//     if (checkInfo(value)) {
//       return value;
//     }
//     getInfo(question);
//   }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!

/**
 *
 * @param {string} input
 * @returns {boolean}
 */
const checkInfo = function (input) {
  if (input === "" || !isNaN(input) || input === null || input === " ") {
    return false;
  }
  return true;
};

/**
 *
 * @returns {object}
 */
function family() {
  const family = {};
  for (let i = 0; i < count; i++) {
    let name = getInfo(nameFamilyMember);
    let member = getInfo(familyMember);
    // let name = getNameFamilyMember();
    // let member = getFamilyMember();
    family[name] = member;
  }
  return family;
}
/**
 *
 * @param {object} info
 */
const showInfoFamily = function (info) {
  for (const key in info) {
    console.log(`${key} - ${info[key]}`);
  }
};

showInfoFamily(family());
