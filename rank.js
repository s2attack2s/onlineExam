let listData = JSON.parse(localStorage.getItem("rank"));
let lengthData = listData.length;
let showData = () => {
    for (i = 0; i < lengthData; i++) {


        let newDiv = document.createElement("div");
        newDiv.className = 'rank-detail-group';

        //khởi tạo div hiển thị nội dung
        let newDivName = document.createElement('div');
        newDivName.className = "rank-name detail";
        newDivName.innerHTML = listData[i].name;
        newDiv.appendChild(newDivName);

        //khởi tạo div hiển thị ngày làm
        let newDivTime = document.createElement('div');
        newDivTime.className = "rank-date detail";
        newDivTime.innerHTML = listData[i].time;
        newDiv.appendChild(newDivTime);

        //khởi tạo div hiển thị ngày tạo
        let newDivPoint = document.createElement('div');
        newDivPoint.className = "rank-point detail";
        newDivPoint.innerHTML = listData[i].point;
        newDiv.appendChild(newDivPoint);

        //khởi tạo div tùy chọn
        let newDivOption = document.createElement('div');
        newDivOption.className = "rank-option detail";
        newDivOption.innerHTML = "Xem chi tiết";
        newDivOption.setAttribute("onclick", 'z');

        newDiv.appendChild(newDivOption);

        let rank_content = document.getElementById("rank-content");
        rank_content.insertBefore(newDiv, rank_content.childNodes[1]);

    }
}
showData();