/**
 * Batch select and delete Google Photos in the current window view. 
 * Scrolls the page and selects photos for deletion.
 * Note: Create this script because Virginia Tech sent me multiple emails requesting complete removal of Google Photo content.
 * Haitao 1/8/2024
 * 
 * @param {boolean} confirmDeletion - Indicates whether to confirm deletion or skip the deletion process.
 *                                    Pass true to execute the entire deletion process, pass false to skip deletion.
 * @param {boolean} hideThumbs - Indicates whether to hide or display the thumbnail images.
 *                               Pass true to hide thumbnail images, pass false to display them.
 */
function batchSelectAndDeleteGooglePhotos(confirmDeletion, hideThumbs) {
    // Hide or display all thumbnail images
    const thumbs = document.querySelectorAll(".rtIMgb");
    thumbs.forEach(thumb => {
        thumb.style.display = hideThumbs ? 'none' : 'block';
    });

    // Trigger a click event on the date title checkbox
    const galleryTitle = document.querySelectorAll(".I9QCXd [role='checkbox']");
    galleryTitle.forEach(checkbox => {
        checkbox.click();
    });

    // Trigger click on the delete button if confirmDeletion is true
    if (confirmDeletion) {
        const deleteButton = document.querySelectorAll('.c9yG5b button')[1];
        if (deleteButton) {
            deleteButton.click();
        }

        // WARNING: This will delete all the selected photos
        const confirmButton = document.querySelectorAll('.XfpsVe button')[1];
        if (confirmButton) {
            confirmButton.click();
        }
    } else {
        console.log("Deletion skipped.");
    }
}

// Method 1: Run the function with parameters: (confirmDeletion, hideThumbs)
// Pass true for confirmDeletion to execute the deletion process, pass true for hideThumbs to hide thumbnails
batchSelectAndDeleteGooglePhotos(true, true);

//Method 2: iterate this function to delete all of the photos
setInterval(() => {batchSelectAndDeleteGooglePhotos(true, true);}, 5000);
