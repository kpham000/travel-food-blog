// const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/amayz/upload'
// var CLOUDINARY_UPLOAD_PRESET = 'vwovuw7u'

// var imgPreview = document.getElementById('img-preview');
// var fileUpload = document.getElementById('file-upload');

// fileUpload.addEventListener('change', function(event) {
//     var file = event.target.files[0];
//     var formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
//     axios({
//         url: CLOUDINARY_URL,
//         method: 'POST',
//         Headers: {
//             'Content-type': 'application/x-www-form-urlencoded'
//         },
//         data: formData
//     }).then(function(res) {
//         console.log(res);
//         imgPreview.src = res.data.secure_url;
//         }).catch(function(err) {
//         console.log(err);  
//         });
//     });