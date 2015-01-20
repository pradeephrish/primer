ASU Primer Skeletal Project
======

Primer [project website](http://www.public.asu.edu/~kvanlehn/primer) includes description and aim of the project.

## Primer Install ##

This document contains instructions for setting Primer Skeletal Project on Windows and Mac environment

	Install latest version of [Google Chrome](http://www.google.com/chrome) on Mac/Windows machine

Since current version of project uses javascript and html, we prefer to use simple Apache Web Server for running the project. But you can install any other tools to run web project.

### Steps on Mac ###
	
	Install Git for Mac  from (this link)[http://git-scm.com/download/mac]
	
	Apache comes pre-installed on latest MAC OS, To enable apache , Run following command on terminal


		sudo apachectl start

	You can check status of apache server running by opening url 'http://localhost' in browser, it should say "it works" 

	Default Document Root for hosting web content can be found at following location 

		/Library/WebServer/Documents/

	You can clone the github repository into above location by following command

		sudo git clone https://github.com/pradeephrish/primer.git

	This will clone primer project content into /Library/WebServer/Documents/primer location

	Now, You can run primer project by opening url 'http://localhost/primer/' in browser. Once you visit the link, wait for Ready Pop up message. Click Ok. Then you can start by saying "Tell me a Story"

### Steps on Windows ###
	
	Install Git for Windows from (this link)[http://git-scm.com/download/win]

	 