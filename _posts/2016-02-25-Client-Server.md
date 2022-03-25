---
layout: inner
position: left
title: 'Client Server Model'
date: 2022-03-17 20:02:00
categories: Individual-Project Terminal-Program
tags: C++ C Makefile
featured_image: '/img/posts/07-Client-Server-Program.png'
project_link: 'https://github.com/jawniss/CMPUT379-Assign-3'
button_icon: 'github'
button_text: 'Source code'
lead_text: "This program expands on the producer-consumer problem by connecting the producer and consumer via stream sockets. This was done by implementing a simple client-server model application that used a specified port number and IP address to connect the running server with any live clients. AF_INET6 stream sockets were used, which allowed both IPv4 and IPv6 nodes. After connecting, the server and all clients used a shared buffer, of which the server would receive the data and clients would be writing to it. Mutual exclusion locks were used for all transactions to ensure no duplication of data. A summary of all work and transactions are logged into log files within the project's directory."
---
