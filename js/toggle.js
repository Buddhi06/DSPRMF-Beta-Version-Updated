function toggle(divId) {
    let div = document.getElementById(divId);
    div.classList.toggle("hidden");
}


 function showDetails(event, detailId) {
        event.stopPropagation(); // Prevents body click from hiding it immediately

        // Hide all other detail boxes first
        document.querySelectorAll('.detail-box').forEach(box => box.style.display = "none");

        // Show the selected detail box
        document.getElementById(detailId).style.display = "block";
    }

    function closeDetails(event, detailId) {
        event.stopPropagation(); // Prevents parent click from reopening
        document.getElementById(detailId).style.display = "none";
    }

    // Hide details when clicking anywhere outside
    document.body.addEventListener("click", function () {
        document.querySelectorAll('.detail-box').forEach(box => box.style.display = "none");
    });


   function toggleDiv(index) {
  const contents = document.querySelectorAll(".content");
  const content = contents[index];

  // toggle open/close
  if (content.classList.contains("open")) {
    content.classList.remove("open");
    content.style.maxHeight = "0px";
    content.style.paddingTop = "0px";
    content.style.paddingBottom = "0px";
  } else {
    content.classList.add("open");
    content.style.paddingTop = "10px";
    content.style.paddingBottom = "10px";

    // IMPORTANT: set to full content height
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
