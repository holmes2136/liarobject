(function ($) {
    'use strict';
    $.fn.getLiarText = function () {
        var $clt = this,
            liartype = $clt.data('liartype'),
            value = $clt.find(':text,input[type=number],input[type=email]').val() || $clt.find('textarea').val() || '';
        if (liartype === 'select2') {
            value = $clt.find('select').find("option:selected").text() || '';
        } else if (liartype === 'checkgroup') {
            value = [];
            $clt.find(':checkbox:checked,:radio:checked').each(function (i, ele) {

                value[i] = ele.parentElement.textContent;

                if (value[i] == undefined) {
                    value[i] = ele.parentElement.innerText;
                }
            });
        } else if (liartype === 'date') {
            value = value.replace(/\//ig, '');
        } else if (liartype === 'label') {
            value = $clt.text();
        } else if (liartype === 'hiddenbox') {
            value = $clt.children('.span').text();
        }

        return value;
    };

    $.fn.getLiarVal = function () {
        var $clt = this,
            liartype = $clt.data('liartype'),
            value = $clt.find(':text,input[type=number],input[type=email]').val() || $clt.find('textarea').val() || '';

        if (liartype === 'select2') {
            value = $clt.find('select').val() || '';
        } else if (liartype === 'checkgroup') {
            value = [];
            $clt.find(':checkbox:checked,:radio:checked').each(function (i, ele) {
                value[i] = ele.value;
            });
        } else if (liartype === 'date') {
            value = value.replace(/\//ig, '');
        } else if (liartype === 'label') {
            value = $clt.text();
        }


        return value;
    };


    $.fn.setLiarVal = function (val) {
        var $clt = this,
            liartype = $clt.data('liartype');

        val = val === undefined ? '' : val;

        if (liartype === 'select2') {
            $clt.find('select').select2('val', val);
        } else if (liartype === 'select') {
            $clt.find('select').val(val);
        }
        else if (liartype === 'checkgroup') {
            $clt.find(':checkbox,:radio').prop('checked', 0);
            if ($.isArray(val)) {
                $.each(val, function (i, v) {
                    $clt.find(':checkbox[value="' + v + '"],:radio[value="' + v + '"]').prop('checked', 1);
                });
            } else {
                val = val.indexOf('.') === val.length - 1 ? val.substring(0, val.length - 1) : val;
                if (!!val && val != "") {
                    $clt.find(':checkbox[value="' + val + '"],:radio[value="' + val + '"]').prop('checked', 1);
                }
            }
        } else if (liartype === 'date') {
            $clt.find(':text').val(val.length === 8 ? val.substring(0, 4) + '/' + val.substring(4, 6) + '/' + val.substring(6, 8) : val);
        } else if (liartype === 'label') {
            $clt.text(val);
        } else {
            $clt.find(':text,input[type=number],input[type=email], textarea').val(val);
        }

        return this;
    };

    $.fn.setLiarText = function (val) {
        var $clt = this,
            liartype = $clt.data('liartype');

        val = val === undefined ? '' : val;

        if (liartype === 'select2') {

        } else if (liartype === 'checkgroup') {

        } else if (liartype === 'date') {
            $clt.find(':text').val(val.length === 8 ? val.substring(0, 4) + '/' + val.substring(4, 6) + '/' + val.substring(6, 8) : val);
        } else if (liartype === 'label') {
            $clt.text(val);
        } else {
            $clt.find(':text,input[type=number],input[type=email], textarea').val(val);
        }

        return this;
    };

    $.fn.enable = function (b) {
        if (!!b) b = true;
        return this.each(function () {
            this.disabled = !b;
        });
    };

    $.fn.ifElse = function (condition, ifCb, elseCb) {
        if (condition == undefined) return this;
        return this.each(condition == '' || !!condition ? $.isFunction(ifCb) ? ifCb : $.noop : $.isFunction(elseCb) ? elseCb : $.noop);
    };

    $.fn.enableLiar = function (clearVal) {
        return this.find(':input').enable(1);
    };

    $.fn.disableLiar = function (clearVal) {
        return this.find(':input').enable(0);
    };



})(jQuery);