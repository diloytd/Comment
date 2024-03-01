//Получение необходимых элементов и запись в переменные

let nameInput = document.getElementById("basic-addon11");

let urlInput = document.getElementById("basic-url");

let commentTextArea = document.getElementById("textarea");

let btn = document.querySelector(".btn");

let chat = document.querySelector(".chat__add");

let checkBoxNo = document.querySelector(".checkBoxNo");

let comments = [];

let commentsName = [];

let obj = {
  nameInput: nameInput,
  //urlInput: urlInput,
  commentTextArea: commentTextArea,
};

///Функции, которые срабатывают при нажатии на кнопку

btn.addEventListener("click", function (event) {
  event.preventDefault();

  if (checkBoxNo.checked === true) {
    nameInput.value = "USER";
  }

  checkValue();
  addInArray();
  checkurlInput();
  checkInputName();
  showInfo();
  //showName();
});

//Если input пустой, то он подкрашивается красной рамкой и выкидывает новую ошибку
function checkValue() {
  for (let key of Object.values(obj)) {
    if (key.value === "") {
      key.style.border = "1px solid red";
      throw new Error("error");
    } else if (key.value !== "") {
      console.log("ok");
      key.style.border = "1px solid grey";
    }
  }
}

//Добавление введеных в input в массив comments
function addInArray() {
  comments.push(nameInput.value);
  comments.push(urlInput.value);
  comments.push(commentTextArea.value);
  console.log(comments);
}

function checkInputName() {
  commentsName.push(nameInput.value.trim());
  commentsName.map((element) => {
    console.log(element[0].toUpperCase() + element.slice(1));
    console.log(commentsName);
    return element;
  });
}

//Функция проверяет input URL с использованием регулярного выражения. Если не соотвествует шаблону, то подскашивает в красный цвет.
function checkurlInput() {
  // Простое регулярное выражение для проверки большинства URL
  const urlPattern = new RegExp(
    "^https?://[\\w-_]+(\\.[\\w-_]+)+([\\w-.,@?^=%&amp;:/~+#]*[\\w\\-@?^=%&amp;/~+#])?$"
  );

  if (!urlPattern.test(urlInput.value)) {
    urlInput.style.border = "1px solid red";
    //urlInput.value = "";
  } else {
    urlInput.style.border = "1px solid grey";
  }
  return urlPattern.test(urlInput.value);
}

//показывать на страницу введенное в input
function showInfo() {
  if (urlInput.value === "") {
    let adress = [
      "https://img.freepik.com/free-photo/delicious-appetizer_144627-29784.jpg?size=626&ext=jpg&ga=GA1.1.1030305415.1707308991&semt=ais",
      "https://img.freepik.com/premium-photo/pepper-mousse-from-paprika-and-tomatoes-in-glass-jars-in-a-black-plate-on-a-rustic-wooden-table_135777-600.jpg?size=626&ext=jpg&ga=GA1.1.1030305415.1707308991&semt=ais",
      "https://img.freepik.com/free-photo/top-view-delicious-little-cookies-with-bagels-and-cup-of-coffee-on-blue-desk-cookies-biscuit-sweet-sugar-color-tea_140725-56150.jpg?size=626&ext=jpg&ga=GA1.1.1030305415.1707308991&semt=ais",
      "https://img.freepik.com/free-photo/muffin-chocolate-chip-isolated_1101-2631.jpg?size=626&ext=jpg&ga=GA1.1.1030305415.1707308991&semt=ais",
      "https://img.freepik.com/free-photo/top-view-yummy-biscuit-rolls-inside-plate-on-dark-background_140725-76401.jpg?size=626&ext=jpg&ga=GA1.1.1030305415.1707308991&semt=ais",
    ];

    let a = Math.floor(Math.random() * adress.length);
    urlInput.value = adress[a];
  }
  if (
    //urlInput.value !== "" &&
    nameInput.value !== "" &&
    commentTextArea.value !== ""
  ) {
    nameInput.value =
      nameInput.value[0].toUpperCase() + nameInput.value.slice(1);

    // Проверяет наличие запрещенных слов и заменяется на нейтральное
    if (
      commentTextArea.value.includes("viagra") ||
      commentTextArea.value.includes("XXX")
    ) {
      const regex = /viagra|XXX/gi;
      commentTextArea.value = commentTextArea.value.replace(regex, "smth");
    }

    let time = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let formattedDate = `${days[time.getDay()]} ${
      months[time.getMonth()]
    } ${time.getDate()} ${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    // Вставляем тег img с атрибутом src, равным значению urlInput
    let a = document.createElement("div");

    a.classList.add("newElem");
    a.innerHTML = `<div style="display: flex;flex-direction="row" ;margin-top: '60px'; margin-left: '70px'><img src="${
      urlInput.value
    }"style="width:70px;margin-right: 20px;"><p>${nameInput.value.trim()}</p><span style="margin-left:150px">${formattedDate}</span></div><div style="width: 500px;">${
      commentTextArea.value
    }</div>`;
    chat.append(a);
  }
  urlInput.value = "";
  nameInput.value = "";
  commentTextArea.value = "";
}
