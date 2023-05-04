<h1>Style Design Platform</h1>
<br>
SDP - is a language to simplify CSS syntax for working with styles. SDP not only simplifies the syntax, it also makes your code easier: you can create templates (_templates(...)) or variables (_vars(...)) and make your code technically easier. 
<br><br>
Download or embed the <a href="https://cdn.yurba.me/static/sdp/1.1/main.js">JS File</a>
<br>
Download the <a href="https://marketplace.visualstudio.com/items?itemName=ClarityLabWDS.sdp-syntax">VSCode Extension</a>
<br><br>
With SDP, you can easily learn how to write code quickly by using handy code highlighting and snippets to help you navigate and simplify your coding. <a href="https://dev.yurba.me/cl/sdp/docs">Read documantation...</a>
<br><br>
<strong>Usage</strong>
<br><br>
- Vars
<br>
<code>_vars(main-color: white;) $classname(color: {main-color})</code>
<br>
- Templates
<br>
<code>_templates(=example(color: white; m: 0; p: 0;) $classname(=example)</code>
<br>
- Classes
<br>
<code>$just_like_this(color: white; p: 0;)</code> - Learn more about <a href="https://dev.yurba.me/cl/sdp/docs/#shorthands">reduced style options</a>
<br>
Also, you can add selectors that work like querySelector() in JS:
<br>
<code>$classname::selector["p"](...)</code> - This selector will select the class that has the elements <strong>p</strong>.
<br>
<code>$classname::selector["~p"](...)</code> - This selector will only select <strong>p</strong> elements that contain the <strong>classname</strong> class.
<br>
You can just as easily create hover effects by adding the <code>::hover</code> class:
<br>
<code>$classname(color: white;) $classname::hover(color: green;)</code>
<br>
- Imports
Import CSS file: <code>@css("...")</code>
<br>
Import SDP file: <code>@import("...")</code> or <code>@connect("...")</code>
<br>
Or with link tag: <code>&lt;link rel="sdp" href="yourfile.sdp"&gt;</code>
<br>
- Scripting
<br>
<code>_script(ADD: meta-adaptive)</code> - Adds a meta tag to adapt the page to other devices
<br><br>
<h4 style="font-weight: bold">Lets show!</h4>
Webtest: https://dev.yurba.me/cl/sdp/webtest/
<br><br>
<span style="font-weight: bold">Thats a default CSS syntax:</span>
<br><br>
<img  style="border-radius: 5px; width: 500px;" src="https://user-images.githubusercontent.com/115047953/229337556-b3691cec-ff51-4e57-85b8-0182f90d846e.png">
<br><br>
<span style="font-weight: bold">Thats a default SDP syntax:</span>
<br><br>
<img  style="border-radius: 5px; width: 500px;" src="https://user-images.githubusercontent.com/115047953/229337578-c4937ba5-56bb-4e16-96b4-5adfc2523385.png">
<br><br>
<strong>TODO:</strong>
<br>
- Add local variables
