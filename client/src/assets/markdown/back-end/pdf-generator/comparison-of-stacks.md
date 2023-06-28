There are two different approaches to generating PDF documents on the back end:
- html + puppeteer: almost identical to generating PDF on the front end, except that an open-source browser (Chromium) is installed on the server side and print to PDF is invoked via an API call instead of a button click on UI.
- LaTeX + nunjucks: bypassing html as an intermediate format to build PDF directly in LaTeX.

Each approach has its pros and cons:
- html + puppeteer
  - pros:
    -  web app developers are already familiar with HTML and SCSS, so there is minimal additional learning
    -  data binding is native to pug template engine with support for iteration, conditional execution, etc.
  - cons:
    - requires substantially more server resources due to creating browser instances
    - HTML, SCSS and pug stack is designed for building web apps, which is an overkill for creating PDF document. The stack makes the process more complicated than necessary.
- LaTeX + nunjucks
  - pros:
    - simple stack with LaTeX tailored for building PDF documents
    - requires far less resource to run on a server as no browser intances are needed
  - cons:
    - data binding is not native and needs to be facilitated by nunjucks
    - requires addtional learning if developer is not already familiar with LaTeX syntax
