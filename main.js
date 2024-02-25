//Получение необходимых элементов и запись в переменные

let nameInput = document.getElementById("basic-addon11");

let urlInput = document.getElementById("basic-url");

let commentTextArea = document.getElementById("textarea");

let btn = document.querySelector(".btn");

let chat = document.querySelector(".chat__add");

let comments = [];

let commentsName = [];

let obj = {
  nameInput: nameInput,
  urlInput: urlInput,
  commentTextArea: commentTextArea,
};

///Функции, которые срабатывают при нажатии на кнопку

btn.addEventListener("click", function (event) {
  event.preventDefault();

  checkValue();
  addInArray();
  checkurlInput();
  checkInputName();
  showInfo();
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
    urlInput.value = "";
  } else {
    urlInput.style.border = "1px solid grey";
  }
  return urlPattern.test(urlInput.value);
}

//показывать на страницу введенное в input
function showInfo() {
  if (
    urlInput.value !== "" &&
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

    // Вставляем тег img с атрибутом src, равным значению urlInput
    let a = document.createElement("div");
    a.classList.add("newElem");
    a.innerHTML = `<div style="display: flex;flex-direction="row" ;margin-top: '60px'; ><img src="${
      urlInput.value
    }"style="width:70px;margin-right: 20px;"><p>${nameInput.value.trim()}</p></div><div style="width: 500px;">${
      commentTextArea.value
    }</div>`;
    chat.append(a);
  }
  urlInput.value = "";
  nameInput.value = "";
  commentTextArea.value = "";
}
