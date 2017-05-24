
$(document).ready(function(){
    $('#createXML').on('click', function(e){
        e.preventDefault();
        var getRecordNo = $('#recordNo').val();
        var xmlVersion = '<?xml version="1.0" encoding="UTF-8"?>';
        var RCNo = '<recordNo>'+ getRecordNo+'</recordNo>'
        var textFile = new Blob([xmlVersion,RCNo], {
            type: 'text/plain'
        });
        invokeSaveAsDialog(textFile, getRecordNo+'.xml');
    })
    function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        file.type = 'video/webm';
    }

    var fileExtension = file.type.split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.target = '_blank';
    hyperlink.download = fileFullName;

    if (!!navigator.mozGetUserMedia) {
        hyperlink.onclick = function() {
            (document.body || document.documentElement).removeChild(hyperlink);
        };
        (document.body || document.documentElement).appendChild(hyperlink);
    }

    var evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    hyperlink.dispatchEvent(evt);

    if (!navigator.mozGetUserMedia) {
        URL.revokeObjectURL(hyperlink.href);
    }
}
preFill = function(a){
    var that = a;
    if($(that).hasClass('custName')){
        $('#BillName').val($(that).val());
        $('#Name_P').val($(that).val());
    } else if($(that).hasClass('PhNo_1')){
        $('#PhNo_2').val($(that).val())
    } else if($(that).hasClass('Sex_1')){
         $('#Sex_2').val($(that).val())
    } else if($(that).hasClass('D_Birth')){
        $('#DOB').val($(that).val());
        $('#D_B_Life').val($(that).val());
    }
    
}




onFileSelected = function(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();
  var aa = event.target.result

  reader.readAsDataURL(selectedFile);
  $("#image").attr('src','C:/Users/24507/Pictures/'+selectedFile.name)
}
});