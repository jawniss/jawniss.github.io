---
layout: contactmelayout
title: Contact me
permalink: /contactme/
---

<!-- <!DOCTYPE html> -->
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  <!-- border: 1px solid #ccc; -->
  <!-- border-left: solid 1px #cedfea; -->
  border-right: solid 1px #cedfea;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  <!-- border-left: solid 1px #cedfea; -->
  border-right: solid 1px #cedfea;
}

input[type=submit]:hover {
  background-color: #45a049;
  <!-- border-left: solid 1px #cedfea; -->
  border-right: solid 1px #cedfea;
}

.container {
  border-radius: 5px;
  background-color: #ffffff;
  <!-- border-left: solid 1px #cedfea; -->
  border-right: solid 1px #cedfea;
  padding: 20px;
}
</style>
</head>
<body>
<br>
<br>
<br>
<center> <h3> <font size="7"> Contact me </font> </h3> </center>

<div class="container">
  <form
  action="https://formspree.io/f/mzbogkkl"
  method="POST"
  >
    <label for="name">Name</label>
    <input type="text" id="name" name="Name" placeholder="What's your name?" required>

    <label for="email">Email</label>
    <input type="text" id="email" name="Email" placeholder="What's your email?" required>

    <label for="message">Message</label>
    <textarea id="message" name="Message" placeholder="Write a message!" style="height:200px" required></textarea>

    <input type="submit" value="Send">
  </form>
</div>

</body>
</html>