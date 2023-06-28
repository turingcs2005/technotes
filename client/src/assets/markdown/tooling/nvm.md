# Node Version Manager

nvm allows a user to manage multiple local node.js environment under user account.

- Use a specific version of local node.js environment, e.g. 16
<pre class="command-line"><code>nvm use VERSION_NUMBER</code></pre>
- Switch to global node.js environment
<pre class="command-line"><code>nvm deactivate</code></pre>
- List all installed local node.js environments
<pre class="command-line"><code>nvm list</code></pre>
- Install a specific version of node.js
<pre class="command-line"><code>nvm install VERSION_NUMBER</code></pre>
- Create an alias 'default' for a specific version, e.g. 16.14.0
<pre class="command-line"><code>nvm alias default VERSION_NUMBER</code></pre>
- Create node.js VERSION_NEW environment and install npm packages based off an already installed VERSION_OLD environment, so you do not have to reinstalled all the global npm packages after creating a new node.js environment.
<pre class="command-line"><code>nvm install VERSION_NEW --reinstall-packages-from=VERSION_OLD</code></pre>
- Uninstall a node.js environment
<pre class="command-line"><code>nvm uninstall VERSION_NUMBER</code></pre>
- Install global npm packages. You do not need sudo as all nvm environments are local.
<pre class="command-line"><code>nvm i -g PACKAGE_NAME</code></pre>
- Check current node.js version
<pre class="command-line"><code>node -v</code></pre>
- Check current node.js installation
<pre class="command-line"><code>which node</code></pre>



