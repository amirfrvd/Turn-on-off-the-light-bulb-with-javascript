let $ = document;
let bulbImg = $.getElementById('bulb')
let btn = $.getElementById('btn')

let bulbFlag = false

function turnOffOrOn() {
    // alert('Turn On/Off')

    if (bulbFlag) {
        bulbImg.setAttribute('src', 'assets/images/bulboff.gif')
        btn.innerHTML = 'Turn On'
        bulbFlag = false
    } else {
        bulbImg.setAttribute('src', 'assets/images/bulbon.gif')
        btn.innerHTML = 'Turn Off'
        bulbFlag = true
    }
}