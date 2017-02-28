#This is pseudo-code that needs to be tested.
#Make sure you install Python-Firebase https://pypi.python.org/pypi/python-firebase/1.2
#To install packages on Pi3, https://www.raspberrypi.org/documentation/linux/software/python.md
#Install Requests Packages ($ sudo pip install requests==1.1.0 $ sudo pip install python-firebase)
from firebase import firebase
firebase = firebase.FirebaseApplication('https://the-button-5c411.firebaseio.com/', None)
result = firebase.get('Btn', None) #specifying the 2nd argument lets you be more specific in pathways. The first argument is specifying path /Btn.json while the second one can specifiy things like /Btn/Btn1.json
print result