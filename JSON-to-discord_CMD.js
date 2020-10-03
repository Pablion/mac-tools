// this file is a complement for Calendar -> (DisCal) discord-bot
Data=IMPORT_JSON_FILE_HERE // IMPORT_JSON_FILE_HERE

function convertTime(timeStr) {
  let time = new Date(timeStr)
  while (time<Date.now()) {
    time.setDate(time.getDate()+7)
  }
  time.setHours(time.getHours()+2)
  splited = time.toISOString().split('T')
  dat = splited[0].replace('-', '/').replace('-', '/')
  tim = splited[1].split('.000Z')[0]
  return `${dat}-${tim}`
}



function addEvent(eventObj) {
  let e = eventObj;
  cmd = `
!event create ${e.Title}
!event summary ${e.Title}
!event description ${e.Title}
!event start ${convertTime(e["Given planned earliest start"])}
!event end ${convertTime(e["Given planned earliest end"])}
!event recur TRUE
!event freq WEEKLY
!event interval 1
!event count -1
!event confirm
  `
  return cmd
}

//test
// o=convertTime(data[0]["Given planned earliest start"])
// console.log('o : ',o);


// output
allcmd=``;
for (var a of data){
  let cmd = addEvent(a);
  allcmd=allcmd.concat(cmd);
}


console.log('allcmd : ',allcmd);
