liarobject
==========

features : 
```
1. you can get the value and text from different control by the same interface
   
```


You can

```javascript
$("#checkgroup").getLiarVal();
$("#checkbox").getLiarVal();
$("#input").getLiarVal();
```

You don't
```javascript
$("#checkgroup").find(":radio:checked").val();
$("#checkbox").find(":checkbox:checked").val();
$("#input").find(":input").val();
```

How to use liarobject
==========

```javascript
<script src="jquery-1.8.3.min.js"></script>
<script src="jquery.mps.liarobject.js"></script>
```

How liarobject works
==========
Just attache data-liartype attribute on control , and liarobject will use it to judge controls


```javascript
<div id="textsample" data-liartype="text">
     <input type="text"  />
</div>
```







