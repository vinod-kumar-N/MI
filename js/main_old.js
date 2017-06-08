
$(document).ready(function(){
	var sample;
	var getinputNum = -1;
    String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
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
        $('.MI input').removeClass('yellow');
        $('#ShipCost').val('$20.00');
        $('#Country_1, #Country_2').val('US');
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
		if($(that).val() == 2){
			getinputNum = 2;
			$(that).val(sample[1]+" "+sample[2]);
			$('#BillName, #Name_P').val($(that).val());
		} else if($(that).val() == 3){
			getinputNum = 3;
			$(that).val(sample[1]+" "+sample[2] + " "+sample[3]);
			$('#BillName, #Name_P').val($(that).val());
		} else if($(that).val() == 1){
			getinputNum = 1;
			$(that).val(sample[1]);
			$('#BillName, #Name_P').val($(that).val());
		} 
        $('#BillName').val($(that).val());
        $('#Name_P').val($(that).val());
		callMissingField();
    } else if($(that).hasClass('PhNo_1')){
        $('#PhNo_2').val($(that).val());
		callMissingField();
    } else if($(that).hasClass('Sex_1')){
         $('#Sex_2').val($(that).val());
		 callMissingField();
    } else if($(that).hasClass('D_Birth')){
        $('#DOB').val($(that).val());
        $('#D_B_Life').val($(that).val());
		callMissingField();
    }else if ($(that).hasClass('resAdd')){
		internalNum = parseInt(getinputNum) + 2;
		getResAdd = $(that).val();
		if($(that).val() == 2){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]);
		}else if($(that).val() == 3){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]+" "+sample[internalNum + 2]);
		}else if($(that).val() == 4){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]+ " "+sample[internalNum + 2]+" "+sample[internalNum + 3]);
		}else if($(that).val() == 5){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]+ " "+sample[internalNum + 2]+ " "+sample[internalNum + 3]+" "+sample[internalNum + 4]);
		}else if($(that).val() == 6){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]+ " "+sample[internalNum + 2]+ " "+sample[internalNum + 3]+" "+sample[internalNum + 4]+" "+sample[internalNum + 5]);
		}else if($(that).val() == 7){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]+ " "+sample[internalNum + 2]+ " "+sample[internalNum + 3]+" "+sample[internalNum + 4]+" "+sample[internalNum + 5]+" "+sample[internalNum + 6]);
		}else if($(that).val() == 8){
			console.log(internalNum);
			$(that).val(sample[internalNum] +" "+sample[internalNum + 1]+ " "+sample[internalNum + 2]+ " "+sample[internalNum + 3]+" "+sample[internalNum + 4]+" "+sample[internalNum + 5]+" "+sample[internalNum + 6]+" "+sample[internalNum + 7]);
		}
		callMissingField();
	}else if ($(that).hasClass('City_1')){
		internalNumCity = internalNum+ parseInt(getResAdd);
		if($(that).val() == 1){
			$(that).val(sample[internalNumCity]);
			$('.State_1').val(sample[internalNumCity + 1]);
			$('#Zip_1').val(sample[internalNumCity + 2]);
			$('#PhNo_1').val(sample[internalNumCity + 3]);
			$('#Country_1, #Country_2').val(sample[internalNumCity + 4]);
			if(sample[internalNumCity + 6].search(/day/i) != -1){
				$('#Height').val(sample[internalNumCity + 8]);
				$('#Weight').val(sample[internalNumCity + 9]);
				$('#BG').val(sample[internalNumCity + 10]);
				getshipNum = internalNumCity + 10;
			} else {
				$('#Height').val(sample[internalNumCity + 7]);
				$('#Weight').val(sample[internalNumCity + 8]);
				$('#BG').val(sample[internalNumCity + 9]);
				getshipNum = internalNumCity + 9;
			}
		}
		if($(that).val() == 2){
			$(that).val(sample[internalNumCity] +" "+sample[internalNumCity + 1]);
			$('.State_1').val(sample[internalNumCity + 2]);
			$('#Zip_1').val(sample[internalNumCity + 3]);
			$('#PhNo_1').val(sample[internalNumCity + 4]);
			$('#Country_1, #Country_2').val(sample[internalNumCity + 5]);
			if(sample[internalNumCity + 7].search(/day/i) != -1){
				$('#Height').val(sample[internalNumCity + 9]);
				$('#Weight').val(sample[internalNumCity + 10]);
				$('#BG').val(sample[internalNumCity + 11]);
				getshipNum = internalNumCity + 11;
			} else {
				$('#Height').val(sample[internalNumCity + 8]);
				$('#Weight').val(sample[internalNumCity + 9]);
				$('#BG').val(sample[internalNumCity + 10]);
				getshipNum = internalNumCity + 10;
			}
		}else if($(that).val() == 3){
			$(that).val(sample[internalNumCity] +" "+sample[internalNumCity + 1] +" "+sample[internalNumCity + 2] );
			$('.State_1').val(sample[internalNumCity + 3]);
			$('#Zip_1').val(sample[internalNumCity + 4]);
			$('#PhNo_1').val(sample[internalNumCity + 5]);
			$('#Country_1, #Country_2').val(sample[internalNumCity + 6]);
			if(sample[internalNumCity + 8].search(/day/i) != -1){
				$('#Height').val(sample[internalNumCity + 10]);
				$('#Weight').val(sample[internalNumCity + 11]);
				$('#BG').val(sample[internalNumCity + 12]);
				getshipNum = internalNumCity + 12;
			} else {
				$('#Height').val(sample[internalNumCity + 9]);
				$('#Weight').val(sample[internalNumCity + 10]);
				$('#BG').val(sample[internalNumCity + 11]);
				getshipNum = internalNumCity + 11;
			}
		}
		callMissingField();
	}else if ($(that).hasClass('ShipName')){
		if($(that).val() == 1){
			$('#ShipName').val(sample[getshipNum + $('#BillName').length + 2]);
			getTotalAgain = parseInt(getshipNum) + parseInt($('#BillName').length)  + 3;
		}else if($(that).val() == 2){
			$('#ShipName').val(sample[getshipNum + $('#BillName').length + 2] +" "+sample[getshipNum + $('#BillName').length + 3]);
			
			getTotalAgain = parseInt(getshipNum) + parseInt($('#BillName').length)  + 4;
		}else if($(that).val() == 3){
			$('#ShipName').val(sample[getshipNum + $('#BillName').length + 2] +" "+sample[getshipNum + $('#BillName').length + 3]+" "+sample[getshipNum + $('#BillName').length + 4]);
			getTotalAgain = parseInt(getshipNum) + parseInt($('#BillName').length)  + 5;
		}else if($(that).val() == 4){
			$('#ShipName').val(sample[getshipNum + $('#BillName').length + 2] +" "+sample[getshipNum + $('#BillName').length + 3] +" "+sample[getshipNum + $('#BillName').length + 4] +" "+sample[getshipNum + $('#BillName').length + 5]);
			getTotalAgain = parseInt(getshipNum) + parseInt($('#BillName').length) + 6;
		}
		callMissingField();
	} else if ($(that).hasClass('City_2')){
		if($(that).val() == 1){
			$('#City_2').val(sample[getTotalAgain]);
			$('#State_2').val(sample[getTotalAgain + 1]);
			$('#Zip_2').val(sample[getTotalAgain + 2]);
			$('#Country_2').val(sample[getTotalAgain + 3]);
			$('#PhNo_2').val(sample[getTotalAgain + 4]);
			getPolicynum = getTotalAgain + 4 + 5 + 1;
			$('#policyNo').val(sample[getPolicynum]);
		}else if($(that).val() == 2){
			$('#City_2').val(sample[getTotalAgain] + " "+ sample[getTotalAgain + 1]);
			$('#State_2').val(sample[getTotalAgain + 2]);
			$('#Zip_2').val(sample[getTotalAgain + 3]);
			$('#Country_2').val(sample[getTotalAgain + 4]);
			$('#PhNo_2').val(sample[getTotalAgain + 5]);
			getPolicynum = getTotalAgain + 5 + 5 + 1;
			$('#policyNo').val(sample[getPolicynum]);
		}else if($(that).val() == 3){
			$('#City_2').val(sample[getTotalAgain] + " "+ sample[getTotalAgain + 1] +" "+sample[getTotalAgain + 2]);
			$('#State_2').val(sample[getTotalAgain + 3]);
			$('#Zip_2').val(sample[getTotalAgain + 4]);
			$('#Country_2').val(sample[getTotalAgain + 6]);
			$('#PhNo_2').val(sample[getTotalAgain + 7]);
			getPolicynum = getTotalAgain + 7 + 5 + 1;
			$('#policyNo').val(sample[getPolicynum]);
		}
		callMissingField();
	} else if ($(that).hasClass('STM')){
		if ($('#ShipName').val() == 2){
			getSTM = getPolicynum + $('#D_B_Life').val().split(' ').filter(function(v){return v!==''}).length + $('#Name_P').val().split(' ').filter(function(v){return v!==''}).length + 1;
		}else if ($('#ShipName').val() == 3){
			getSTM = getPolicynum + $('#D_B_Life').val().split(' ').filter(function(v){return v!==''}).length + $('#Name_P').val().split(' ').filter(function(v){return v!==''}).length +  4;
		}else if ($('#ShipName').val() == 1){
			getSTM = getPolicynum + $('#D_B_Life').val().split(' ').filter(function(v){return v!==''}).length + $('#Name_P').val().split(' ').filter(function(v){return v!==''}).length +  3;
		} else{
			getSTM = getPolicynum + $('#D_B_Life').val().split(' ').filter(function(v){return v!==''}).length + $('#Name_P').val().split(' ').filter(function(v){return v!==''}).length +  2;
		}
		if($(that).val() == 2){
			$('#STM').val(sample[getSTM] +" "+ sample[getSTM + 1]);
			$('#STM_Code').val(sample[getSTM + 2])
		}else if($(that).val() == 3){
			$('#STM').val(sample[getSTM] +" "+ sample[getSTM + 1] + " "+sample[getSTM + 2]);
			$('#STM_Code').val(sample[getSTM + 3]);
		}else if($(that).val() == 1){
			$('#STM').val(sample[getSTM]);
			$('#STM_Code').val(sample[getSTM + 1])
		}
		callMissingField();
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
            //var dataArray = Array.from(msg);
            var dataText = msg.split(" ");
            //var dataArray = Array.from(msg);
			sample = dataText.filter(function(dataText) {
				return /\S/.test(dataText);
			});
            console.log('This is the data', sample);
            $('#recordNo').val(sample[0]);
            var length =  parseInt(sample.length-1);
            console.log(length);
            $('#TA').val(sample[length-0]);
            $('#ShipCost').val(sample[length-1]);
            $('#Cost').val(sample[length-2]);
            $('#pillRate').val(sample[length-3]);
            $('#Tablets').val(sample[length-4]);
            $('#Dosage').val(sample[length-6] +' '+sample[length-5]);
            $('#Medicine').val(sample[length-7]);
            var array =[];
            var  sometext = false;
            var getNextItem;
            var text = '';
            var BGPattern = ["O+,A+,A-,AB+,AB-,O-,B+,B-"];
            var myRegExp = new RegExp;
            myRegExp.Pattern = "^(?:Yes|No)$";
            $.each(sample, function(i,val){
              if(sample[i].search("@")!= -1 ){
                $('#email').val(sample[i].toLowerCase());
              } 
              
               if(sample[i].search("BaX")!= -1){
                  if(sample[i].search(/BaX_Ol/i)!= -1  ){
                      var sampletext =sample[i].replaceAt(4,'01');
                      $('#STM_Code').val(sampletext);
                  } else if(sample[i].search(/BaXOl/i)!= -1){
                      var sampletext =sample[i].replaceAt(3,'_01');
                      $('#STM_Code').val(sampletext);
                  }
              } 
               if(sample[i].search("Gz")!= -1 || sample[i].search("Yt_")!= -1 || sample[i].search("yWzX_")!= -1){
                $('#policyNo').val(sample[i]);
              } 
              if(sample[i].search(/day/i) != -1 ){
                  text = sample[i];
              }
                if(sample[i].search(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/) != -1){
                    console.log('I am in')
                       if(text.search(/day/i) != -1){
                           var getDtae = sample[i];
                           $('#D_Birth,.commonD_Birth').val(text+ " "+getDtae);
                           if(sample[i+1].search(/.00/) !=-1){
                                $('#P_Inst').val(sample[i+1]);
                               
                           }
                           
                       } else {
                           console.log('In false',sample[i]);
                           $('#D_Birth,.commonD_Birth').val(sample[i]);
                           if(sample[i+1].search(/.00/) !=-1){
                                $('#P_Inst').val(sample[i+1]);
                           }
                           
                       }
              }
               if(sample[i] == "A+" || sample[i] == "A-" || sample[i] == "O+" || sample[i] == "O-" || sample[i] == "AB+" || sample[i] == "AB-" || sample[i] == "B+" || sample[i] == "B-"){
                     $('#BG').val(sample[i]);
              }
              if(sample[i].search(/male/i) !=-1){
                     $('#Sex_1,#Sex_2').val(sample[i]);
              }
              if(sample[i] == "YES" || sample[i] == "yes" || sample[i] == "no" || sample[i] == "NO"){
                  array.push(sample[i]);
                  console.log(array)
              }
              if(sample[i].search(/other/i)!=-1 || sample[i].search(/american/i)!=-1 || sample[i].search(/Discover/i) !=-1 || sample[i].search(/retail/i)!=-1 || sample[i].search(/bank/i) !=-1 || sample[i].search(/card/i) !=-1 || sample[i].search(/visa/i) !=-1 || sample[i].search(/gas/i) !=-1){
                $('#CN').val(sample[i]);
              }
            })
            $.each(array, function(i){
                $.each($('.commonAddicts'),function(i){
                    $(this).val(array[i])
                })
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

function callMissingField(){
	$.each($('.MI input'), function(){
		if ($(this).val() == 'N.A'){
			$(this).addClass('yellow');
		} else{
			$(this).removeClass('yellow');
		}
	});	
}

loadXMLDoc = function () {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "DataM.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="";
  var x = xmlDoc.getElementsByTagName("DataM");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("RecordNo")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("CustomerName")[0].childNodes[0].nodeValue +
    "</td><td>" + 
    x[i].getElementsByTagName("EmailAddress")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ResAddress")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("City_1")[0].childNodes[0].nodeValue +
    "</td><td>" + 
    x[i].getElementsByTagName("State_1")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Zip_1")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("PhNo_1")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Country_1")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Sex_1")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("D_Birth")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Height")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Weight")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Blood_Group")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("BillingName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ShipperName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("City_2")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("State_2")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Zip_2")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Country_2")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("PhNo_2")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Alcoholic")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Smoker")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("PastSug")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Diabetic")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Allergiesd")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("PloicyNo")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("D_B_Life_Assure")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("P_Inst")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Name_P_Holder")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("STM_Name")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("STM_Code")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("DOB")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Sex_2")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("CardName")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Medicine")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Dosage")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Tablets")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("PillRate")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Cost")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("ShippingCost")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("TotalAmount")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("Remarks")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
$(document).on('click','#demo tr td',function(){
  var ele = $(this).parent().children();
  
      i=1;
  $.each(ele, function(i){
      var getDataEle =ele[i];
      var getEle = $('.MI input')[i];
      $(getEle).val($(getDataEle).html());
  })
})
    
$('#updateXML').on('click', function(e){
    e.preventDefault();
    $.get("js/readxml.php");
})
});
