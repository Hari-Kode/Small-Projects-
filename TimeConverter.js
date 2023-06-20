function convertTime() {
    var h = document.getElementById("h").value;
    var time = (`Time is : ${h % 12 === 0 ? 12 : h % 12}.${h < 12 ? 'Am' : 'Pm'} `);
    document.getElementById("convertedTime").innerText = time;
}
