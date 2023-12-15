# Deploy an App using pm2 Package

We assume you use TypeScript on your back end.

1. Create your back end app and front end app

2. Choose a port for your app (usually)

  - For the front end, base URL/port usually lives in your environment files
  - For the back end, base URL/port usually lives in .env file or app.mts file

3. Open up your server firewall to allow traffic through that port

<pre class="command-line">sudo ufw allow YOUR_PORT<code></code></pre>

4. Compile your front end app to a directory that is served by your back end, usually /server/angular

<pre class="command-line"><code>ng build --output-path='../server/angular -c=local'</code></pre> <br>

- You need the '--output-path' option to override Angular's default build path in angular.json file.

```json
"outputPath": "./dist/client",
```

We build our Agular app into directory '/server/angular' because we now use TypeScript on back end, and '/server/dist' (which used to house Angular code) now houses the compiled back end (JavaScript code).

- On your front end, you should have multiple environment files (dev, local, UAT, prod) and have configured multiple build environments in your angular.json file. Here I assume that you have a 'local' environment that uses Linux VM's port as the base URL.

5. Serve your front end from your back end's 'angular' directory. In your app.mts file, add code below:

```typescript
// 🅰️ serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular')});
});
```

6. Create a bash file or add to an existing bash file (often named 'pm2.sh') and make it executable if you haven't done so.

<pre class="command-line"><code>sudo chmod +x pm2.sh</code></pre>

Add code to your executable:
<pre><code> 
#!/bin/bash
# pm2 delete all    -- only if you want to stop all services
cd YOUR_PROJECT_SERVER_DIRECTORY
pm2 start XXX/app.mjs --name "YOUR_APP_NAME" --watch
</code></pre>

- You can serve as many apps as you want by adding more code to your pm2.sh file. 
- Optionally, you may edit crontab to schedule a task, so your apps will be served upon server reboot.
<pre><code>crontab -e</code></pre>
Add the following to crontab file:
<pre><code>@reboot PATH_TO_PM2_BASH/pm2.sh</code></pre>