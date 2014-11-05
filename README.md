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



