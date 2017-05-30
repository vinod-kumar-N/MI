
$(document).ready(function(){
    $('#createXML').on('click', function(e){
        e.preventDefault();
        var userName = $('#userName').val();
        var getImageName = $('.imageContainer img').attr('src');
        var finalImgName = (getImageName.split("/")[1]);
        var getRecordNo = $('#recordNo').val();
        var CustomerName = $('#custName').val();
        var EmailAddress = $('#email').val();
        var resAdd = $('#resAdd').val();
        var City_1 = $('#City_1').val();
        var State_1 = $('#State_1').val();
        var Zip_1 = $('#Zip_1').val();
        var PhNo_1 = $('#PhNo_1').val();
        var Country_1 = $('#Country_1').val();
        var Sex_1 = $('#Sex_1').val();
        var D_Birth = $('#D_Birth').val();
        var height = $('#Height').val();
        var weight = $('#Weight').val();
        var BldG = $('#BG').val();
        var BillName = $('#BillName').val();
        var ShipName = $('#ShipName').val();
        var City_2 = $('#City_2').val();
        var State_2 = $('#State_2').val();
        var Zip_2 = $('#Zip_2').val();
        var Country_2 = $('#Country_2').val();
        var PhNo_2 = $('#PhNo_2').val();
        var Alcohlic = $('#Alcohlic').val();
        var Smoker = $('#Smoker').val();
        var PastS = $('#PS').val();
        var Diabetic = $('#Diabetic').val();
        var Allergiesd = $('#Allergiesd').val();
        var policyNo = $('#policyNo').val();
        var D_B_Life = $('#D_B_Life').val();
        var P_Inst = $('#P_Inst').val();
        var Name_P = $('#Name_P').val();
        var STMa = $('#STM').val();
        var STM_Code = $('#STM_Code').val();
        var DOBa = $('#DOB').val();
        var Sex_2 = $('#Sex_2').val();
        var CNa = $('#CN').val();
        var Medicine = $('#Medicine').val();
        var Dosage = $('#Dosage').val();
        var Tablets = $('#Tablets').val();
        var pillRate = $('#pillRate').val();
        var ShipCost = $('#ShipCost').val();
        var Cost = $('#Cost').val();
        var TAa = $('#TA').val();
        var remarks = $('#remarks').val();
        var date =  new Date().toString();
        var day = getDay();
        Date.prototype.monthName = function() {
            return this.toUTCString().split(' ')[2]
        };
        d = new Date();
        var month = d.monthName();
        var Pday = d.getDate() ;
        var year = d.getFullYear();
        var time = new Date();
        time = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: true });
        var RCNo = '<DataM>\n<ImageName>'+finalImgName+'</ImageName>\n'+'<RecordNo>'+ getRecordNo+'</RecordNo>\n<CustomerName>'+CustomerName+'</CustomerName>\n<EmailAddress>'+EmailAddress+
        '</EmailAddress>\n<ResAddress>'+resAdd+'</ResAddress>\n<City_1>'+City_1+'</City_1>\n<State_1>'+State_1+'</State_1>\n<Zip_1>'+Zip_1+'</Zip_1>\n<PhNo_1>'+PhNo_1+
        '</PhNo_1>\n<Country_1>'+Country_1+'</Country_1>\n<Sex_1>'+Sex_1+'</Sex_1>\n<D_Birth>'+D_Birth+'</D_Birth>\n<Height>'+height+'</Height>\n<Weight>'+weight+
        '</Weight>\n<Blood_Group>'+BldG+'</Blood_Group>\n<BillingName>'+BillName+'</BillingName>\n<ShipperName>'+ShipName+'</ShipperName>\n<City_2>'+City_2+
        '</City_2>\n<State_2>'+State_2+'</State_2>\n<Zip_2>'+Zip_2+'</Zip_2>\n<Country_2>'+Country_2+'</Country_2>\n<PhNo_2>'+PhNo_2+'</PhNo_2>\n<Alcoholic>'+Alcohlic+
        '</Alcoholic>\n<Smoker>'+Smoker+'</Smoker>\n<PastSug>'+PastS+'</PastSug>\n<Diabetic>'+Diabetic+'</Diabetic>\n<Allergiesd>'+Allergiesd+
        '</Allergiesd>\n<PloicyNo>'+policyNo+'</PloicyNo>\n<D_B_Life_Assure>'+D_B_Life+'</D_B_Life_Assure>\n<P_Inst>'+P_Inst+'</P_Inst>\n<Name_P_Holder>'+Name_P+
        '</Name_P_Holder>\n<STM_Name>'+STMa+'</STM_Name>\n<STM_Code>'+STM_Code+'</STM_Code>\n<DOB>'+DOBa+'</DOB>\n<Sex_2>'+Sex_2+'</Sex_2>\n<CardName>'+CNa+
        '</CardName>\n<Medicine>'+Medicine+'</Medicine>\n<Dosage>'+Dosage+'</Dosage>\n<Tablets>'+Tablets+'</Tablets>\n<PillRate>'+pillRate+
        '</PillRate>\n<Cost>'+Cost+'</Cost>\n<ShippingCost>'+ShipCost+'</ShippingCost>\n<TotalAmount>'+TAa+'</TotalAmount>\n<Remarks>'+remarks+
        '</Remarks>\n<UserID>'+userName+'</UserID>\n<CreateDate>'+day+', '+month+' '+Pday+', '+year+' '+time+'</CreateDate>\n<UpdateDate></UpdateDate>\n</DataM>'
        var textFile = new Blob([RCNo], {
            type: 'text/plain'
        });
        $('.inputOut textarea').html(RCNo);
        invokeSaveAsDialog(textFile, getRecordNo+'.xml');
        $('.MI input').val("");
    })

    function getDay() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[d.getDay()];
        return n;
    }
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

$('.MI input').on('keyup',function(e){
  if ($(this).val() == 'N.A'){
    $(this).addClass('yellow');
  } else if($(this).hasClass('commonAddicts')){
      if($(this).val() == 'NO' || $(this).val() == 'YES'){
         $(this).removeClass('red');
      } else{
            $(this).addClass('red');
      }
  } else if($(this).attr('id') == "email"){
      $(this).val($(this).val().toLowerCase());
    }else{
    $(this).removeClass('yellow');
  }

 // $(this).val($(this).val().trim());
})

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    var image;
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong></li>');
      image = f.name;
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    $('.imageContainer img').attr('src','images/'+image);
  }
 fileSelect = function(e){
    var url = 'images/rawdata/'+e.target.files[0].name;
        $.ajax({
        method: "POST",
        url: url,
        }).done(function( msg ) {
        $('.dataContainer p').html(msg);
            var sample = msg.split(" ");
            //var dataArray = Array.from(msg);
            console.log('This is the data', sample);
            $('#recordNo').val(sample[0]);
            var length =  parseInt(sample.length-1);
            console.log(length);
            $('#TA').val(sample[length-1]);
            $('#ShipCost').val(sample[length-2]);
            $('#Cost').val(sample[length-3]);
            $('#pillRate').val(sample[length-4]);
            $('#Tablets').val(sample[length-5]);
            $('#Dosage').val(sample[length-7] +' '+sample[length-6]);
            $('#Medicine').val(sample[length-8]);
            $.each(sample, function(i,val){
              if(sample[i].search("@")!= -1 ){
                $('#email').val(sample[i]);
              } else if(sample[i].search("BaX")!= -1){
                $('#STM_Code').val(sample[i]);
              } else if(sample[i].search("Gz")!= -1){
                $('#policyNo').val(sample[i]);
              }
            })
        });

}
  document.getElementById('files').addEventListener('change', handleFileSelect, false);



  var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

});
