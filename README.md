liarobject
==========

Features : 
```
you can get the value and text from different control by the same interface

不再去判斷控制項的類型而去使用相對應的語法 , 統一的存取界面可以幫助你在撰寫 javascript 更有彈性
   
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
<script src="jquery.liarobject.js"></script>
```

How liarobject works
==========
Just attache data-liartype attribute on control , and liarobject will use it to judge controls

Sample 1 : Access input value : 

```javascript
<div id="Sample1" data-liartype="text">
     <input type="text"  value="test" />
</div>

$("#Sample").getLiarVal();
>>>  test
```


Sample 2 : Access checkgroup value : 

```javascript
<div id="Sample2" data-liartype="checkgroup">
     <label>test1
         <input type="radio" id="option1" name="group1"  value="1"> 
     </label>
     <label>test2
         <input type="radio" id="option2" name="group2"  value="2"> 
     </label>  
</div>

$("#Sample2").getLiarVal();
>>>  ["1"]
```


Sample 3 : Access table value : 

```javascript
  <div id="table1" data-liartype="tbl">
        <table>
            <tbody>
                <tr><td>1</td><td>Sherlock</td></tr>
                <tr><td>2</td><td>Holmes</td></tr>
            </tbody>
        </table>
    </div>

$("#table1").getLiarVal();
>>>  [{"cell":["1","Sherlock"]},{"cell":["2","Holmes"]}]
```







