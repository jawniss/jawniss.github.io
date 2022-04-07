---
layout: inner
position: left
title: 'Client Server Model'
date: 2022-01-09 00:00:00
categories: Individual-Project Terminal-Program
tags: C++ C Makefile
featured_image: '/img/posts/09-Client-Server-Model.png'
project_link: 'https://github.com/jawniss/CMPUT379-Assign-3'
button_icon: 'github'
button_text: 'Source code'
lead_text: "This program expands on the producer-consumer problem by connecting the producer and consumer via stream sockets. This is done by implementing a simple client-server model application that uses a specified port number and IP address to connect the running server with any live clients. AF_INET6 stream sockets are used, which allowed both IPv4 and IPv6 nodes. After connecting, the server and all clients use a shared buffer, of which the server receives the data the clients are writing to it. Mutual exclusion locks are used for all transactions to ensure no duplication of data. A summary of all work done and transactions are logged into log files within the project's directory."
---
