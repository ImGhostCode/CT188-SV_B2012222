
// Bt1
let input = document.getElementsByClassName('header__nav-input')[0]
let searchBtn = document.getElementById('search-btn')
let form = document.forms['header__nav-form']
input.onkeypress = function (e) {
    if (e.keyCode === 32) {
        e.preventDefault()
        sendData(e.target.value)
    } else return;
}
searchBtn.addEventListener('click', e => {
    sendData(input.value)
})

function sendData(data) {
    if (data.length > 0) form.submit()
    // console.log(data)
    // else return;
}

// Bt2
let form_register = document.getElementById('main__form-login')

function frmLoginValidate(frm) {
    return frm.checkValidity()
}
function frmContactValidate2(frm) {
    return frm.checkValidity()
}

function frmLoginValidate2(frm) {

    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) === false) {
        alert('Email ís invalid')
        return false
    }

    if (frm.pw.value.length < 8) {
        alert('Password must be at least 8 characters')
        return false
    }
    if (frm.name.value.length < 4) {
        alert('Name must be at least 4 characters')

        return false
    }
    if (frm.content.value.length < 10) {
        alert('Textarea must be at least 10 characters')

        return false
    }

    alert('Đã gửi dữ liệu')
    return true
}
function frmContactValidate(frm) {

    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) === false) {
        alert('Email ís invalid')
        return false
    }

    if (frm.name.value.length < 4) {
        alert('Name must be at least 4 characters')

        return false
    }
    if (frm.content.value.length < 10) {
        alert('Textarea must be at least 10 characters')

        return false
    }

    alert('Đã gửi dữ liệu')
    return true
}

function frmRegisterValidate(frm) {

    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) === false) {
        alert('Email ís invalid2')
        return false
    }

    if (frm.pw.value.length < 8 || frm.pw2.value.length < 8) {
        alert('Password must be at least 8 characters')
        return false
    }
    alert('Đã gửi dữ liệu')
    return true
}

// Ex3


function addCart(code) {
    if (typeof localStorage[code] === 'undefined') {
        window.localStorage.setItem(code, 0)
    }
    let number = parseInt(document.getElementById(code).value)
    if (number === 0) {
        alert('Value must be > 0')
        return;
    }
    let current = parseInt(window.localStorage.getItem(code))
    let quantity = current + number
    if (quantity <= 100) {
        window.localStorage.setItem(code, quantity)
    } else
        window.localStorage.setItem(code, 100)
}


//EX4
const itemList = {
    "sp001": {
        "name": "Sữa Chua Vị Kiwi",
        "price": 21000,
        "photo": "images/sanpham/kiwi.jpg"
    },
    "sp002": {
        "name": "Sữa Chua Vị Xoài",
        "price": 22000,
        "photo": "images/sanpham/mango.jpg"
    },
    "sp003": {
        "name": "Sữa Chua Vị Dưa lưới",
        "price": 23000,
        "photo": "images/sanpham/cantaloupe.jpg"
    },
    "sp004": {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": 24000,
        "photo": "images/sanpham/blackberry.jpg"
    },
    "sp005": {
        "name": "Sữa Chua Vị Dâu Tây",
        "price": 25000,
        "photo": "images/sanpham/strawberry.jpg"
    },
    "sp006": {
        "name": "Sữa Chua Vị Việt Quất",
        "price": 26000,
        "photo": "images/sanpham/blueberry.jpg"
    },
    "sp007": {
        "name": "Sữa Chua Vị Bưởi",
        "price": 27000,
        "photo": "images/sanpham/grapes.jpg"
    },
    "sp008": {
        "name": "Sữa Chua Vị Táo Xanh",
        "price": 28000,
        "photo": "images/sanpham/green-apple.jpg"
    },
    "sp009": {
        "name": "Sữa Chua Vị Dứa",
        "price": 29000,
        "photo": "images/sanpham/pineapple.jpg"
    }
};



function showCart() {
    let TotalPreTax = 0
    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            const item = itemList[key];
            let photo = item.photo
            let name = item.name
            let price = item.price
            let orderNumber = localStorage.getItem(key)
            console.log(item)
        }
    }
}
showCart()

