# Visual Studio Code Extensions
- Remote SSH: to connect to a remote server
	1. Generate your ssh key pair if you haven't done it yet
	<pre class="command-line"><code>ssh-keygen -t rsa -b 2048</code></pre>
	2. Copy your public key to the remote server. For Windows &rarr; Linux, you may use either
	- WinSCP (GUI)
	- PowerShell command
	<pre class="command-line"><code>scp id_rsa.pub USER_NAME@SERVER_NAME:~</code></pre>
	3. On Linux, rename your public key file to *authorized_keys* and change its permission to 644
	4. Move *authorized_keys* to your .ssh directory (~/.shh)
	5. On your client device (laptop), create SSH config file
		```
		Host LinuxVM (or whatever server name you prefer)
			HostName server_name
			User user_name
			IdentityFile C:\Users\user_name\.ssh\id_rsa
		```
- Angular extensions
	- Angular Language Service
	- Angular Snippets
	- Angular Schematics
- Database extensions
	- MongoDB for VS Code
	- SQL Server (for MS SQL)
	- PostgreSQL
- Miscellaneous
	- Emoji Snippets
	- Material Icon Theme
	- Markdown All in One (for markdown)
	- Markdown Preview Mermaid Support (for charting in markdown)
	- REST Client (for API test in Visual Studio Code, replacing Postman)
	- Docker (for docker deployment)
	- drawio (for Microsoft Visio style charting)
	- Vim (if you use Vim editor. Check out tooling/vim for details)


