const operation = () => {
    let angka1 = parseInt(document.getElementById("angka1").value)
    let angka2 = parseInt(document.getElementById("angka2").value)
    let hasil = document.getElementById("hasil")
    let option = document.getElementById("option").value

    if (option == "penjumlahan") {
        hasil.innerText = angka1 + angka2
    }

    else if (option == "pengurangan") {
        hasil.innerText = angka1 - angka2
    }

    else if (option == "perkalian") {
        hasil.innerText = angka1 * angka2
    }

    else if (option == "pembagian") {
        hasil.innerText = angka1 / angka2
    }

    else if (option == "pangkat") {
        hasil.innerText = Math.pow(angka1, angka2)
    }

    else if (option == "modulus") {
        hasil.innerText = angka1 % angka2
    }
    
    
}

const reset = () => {
    document.getElementById("frm").reset();
}
