---
layout: inner
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
          border: 1px solid #ccc;
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
        }
        input[type=submit]:hover {
          background-color: #45a049;
        }
        .container {
          border-radius: 1px;
          background-color: #ffffff;
          /* border-left: solid 1px #cedfea; */
          border-right: solid 1px #cedfea;
          padding: 20px;
        }
        .flex-container {
          display: flex;
        }
        .flex-child {
          flex: 1;
        }  
        .flex-child:first-child {
          margin-right: 20px;
        } 
  </style>
  </head>

  <!-- <body> -->
  <center> <h3> <font size="7"> Contact me </font> </h3> </center>

  <form
  action="https://formspree.io/f/mzbogkkl"
  method="POST"
  >

  <div class="flex-container">
    <div class="flex-child">
      <p> <font size="4"> Name </font> </p>
      <input type="text" id="name" name="Name" placeholder="What's your name?" required>
    </div>
    <div class="flex-child">
      <p> <font size="4"> Email </font> </p>
      <input type="text" id="email" name="Email" placeholder="What's your email?" required>
    </div>
  </div>

  <p> <font size="4"> Message </font> </p>
    <textarea id="message" name="Message" placeholder="Write me a message!" style="height:200px" required></textarea>

    <input type="submit" value="Send">
  </form>

  <!-- </body> -->
</html>