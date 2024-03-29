function onFormSubmit() {
  
  var form = FormApp.openById('รหัส IDฟอร์ม');
  var fRes = form.getResponses();
  var formResponse = fRes[fRes.length - 1];
  var itemResponses = formResponse.getItemResponses();

  var msg = '**มีรายการลงทะเบียน**'
    + ' \n' + 'E-Mail ผู้ขอใช้' + ': ' + itemResponses[0].getResponse()
    + ' \n' + 'ชื่อ-สกุล ผู้ขอใช้' + ': ' + itemResponses[1].getResponse()
    + ' \n' + 'สถานะผู้ขอใช้' + ': ' + itemResponses[2].getResponse()
    + ' \n' + 'รหัสผู้ขอใช้' + ': ' + itemResponses[3].getResponse()
    + ' \n' + 'คณะ' + ': ' + itemResponses[4].getResponse()
    + ' \n' + 'เบอร์โทร' + ': ' + itemResponses[6].getResponse()

    sendLineNotify(msg);
}

function sendLineNotify(message) {
  var token = ['TOKEN Line Notify'];
  var options = {
    "method": "post",
    "payload": "message=" + message,
    "headers": {
      "Authorization": "Bearer " + token
    },
    'contentType': 'application/x-www-form-urlencoded',
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
