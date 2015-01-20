ASU Primer Skeletal Project
======

Primer [project website](http://www.public.asu.edu/~kvanlehn/primer) includes description and aim of the project.

## Primer Install ##

This document contains instructions for setting Primer Skeletal Project on Windows and Mac environment.

Install latest version of [Google Chrome](http://www.google.com/chrome) on Mac/Windows machine
Install latest version of [Git](http://git-scm.com/downloads) on Mac/Windows machine

### Steps on Mac ###
	
	Apache comes pre-installed on latest MAC OS, To enable apache , Run following command on terminal

		sudo apachectl start

	You can check status of apache server running by opening url <http://localhost> in browser, it should say "it works" 

	Default Document Root for hosting web content can be found at following location 

		'/Library/WebServer/Documents/'

	Run following command on terminal to change the directory location

		cd /Library/WebServer/Documents/ 

	Clone the github repository into above location by following commands

		sudo git clone https://github.com/pradeephrish/primer.git

	This will clone primer project content into /Library/WebServer/Documents/primer location

	Now, You can run primer project by opening url <http://localhost/primer> in browser. Once you visit the link, wait for Ready Pop up message. Click Ok. Then you can start by saying "Tell me a Story"

### Steps on Windows ###
	
	Download & Install latest version of XAMMP for Windows from <https://www.apachefriends.org/index.html>

	Web Root directory of XAMMP can be found at XAMMP Home Directory (in default case: C:/Xammp/htdocs)

	From windows command line goto Web Root directory C:/xammp/htdocs

		cd  <XAMMP INstallation>/xammp/htdocs/

	Clone the github repository into above location by following commands

		sudo git clone https://github.com/pradeephrish/primer.git

	From XAMMP Control Panel Restart the Apache Web Server

	Now, You can run primer project by opening url <http://localhost/primer> in browser. Once you visit the link, wait for Ready Pop up message. Click Ok. Then you can start by saying "Tell me a Story"



	 