## Bypassing SSL validation

This only applies to computers behind Hanover's virutal network, where additional security measures have been implemented. Your home computer will not face SSL certificate issues.

- conda install: disable conda SSL verification so you can use 'conda install' without SSL errors
  <pre><code class="command-line">conda config --set ssl_verify false</code></pre>
- pip install:
  - Add trusted websites to your personal pip configuration file (~/.config/pip/pip.conf)
  <pre><code class="command-line">
    pip config set global.trusted-host \
    "pypi.org files.pythonhosted.org pypi.python.org" \
    --trusted-host=pypi.python.org \
    --trusted-host=pypi.org \
    --trusted-host=files.pythonhosted.org
  </code></pre>
  - Download package tar ball. For example, https://github.com/explosion/spacy-models/releases/tag/en_core_web_lg-3.6.0, via a browser in remote desktop or curl/wget 
  - Install the package using pip
  <pre><code class="command-line">pip install ~/Downloads/xxxx.tar.gz</code></pre>
  
  
