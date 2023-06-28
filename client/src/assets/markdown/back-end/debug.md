# Back End Debugging Tips

---

<b style="color:red">Update 9/20/22
The original guide requires additional networking steps to enable Kudu on the App Service, which is a work in progress. If you need to view the logs, you can:</b>

- View the log stream (must hit refresh to see latest traffic)
	- Go to your App service / Deployment Center -> Logs 

or

- Download logs via FTPS (FileZilla)
	- Requires FileZilla (can be requested through Technology place -> Software Request, then download from software center once ticket is closed)

	- If you need the logs for the current day, you'll need to stop the app service first


		1. Stop your App Service (if needed)
		2. Go to Deployment Center -> FTPS Credentials
		3. Copy the FTPS endpoint, Username and Password
		4. Open FileZilla
		5. Near the top of the window, enter the Host (FTPS endpoint), Username and Password - leave port blank
		6. On right panel, select logFiles
		7. Drag and drop the files to the left panel / your machine
		8. Restart App Service (if needed)

---

---
- Azure Log Stream
	If you want to monitor API logs in real time:
	1. Go to your Azure App Service
	2. On the left side menu, navigate to Log Stream under the Monitoring Section. This will show you a real time view of web traffic and any console.log statements.
- App Service Logs
	If you want to capture API logs from a previous point in time:
	(Note: you will need to configure the App Service Logs before it will begin capturing any log files)
	- Enable Azure App Service Logging
		1. Go to your Azure App Service
		2. On the left side menu, navigate to App Service Logs under the Monitoring section
		3. Under Application Logging, select File System
		4. Keep the Quota as 35MB
		5. Enter 7 days as the default Retention Period
	- View Docker LogFiles in your App Service's Kudu page
		1. Go to your Azure App Service
		2. On the left sice menu, navigate to Advanced Tools under the Development Tools Section and click Go. This should navigate you to a Kudo page for your App Service
		3. On the top Menu, click Bash <br>
			(You can also view the Log Stream from this page if you want to watch the real time traffic)
		4. From here, you can 
			<pre class="command-line">
			cd LogFiles
			ls<code></code></pre>
			to view the list of files
		5. Use
			<pre class="command-line">cat LOGFILE_NAME<code></code></pre>
			to print the contents of the log file.