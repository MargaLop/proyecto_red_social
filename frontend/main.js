const placeLink = document.getElementById("tbox-place").value;
const kmLink = document.getElementById("tbox-km").value;

function searchElements(event) {
    const dowLink = `/busqueda?place=${placeLink}&km=${kmLink}`;
        fetch(dowLink)
          .then((resp) => console.log(resp));
};

document
    .getElementById("btn-buscar")
    .addEventListener("click", searchElements);

function selectCommunities(){
    
}
