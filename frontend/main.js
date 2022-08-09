function searchClick(){
    document.getElementById("frmsearch")
    .submit() 
    console.log("hiciste click");
};

document
    .getElementById("btn-buscar")
    .addEventListener("click", searchElements);

function searchElements(event) {
    const placeLink = document.getElementById("tbox-place").value;
    const kmLink = document.getElementById("tbox-km").value;
    const dowLink = `/busqueda?place=${placeLink}&km=${kmLink}`;
        fetch(dowLink)
          .then((resp) => console.log(resp));
}
