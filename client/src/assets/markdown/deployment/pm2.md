# Deploy an App using pm2 Package 
- Create your back end app and front end app
- Choose a port for your app in your /server/bin/www
	```javascript
	/* choose a port */
	port = normalizePort(process.env.PORT || YOUR_PORT)
	```
- Open up your server firewall to allow traffic through that port
<pre class="command-line">sudo ufw allow YOUR_PORT<code></code></pre>
- Compile your front end app to a directory that is served by your back end, e.g. /server/dist/
- Serve your front end. In your app.js file, add code below before error handler but after all other API routes:

	```javascript
	/* serve your app */
	app.use(express.static(path.join(__dirname, 'dist')));
	app.all('/*', (req, res, next) => {
			res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
	});
	```
- Create a bash file, e.g. pm2.sh and make it executable
<pre class="command-line"><code>sudo chmod +x pm2.sh</code></pre>
- Write code to your executable:
<pre><code> #!/bin/bash
	# pm2 delete all    -- only if you want to stop all services
	cd YOUR_PROJECT_SERVER_DIRECTORY
	pm2 start ./bin/www --name "YOUR_APP_NAME" --watch
</code></pre>
- You can serve as many apps as you want by adding more code to your pm2.sh file. Optionally, you may edit crontab to schedule a task, so your apps will be served upon server reboot.
<pre><code>crontab -e</code></pre>	
Add the following to crontab file:
<pre><code>@reboot PATH_TO_PM2_BASH/pm2.sh</code></pre>