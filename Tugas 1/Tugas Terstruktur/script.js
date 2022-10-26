var tombol = document.getElementById("click")

function UbahTeks() {
    document.getElementById("teks").innerText = "Teks telah diubah"
}
tombol.addEventListener("click", UbahTeks);