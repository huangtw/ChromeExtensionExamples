var notification = webkitNotifications.createNotification(
	'notification.png',
	'Test',
	'Desktop Notification'
);

notification.show();
setTimeout(function (){
	notification.cancel()
}, 2000);