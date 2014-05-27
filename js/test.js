/// <reference path="jquery.mobile-1.3.2.min.js" />
/// <reference path="camera.js" />
/// <reference path="CameraConstants.js" />
/// <reference path="CameraPopoverOptions.js" />
var _imageURI;

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
    _imageURI = imageURI;
    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, function (error) { onFail(error); });
}

function gotFileEntry(targetImg) {
    alert("targetImg.fullPath = " + targetImg.fullPath);
    alert("_imageURI = " + _imageURI);
    $.mobile.changePage("#photopage");
    //Does not work:
    //$("#photo").attr("src", targetImg.fullPath);
    //Works:
    $("#photo").attr("src", _imageURI);
}

function onFail(message) {
    alert("Failed because: " + message);
}
