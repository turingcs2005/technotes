# Docker Notes
### Checking Linux Kernel Version and Linux Distro
<pre class="command-line"><code>uname -a</code></pre>
<pre class="command-line"><code>cat /etc/os-release</code></pre>
___

### Docker Deployment vs. PM2 Deployment
- Docker image is often 1GB+ while PM2 deployment takes just a couple MB of compiled source code
- Docker image provides all required software (C++ compiler, node.js, package manager, etc.) and depends only on Linux kernel; PM2 requires the hosting environment to provide the correct version of software (e.g. node.js with pm2 package installed)
- PM2 serves only node.js apps; PM2 loadbalancer works on only node.js apps
___

### Docker Artifacts
- image: frozen, immutable blueprint for creating docker containers
- container: an image in running state (live)
	- remains in your system after execution finishes
	- mutable (a container layer lives on top of an image layer)
	- multiple containers off the same image will each have its own container layer
- registry: a repository of docker images. Docker Hub provides many free base images
___

### Basic Docker Commands
Docker commands are interpreted by Docker CLI, a command line tool that allows you to talk to docker daemon via REST APIs.
Basic syntax:<br>
<code>docker OBJECT COMMAND [OPTIONS] [TARGET]</code>
- Create a container
<pre class="command-line"><code>docker container create --name CONTAINER_NAME IMAGE_NAME</code></pre>
- Stop a running container
<pre class="command-line"><code>docker container stop CONTAINER_NAME</code></pre>
- Run a container
<pre class="command-line"><code>docker container start CONTAINER_NAME</code></pre>
- Pull a docker image from docker registry (e.g. Docker Hub)
<pre class="command-line"><code>docker image pull IMAGE_NAME</code></pre>
- Create and run a docker container in detached mode (no terminal window)
<pre class="command-line"><code>docker container run -d IMAGE_NAME</code></pre>
	- container run = container create + container start
	- a default container name will be supplied
- Create and run a docker container in interactive mode (with terminal window)
<pre class="command-line"><code>docker container run -it IMAGE_NAME</code></pre>
- Display docker images
<pre class="command-line"><code>docker image ls</code></pre>
- Stop a running container (if it is running) and restart it
<pre class="command-line"><code>docker container restart CONTAINER_NAME</code></pre>
	- container restart = container stop + container start
- Remove a container/image
<pre class="command-line"><code>docker container rm CONTAINER_NAME</code></pre>
<pre class="command-line"><code>docker image rm IMAGE_NAME</code></pre>
	- Before a docker image can be removed, all containers based off this image need to be removed first.
- Inspect the contents of a running docker container
<pre class="command-line"><code>docker exec -it CONTAINER_NAME /bin/sh</code></pre>
- Inspect the contents of a stopped docker container
<pre class="command-line"><code>docker container create --name CONTAINER_NAME IMAGE_NAME</code></pre>
<pre class="command-line"><code>docker container export CONTAINER_NAME > file.tar</code></pre>
	- The output .tar file can be inspected