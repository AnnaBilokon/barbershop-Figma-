// import "./css/styles.css";
console.clear();

let btn = document.querySelector("#btnBook");
let btn1 = document.querySelector(".btn_block3");
let btn2 = document.querySelector(".btn_block4");
let overlay = document.querySelector("#overlay");
let close = document.querySelector("#btn-close");
let submit = document.querySelector(".subBtn");
let form = document.querySelector("#form_id");
// console.log(btn);
let inpName = document.querySelector("#name");
let inpMail = document.querySelector("#email");
let inpPhone = document.querySelector("#phone");
let upBtn = document.querySelector(".go_to_up");

btn.addEventListener("click", () => {
  overlay.style.display = "inline-block";
});
btn1.addEventListener("click", () => {
  overlay.style.display = "inline-block";
});
btn2.addEventListener("click", () => {
  overlay.style.display = "inline-block";
});
close.addEventListener("click", () => {
  overlay.style.display = "none";
});
submit.addEventListener("click", () => {
  overlay.style.display = "none";
});

inpName.addEventListener("change", (e) => {
  let targetName = e.target.value;
  console.log("Name=" + targetName);
});
inpMail.addEventListener("change", (e) => {
  let targetMail = e.target.value;
  console.log("Email=" + targetMail);
});
inpPhone.addEventListener("change", (e) => {
  let targetPhone = e.target.value;
  console.log("Phone=" + targetPhone);
});

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const INPUT = document.querySelector("#email");

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
  if (validateEmail(INPUT.value)) {
    INPUT.style.borderColor = "green";
  } else {
    INPUT.style.borderColor = "red";
  }
}

INPUT.addEventListener("input", updateInput);

const PHONE_REGEXP = /\+3\(\d{3}\)\d{3}-\d{2}-\d{2}/;
const PHONE = document.querySelector("#phone");

function validatePhone(value) {
  return PHONE_REGEXP.test(value);
}

function updateInputPhone() {
  if (validatePhone(PHONE.value)) PHONE.style.borderColor = "green";
  else PHONE.style.borderColor = "red";
}

PHONE.addEventListener("input", updateInputPhone);

submit.addEventListener("click", (e) => {
  if (!validateEmail(INPUT.value) && !validatePhone(PHONE.value)) {
    alert("Некорректныt данные");
  } else {
    e.preventDefault();
    let val = $("input").val();
    if (val.length >= 1) {
      $("input").val("");
    }
  }
});


$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#scroll_top").show();
    } else {
      $("#scroll_top").hide();
    }
  });

  $("#scroll_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});


