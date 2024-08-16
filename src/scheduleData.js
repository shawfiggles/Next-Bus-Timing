// scheduleData.js
const scheduleData = [
    { EGHQ: "0:10", TECOM1: "0:43", EGHQ_RETURN: "1:23" },
    { EGHQ: "0:30", TECOM1: "1:03", EGHQ_RETURN: "1:43" },
    { EGHQ: "0:50", TECOM1: "1:23", EGHQ_RETURN: "2:03" },
    { EGHQ: "1:10", TECOM1: "1:43", EGHQ_RETURN: "2:23" },
    { EGHQ: "1:30", TECOM1: "2:03", EGHQ_RETURN: "2:43" },
    { EGHQ: "1:50", TECOM1: "2:23", EGHQ_RETURN: "3:03" },
    { EGHQ: "2:10", TECOM1: "2:43", EGHQ_RETURN: "3:23" },
    { EGHQ: "2:30", TECOM1: "3:03", EGHQ_RETURN: "3:43" },
    { EGHQ: "2:50", TECOM1: "3:23", EGHQ_RETURN: "4:03" },
    { EGHQ: "3:15", TECOM1: "3:48", EGHQ_RETURN: "4:28" },
    { EGHQ: "3:40", TECOM1: "4:13", EGHQ_RETURN: "4:53" },
    { EGHQ: "4:00", TECOM1: "4:33", EGHQ_RETURN: "5:13" },
    { EGHQ: "4:20", TECOM1: "4:53", EGHQ_RETURN: "5:33" },
    { EGHQ: "4:40", TECOM1: "5:13", EGHQ_RETURN: "5:53" },
    { EGHQ: "5:00", TECOM1: "5:33", EGHQ_RETURN: "6:13" },
    { EGHQ: "5:20", TECOM1: "5:53", EGHQ_RETURN: "6:33" },
    { EGHQ: "5:40", TECOM1: "6:13", EGHQ_RETURN: "6:53" },
    { EGHQ: "6:00", TECOM1: "6:42", EGHQ_RETURN: "7:22" },
    { EGHQ: "6:20", TECOM1: "7:02", EGHQ_RETURN: "7:42" },
    { EGHQ: "6:40", TECOM1: "7:22", EGHQ_RETURN: "8:02" },
    { EGHQ: "7:00", TECOM1: "7:42", EGHQ_RETURN: "8:22" },
    { EGHQ: "7:20", TECOM1: "8:02", EGHQ_RETURN: "8:42" },
    { EGHQ: "7:40", TECOM1: "8:22", EGHQ_RETURN: "9:02" },
    { EGHQ: "8:00", TECOM1: "8:42", EGHQ_RETURN: "9:22" },
    { EGHQ: "8:20", TECOM1: "9:02", EGHQ_RETURN: "9:42" },
    { EGHQ: "8:40", TECOM1: "9:22", EGHQ_RETURN: "10:02" },
    { EGHQ: "9:05", TECOM1: "9:47", EGHQ_RETURN: "10:27" },
    { EGHQ: "9:30", TECOM1: "10:08", EGHQ_RETURN: "10:48" },
    { EGHQ: "9:55", TECOM1: "10:33", EGHQ_RETURN: "11:13" },
    { EGHQ: "10:15", TECOM1: "10:52", EGHQ_RETURN: "11:32" },
    { EGHQ: "10:35", TECOM1: "11:12", EGHQ_RETURN: "11:52" },
    { EGHQ: "10:55", TECOM1: "11:32", EGHQ_RETURN: "12:12" },
    { EGHQ: "11:15", TECOM1: "11:52", EGHQ_RETURN: "12:32" },
    { EGHQ: "11:35", TECOM1: "12:12", EGHQ_RETURN: "12:52" },
    { EGHQ: "11:55", TECOM1: "12:32", EGHQ_RETURN: "13:12" },
    { EGHQ: "12:15", TECOM1: "12:52", EGHQ_RETURN: "13:32" },
    { EGHQ: "12:35", TECOM1: "13:12", EGHQ_RETURN: "13:52" },
    { EGHQ: "12:55", TECOM1: "13:32", EGHQ_RETURN: "14:12" },
    { EGHQ: "13:15", TECOM1: "13:52", EGHQ_RETURN: "14:32" },
    { EGHQ: "13:35", TECOM1: "14:12", EGHQ_RETURN: "14:52" },
    { EGHQ: "13:55", TECOM1: "14:32", EGHQ_RETURN: "15:12" },
    { EGHQ: "14:15", TECOM1: "14:52", EGHQ_RETURN: "15:32" },
    { EGHQ: "14:35", TECOM1: "15:12", EGHQ_RETURN: "15:52" },
    { EGHQ: "15:00", TECOM1: "15:37", EGHQ_RETURN: "16:17" },
    { EGHQ: "15:20", TECOM1: "15:57", EGHQ_RETURN: "16:37" },
    { EGHQ: "15:45", TECOM1: "16:22", EGHQ_RETURN: "17:02" },
    { EGHQ: "16:05", TECOM1: "16:42", EGHQ_RETURN: "17:22" },
    { EGHQ: "16:30", TECOM1: "17:15", EGHQ_RETURN: "18:10" },
    { EGHQ: "16:55", TECOM1: "17:50", EGHQ_RETURN: "18:45" },
    { EGHQ: "17:20", TECOM1: "18:15", EGHQ_RETURN: "19:10" },
    { EGHQ: "17:45", TECOM1: "18:40", EGHQ_RETURN: "19:35" },
    { EGHQ: "18:10", TECOM1: "19:05", EGHQ_RETURN: "20:00" },
    { EGHQ: "18:35", TECOM1: "19:30", EGHQ_RETURN: "20:25" },
    { EGHQ: "19:00", TECOM1: "19:55", EGHQ_RETURN: "20:50" },
    { EGHQ: "19:25", TECOM1: "20:20", EGHQ_RETURN: "21:10" },
    { EGHQ: "19:50", TECOM1: "20:45", EGHQ_RETURN: "21:30" },
    { EGHQ: "20:15", TECOM1: "21:07", EGHQ_RETURN: "21:52" },
    { EGHQ: "20:40", TECOM1: "21:32", EGHQ_RETURN: "22:12" },
    { EGHQ: "21:05", TECOM1: "21:57", EGHQ_RETURN: "22:37" },
    { EGHQ: "21:30", TECOM1: "22:15", EGHQ_RETURN: "22:55" },
    { EGHQ: "21:55", TECOM1: "22:38", EGHQ_RETURN: "23:18" },
    { EGHQ: "22:20", TECOM1: "23:03", EGHQ_RETURN: "23:43" },
    { EGHQ: "22:45", TECOM1: "23:28", EGHQ_RETURN: "0:08" },
    { EGHQ: "23:10", TECOM1: "23:53", EGHQ_RETURN: "0:33" },
    { EGHQ: "23:40", TECOM1: "0:23", EGHQ_RETURN: "1:03" },  
  ];

  export default scheduleData;