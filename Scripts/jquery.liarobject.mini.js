!function (e) { "use strict"; e.fn.getLiarText = function () { var t = this, n = t.data("liartype"), i = t.find(":text,input[type=number],input[type=email]").val() || t.find("textarea").val() || ""; return "select2" === n ? i = t.find("select").find("option:selected").text() || "" : "checkgroup" === n ? (i = [], t.find(":checkbox:checked,:radio:checked").each(function (t, n) { i[t] = e(n).parent().text() })) : "date" === n ? i = i.replace(/\//gi, "") : "label" === n ? i = t.text() : "hiddenbox" === n && (i = t.children(".span").text()), i }, e.fn.getLiarVal = function () { var e = this, t = e.data("liartype"), n = e.find(":text,input[type=number],input[type=email]").val() || e.find("textarea").val() || ""; return "select2" === t ? n = e.find("select").val() || "" : "checkgroup" === t ? (n = [], e.find(":checkbox:checked,:radio:checked").each(function (e, t) { n[e] = t.value })) : "date" === t ? n = n.replace(/\//gi, "") : "label" === t && (n = e.text()), n }, e.fn.setLiarVal = function (t) { var n = this, i = n.data("liartype"); return t = void 0 === t ? "" : t, "select2" === i ? n.find("select").select2("val", t) : "select" === i ? n.find("select").val(t) : "checkgroup" === i ? (n.find(":checkbox,:radio").prop("checked", 0), e.isArray(t) ? e.each(t, function (e, t) { n.find(':checkbox[value="' + t + '"],:radio[value="' + t + '"]').prop("checked", 1) }) : (t = t.indexOf(".") === t.length - 1 ? t.substring(0, t.length - 1) : t, t && "" != t && n.find(':checkbox[value="' + t + '"],:radio[value="' + t + '"]').prop("checked", 1))) : "date" === i ? n.find(":text").val(8 === t.length ? t.substring(0, 4) + "/" + t.substring(4, 6) + "/" + t.substring(6, 8) : t) : "label" === i ? n.text(t) : n.find(":text,input[type=number],input[type=email], textarea").val(t), this }, e.fn.setLiarText = function (e) { var t = this, n = t.data("liartype"); return e = void 0 === e ? "" : e, "select2" === n || "checkgroup" === n || ("date" === n ? t.find(":text").val(8 === e.length ? e.substring(0, 4) + "/" + e.substring(4, 6) + "/" + e.substring(6, 8) : e) : "label" === n ? t.text(e) : t.find(":text,input[type=number],input[type=email], textarea").val(e)), this }, e.fn.enable = function (e) { return e && (e = !0), this.each(function () { this.disabled = !e }) }, e.fn.ifElse = function (t, n, i) { return void 0 == t ? this : this.each("" == t || t ? e.isFunction(n) ? n : e.noop : e.isFunction(i) ? i : e.noop) }, e.fn.enableLiar = function () { return this.find(":input").enable(1) }, e.fn.disableLiar = function () { return this.find(":input").enable(0) } } (jQuery);