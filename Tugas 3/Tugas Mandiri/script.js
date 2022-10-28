function operation(){
    let konfir = confirm("Yakin?")
    konfir == false ? "" : hasil()
}

function hasil() {
    let nomor = document.getElementById("nomor").value;
    nomor == 2 ? alert("Benar") : alert("Salah")
}

