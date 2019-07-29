$.support.cors = true;

var URL = "https://www.pavis-online.com/webservice/request.aspx";
var screenx = $(window).width();
var screeny = $(window).height();
var req = "";
response.value = "";
//var parsers = require('xml2json');

$(document).ready(function () {
    var tabNumber = '';
    var form = document.createElement('form');
    var input = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    var p = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var label = document.createElement('label');
    var label2 = document.createElement('label');
    var label3 = document.createElement('label');
    var Form = document.querySelector('#form');
    $("textarea").keydown(function (e) {
        if (e.keyCode === 9) { // tab was pressed
            // get caret position/selection
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var $this = $(this);
            // set textarea value to: text before caret + tab + text after caret
            $this.val($this.val().substring(0, start)
                + "\t"
                + $this.val().substring(end));
            // put caret at right position again
            this.selectionStart = this.selectionEnd = start + 1;
            // prevent the focus lose
            return false;
        }
    });
    // p.innerText = 'Cust ID:';
    // p2.innerText = 'Password:';
    // p3.innerText = 'Reference:';
    // input.setAttribute('type', 'number');
    // input.setAttribute('class', 'input1');
    // input2.setAttribute('type', 'password');
    // input2.setAttribute('class', 'input2');
    // input3.setAttribute('type', 'text');
    // input3.setAttribute('class', 'input3');
    // label.append(p, input);
    // label2.append(p2, input2);
    // label3.append(p3, input3);
    // form.append(label);
    // form.append(label2);
    // form.append(label3);
    // Form.append(form);
    if (typeof request != "undefined" && typeof response != "undefined") {
        request.value = "";
        response.value = "";
        $("#url").val(URL);
        $("#request").focus();
    }
    $("#leeren").click(function () {
        request.value = "";
        response.value = "";
        $(".one div:first").text("Bitte wählen Sie ein Beispiel:");
        $(".mini").removeClass("sel");
        $("#url").val(URL);
    });
    $("#abfrage").click(function () {
        if (url.value == "") {
            Message("Bitte geben Sie eine Request URL ein.");
        } else {
            if (request.value == "") {
                Message("Bitte wählen Sie eines der Request Beispiele (1-11) oder tragen Sie Ihren eigenen Request ein.");
            }
            if (request.value != "") {
                WaitScreen(true);
                return setTimeout(abfrage, 500);
            }
        }
    });
    $("#rest").click(function () {
        //output();
        WaitScreen(true);
        return setTimeout(rest, 500);
    });
    $(".mini").click(function () {
        $(".one div:first").text($(this).attr("title"));
        var id = $(this).attr("id");
        tabNumber = id;
        request.value = window["req" + id.substr(3, 2)];
        response.value = "";
        if (id === 'btn5') {
            p.innerText = 'Cust ID:';
            p2.innerText = 'Password:';
            p3.innerText = 'Reference:';
            input.setAttribute('type', 'number');
            input.setAttribute('class', 'input1');
            input2.setAttribute('type', 'password');
            input2.setAttribute('class', 'input2');
            input3.setAttribute('type', 'text');
            input3.setAttribute('class', 'input3');
            label.append(p, input);
            label2.append(p2, input2);
            label3.append(p3, input3);
            form.append(label);
            form.append(label2);
            form.append(label3);
            Form.append(form);
            // $("#request").keypress(function (e) {
            //     //Rechter Ctrl/Alt+Enter?
            //     var which = e.which;
            //     ctrlKey = (e.ctrlKey ? 'Ctrl' : '');
            //     if (which == 13 && ctrlKey == 'Ctrl') {
            //         WaitScreen(true);
            //         setTimeout(abfrage, 500);
            //     }
            // });
        } else if (id === 'btn6') {
            p.innerText = 'Cust ID:';
            p2.innerText = 'Password:';
            p3.innerText = 'Reference:';
            input.setAttribute('type', 'number');
            input.setAttribute('class', 'input1');
            input2.setAttribute('type', 'password');
            input2.setAttribute('class', 'input2');
            input3.setAttribute('type', 'text');
            input3.setAttribute('class', 'input3');
            label.append(p, input);
            label2.append(p2, input2);
            label3.append(p3, input3);
            form.append(label);
            form.append(label2);
            form.append(label3);
            Form.append(form);
            // $("#request").keypress(function (e) {
            //     //Rechter Ctrl/Alt+Enter?
            //     var which = e.which;
            //     ctrlKey = (e.ctrlKey ? 'Ctrl' : '');
            //     if (which == 13 && ctrlKey == 'Ctrl') {
            //         WaitScreen(true);
            //         setTimeout(abfrage, 500);
            //     }
            // });
        } else {
            alert('The Forms Page is not Ready')
        }
        response.value = "";
        document.getElementById("response").innerHTML = "";
        id = id.substr(3, 2);
        Show(id);
    });

    function Show(id) {
        $(".minis").children().each(function () {
            if (this.id === "btn" + id) {
                // Menüpunkt aktiv
                $("#" + this.id).removeClass("act");
                $("#" + this.id).addClass("sel");
            } else {
                // Menüpunkt inaktiv
                $("#" + this.id).removeClass("sel");
                $("#" + this.id).addClass("act");
            }
        })
    }

    function XmlToHtml5(xml) {
        console.log(xml);
        var x, i, xmlDoc;
        var txt = "";
        var txt2 = "";
        var xml_array = [];
        var xmlArray_items = [];
        var divBox = document.createElement('div');
        var newDiv = document.createElement('div');
        var newDiv2 = document.createElement('div');
        var button = document.createElement('button');
        button.innerText = 'Update Case';
        button.style.cssText = 'margin: 10px; width: 200px; height: 50px; color: #7b7b7b7; font-size: 20px;';
        divBox.setAttribute('class', 'newDiv');
        newDiv.style.cssText = 'width: 100%;';
        newDiv.setAttribute('class', 'newDiv_1');
        newDiv2.style.cssText = 'width: 100%;';
        newDiv2.setAttribute('class', 'newDiv_2');
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xml, "text/xml");
        x = xmlDoc.documentElement.children;
        xml_array.push(x[x.length - 1].children[0].children[6].children[0].children[5].children);
        for (i = 0; i < xml_array[0].length; i++) {
            xmlArray_items.push(xml_array[0][i].children)
        }
        xmlArray_items.forEach(function (p1) {
            for (var k = 0; k < p1.length; k++) {
                txt += '<p>' + p1[k].innerHTML + '</p>';
                txt2 += '<p>' + p1[k].nodeName + '</p>';
            }
        });
        newDiv.innerHTML = txt;
        newDiv2.innerHTML = txt2;
        divBox.append(newDiv2);
        divBox.append(newDiv);
        document.getElementById("response").append(divBox);
        document.getElementById("response").append(button);
    }

    function XmlToHtml6(xml) {
        console.log(xml);
        var x, i, xmlDoc;
        var txt = "";
        var txt2 = "";
        var xml_array = [];
        var xmlArray_items = [];
        var divBox = document.createElement('div');
        var newDiv = document.createElement('div');
        var newDiv2 = document.createElement('div');
        var button = document.createElement('button');
        button.innerText = 'Update Case';
        button.style.cssText = 'margin: 10px; width: 200px; height: 50px; color: #7b7b7b7; font-size: 20px;';
        divBox.setAttribute('class', 'newDiv');
        newDiv.style.cssText = 'width: 100%;';
        newDiv.setAttribute('class', 'newDiv_1');
        newDiv2.style.cssText = 'width: 100%;';
        newDiv2.setAttribute('class', 'newDiv_2');
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xml, "text/xml");
        x = xmlDoc.documentElement.children;
        console.log('x <=====================>', x);
        xml_array.push(x[x.length - 1].children[0].children[6].children[0].children);
        console.log('xml_array <=====================>', xml_array);
        xml_array.forEach(function (p1) {
            for (var k = 0; k < p1.length; k++) {
                txt += '<p>' + p1[k].innerHTML + '</p>';
                txt2 += '<p>' + p1[k].nodeName + '</p>';
            }
        });
        newDiv.innerHTML = txt;
        newDiv2.innerHTML = txt2;
        divBox.append(newDiv2);
        divBox.append(newDiv);
        document.getElementById("response").append(divBox);
        document.getElementById("response").append(button);
    }

    function abfrage() {
        var xmlString;

        function button_form_5() {
            var input_value1 = document.querySelector('.input1');
            var input_value2 = document.querySelector('.input2');
            var input_value3 = document.querySelector('.input3');
            // console.log(input_value1.value);
            // console.log(input_value2.value);
            // console.log(input_value3.value);
            var xml_New = $.parseXML(request.value);
            xml_New.children[0].children[0].innerHTML = input_value1.value;
            xml_New.children[0].children[1].innerHTML = input_value2.value;
            xml_New.children[0].children[2].children[0].children[0].innerHTML = input_value3.value;
            // console.log('xml_New', xml_New.children[0]);
            // console.log('xml_New', xml_New.children[0].children[0].innerHTML);
            // console.log('xml_New', xml_New.children[0].children[1].innerHTML);
            // console.log('xml_New', xml_New.children[0].children[2].children[0].children[0].innerHTML);
            xmlString = (new XMLSerializer()).serializeToString(xml_New);
            //console.log('xmlString', xmlString);
        }

        button_form_5();
        if (request.value != "") {
            return $.ajax({
                url: $("#url").val(),
                type: "POST",
                data: xmlString,
                contentType: "text/plain",
                dataType: 'text',
                timeout: 5000,
                success: function (xml) {
                    WaitScreen(false);
                    response.value = xml;
                    console.log('tabNumber', tabNumber)
                    if (tabNumber === 'btn5') {
                        XmlToHtml5(xml);
                    } else if (tabNumber === 'btn6') {
                        XmlToHtml6(xml);
                    }


                },
                error: function (xml, b, c) {
                    alert('error');
                    WaitScreen(false);
                    Message("Timeout");
                }
            });
        } else {
            WaitScreen(false);
            //Message("Bitte wählen Sie eines der Request Beispiele (1-8) oder tragen Sie Ihren eigenen Request ein.");
            request.value = "";
            response.value = "";
            return false;
        }
    }

    function rest() {
        var url = URL;
        if (req != "") {
            return $.ajax({
                url: url,
                type: "POST",
                data: req,
                contentType: "text/plain",
                dataType: "text",
                timeout: 5000,
                success: function (xml) {
                    WaitScreen(false);
                    xml = xml.replace(/\&lt;/g, "<");
                    xml = xml.replace(/\&gt;/g, ">");
                    response.value = xml;
                },
                error: function (xml, b, c) {
                    WaitScreen(false);
                    Message("Timeout");
                }
            });
        } else {
            WaitScreen(false);
            req = "";
            response.value = "";
            return false;
        }
    }


    $("input").keypress(function (e) {
        //Rechter Ctrl/Alt+Enter?
        var which = e.which;
        ctrlKey = (e.ctrlKey ? 'Ctrl' : '');
        if (which == 13 && ctrlKey == 'Ctrl') {
            //output();
            WaitScreen(true);
            setTimeout(rest, 500);
        }
    });
});

$(window).on("resize", function () {
    screenx = $(window).width();
    screeny = $(window).height();
});

function WaitScreen(show) {
    if ($("#waitscreen").length === 0) $("body").append("<div id='waitscreen' class='AppWaitScreen'></div>");
    if (show) $("#waitscreen").show(); else $("#waitscreen").hide();
}

// Name des Containers aus einer ID bestimmen
function GetContainer(id) {
    var pos = id.lastIndexOf("-");
    if (pos > 0)
        return id.slice(0, pos);
    else
        return "";
}

// Meldung anzeigen
function Message(infotext) {
    var html;
    var tw, th, bw, bh;
    var buttonid = "messagescreen-window-toolbar-commit";
    html = "<div id='messagescreen' class='AppWindowLayer'>" +
        "   <div id='messagescreen-window' class='AppMessage'>" +
        "      <div id='messagescreen-window-content' class='AppMessageContent'></div>" +
        "      <div id='messagescreen-window-toolbar' class='AppWindowToolbar'></div>" +
        "	   </div>" +
        "</div>";
    $("body").append(html);
    CenterWindow("messagescreen-window");
    // OK-Button hinzufügen
    AddButton(buttonid, "OK");
    // Text einfügen
    $("#messagescreen-window-content").html(infotext);
    $("#messagescreen").fadeIn(150, function () {
        $(this).show();
    });
    // OK-Button zentrieren
    bw = $("#" + buttonid).outerWidth();
    bh = $("#" + buttonid).outerHeight();
    tw = $("#messagescreen-window-toolbar").width();
    th = $("#messagescreen-window-toolbar").height();
    $("#" + buttonid).css("left", Math.floor((tw - bw) / 2, 0) + "px");
    $("#" + buttonid).css("top", Math.floor((th - bh) / 2, 0) + "px");
    // Button-Aktion in div eintragen
    $("#" + buttonid).attr("onclick", "javascript:CommitMessage(window)");
}

// Meldung bestätigen (Benutzer klickt auf OK-Button)
function CommitMessage() {
    $("#messagescreen").fadeOut(150, function () {
        $(this).remove();
    });
}

// Button hinzufügen
function AddButton(id, label) {
    var container = GetContainer(id);
    var bheight, bwidth, w;
    var html = "<div id='@id' class='button dialog_button'>@label</div>";
    html = html.replace(/@id/g, id);
    html = html.replace("@label", label);
    if (container != "") {
        $("#" + container).append(html);
    }
}

// Fenster zentrieren
function CenterWindow(id) {
    var w, h, l, t;
    // Höhe des Fensters bestimmen
    h = 0;
    $("#" + id).children().each(function () {
        h += $("#" + this.id).outerHeight();
    })
    // Breite des Fensters bestimmen
    w = $("#" + id + "-content").outerWidth();
    // Fenster platzieren
    l = (screenx - w) / 2;
    t = (screeny - h) / 2;
    $("#" + id).css({left: l, top: t});
}

