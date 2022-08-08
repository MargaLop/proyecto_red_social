const placeLink = document.getElementById("tbox-place").value;
const kmLink = document.getElementById("tbox-km").value;


function search(){
    document.getElementById("frmsearch")
    .submit()
    console.log("hiciste click");
};

document
    .getElementById("btn-buscar")
    .addEventListener("click", search);

//     function descarga(event) {
        
//         fetch(dowLink)
//           .then((resp) => resp.blob())
//           .then((blob) => {
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             a.style.display = "none";
//             a.href = url;
//             // the filename you want
//             a.download = `${paramLink}.mp4`;
//             if (event.target.id === "descargamp3") {
//               a.download = `${paramLink}.mp3`;
//             }
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//           });
//       }