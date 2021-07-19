document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let username = event.target.value.toLowerCase();

    let allCollection = document.getElementsByClassName("name");

    for (counter = 0; counter< allCollection.length; counter++) {
        const currentName = allCollection[counter].textContent.toLocaleLowerCase();

        if(currentName.includes(username)) {
            allCollection[counter].style.display = "block";
        } else {
            allCollection[counter].style.display = "none";
        }
    }
    
});