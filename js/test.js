function takePicture() {
    capturePhoto();
}

function capturePhoto() {
    alert("capturePhoto, navigator.camera = " + navigator.camera);

    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: destinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
        saveToPhotoAlbum: true
    });
}

function onPhotoURISuccess(imageURI) {
    alert("onPhotoURISuccess: imageURI = " + imageURI);
    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, function (error) { onfail(error, 'Get Target Image') });
}

function gotFileEntry(targetImg) {
    alert("gotFileEntry: targetImg = " + targetImg);
}

function onFail(message) {
    alert('Failed because: ' + message);
}