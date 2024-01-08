# Batch delete Google Photos
Batch select and delete Google Photos 

 * Batch select and delete Google Photos in the current window view. 
 * Scrolls the page and selects photos for deletion.
 * Or automatically delete all photos through iteration.

Create this script because Virginia Tech sent me email requesting complete removal of Google Photo content.

## How to use
Press F12 in the browser and copy past the `batchSelectAndDeleteGooglePhotos()` into the console. 

### Method 1: run once to delete all photos in current window view
Run the function with parameters: (confirmDeletion, hideThumbs)
Pass true for confirmDeletion to execute the deletion process, pass true for hideThumbs to hide thumbnails
`batchSelectAndDeleteGooglePhotos(true, true);`

### Method 2: iterate this function to delete all of the photos
`setInterval(() => {batchSelectAndDeleteGooglePhotos(true, true);}, 5000);`
