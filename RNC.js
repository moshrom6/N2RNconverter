const convertBtn = document.getElementById("convert-btn");
const form = document.getElementById("form");
const convertOutput = document.getElementById("output");
const convertToRoman = num => {
  const romanRef = [
    ['M',	1000],
    ['CM',	900],
    ['D',	500],
    ['CD',	400],
    ['C',	100],
    ['XC',	90],
    ['L',	50],
    ['XL',	40],
    ['X',	10],
    ['IX',	9],
    ['V',	5],
    ['IV',	4],
    ['I',	1]
  ];
  const romanRes = [];

  romanRef.forEach((val) => {
    while (num >= val[1]) {
      romanRes.push(val[0]);
      num -= val[1];
    };
  });
  return romanRes.join("");
};

function resultReset() {
  convertOutput.innerText = "";
  convertOutput.classList.remove("alert");
}

form.addEventListener("submit", e => {
  e.preventDefault();
});

convertBtn.addEventListener("click", () => {
  valueCheck();
});

const valueCheck = () => {
  const inputValue = document.getElementById("number").value;
  const int = parseInt(inputValue, 10);
  resultReset();
  if (inputValue == '') {
    convertOutput.innerText = "Please enter a valid number";
    convertOutput.classList.add("alert");
  } else if (inputValue < 1) {
    convertOutput.innerText = "Please enter a number greater than or equal to 1";
    convertOutput.classList.add("alert");
  } else if (inputValue >= 4000) {
    convertOutput.innerText = "Please enter a number less than or equal to 3999";
    convertOutput.classList.add("alert");
  } else {
    convertOutput.innerText = convertToRoman(int);
  };
};
