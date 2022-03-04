---
layout: wide_art
permalink: /art/result
title: Accessibility Requirements Tool
---
<html>
<head>
<script type="text/javascript">

    function add() {
    var i = document.getElementById( 'old' );

    var d = document.createElement( 'div' );
    d.id = "new1";
    d.innerHTML = i.innerHTML ;
    var p = document.getElementById('new');

    p.appendChild(d);
}
function removeLocation() {

    var d = document.getElementById( 'new1' );

    var p = document.getElementById('new');

    p.removeChild(d);
}
</script>
</head>
<body>
    <div id="old">
        Content of old div
    </div>
    <hr/>
    <div id="new">
    </div>
    <hr/>
    <button onclick="add();">Add</button><br>
    <button onclick="removeLocation();">Remove</button>
</body>
</html>