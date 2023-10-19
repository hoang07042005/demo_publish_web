function updateGreeting() {
    //var test = 1;
    //var test;
    //test = 2;
    //var: phạm toàn cục (golball),
    //có thể khai báo lại , không cần giá trị khi khởi tạo
    //có thể thay đổi cập nh giá trị

    //const khai báo hawnggf số, giá trị không được cập nhật và PHẢI khởi tạo giá trị ban đầu
    const greetingElement = document.getElementById('greeting');
    //const greetingElement;
    //const greetingElement1 = ';
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // let khai báo, không đươc khai báo lại, không cần gán giá trị ban đầu
    let greeting = '';
    let className = '';
    //let greeting;
    // let className;

    if (currentHour < 12){
        greeting = 'chào buổi sáng';
        className = 'morning'
    }else if(currentHour < 18){
        greeting = 'chào buổi chiều';
        className = 'afternoon';
    }else {
        greeting = 'chào buổi tối';
        className = 'evening'
    }

    greetingElement.textContent = greeting;
    greetingElement.className = className;

    const timeString = `thời gian đầy đủ: ${currentTime}`;
    const timeString2 = `thời gian rút gọn: ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;
    timeElement.textContent = timeString;
    timeElement2.textContent = timeString2;
//     secondsElement.textContent = currentTime.getSeconds();
}
//gọi hàm cập nhật mỗi giây
setInterval(updateGreeting, 1000);

//cập nhật lần đầu khi tải trang
updateGreeting();

function changeColor() {
    const textElement = document.getElementById('text');
    //lấy ra màu sắc hiện tại của phần tử
    const CurrentColor = textElement.style.color;
    
    if (CurrentColor === 'blue') {
        textElement.style.color = 'red';
        textElement.textContent = 'văn bản màu đỏ rồi sẽ thay đổi màu'; 
    }else {
        textElement.style.color = 'blue';
        textElement.textContent = 'văn bản màu xanh rồi sẽ thay đổi màu';
    }
}

// gọi hàm thay đổi màu mỗi giây
setInterval(changeColor, 1000);
