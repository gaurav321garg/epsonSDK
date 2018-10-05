// import domtoimage from 'dom-to-image';
//
//
// function capture(){
//     domtoimage.toPng(document.getElementById('root'))
//         .then(function (dataUrl) {
//             var img = new Image();
//             img.src = dataUrl;
//             document.body.appendChild(img);
//         })
//         .catch(function (error) {
//             console.error('oops, something went wrong!', error);
//         })
// }
//




function print() {
    var canvas = document.getElementById('myCanvas');
    var printer = null;
    var ePosDev = new epson.ePOSDevice();
    ePosDev.connect('192.168.0.110', 8008, cbConnect);
    function cbConnect(data) {
        if(data == 'OK') {
            ePosDev.createDevice('local_printer', ePosDev.DEVICE_TYPE_PRINTER, {'crypto' : true, 'buffer' : false}, cbCreateDevice_printer);
        } else {
            alert(data);
        }
    }
    function cbCreateDevice_printer(devobj, retcode) {
        if( retcode == 'OK' ) {
            printer = devobj;
            executeAddedCode();
        } else {
            alert(retcode);
        }
    }
    function executeAddedCode() {

        printer.brightness = 1.0;
        printer.halftone = printer.HALFTONE_DITHER;
        printer.addImage(canvas.getContext('2d'), 0, 0, canvas.width, canvas.height, printer.COLOR_1, printer.MODE_MONO);

        printer.send();
    }



}
//
// var ePosDev = new epson.ePOSDevice();
//
// function connect() {
//
//     var ipAddress = '192.168.0.110';
//     var port = '8008';
//     debugger;
//     ePosDev.connect(ipAddress, port, callback_connect)
// }
//
// function callback_connect(resultConnect) {
//
//     var deviceId = 'local_printer';
//     var options = {'crypto': false, 'buffer': false};
//     if ((resultConnect == 'OK') || (resultConnect == 'SSL_CONNECT_OK')) {
//         debugger;
//         ePosDev.createDevice(deviceId, ePosDev.DEVICE_TYPE_PRINTER, options, callback_createDevice);
//     }
//     else {
//     }
// }
//
// var printer = null;
//
// function callback_createDevice(deviceObj, errorCode) {
//     debugger;
//
//     if (deviceObj === null) {
// //Displays an error message if the system fails to retrieve the Printer object
//         return;
//     }
//     printer = deviceObj;
// //Registers the print complete event
// console.log(ePosDev.isConnected())
//     createData()
//     send()
//     printer.onreceive = function (response) {
//         if (response.success) {
//
// //Displays the successful print message
//         }
//         else {
// //Displays error messages
//         }
//     };
// }
//
// function createData() {
//
//     printer.addTextAlign(printer.ALIGN_CENTER);
//     printer.addText('Hello  to Veris')
//
// }
//
// function send() {
//     debugger
//     if (ePosDev.isConnected) {
//         printer.send();
//     }
// }
//
// ePosDev.deleteDevice(printer, callback_deleteDevice);
//
// function callback_deleteDevice(errorCode) {
// //Terminates connection with device
//     ePosDev.disconnect();
// }