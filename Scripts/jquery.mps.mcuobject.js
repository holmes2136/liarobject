(function ($) {
    'use strict';
    $.fn.getMcuText = function () {
        var $mcu = this,
            mcutype = $mcu.data('mcutype'),
            value = $mcu.find(':text,input[type=number],input[type=email]').val() || $mcu.find('textarea').val() || '';
        if (mcutype === 'select2') {
            value = $mcu.find('select').find("option:selected").text() || '';
        } else if (mcutype === 'checkgroup') {
            value = [];
            $mcu.find(':checkbox:checked,:radio:checked').each(function (i, ele) {

                value[i] = ele.parentElement.textContent;

                if (value[i] == undefined) {
                    value[i] = ele.parentElement.innerText;
                }
            });
        } else if (mcutype === 'date') {
            value = value.replace(/\//ig, '');
        } else if (mcutype === 'label') {
            value = $mcu.text();
        } else if (mcutype === 'hiddenbox') {
            value = $mcu.children('.span').text();
        }

        return value;
    };

    $.fn.getMcuVal = function () {
        var $mcu = this,
            mcutype = $mcu.data('mcutype'),
            value = $mcu.find(':text,input[type=number],input[type=email]').val() || $mcu.find('textarea').val() || '';

        if (mcutype === 'select2') {
            value = $mcu.find('select').val() || '';
        } else if (mcutype === 'checkgroup') {
            value = [];
            $mcu.find(':checkbox:checked,:radio:checked').each(function (i, ele) {
                value[i] = ele.value;
            });
        } else if (mcutype === 'date') {
            value = value.replace(/\//ig, '');
        } else if (mcutype === 'label') {
            value = $mcu.text();
        }


        return value;
    };


    $.fn.setMcuVal = function (val) {
        var $mcu = this,
            mcutype = $mcu.data('mcutype');

        val = val === undefined ? '' : val;

        if (mcutype === 'select2') {
            $mcu.find('select').select2('val', val);
        } else if (mcutype === 'select') {
            $mcu.find('select').val(val);
        }
        else if (mcutype === 'checkgroup') {
            $mcu.find(':checkbox,:radio').prop('checked', 0);
            if ($.isArray(val)) {
                $.each(val, function (i, v) {
                    $mcu.find(':checkbox[value="' + v + '"],:radio[value="' + v + '"]').prop('checked', 1);
                });
            } else {
                val = val.indexOf('.') === val.length - 1 ? val.substring(0, val.length - 1) : val;
                if (!!val && val != "") {
                    $mcu.find(':checkbox[value="' + val + '"],:radio[value="' + val + '"]').prop('checked', 1);
                }
            }
        } else if (mcutype === 'date') {
            $mcu.find(':text').val(val.length === 8 ? val.substring(0, 4) + '/' + val.substring(4, 6) + '/' + val.substring(6, 8) : val);
        } else if (mcutype === 'label') {
            $mcu.text(val);
        } else {
            $mcu.find(':text,input[type=number],input[type=email], textarea').val(val);
        }

        return this;
    };

    $.fn.setMcuText = function (val) {
        var $mcu = this,
            mcutype = $mcu.data('mcutype');

        val = val === undefined ? '' : val;

        if (mcutype === 'select2') {

        } else if (mcutype === 'checkgroup') {

        } else if (mcutype === 'date') {
            $mcu.find(':text').val(val.length === 8 ? val.substring(0, 4) + '/' + val.substring(4, 6) + '/' + val.substring(6, 8) : val);
        } else if (mcutype === 'label') {
            $mcu.text(val);
        } else {
            $mcu.find(':text,input[type=number],input[type=email], textarea').val(val);
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

    $.fn.enableMcu = function (clearVal) {
        return this.find(':input').enable(1);
    };

    $.fn.disableMcu = function (clearVal) {
        return this.find(':input').enable(0);
    };



})(jQuery);