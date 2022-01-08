let button_login = document.getElementById('button-login');
let exam_content = document.getElementById('exam-content');
let exam_login = document.getElementById('exam-login');
let appen = document.getElementById("exam-content-question");

let m = null;
let s = null;
let timeout = null;

let pad2 = n => {
    return (n < 10 ? '0' : '') + n;
}
pad2();

let date = new Date();
let month = pad2(date.getMonth() + 1);
let day = pad2(date.getDate());
let year = date.getFullYear();
let formattedDate = year + "-" + month + "-" + day;

let config = {
    "username": "sonnt",
    "password": "123456"
}
let rank = [{
        "name": "nam",
        "point": 3,
        'time': "22-11-2022"
    },
    {
        "name": "h",
        "point": 6,
        'time': "22-11-2022"
    },
    {
        "name": "hoàng",
        "point": 10,
        'time': "22-11-2022"
    }
];
var listData = JSON.parse(localStorage.getItem("rank"));
if (listData == null) {
    localStorage.setItem('rank', JSON.stringify(rank));
}
start = () => {
    let checkName = document.getElementById('username').value;
    let checkPass = document.getElementById('password').value;

    if (checkName == config.username && checkPass == config.password) {
        if (m === null) {
            m = parseInt(document.getElementById('m_val').value);
            s = parseInt(document.getElementById('s_val').value);
        }
        if (s === -1) {
            m -= 1;
            s = 59;
        }
        if (m === -1) {
            clearTimeout(timeout);
            alert('Hết giờ');
            submitExam();
        }
        document.getElementById('m').innerText = m.toString();
        document.getElementById('s').innerText = s.toString();
        timeout = setTimeout(function() {
            s--;
            start();
        }, 1000);
        document.getElementById('name').innerHTML = checkName;
        exam_login.style.display = "none";
        exam_content.style.display = "block";
    } else {
        alert('Sai tài khoản hoặc mật khẩu');
    }

}

let listQuestion = [{
        "id": 1,
        "question": "1 + 1 = ?",
        "ans": [{
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
            },
            {
                "key": "5",
                "value": "6"
            },
        ],
        "ansId": 2
    },
    {
        "id": 2,
        "question": "11 + 1 = ?",
        "ans": [{
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
        "question": "10 + 1 = ?",
        "ans": [{
                "key": "2",
                "value": "2"
            },
            {
                "key": "11",
                "value": "2"
            },
            {
                "key": "1",
                "value": "11"
            },
            {
                "key": "5",
                "value": "2"
            }
        ],
        "ansId": 1
    }
]


let long = 0;
arrRandom = [];
finalRandom = [];
while (long < 2) {
    arrRandom[long] = listQuestion[Math.floor(Math.random() * listQuestion.length)];

    finalRandom = [...new Set(arrRandom)];

    long = finalRandom.length;
}

var arrResult = [];

for (i = 0; i < long; i++) {

    arrResult.push(finalRandom[i].ansId);
    let num = i + 1;
    let newDivQuesGroup = document.createElement("div");
    newDivQuesGroup.className = "ques-group";

    let newDivQuestion = document.createElement("div");
    newDivQuestion.className = "ques-details"
    newDivQuestion.id = "ques-" + finalRandom[i].id;
    newDivQuestion.innerHTML = num + ". " + finalRandom[i].question;
    newDivQuesGroup.appendChild(newDivQuestion);

    let newDivAns = document.createElement("div");
    newDivAns.className = "ans";


    finalRandom[i].ans.forEach(data => {
        let newDivAnsGroup = document.createElement("div");
        newDivAnsGroup.className = "ans-group";
        newDivAns.appendChild(newDivAnsGroup);

        let newInput = document.createElement("input");
        newInput.id = "ans-" + finalRandom[i].id + "-" + data.key;

        newInput.setAttribute('type', "radio");
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
    point = count * 10 / long;
    let newPoint = parseFloat(point).toFixed(2);
    alert("Thành công");
    if (typeof(Storage) !== 'undefined') {
        let name = document.getElementById('username').value;

        let newData = {
            name: name,
            point: newPoint,
            time: formattedDate
        }
        let newList = [];

        newList.push({...finalRandom })
        newList.push(newData);
        console.log(newList, newFinal);
        listData.push(newList);

        localStorage.setItem('rank', JSON.stringify(listData));

    }
}

var queIndex = 1;
showQuestion(queIndex);



function plusQue(n) {

    showQuestion(queIndex += n);

}

function currentQue(n) {
    showQuestion(queIndex = n);
}


function showQuestion(n) {
    var i;
    let que = document.getElementsByClassName("ques-group");
    for (i = 0; i < long; i++) {
        que[i].style.display = "none";
    };

    if (queIndex > long) { queIndex = 1 };
    if (n < 1) { queIndex = long };
    que[queIndex - 1].style.display = "block";
    document.getElementById("total-que").innerHTML = queIndex + "/" + long;

};