## 🏠 Setting up Python development environment using Windows & JupyterLab

1. Download and install Miniconda
2. (optional) Place anaconda prompt to your desktop or taskbar for quick access
3. Right-click to run anaconda prompt as administrator
4. Install JupyterLab <pre class="command-line"><code>conda install -c conda-forge jupyterlab</code></pre>
5. Set up default directory
   1. Launch anaconda prompt and create a configuration file <pre class="command-line"><code>jupyter server --generate-config</code></pre>
   2. You will find a new file <mark>jupyter_server_config.py</mark> under your Users/XXXX/.jupyter directory (e.g. C:\Users\ruiwa\.jupyter\jupyter_server_config.py)
   (Make sure hidden files and folders are displayed or you won't see directory .jupyter)
   3. Search for a line 'c.ServerApp.root_dir='.
   4. Uncomment the line by removing # and replace it with <mark>c.ServerApp.root_dir = "C:/Users/XXXX/Code/Python"</mark> or whatever directory you prefer
   5. Please note:
      1. double quotation marks
      2. use slash, not backslash, even on Windows machine
      3. the last directory (Python) does not have a trailing slash (.../Python, not .../Python/)
6. Launch JupyterLab by typing 'jupyter lab' on anaconda terminal.