---
title: 'Deploy static site to VPS'
pageIntro: 'An easy way to deploy files via the terminal with rsync to the server.'
shortDescription: 'An easy way to deploy files the via terminal with rsync to the server.'
metaTitle: ''
metaDesc: ''
tags: 'deployment'
layout: 'layouts/topic.html'
---

<p>This is an explanation on how to deploy static files to the server with one single terminal command. Their are two prerequisites, ssh into the server without a password and on local and the server <code>rsync</code> must be installed.</p>

<h2>1. Setup SSH</h2>

<p>To setup a ssh key pair the following must be done. Into the terminal enter:</p>

``` bash
$ ssh-keygen
```

<p>This creates a .ssh/id_rsa file (the ssh key). The generated key must be uploaded to the server.</p>

``` bash
$ ssh-copy-id -i ~/.ssh/id_rsa.pub {USER}@{DOMAIN}
```

<h2>2. Install rsync</h2>

<h3>Install rsync on a debian server</h3>

``` bash
$ sudo apt-get install rsync
```

<h3>Install rsync on a local machine (Linux)</h3>

<p>Mac OS ships with <code>rsync</code>. If you don't have it installed it can be done via Homebrew.</p>

``` bash
# Install homebrew
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# Install rsync
$ brew install rsync
```

<h2>3. Create deployment script</h2>

<p>Next we're going to create the deployment script that is executable via the terminal. Create a file called 'deploy' inside the root of your project directory. Below you can find the deploy example file to get you going.</p>

<p>In the example we're using Eleventy as the static site generator and upload the files from the dist/ folder. You can use this script with any static files or SSG (static site generator). Replace <code>npx eleventy build</code> with the build command of the SSG you are using.</p>

<p>Replace {USER}, {DOMAIN} and {DIR} with your credentials. And change dist/ to the folder where your production files are created.</p>

``` bash
#!/bin/sh
USER={USER}
HOST={DOMAIN}
DIR={/path/to/root/of/project}

npx eleventy build && rsync -avz --delete dist/ ${USER}@${HOST}:${DIR}

exit 0 
```

<em>Explanation of the <code>rsync</code> command, -a = all files, -v = verbose all files, -z = zip all files to make the transfer faster and --delete is inserted to delete all files from the server that were deleted locally.</em>

<p>After the creation of the deploy file we need to make it executable. Use the following command.</p>

``` bash
# Make the deploy script executable
$ chmod +x deploy
```

<h2>4. Deploy static website to the server</h2>

<p>The next and latest step is deploying your website or updates to the world. Only one command is needed and that is calling the create bash script.</p>

``` bash
# Execute the deploy script to deploy the files to the server
$ ./deploy
```

<p>Goodluck and have fun.</p>