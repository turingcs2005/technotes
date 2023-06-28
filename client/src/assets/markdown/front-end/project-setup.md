# Project Setup
- Basic Angular CLI (ng) operations
	- create new project
	- add material library
	- add top-level components
	- add services
	- add feature modules (lazy-loaded)
	- serve front end
	- build project

- Angular CLI commands
	<pre class="command-line"><code> ng new PROJECT_NAME
	ng add @angular/material
	ng g c components COMPONENT_NAME 
	ng g s services/SERVICE_NAME
	ng g m modules/MODULE_NAME --route=ROUTE_PATH --module=PARENT_MODULE
	ng serve --port=PORT_NUMBER -c=CONFIGURATION
	ng build --output-path=OUTPUT_PATH -c=CONFIGURATON</code></pre>
	<br>

	Below are conventions on environment configuration.
- Three configurations in angular.json:
	- development
	- UAT (user acceptance test)
	- production

	<br>
	
- Environment files for each config:
	- environment.dev.ts
	- environment.uat.ts
	- environment.prod.ts