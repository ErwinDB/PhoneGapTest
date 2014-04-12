/// <reference path="jquery.mobile-1.3.2.min.js" />
/// <reference path="camera.js" />
/// <reference path="CameraConstants.js" />
/// <reference path="CameraPopoverOptions.js" />

function takePicture() {
    capturePhoto();
}

function capturePhoto() {
    alert("capturePhoto, navigator.camera = " + navigator.camera);

    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });

    /*
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
    */
}

function onSuccess(imageURI) {
    //var image = document.getElementById("photo");
    //image.src = imageURI;
    $.mobile.changePage("#photopage");
    $("#photo").attr("src", imageURI);
}

function onFail(message) {
    alert("Failed because: " + message);
}
/*
function onPhotoURISuccess(imageURI) {
    alert("onPhotoURISuccess: imageURI = " + imageURI);
    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, function (error) { onFail("Get Target Image"); });
}

function gotFileEntry(targetImg) {
    alert("gotFileEntry: targetImg = " + targetImg);
}

function onFail(message) {
    alert("Failed because: " + message);
*/