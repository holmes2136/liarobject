<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Demo.aspx.cs" Inherits="Demo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
		  <div id="textsample" data-liartype="text">
                <input type="text"  />
          </div>


          <div id="selectsample" data-liartype="select2">
                <select>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                    <option value="test5">test5</option>
                </select>
          </div>


    </div>
    </form>
</body>
    <script type="text/javascript" src="Scripts/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="Scripts/jquery.mps.mcuobject.js"></script>

    <script type="text/javascript">

        var sample1 = $("#textsample").getMcuVal();
        console.log(sample1);


        var sample2 = $("#selectsample").getMcuVal();
        console.log(sample2);

    </script>
</html>
