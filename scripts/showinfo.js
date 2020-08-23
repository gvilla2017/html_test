function showinfo(str) {


        DC = document.getElementById('Datacenter');
        VC = document.getElementById('vcenter_servers');
        CL = document.getElementById('Cluster');
        GS = document.getElementById('guestname');

        DCVAR="ALL"


        if ((DC.value.length == 0)||(DC.value == "")) {
           DCVAR = "ALL"
        }
        else {
           DCVAR = DC.value
        }

        interm = str.concat(":")
        res = interm.concat(DCVAR)
        interm2 = res.concat(":")
        res1 = interm2.concat(VC.value)

//        if ((CL.value.length == 0)||(CL.value == "")) {
//           CLVAR = ""
//        }
//        else {
//           CLVAR = CL.value
//        }
//
//        res2 = res1.concat(":")
//        res3 = res2.concat(CLVAR)

        if ((str == "DS") || (str == "PG") || (str == "VM")) {
           res2 = res1.concat(":")
           res3 = res2.concat(CL.value)
        }
        else {
           res2 = res1.concat(":")
           res3 = res2.concat("")
        }


//var d = document.createDocumentFragment();
//for(var i = 1; i <= 10 ; i++){
//    var element = document.createElement("input");
//    element.type  = "button";
//    element.value = 'button' + i;
//    d.appendChild(element);
//}
//document.body.appendChild(d);


//let xhr = new XMLHttpRequest();
//xhr.open('get', 'http://172.25.32.92:9800/Pshowinfo/'+res3);
//xhr.send();

//var d = document.createDocumentFragment();
//xhr.onload = function() {
//    console.log(xhr.response);
//    document.body.innerHTML = document.body.innerHTML + xhr.response +"<br>";
//}


           var w = window.open("http://172.25.32.92:9800/Pshowinfo/"+res3, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=800");

}


function show_documentation() {
           var w = window.open("http://172.25.32.92/MVW-PROVISIONING/pdf/mvw_linux_provisioning.pdf", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=800");
}

