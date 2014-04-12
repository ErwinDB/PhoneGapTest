/// <reference path="jquery.mobile-1.3.2.min.js" />
/// <reference path="camera.js" />
/// <reference path="CameraConstants.js" />
/// <reference path="CameraPopoverOptions.js" />

function takePicture() {
    capturePhoto();
}

function capturePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
        saveToPhotoAlbum: true
    });
}

function onSuccess(imageURI) {
    alert("onSuccess: imageURI = " + imageURI);
    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, function (error) { onFail(error); });
}

function gotFileEntry(targetImg) {
    alert("gotFileEntry: targetImg = " + targetImg.fullPath);
    $.mobile.changePage("#photopage");
    $("#photo").attr("src", targetImg.fullPath);
}

function onFail(message) {
    alert("Failed because: " + message);
}
