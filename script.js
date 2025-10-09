// Notes for myself

document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".collectionFolder"); //My const collecting all the elements with ".collectionFolder" as a class

  folders.forEach((folder) => {
    //calls upon each specific element I put in the "folders" array
    folder.addEventListener("click", (event) => {
      //adding event listener to each element in the "folders" array
      if (event.target.classList.contains("sub-img")) return; //makes sure when I click the inner image the folder doesnt go down

      folder.classList.toggle("folder-active"); //toggles the "folder-active" class on the items in the "Folders" array
    });
  });
});
