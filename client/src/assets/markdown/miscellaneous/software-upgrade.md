# Software Upgrade

### 1. Angular Upgrade
- Every 6 months, a major version of Angular will be released. You should upgrade your front end to the latest stable version of Angular following the offical [Angular Upgrade Guide](https://update.angular.io/).
	- We may want to delay upgrade by 1 - 2 months to let other users use the new version first, so the Angular team will receive feedbacks and fix bugs.
	- Avoid delaying upgrade. Our Node.js development environment will be upgraded over time. Your Angular upgrade may not work after your have upgraded your Node.js environemnt.
- Make sure that all packages used on the front end are compatible with the new version of Angular. (e.g. Mermaid, Prism.js, Katex)

### 2. Node.js Upgrade
- We will upgrade to a new version of Node.js after a stable release (even-numbered versions such as Node.js 18)
- Make sure that all npm packages used on the back end are compatible with the new verson of Node.js.
- Remember to update your docker build if a new Node.js version is used (e.g. Alpine Node.js 16 &rarr; Alpine Node.js 18).

### 3. NPM Package Upgrade (both front end and back end)
- Run 'npm-check-updates' on either the front end root directory or the back end root directory
- Run 'ncu -u' to update your package.json file.
- Edit your package.json file as need arises. For example, a newer version of a package introduces breaking changes. You may want to edit it back to the previous version.
- Run 'npm i' to install new packages.