var os = require('os');

function timeFormating() {

	var second;
	var minute;
	var hour;
	var totalTime;
	var time;
	totaltime = os.uptime();
	hour = totalTime / 3600;
	minute = (totalTime % 3600) / 60;
	second = (totalTime % 3600) % 60;
	time = Math.round(hour,0) + 'h ' + Math.round(minute,0) + 'min ' + second + 'sec';
	console.log(time);
};

exports.print = timeFormating;


