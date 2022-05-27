let cartNotif = document.getElementById("cart-notif")

function cartCheck(courseName, coursePrice) {
    let nama = courseName
    let price = coursePrice
    cartNotif.classList.remove("d-none")
    document.getElementById("form-course").value = nama
    document.getElementById("form-harga").value = price
}

function cartCancel() {
    cartNotif.classList.add("d-none")
    modal.style.display = "none";
    getModal1.classList.remove("d-none");
    getModal2.classList.add("d-none");
    getModal3.classList.add("d-none");
    document.getElementById("form-nama").value = ""
    document.getElementById("form-hp").value = ""
    document.getElementById("form-mulai").value = ""
    document.getElementById("form-course").value = ""
    document.getElementById("form-harga").value = ""
}

// DARK-MODE
function yoSwitch() {
    let getBody = document.body
    // let getCard = document.getElementsByClassName("card")
    getBody.classList.toggle("darkmode")
    // getCard.classList.toggle("darkmode")
}

// CHECK LOCALSTORAGE THEME
// if (locaStorage.getItem('theme' === 'dark')) {
//     setDarkMode(true)
// } else {
//     setDarkMode(false)
// }

// function setDarkMode(isDark) {
//     if (isDark) {
//         document.body.setAttribute('id', 'darkmode')
//         localStorage.setItem('theme', 'dark')
//     } else {
//         document.body.setAttribute('id', '')
//         localStorage.removeItem('theme')
//     }

// }


// FUNCTION TO GET TOMORROW DATE
function dateBesok() {
    let date = new Date();
    let tahun = date.getFullYear();
    let bulan = date.getMonth();
    let tanggal = date.getDate();
    let hari = date.getDay();
    tanggal++
    hari++

    switch(hari) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
    }

    switch(bulan) {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
    }
    return `${hari} ${tanggal} ${bulan} ${tahun}`   
}

let getDateBesok = document.getElementById("date-besok")
getDateBesok.textContent = dateBesok()


// FUNCTION TO GET USER DATA FORM
function formData() {
    let dataNama = document.getElementById("form-nama").value
    let dataCourse = document.getElementById("form-course").value
    let dataMulai = document.getElementById("form-mulai").value
    let dataHp = document.getElementById("form-hp").value

    let getlFormNama = document.getElementById("user-nama")
    let getlFormCourse = document.getElementById("user-course")
    let getlFormMulai = document.getElementById("user-mulai")
    let getlFormHp = document.getElementById("user-hp")

    getlFormNama.textContent = dataNama
    getlFormCourse.textContent = dataCourse
    getlFormMulai.textContent = dataMulai
    getlFormHp.textContent = dataHp
}


// About us
// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover({
//        placement: 'bottom',
//        trigger: 'hover'
//     });
//  });