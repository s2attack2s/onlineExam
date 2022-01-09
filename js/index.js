let button_login = document.getElementById("button-login");
let exam_content = document.getElementById("exam-content");
let exam_login = document.getElementById("exam-login");
let appen = document.getElementById("exam-content-question");

let m = null;
let s = null;
let timeout = null;

let pad2 = (n) => {
  return (n < 10 ? "0" : "") + n;
};
pad2();

let date = new Date();
let month = pad2(date.getMonth() + 1);
let day = pad2(date.getDate());
let year = date.getFullYear();
let formattedDate = year + "-" + month + "-" + day;

let config = {
  username: "sonnt",
  password: "123456",
};

let rank = [
  {
      "name": "Hoàng",
      "point": "6.00",
      "time": "2022-01-09",
      "finalRandom": [
          {
              "id": 5,
              "question": "4 + 4 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "5"
                  },
                  {
                      "key": "2",
                      "value": "6"
                  },
                  {
                      "key": "3",
                      "value": "7"
                  },
                  {
                      "key": "4",
                      "value": "8"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 6,
              "question": "5 + 5 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "4"
                  },
                  {
                      "key": "2",
                      "value": "6"
                  },
                  {
                      "key": "3",
                      "value": "8"
                  },
                  {
                      "key": "4",
                      "value": "10"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 3,
              "question": "3 + 3 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "6"
                  },
                  {
                      "key": "2",
                      "value": "7"
                  },
                  {
                      "key": "3",
                      "value": "8"
                  },
                  {
                      "key": "4",
                      "value": "9"
                  }
              ],
              "ansId": 1
          },
          {
              "id": 4,
              "question": "11 + 1 = ?",
              "ans": [
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "11"
                  },
                  {
                      "key": "4",
                      "value": "12"
                  },
                  {
                      "key": "5",
                      "value": "2"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 2,
              "question": "2 + 2 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "2"
                  },
                  {
                      "key": "2",
                      "value": "3"
                  },
                  {
                      "key": "3",
                      "value": "4"
                  },
                  {
                      "key": "4",
                      "value": "5"
                  }
              ],
              "ansId": 3
          }
      ],
      "arr": [
          1,
          1,
          1,
          4,
          3
      ]
  },
  {
    "name": "quang",
    "point": "6.00",
    "time": "2022-01-09",
    "finalRandom": [
        {
            "id": 5,
            "question": "4 + 4 = ?",
            "ans": [
                {
                    "key": "1",
                    "value": "5"
                },
                {
                    "key": "2",
                    "value": "6"
                },
                {
                    "key": "3",
                    "value": "7"
                },
                {
                    "key": "4",
                    "value": "8"
                }
            ],
            "ansId": 4
        },
        {
            "id": 6,
            "question": "5 + 5 = ?",
            "ans": [
                {
                    "key": "1",
                    "value": "4"
                },
                {
                    "key": "2",
                    "value": "6"
                },
                {
                    "key": "3",
                    "value": "8"
                },
                {
                    "key": "4",
                    "value": "10"
                }
            ],
            "ansId": 4
        },
        {
            "id": 3,
            "question": "3 + 3 = ?",
            "ans": [
                {
                    "key": "1",
                    "value": "6"
                },
                {
                    "key": "2",
                    "value": "7"
                },
                {
                    "key": "3",
                    "value": "8"
                },
                {
                    "key": "4",
                    "value": "9"
                }
            ],
            "ansId": 1
        },
        {
            "id": 4,
            "question": "11 + 1 = ?",
            "ans": [
                {
                    "key": "2",
                    "value": "2"
                },
                {
                    "key": "3",
                    "value": "11"
                },
                {
                    "key": "4",
                    "value": "12"
                },
                {
                    "key": "5",
                    "value": "2"
                }
            ],
            "ansId": 4
        },
        {
            "id": 2,
            "question": "2 + 2 = ?",
            "ans": [
                {
                    "key": "1",
                    "value": "2"
                },
                {
                    "key": "2",
                    "value": "3"
                },
                {
                    "key": "3",
                    "value": "4"
                },
                {
                    "key": "4",
                    "value": "5"
                }
            ],
            "ansId": 3
        }
    ],
    "arr": [
        1,
        1,
        1,
        4,
        3
    ]
},
  {
      "name": "nam",
      "point": "10.00",
      "time": "2022-01-08",
      "finalRandom": [
          {
              "id": 1,
              "question": "1 + 1 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "1"
                  },
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "3"
                  },
                  {
                      "key": "4",
                      "value": "4"
                  }
              ],
              "ansId": 2
          },
          {
              "id": 6,
              "question": "5 + 5 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "4"
                  },
                  {
                      "key": "2",
                      "value": "6"
                  },
                  {
                      "key": "3",
                      "value": "8"
                  },
                  {
                      "key": "4",
                      "value": "10"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 2,
              "question": "2 + 2 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "2"
                  },
                  {
                      "key": "2",
                      "value": "3"
                  },
                  {
                      "key": "3",
                      "value": "4"
                  },
                  {
                      "key": "4",
                      "value": "5"
                  }
              ],
              "ansId": 3
          },
          {
              "id": 5,
              "question": "4 + 4 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "5"
                  },
                  {
                      "key": "2",
                      "value": "6"
                  },
                  {
                      "key": "3",
                      "value": "7"
                  },
                  {
                      "key": "4",
                      "value": "8"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 4,
              "question": "11 + 1 = ?",
              "ans": [
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "11"
                  },
                  {
                      "key": "4",
                      "value": "12"
                  },
                  {
                      "key": "5",
                      "value": "2"
                  }
              ],
              "ansId": 4
          }
      ],
      "arr": [
          2,
          4,
          3,
          4,
          4
      ]
  },
  {
      "name": "sonnt",
      "point": "4.00",
      "time": "2022-01-09",
      "finalRandom": [
          {
              "id": 5,
              "question": "4 + 4 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "5"
                  },
                  {
                      "key": "2",
                      "value": "6"
                  },
                  {
                      "key": "3",
                      "value": "7"
                  },
                  {
                      "key": "4",
                      "value": "8"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 3,
              "question": "3 + 3 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "6"
                  },
                  {
                      "key": "2",
                      "value": "7"
                  },
                  {
                      "key": "3",
                      "value": "8"
                  },
                  {
                      "key": "4",
                      "value": "9"
                  }
              ],
              "ansId": 1
          },
          {
              "id": 2,
              "question": "2 + 2 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "2"
                  },
                  {
                      "key": "2",
                      "value": "3"
                  },
                  {
                      "key": "3",
                      "value": "4"
                  },
                  {
                      "key": "4",
                      "value": "5"
                  }
              ],
              "ansId": 3
          },
          {
              "id": 4,
              "question": "11 + 1 = ?",
              "ans": [
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "11"
                  },
                  {
                      "key": "4",
                      "value": "12"
                  },
                  {
                      "key": "5",
                      "value": "2"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 1,
              "question": "1 + 1 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "1"
                  },
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "3"
                  },
                  {
                      "key": "4",
                      "value": "4"
                  }
              ],
              "ansId": 2
          }
      ],
      "arr": [
          1,
          2,
          3,
          2,
          2
      ]
  },
  {
      "name": "sonnt",
      "point": "10.00",
      "time": "2022-01-09",
      "finalRandom": [
          {
              "id": 2,
              "question": "2 + 2 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "2"
                  },
                  {
                      "key": "2",
                      "value": "3"
                  },
                  {
                      "key": "3",
                      "value": "4"
                  },
                  {
                      "key": "4",
                      "value": "5"
                  }
              ],
              "ansId": 3
          },
          {
              "id": 1,
              "question": "1 + 1 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "1"
                  },
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "3"
                  },
                  {
                      "key": "4",
                      "value": "4"
                  }
              ],
              "ansId": 2
          },
          {
              "id": 6,
              "question": "5 + 5 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "4"
                  },
                  {
                      "key": "2",
                      "value": "6"
                  },
                  {
                      "key": "3",
                      "value": "8"
                  },
                  {
                      "key": "4",
                      "value": "10"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 4,
              "question": "11 + 1 = ?",
              "ans": [
                  {
                      "key": "2",
                      "value": "2"
                  },
                  {
                      "key": "3",
                      "value": "11"
                  },
                  {
                      "key": "4",
                      "value": "12"
                  },
                  {
                      "key": "5",
                      "value": "2"
                  }
              ],
              "ansId": 4
          },
          {
              "id": 3,
              "question": "3 + 3 = ?",
              "ans": [
                  {
                      "key": "1",
                      "value": "6"
                  },
                  {
                      "key": "2",
                      "value": "7"
                  },
                  {
                      "key": "3",
                      "value": "8"
                  },
                  {
                      "key": "4",
                      "value": "9"
                  }
              ],
              "ansId": 1
          }
      ],
      "arr": [
          3,
          2,
          4,
          4,
          1
      ]
  }
];

let listQuestion = [
  {
    id: 1,
    question: "1 + 1 = ?",
    ans: [
      {
        key: "1",
        value: "1",
      },
      {
        key: "2",
        value: "2",
      },
      {
        key: "3",
        value: "3",
      },
      {
        key: "4",
        value: "4",
      },
    ],
    ansId: 2,
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    ans: [
      {
        key: "1",
        value: "2",
      },
      {
        key: "2",
        value: "3",
      },
      {
        key: "3",
        value: "4",
      },
      {
        key: "4",
        value: "5",
      },
    ],
    ansId: 3,
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    ans: [
      {
        key: "1",
        value: "6",
      },
      {
        key: "2",
        value: "7",
      },
      {
        key: "3",
        value: "8",
      },
      {
        key: "4",
        value: "9",
      },
    ],
    ansId: 1,
  },
  {
    id: 4,
    question: "11 + 1 = ?",
    ans: [
      {
        key: "2",
        value: "2",
      },
      {
        key: "3",
        value: "11",
      },
      {
        key: "4",
        value: "12",
      },
      {
        key: "5",
        value: "2",
      },
    ],
    ansId: 4,
  },
  {
    id: 5,
    question: "4 + 4 = ?",
    ans: [
      {
        key: "1",
        value: "5",
      },
      {
        key: "2",
        value: "6",
      },
      {
        key: "3",
        value: "7",
      },
      {
        key: "4",
        value: "8",
      },
    ],
    ansId: 4,
  },
  {
    id: 6,
    question: "5 + 5 = ?",
    ans: [
      {
        key: "1",
        value: "4",
      },
      {
        key: "2",
        value: "6",
      },
      {
        key: "3",
        value: "8",
      },
      {
        key: "4",
        value: "10",
      },
    ],
    ansId: 4,
  },
];

var listData = JSON.parse(localStorage.getItem("rank"));
if (listData == null) {
  localStorage.setItem("rank", JSON.stringify(rank));
}
start = () => {
  let checkName = document.getElementById("username").value;
  let checkPass = document.getElementById("password").value;

  if (checkName == config.username && checkPass == config.password) {
    if (m === null) {
      m = parseInt(document.getElementById("m_val").value);
      s = parseInt(document.getElementById("s_val").value);
    }
    if (s === -1) {
      m -= 1;
      s = 59;
    }
    if (m === -1) {
      clearTimeout(timeout);
      alert("Hết giờ");
      submitExam();
    }
    document.getElementById("m").innerText = m.toString();
    document.getElementById("s").innerText = s.toString();
    timeout = setTimeout(function () {
      s--;
      start();
    }, 1000);
    document.getElementById("name").innerHTML = checkName;
    exam_login.style.display = "none";
    exam_content.style.display = "block";
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
};

let long = 0;
arrRandom = [];
finalRandom = [];
while (long < 5) {
  arrRandom[long] =
    listQuestion[Math.floor(Math.random() * listQuestion.length)];

  finalRandom = [...new Set(arrRandom)];

  long = finalRandom.length;
}

var arrResult = [];
var resultVal = []
for (i = 0; i < long; i++) {
  arrResult.push(finalRandom[i].ansId);
 
  let num = i + 1;
  let newDivQuesGroup = document.createElement("div");
  newDivQuesGroup.className = "ques-group";

  let newDivQuestion = document.createElement("div");
  newDivQuestion.className = "ques-details";
  newDivQuestion.id = "ques-" + finalRandom[i].id;
  newDivQuestion.innerHTML = num + ". " + finalRandom[i].question;
  newDivQuesGroup.appendChild(newDivQuestion);

  let newDivAns = document.createElement("div");
  newDivAns.className = "ans";

  finalRandom[i].ans.forEach((data) => {
    resultVal.push(data.value);
    let newDivAnsGroup = document.createElement("div");
    newDivAnsGroup.className = "ans-group";
    newDivAns.appendChild(newDivAnsGroup);

    let newInput = document.createElement("input");
    newInput.id = "ans-" + finalRandom[i].id + "-" + data.key;

    newInput.setAttribute("type", "radio");
    newInput.setAttribute("name", "ques-" + i);
    newInput.setAttribute("value", data.key);
    newDivAnsGroup.appendChild(newInput);

    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", "ans-" + finalRandom[i].id + "-" + data.key);

    newLabel.innerHTML = data.value;
    newDivAnsGroup.appendChild(newLabel);
  });
  newDivQuesGroup.appendChild(newDivAns);
  appen.appendChild(newDivQuesGroup);
}

submitExam = () => {
    confirm("Xác nhận nộp bài");
        let arr = [];
        let count = 0;
        let point = 0;
        for (j = 0; j < long; j++) {
          let checkbox = document.getElementsByName("ques-" + j);
          for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === true) {
              arr.push(JSON.parse(checkbox[i].value));
            }
          }
        }
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == arrResult[i]) {
            count++;
          }
        }
        point = (count * 10) / long;
        let newPoint = parseFloat(point).toFixed(2);
        alert("Thành công");
        if (typeof Storage !== "undefined") {
          let name = document.getElementById("username").value;
      
          let newData = {
            name: name,
            point: newPoint,
            time: formattedDate,
          };

          let mergedObj = { ...newData, finalRandom , arr};
          listData.push(mergedObj);
      
          localStorage.setItem("rank", JSON.stringify(listData));
        }
        window.location.href = "rank.html";
    

};

var queIndex = 1;
showQuestion(queIndex);

function plusQue(n) {
  showQuestion((queIndex += n));
}

function currentQue(n) {
  showQuestion((queIndex = n));
}

function showQuestion(n) {
  var i;
  let que = document.getElementsByClassName("ques-group");
  for (i = 0; i < long; i++) {
    que[i].style.display = "none";
  }

  if (queIndex > long) {
    queIndex = long;
  }
  if (n < 1) {
    queIndex = 1;
  }
  que[queIndex - 1].style.display = "block";
  document.getElementById("total-que").innerHTML = queIndex + "/" + long;
}

