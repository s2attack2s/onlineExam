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


for (i = 0; i < lengthQue; i++) {

    arrResult.push(listQuestion[i].ansId);
    let num = i + 1;
    let newDivQuesGroup = document.createElement("div");
    newDivQuesGroup.className = "ques-group";

    let newDivQuestion = document.createElement("div");
    newDivQuestion.className = "ques-details"
    newDivQuestion.id = "ques-" + listQuestion[i].id;
    newDivQuestion.innerHTML = num + ". " + listQuestion[i].question;
    newDivQuesGroup.appendChild(newDivQuestion);

    let newDivAns = document.createElement("div");
    newDivAns.className = "ans";


    listQuestion[i].ans.forEach(data => {
        let newDivAnsGroup = document.createElement("div");
        newDivAnsGroup.className = "ans-group";
        newDivAns.appendChild(newDivAnsGroup);

        let newInput = document.createElement("input");
        newInput.id = "ans-" + listQuestion[i].id + "-" + data.key;

        newInput.setAttribute('type', "radio");
        newInput.setAttribute("name", "ques-" + i);
        newInput.setAttribute("value", data.key);
        newDivAnsGroup.appendChild(newInput);

        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", "ans-" + listQuestion[i].id + "-" + data.key);

        newLabel.innerHTML = data.value;
        newDivAnsGroup.appendChild(newLabel);

    });
    newDivQuesGroup.appendChild(newDivAns);
    appen.appendChild(newDivQuesGroup);

}