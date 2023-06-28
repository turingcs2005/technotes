## 🐧 Setting up Python development environment using Linux & Visual Studio Code

### 1. Why Linux & VSC?
If you are a developer already familiar with Linux & Visual Studio Code (VSC), I strongly recommend that you use Linux and VSC as they offer the following advantages:
- Linux
  - Almost all open source Python packages are developed under Linux. You will unlikely run into compatibility issues.
  - Vastly superior command-line tool (bash).
- Visual Studio Code
  - Much more sophisticated text editior with loads of advanced features
    - Vim editor plugin
    - Emoji plugin
    - Rich markdown plugins
      - 🧜‍♀️ Mermaid plugin for charting
      - 💎 prismjs plugin for source code higlighting
      - KaTex plugin for math formulas
 
### 2. Setup
1. Download miniconda shell installer
2. Make shell installer executable: <pre class="command-line"><code>sudo chmod +x ./Miniconda-pyxxxx.sh</code></pre>
3. Run installer <pre class="command-line"><code>./Miniconda-pyxxxx.sh</code></pre>
   If you are on Hanover's VPN, you need to execute <pre class="command-line"><code>conda config --set ssl_verify false</code></pre>
1. Install VSC
2. Install 2 plugins
   1. Python
   2. Jupyter
3. Create a blank iPython notebook file <pre class="command-line"><code>touch ./test.ipynb</code></pre>
4. Open the blank iPython notebook file, select Python interpreter using a button at the upper-right corner
5. You will be prompted to install ipykernel package, after which you are good to go.
6. (optional) To turn off automatic base environment: <pre class="command-line"><code>conda config --set auto_activate_base false</code></pre>
7.  To activate any Python environment: <pre class="command-line"><code>conda activate XXXX</code></pre> (default to 'base')