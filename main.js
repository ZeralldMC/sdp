var sdp = {};
sdp.msg = false;
sdp.visible_vars = true;
sdp.version = "1.2";

// 1.1
sdp.errors = true;
sdp.warns = true;

function sdp_tag() {
    var doc = document.querySelector("*");
    var elements = document.querySelector("*").getElementsByTagName("sdp").length
    if(elements > 0) {
        // 
    }
    else {
        var sdptag = document.createElement("sdp");
        document.querySelector("*").appendChild(sdptag)
    }
}
sdp.values_convert = function(text) {
    return text.replaceAll("bdf", "backdrop-filter")
            .replaceAll(/m-l\b/g, "margin-left")
            .replaceAll(/m-t\b/g, "margin-top")
            .replaceAll(/m-r\b/g, "margin-right")
            .replaceAll(/m-b\b/g, "margin-bottom")
            .replaceAll(/bg-color\b/g, "background-color")
            .replaceAll(/p-b\b/g, "padding-bottom")
            .replaceAll(/p-r\b/g, "padding-right")
            .replaceAll(/p-t\b/g, "padding-top")
            .replaceAll(/p-l\b/g, "padding-left")
            .replaceAll(/bg\b/g, "background")
            .replaceAll(/bg-image\b/g, "background-image")
            .replaceAll(/img-rend\b/g, "image-rendering")
            .replaceAll(/img-orient\b/g, "image-orientation")
            .replaceAll(/v-a\b/g, "vertical-align")
            .replaceAll(/\bm\b/g, "margin")
            .replaceAll(/\bp\b/g, "padding")
            .replaceAll(/\bb\b/g, "border")
            .replaceAll(/bt\b/g, "border-top")
            .replaceAll(/bu\b/g, "border-bottom")
            .replaceAll(/br\b/g, "border-right")
            .replaceAll(/bl\b/g, "border-left")
            .replaceAll(/\bcw\b/g, "width")
            .replaceAll(/\bch\b/g, "height")
            .replaceAll(/b-r\b/g, "border-radius")
            .replaceAll(/ds\b/g, "display")
            .replaceAll(/\bstr\b/g, "stroke")
            .replaceAll(/di-pos\b/g, "background-position")
            .replaceAll(/bg-pos-x\b/g, "background-position-x")
            .replaceAll(/bg-pos-y\b/g, "background-position-y")
            .replaceAll(/\bpos\b/g, "position")
            .replaceAll(/f-f\b/g, "font-family")
            .replaceAll(/f-w\b/g, "font-weight")
            .replaceAll(/\btf\b/g, "transform")
            .replaceAll(/--fill\b/g, "-webkit-fill-available")
            .replaceAll(/--fit\b/g, "fit-content")
            .replaceAll(/=display-center\b/g, "display: flex;\njustify-content: center;")
            .replaceAll(/=display-col\b/g, "display: flex;\nflex-direction: column;")
            .replaceAll(/=display-row\b/g, "display: flex;\nflex-direction: row;")

            .replaceAll(/--default-bs\b/g, "box-shadow: #00000050 0px 0px 10px 0px")
            .replaceAll(/--tiny-bs\b/g, "box-shadow: #00000050 0px 0px 5px 0px")
            .replaceAll(/--big-bs\b/g, "box-shadow: #00000060 0px 0px 15px 0px")
            .replaceAll(/--default-ts\b/g, "text-shadow: #00000050 0px 0px 10px")
            .replaceAll(/--tiny-ts\b/g, "text-shadow: #00000050 0px 0px 5px")
            .replaceAll(/--big-ts\b/g, "text-shadow: #00000060 0px 0px 15px")

            .replaceAll(/\bt-a\b/g, "text-align")
            .replaceAll(/\bt-s\b/g, "text-shadow")
            .replaceAll(/\bt-d\b/g, "text-decoration")
            .replaceAll(/\bt-of\b/g, "text-overflow")
            .replaceAll(/\bt-rend\b/g, "text-rendering")
            .replaceAll(/\binner\b/g, "content")
            .replaceAll(/\bl-h\b/g, "line-height")
            .replaceAll(/\btrans\b/g, "transition")
            .replaceAll(/\banim\b/g, "animation")

            .replaceAll(/\bl-gradient\b/g, "linear-gradient")
            .replaceAll(/\br-gradient\b/g, "radial-gradient")
            .replaceAll(/\bc-gradient\b/g, "conic-gradient")
            .replaceAll(/\bmix-mode\b/g, "mix-blend-mode")

            .replaceAll(/--gray\b/g, "#adadad")
            .replaceAll(/--dark\b/g, "#0a0a0a")
            .replaceAll(/--darker\b/g, "#080808")
            .replaceAll(/--blue\b/g, "#4444fd")
            .replaceAll(/--green\b/g, "#35cf35")
            .replaceAll(/--yellow\b/g, "#d5d53f")
            .replaceAll(/--orange\b/g, "#e5a93a")
            .replaceAll(/--red\b/g, "#ff4545")
            .replaceAll(/--purple\b/g, "#942af5")
            .replaceAll(/--pink\b/g, "#f33ea2")
            .replaceAll(/--aqua\b/g, "#2fc8e1")
}
sdp.special_chars = function(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;")
     .replace(/</g, "&lt;")
     .replace(/>/g, "&gt;")
     .replace(/"/g, "&quot;")
     .replace(/'/g, "&#39;");  

}
sdp.decode_special_chars = function(htmlStr) {
    htmlStr = htmlStr.replace(/&lt;/g , "<");	 
    htmlStr = htmlStr.replace(/&gt;/g , ">");     
    htmlStr = htmlStr.replace(/&quot;/g , "\"");  
    htmlStr = htmlStr.replace(/&#39;/g , "\'");   
    htmlStr = htmlStr.replace(/&amp;/g , "&");
    return htmlStr;
}
sdp.values_dot_convert = function(text) {
    return text.replaceAll(/(\w+)\.(\d+\/?\d*%*[\w]+)/g, '$1($2)')
    .replaceAll(/;/g, '; ')
    .replaceAll("/", ".")
    .replaceAll(/#([^#]+)#/g, '/* $1 */');
}

sdp.get_styles = function() {
    var tag = document.querySelector("sdp");
    return tag;
}

sdp.start = function(elem) {
    var element = document.querySelector(elem);
    element.setAttribute("sdp-enabled", true);
    sdp_tag()
}
sdp.start("*")
sdp.fullcode = document.querySelector("sdp").textContent

var isStarted = document.querySelector("*[sdp-enabled='true']").hasAttribute("sdp-enabled", true)
sdp.status = function() {
    return isStarted;
}
if(isStarted == true) {
    if(sdp.msg == true) {
        console.log("SDP Started!");
    }
    var style_tag = document.createElement("style");
    document.querySelector("html").append(style_tag);
    // 
}
else {
    // 
}

sdp.delete_spaces = function(string) {
    return string.replace(/\s/g,'');
}
sdp.remove_leading_spaces = function(str) {
    // Проверяем, является ли аргумент строкой
    if (typeof str !== 'string') {
      throw new TypeError('Argument must be a string');
    }
  
    // Ищем первый индекс символа, отличного от пробела
    const firstNonSpaceIndex = str.search(/\S/);
  
    // Если индекс не найден (т.е. строка состоит только из пробелов), возвращаем пустую строку
    if (firstNonSpaceIndex === -1) {
      return '';
    }
  
    // Иначе, возвращаем подстроку, начиная с первого непробельного символа
    return str.substring(firstNonSpaceIndex);
  }

function sdp_animation() {
    var tag = document.querySelector("sdp");
    var style_tag = document.querySelector("style");

    if (tag.textContent.includes('@anim')) {
        const regex = /@anim\s+(\w+)\(([\s\S]*?)\)/g;
        let match;
        while (match = regex.exec(tag.textContent)) {
            const name = match[1];
            const contents = match[2].trim();
            style_tag.innerHTML += "@keyframes " + name + " \n{ " + contents + "}\n"
        }
    }
    
}

function sdp_font_family_selector() {
    var tag = document.querySelector("sdp");
    var style_tag = document.querySelector("style");
    if(tag.textContent.includes("@font")) {
        var len = (tag.textContent.match(/@font/g) || []).length;
        for(let f = 1; f < len + 1; f++) {
            var content = tag.textContent.split("@font(")[f].split(")")[0]
            style_tag.textContent += "@font-family {\n" + sdp.delete_spaces(content) + "\n}\n";
        }
    }
}
sdp_font_family_selector()

function sdp_script() {
    var tag = document.querySelector("sdp");
    if (tag.textContent.includes("_script")) {
        var inScript = tag.textContent.split("_script(")[1].split(")")[0];
        var script = inScript.split(";");
        for (let i = 0; i < script.length - 1; i++) {
            var cond = script[i].split(":")[0];
            cond = sdp.delete_spaces(cond);
            var value = script[i].split(":")[1];
            var id = value.split("-")[0];
            id = sdp.delete_spaces(id)
            var target = value.split("-")[1];
            var doc = document.querySelector("*");

            // var customVars = {};

            // sdp.addGlobalVar = function(variableName, variableValue) {
            //     if(sdp.msg == true) {
            //         console.log("Variable {" + variableName + ":" + variableValue + "} added!")
            //     }
            //     customVars[variableName] = variableValue;
            //     console.log(customVars)
            //     for (var prop in customVars) {
            //         var customVarName = prop;
            //         var customVarValue = customVars[prop];
            //         value = value.replaceAll("{" + customVarName + "}", customVarValue)
            //     }
            // }

            function get_user_data(prop) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://ipapi.co/json/", false);
                xhr.send();
                if (xhr.status == 200) {
                  var data = JSON.parse(xhr.responseText);
                  var result = data[prop];
                  return result;
                }
            }
            function get_api(apiurl, prop) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", apiurl, false);
                xhr.send();
                if (xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                
                    var propParts = prop.split('.'); // Разделяем цепочку свойств по точке
                
                    var result = data;
                    for (var i = 0; i < propParts.length; i++) {
                        result = result[propParts[i]];
                    }
                
                    return result;
                }
            }              

            var sysVars = {
                "{version}": sdp.version,
                "{version_underline}": sdp.version.replaceAll(".", "_"),
                "{version_dephys}": sdp.version.replaceAll(".", "-"),
                "{url}": window.location.href,
                "{domain}": window.location.host,
                "{url_path}": window.location.pathname.split("/")[1],
                "{port}": window.location.port,
                "{protocol}": window.location.protocol,
                "{this}": cond,
                "{title}": document.title,
                "{os}": navigator.userAgentData.platform,
                "{useragent}": navigator.userAgent
            }
            for(var svar in sysVars) {
                value = value.replaceAll(svar, sysVars[svar])
            }
            value = value.trim()

            value = value.replaceAll(/&b([^e]|$)/g, '($1')
            .replaceAll(/&be(|$)/g, '$1)')
            .replaceAll(/&fb([^e]|$)/g, '{$1')
            .replaceAll(/&fbe(|$)/g, '$1}')
            .replaceAll(/&sb([^e]|$)/g, '[$1')
            .replaceAll(/&sbe(|$)/g, '$1]')
            .replaceAll(/&cl(|$)/g, ":$1")
            .replaceAll(/&cr(|$)/g, "$1©")
            .replaceAll(/&tm(|$)/g, "$1™")
            .replaceAll(/&rtm(|$)/g, "$1®")
            .replaceAll(/&st(|$)/g, "$1★")
            .replaceAll(/&mltp(|$)/g, "$1×")
            .replaceAll(/&uah(|$)/g, "$1₴")
            .replaceAll(/&rub(|$)/g, "$1₽")
            .replaceAll(/&byn(|$)/g, "$1Ў")
            .replaceAll(/&dlr(|$)/g, "$1$")
            .replaceAll(/&tl(|$)/g, "$1│")

            const regexForCalcFunc = /calc\[[^\]]*\]/;
            if(regexForCalcFunc.test(value)) {
                var calcValue = value.split("[")[1].split("]")[0];
                var result = eval(calcValue)
                value = value.replace(/calc\[[^\]]*\]/, result)
                value = value.replace("{calc_result}", result)
            }
            const regexForVarsFunc = /getvars\[[^\]]*\]/;
            if(regexForVarsFunc.test(value)) {
                var getVarsValue = value.split("[")[1].split("]")[0];
                if(getVarsValue == "") {
                    value = value.replace(/getvars\[[^\]]*\]/, Object.keys(sysVars))
                }
                else {
                    value = value.replace(/getvars\[[^\]]*\]/, sysVars["{" + getVarsValue + "}"])
                }
            }
            const regexForContentFunc = /getcontent\[[^\]]*\]/;
            if(regexForContentFunc.test(value)) {
                var getContentValue = value.split("[")[1].split("]")[0];
                value = document.querySelector(getContentValue).textContent;
            }
            const regexForReplaceFunc = /replace\[[^\]]*\]/;
            if(regexForReplaceFunc.test(value)) {
                var args = value.split("[")[1].split("]")[0];
                var arg1 = args.split(",")[0].trim() // оригинальное слово
                var arg2 = args.split(",")[1].trim() // значение, что нужно заменить
                var arg3 = args.split(",")[2].trim() // значение, на что нужно заменить
                var result = arg1.replaceAll(arg2, arg3)
                value = value.replace(/replace\[[^\]]*\]/, result)
            }
            const regexForAttrsFunc = /getattr\[[^\]]*\]/;
            if(regexForAttrsFunc.test(value)) {
                var getAttrFunc = value.split("[")[1].split("]")[0];
                var value_1 = sdp.delete_spaces(getAttrFunc.split(",")[0]);
                var value_2 = sdp.delete_spaces(getAttrFunc.split(",")[1]);
                var elem = document.querySelector(value_1);
                value = value.replace(/getattr\[[^\]]*\]/, elem.getAttribute(value_2))
            }
            const regexForUserFunc = /user\[[^\]]*\]/;
            if(regexForUserFunc.test(value)) {
                var arg = value.split("[")[1].split("]")[0];
                var arg1 = value.split("[")[1].split("]")[0].split(",")[0];
                arg = arg.trim()
                arg1 = arg1.trim()
                if(arg == "gmt") {
                    const date = new Date();
                    const timezoneOffsetInMinutes = date.getTimezoneOffset();
                    const timezoneOffsetInHours = timezoneOffsetInMinutes / 60;
                    const timezoneOffset = -timezoneOffsetInHours;
                    value = value.replace(/user\[[^\]]*\]/, `GMT ${timezoneOffset > 0 ? "+" : "-"}${Math.abs(timezoneOffset)}`)
                }
                if(arg == "timezone") {
                    const date = new Date();
                    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    value = value.replace(/user\[[^\]]*\]/, timeZone)
                }
                if(arg == "country") {
                    result = get_user_data("country_name")
                    value = value.replace(/user\[[^\]]*\]/, result)
                }
                if(arg == "country_id") {
                    result = get_user_data("country")
                    value = value.replace(/user\[[^\]]*\]/, result)
                }
                if(arg == "country_domain") {
                    result = get_user_data("country_domain")
                    value = value.replace(/user\[[^\]]*\]/, result)
                }
                if(arg == "country_code") {
                    result = get_user_data("country_code_iso3")
                    value = value.replace(/user\[[^\]]*\]/, result)
                }
                if(arg == "country_currency") {
                    result = get_user_data("currency")
                    value = value.replace(/user\[[^\]]*\]/, result)
                }
                if(arg == "agent") {
                    value = value.replace(/user\[[^\]]*\]/, navigator.userAgent)
                }
                if(arg == "os") {
                    value = value.replace(/user\[[^\]]*\]/, navigator.userAgentData.platform)
                }
                if(arg == "browser") {
                    value = value.replace(/user\[[^\]]*\]/, navigator.userAgentData.brands[0].brand)
                }
                if(arg == "language") {
                    value = value.replace(/user\[[^\]]*\]/, navigator.language)
                }
                if(arg1 == "time") {
                    var arg2 = value.split("[")[1].split("]")[0].split(",")[1];
                    var currentDate = new Date();
                    var year = currentDate.getFullYear();
                    var month = currentDate.getMonth() + 1
                    var day = currentDate.getDate().toString().padStart(2, '0');
                    var hours = currentDate.getHours().toString().padStart(2, '0');
                    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
                    var seconds = currentDate.getSeconds().toString().padStart(2, '0');
                    var milliseconds = currentDate.getMilliseconds();
                    if(arg2 == undefined) {
                        value = value.replace(/user\[[^\]]*\]/, day + "." + month.toString().padStart(2, '0') + "." + year + " " + hours + ":" + minutes + ":" + seconds + "." + milliseconds)
                    }
                    else {
                        arg2 = arg2.replaceAll("{year}", year)
                        .replaceAll("{month}", month.toString().padStart(2, '0'))
                        .replaceAll("{day}", day)
                        .replaceAll("{hours}", hours)
                        .replaceAll("{minutes}", minutes)
                        .replaceAll("{seconds}", seconds)
                        .replaceAll("{ms}", milliseconds)
                        value = value.replace(/user\[[^\]]*\]/, arg2);
                        value = value.trim()
                    }
                }
            }
            const regexForPageFunc = /page\[[^\]]*\]/;
            if(regexForPageFunc.test(value)) {
                var arg = value.split("[")[1].split("]")[0];
                if(arg == "title") {
                    let documentTitle
                    if(document.title == "") {
                        documentTitle = "Untitled";
                    }
                    else {
                        documentTitle = document.title;
                    }
                    value = value.replace(/page\[[^\]]*\]/, documentTitle);
                }
                if(arg == "ssl") {
                    if (window.location.protocol === "https:") {
                        value = value.replace(/page\[[^\]]*\]/, true);
                    } else {
                        value = value.replace(/page\[[^\]]*\]/, false);
                    }
                }
            }
            const regexForTrimFunc = /trim\[[^\]]*\]/;
            if(regexForTrimFunc.test(value)) {
                var arg1 = value.split("[")[1].split("]")[0].split(",")[0];
                var arg2 = value.split("[")[1].split("]")[0].split(",")[1];
                if (arg1.length > arg2) {
                    value = value.replace(/trim\[[^\]]*\]/, arg1.substring(0, arg2));
                }
            }
            const regexForRandFunc = /rand\[[^\]]*\]/;
            if(regexForRandFunc.test(value)) {
                var getAttrFunc = value.split("[")[1].split("]")[0];
                var value_1 = getAttrFunc.split(",")[0];
                var value_2 = getAttrFunc.split(",")[1];

                if(value_1 != undefined) {
                    if(value_2 != undefined) {
                        value_1 = parseInt(sdp.delete_spaces(value_1));
                        value_2 = parseInt(sdp.delete_spaces(value_2));
                    }
                    else {
                        value_2 = 9999999;
                    }
                }
                else {
                    value_1 = 0;
                }
                value = Math.floor(Math.random() * (value_1 - value_2 + 1)) + value_2
            }
            const regexForSmallCharFunc = /smallChar\[[^\]]*\]/;
            if(regexForSmallCharFunc.test(value)) {
                var FuncArg = value.split("[")[1].split("]")[0];
                value = value.replace(/smallChar\[[^\]]*\]/, FuncArg.toLowerCase())
            }
            const regexForBigCharFunc = /bigChar\[[^\]]*\]/;
            if(regexForBigCharFunc.test(value)) {
                var FuncArg = value.split("[")[1].split("]")[0];
                value = value.replace(/bigChar\[[^\]]*\]/, FuncArg.toUpperCase())
            }

            if(cond == "ADD") {
                if(id == "tag") {
                    if(target.includes("WITH")) {
                        var withTag = sdp.delete_spaces(target.split("WITH")[0]);
                        var withAttr = sdp.delete_spaces(target.split("WITH")[1]);
                        var withAttrName = sdp.delete_spaces(value.split("-")[2]);
                        console.log(withTag)
                        var createdTag = document.createElement(withTag);
                        doc.append(createdTag)
                        document.querySelector(withTag).setAttribute(withAttr, withAttrName)
                    }
                    else {
                        var createdTag = document.createElement(target)
                        doc.append(createdTag)
                    }
                }
                if(id == "meta") {
                    var createdMeta = document.createElement("meta");
                    if(target == "adaptive") {
                        createdMeta.name = "viewport";
                        createdMeta.content = "width=device-width, initial-scale=1";
                        doc.append(createdMeta)
                    }
                }
            }
            if(cond == "ADD-CONTENT") {
                var value1 = sdp.delete_spaces(value.split(",")[0]);
                var value2 = sdp.delete_spaces(value.split(",")[1].replaceAll('"', ""))
                var current_id = sdp.delete_spaces(value1.split("-")[0].split(",")[0])
                var current_target = sdp.delete_spaces(value1.split("-")[1].split(",")[0])
                if(current_id == "tag") {
                    var createdElement = document.createElement(value2.split("=>")[0]);
                    createdElement.textContent = value2.split("=>")[1];
                    createdElement.setAttribute("sdp-content", value2.split("=>")[1])
                    document.querySelector(current_target).append(createdElement)
                    createdElement.removeAttribute("sdp-content")
                }
                if(current_id == "id") {
                    var createdElement = document.createElement(value2.split("=>")[0]);
                    createdElement.textContent = value2.split("=>")[1];
                    document.querySelector("#" + current_target).append(createdElement)
                    createdElement.removeAttribute("sdp-content")
                }
                if(current_id == "class") {
                    var createdElement = document.createElement(value2.split("=>")[0]);
                    createdElement.textContent = value2.split("=>")[1];
                    document.querySelector("[sdp-class='" + current_target + "']").append(createdElement)
                    createdElement.removeAttribute("sdp-content")
                }
                if(current_id == "name") {
                    var createdElement = document.createElement(value2.split("=>")[0]);
                    createdElement.textContent = value2.split("=>")[1];
                    document.querySelector("[name='" + current_target + "']").append(createdElement)
                    createdElement.removeAttribute("sdp-content")
                }
            }
            if(cond == "REMOVE-CONTENT") {
                var value1 = value.split(",")[0]
                var value2 = value.split(",")[1].replaceAll('"', "")
                var current_id = value1.split("-")[0].split(",")[0]
                var current_target = value1.split("-")[1].split(",")[0]
                if(current_id == "tag") {
                    var current_tag = document.querySelectorAll(value2.split("=>")[0])
                    for(let p = 0; p < current_tag.length; p++) {
                        if(current_tag[p].innerText == value2.split("=>")[1]) {
                            current_tag[p].remove()
                        }
                    }
                }
                if(current_id == "id") {
                    var current_tag = document.querySelectorAll("#" + value2.split("=>")[0])
                    for(let p = 0; p < current_tag.length; p++) {
                        if(current_tag[p].innerText == value2.split("=>")[1]) {
                            current_tag[p].remove()
                        }
                    }
                }
                if(current_id == "class") {
                    var current_tag = document.querySelectorAll("[sdp-class='" + value2.split("=>")[0] + "']")
                    for(let p = 0; p < current_tag.length; p++) {
                        if(current_tag[p].innerText == value2.split("=>")[1]) {
                            current_tag[p].remove()
                        }
                    }
                }
                if(current_id == "name") {
                    var current_tag = document.querySelectorAll("[name='" + value2.split("=>")[0] + "']")
                    for(let p = 0; p < current_tag.length; p++) {
                        if(current_tag[p].innerText == value2.split("=>")[1]) {
                            current_tag[p].remove()
                        }
                    }
                }
            }
            if(cond == "ADD-ATTR") {
                var value1 = value.split(",")[0]
                var value2 = value.split(",")[1].replaceAll('"', "")
                var current_id = value1.split("-")[0].split(",")[0]
                var current_target = value1.split("-")[1].split(",")[0]
                
                if(current_id == "tag") {
                    var element = document.querySelector(current_target)
                    element.setAttribute(value2.split("=>")[0], value2.split("=>")[1])
                }
                if(current_id == "id") {
                    var element = document.querySelector("#" + current_target)
                    element.setAttribute(value2.split("=>")[0], value2.split("=>")[1])
                }
                if(current_id == "class") {
                    var element = document.querySelector("*[sdp-class='" + current_target + "']")
                    element.setAttribute(value2.split("=>")[0], value2.split("=>")[1])
                }
                if(current_id == "name") {
                    var element = document.querySelector("*[name='" + current_target + "']")
                    element.setAttribute(value2.split("=>")[0], value2.split("=>")[1])
                }
            }
            if(cond == "REMOVE-ATTR") {
                var value1 = value.split(",")[0]
                var value2 = value.split(",")[1].replaceAll('"', "")
                var current_id = value1.split("-")[0].split(",")[0]
                var current_target = value1.split("-")[1].split(",")[0]
                
                if(current_id == "tag") {
                    var element = document.querySelector(current_target)
                    element.removeAttribute(value2.split("=>")[0])
                }
                if(current_id == "id") {
                    var element = document.querySelector("#" + current_target)
                    element.removeAttribute(value2.split("=>")[0])
                }
                if(current_id == "class") {
                    var element = document.querySelector("*[sdp-class='" + current_target + "']")
                    element.removeAttribute(value2.split("=>")[0])
                }
                if(current_id == "name") {
                    var element = document.querySelector("*[name='" + current_target + "']")
                    element.removeAttribute(value2.split("=>")[0])
                }
            }
            if(cond == "CONNECT") {
                var args = value.split(",");
                for(i = 0; i < args.length; i++) {
                    var arg = args[i].trim();
                    if(arg == "yjs") {
                        var script = document.createElement("script");
                        script.src = 'https://dev.yurba.me/cl/web/yjs/yjs.js';
                        script.type = 'text/javascript';
                        document.body.append(script)
                    }
                    if(arg == "icodrive") {
                        var script = document.createElement("script");
                        script.src = 'https://cdn.yurba.me/static/icodrive/icons.js';
                        script.type = 'text/javascript';
                        document.body.append(script)
                    }
                    if(arg == "jquery") {
                        var script = document.createElement("script");
                        script.src = 'https://code.jquery.com/jquery-3.7.0.js';
                        script.type = 'text/javascript';
                        document.body.append(script)
                    }
                    if(arg == "bootstrap") {
                        var link = document.createElement("link");
                        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
                        link.rel = 'stylesheet';
                        document.body.append(link)

                        var script = document.createElement("script");
                        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
                        script.type = 'text/javascript';
                        document.body.append(script)
                    }
                    if(arg == "bootstrap-icons") {
                        var link = document.createElement("link");
                        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css';
                        link.rel = 'stylesheet';
                        document.body.append(link)
                    }
                }
            }
            const regexForGet = /GET\[[^\]]*\]/;
            if(regexForGet.test(cond)) {
                var getVar = sdp.delete_spaces(cond.split("GET[")[1].split("]")[0])
                var userLink = "";
                if(value.includes("USE-HTTPS")) {
                    var isHttps = value.split(",")[1].split("USE-HTTPS")[1].split("=")[1];
                    userLink = "https://" + value.split(",")[0];
                    if(isHttps == "false") {
                        userLink = "http://" + value.split(",")[0]; 
                    }
                }
                else {
                    userLink = "http://" + value;
                }
                if(value.includes("FILE")) {
                    var isFile = value.split(",")[1].split("FILE")[1].split("=")[1].replace("/", "");
                    userLink = value.split(",")[0];
                    if(isFile == "false") {
                        userLink = "http://" + value.split(",")[0]; 
                    }
                }
                else {
                    userLink = "http://" + value;
                }
                userLink = sdp.delete_spaces(userLink);

                function replaceExpression(expression) {
                    return expression.replace(/(\w+)(?=\.|$)/g, '["$1"]').replaceAll(".", "");
                }                   
    
                value = value.replaceAll("{" + getVar + "}", get_api(userLink, "mainInformation"))
                for(let i = 0; i < script.length; i++) {
                    script[i] = script[i].trim()
                    var matches = script[i].match(new RegExp('{' + getVar + '\\.([^}]+)}')); // Находим текст внутри фигурных скобок, содержащий определенное слово

                    if (matches) {
                      var variable = matches[1]; // Получаем текст внутри фигурных скобок
                  
                      var parts = variable.split('.'); // Разделяем текст на части по точке
                      var otherWords = parts.slice(0); // Получаем остальные части
                      script[i] = script[i].replaceAll("{" + getVar + "." + variable + "}", get_api(userLink, variable))
                    }
                }
            }
            const regexForSay = /SAY\[[^\]]*\]/;
            if (regexForSay.test(cond)) {
                var sayType = cond.split("SAY[")[1].split("]")[0];
                if(sayType == "DEFAULT") {
                    console.log(value);
                }
                if(sayType == "WARN") {
                    console.warn(value);
                }
                if(sayType == "ERR") {
                    console.error(value);
                }
            }
            const regexForGlobalVariable = /VAR\[[^\]]*\]/;
            if(regexForGlobalVariable.test(cond)) {
                var varValue = sdp.delete_spaces(cond.split("VAR[")[1].split("]")[0]);
                for(var svar in sysVars) {
                    if("{" + varValue + "}" == svar) {
                        if(sdp.errors == true) {
                            console.error("SDPScript: {" + varValue + "} already exists as '" + sysVars[svar] + "'. This variable is already set by default")
                        }
                    }
                    else {
                        for(let s = 0; s < script.length; s++) {
                            script[s] = script[s].replaceAll("{" + varValue + "}", sdp.delete_spaces(value))
                        }
                    }
                }
            }
            const regexForLink = /LINK\[[^\]]*\]/;
            if(regexForLink.test(cond)) {
                var linkType = cond.split("LINK[")[1].split("]")[0]
                var link = document.createElement("link")
                var userLink = '';
                if(value.includes("USE-HTTPS")) {
                    var isHttps = value.split(",")[1].split("USE-HTTPS")[1].split("=")[1];
                    userLink = "https://" + value.split(",")[0];
                    if(isHttps == "false") {
                        userLink = "http://" + value.split(",")[0]; 
                    }
                }
                else {
                    userLink = "http://" + value;
                }
                if(linkType == "CSS") {
                    link.href = userLink;
                    link.rel = "stylesheet";
                }
                if(linkType == "JS") {
                    link = document.createElement("script");
                    link.src = userLink;
                    link.type = "text/javascript";
                }
                if(linkType == "SDP") {
                    link.href = userLink;
                    link.rel = "sdp";
                }
                document.body.append(link)
            }
        }
        const regexForFile = /FILE\[[^\]]*\]/;
        if(regexForFile.test(cond)) {
            var linkType = cond.split("FILE[")[1].split("]")[0]
            var link = document.createElement("link")

            if(linkType == "CSS") {
                link.href = value;
                link.rel = "stylesheet";
            }
            if(linkType == "JS") {
                link = document.createElement("script");
                link.src = value;
                link.type = "text/javascript";
            }
            if(linkType == "SDP") {
                link.href = value;
                link.rel = "sdp";
            }
            document.body.append(link)
        }
        const regexForPage = /PAGE\[[^\]]*\]/;
        if(regexForPage.test(cond)) {
            var pageType = sdp.delete_spaces(cond.split("PAGE[")[1].split("]")[0])
            if(pageType == "TITLE") {
                document.title = value;
            }
            if(pageType == "URL") {
                location.href = "https://" + sdp.delete_spaces(value);
            }
        }
        if(cond == "INCLUDE-HTML") {
            var includeTag = value.split(",")[0];
            var includeFile = value.split(",")[1];
            if(includeTag == undefined) {
                includeTag = "*";
            }
            console.log(includeTag, includeFile)
            if(includeTag == "none" && includeTag == "undefined") {
                var doc = document.createElement("sdp-include");
                document.body.append(doc)

                fetch(includeFile)
                .then(response => response.text())
                .then(html => {
                    document.querySelector('sdp-include').innerHTML += html;
                    for(let i = 0; i < document.querySelectorAll("sdp").length; i++) {
                        var sdpTag = document.querySelectorAll("sdp")[i];
                        sdpTag.setAttribute("hidden", true)
                    }
                });
            }
            else {
                fetch(includeFile)
                .then(response => response.text())
                .then(html => {
                    document.querySelector(includeTag).innerHTML += html;
                    for(let i = 0; i < document.querySelectorAll("sdp").length; i++) {
                        var sdpTag = document.querySelectorAll("sdp")[i];
                        sdpTag.setAttribute("hidden", true)
                    }
                });
            }
        }
    }
}
function sdp_content() {
    var tags = document.querySelectorAll("[sdp-content]");
    for(let t = 0; t < tags.length; t++) {
        var clearFunction = tags[t].getAttribute("sdp-content").replaceAll(/{([^}]+)}/g, (match, p1) => eval(p1));
        var tag = tags[t];
        var isHiddenAfter = tag.hasAttribute("sdp-hidden");
        var result = clearFunction
        tag.innerText = result
        if(isHiddenAfter == true) {
            for(let a = 0; a < tag.attributes.length; a++) {
                var names = tag.getAttributeNames()
                for(let n = 0; n < names.length; n++) {
                    tag.removeAttribute(names[n])
                }
            }
        }
    }
}
sdp_content()

function sdp_import_css() {
    var tag = document.querySelector("sdp");
    var style_tag = document.querySelector("style");
    if(tag.textContent.includes("@css")) {
        var len = (tag.textContent.match(/@css/g) || []).length;
        for(let g = 1; g < len + 1; g++) {
            var content = tag.textContent.split("@css(")[g].split(")")[0].replaceAll('"', "").replaceAll("'", "")
            var finished = "@import url('" + sdp.delete_spaces(content) + "')\n";
            style_tag.textContent = finished + style_tag.textContent;
        }
    }
}

function sdp_media() {
    // Проверяем, что тег <sdp> и <style> существуют
    var tag = document.querySelector("sdp");
    var style_tag = document.querySelector("style");
    if (!tag || !style_tag) {
      return;
    }
  
    var tag_content = tag.textContent;
  
    // Находим все совпадения @media в строке
    var mediaMatches = tag_content.matchAll(/@media\s+([^[\]]+)\s+\[\s*([\s\S]+?)\s*\]/gm);
    for (const match of mediaMatches) {
      const firstParams = match[1].trim();
      const secondParams = match[2].trim();
  
      // Заменяем символы $, ( и ) на ., { и } соответственно
      var mediaStyles = secondParams.replaceAll("$", ".").replaceAll("(", "{").replaceAll(")", "}")
  
      // Добавляем новый @media стиль в тег <style>
      style_tag.textContent = style_tag.textContent + "\n@media " + firstParams + "\n{\n " + sdp.values_convert(sdp.values_dot_convert(mediaStyles)) + "\n}\n"
    }
}
function sdp_templates() {
    var tag = document.querySelector("sdp");
    if(tag.textContent.includes("_templates")) {
        const str = tag.textContent;
        const templates = str.split("_templates(")[1].split(")")[0]
        var column = templates.split("=")
        for(let i = 1; i < column.length;i++) {
            var template_name = column[i].split("[")[0];
            var template_content = column[i].split("[")[1].split("]")[0].trim();
            tag.textContent = tag.textContent.replaceAll("=" + template_name, template_content)
        }
    }
}

let sdp_imported;

async function sdp_rel() {
  const link = document.querySelectorAll("link[rel='sdp']");
  if (link.length > 0) {
    sdp_imported = document.createElement("sdp-imported");
    sdp_imported.hidden = true;
    document.querySelector("*").append(sdp_imported);
  }

  for (let l = 0; l < link.length; l++) {
    const linkContent = link[l].getAttribute("href").replaceAll("//", "https://");
    const text = await readTxt(linkContent);
    const textNode = document.createTextNode(text);
    sdp_imported.appendChild(textNode);
  }
}

const readTxt = async (linkContent) => {
  const response = await fetch(linkContent);
  const text = await response.text();
  return text;
};

sdp.vars = function(classCode) {
    // Ищем список переменных в строке и извлекаем их
    const varRegex = /_vars\(([^)]+)\)/;
    const varMatch = classCode.match(varRegex);
    const vars = {};
    if (varMatch) {
      const varStr = varMatch[1];
      const varList = varStr.split(";").map((v) => v.trim());
      for (const v of varList) {
        const [name, value] = v.split(":").map((s) => s.trim());
        vars[name] = value;
      }
    }
  
    // Заменяем переменные в классе
    const classRegex = /\$([\w-]+)\(([^)]*)\)/g;
    const replacedCode = classCode.replace(classRegex, (match, className, args) => {
      const argList = args.split(";").map((a) => a.trim());
      const replacedArgs = argList.map((arg) => {
        // Ищем переменные в аргументах и заменяем их на значения
        const argRegex = /\{([\w-]+)\}/g;
        const replacedArg = arg.replace(argRegex, (match, varName) => {
          return vars[varName] || "";
        });
        return replacedArg;
      });
      return `$${className}(${replacedArgs.join("; ")});`;
    });
  
    return replacedCode;
}
sdp.vars_visible = function(input) {
    let output = input;

    // Заменяем все переменные вида {variable} на var(--variable)
    output = output.replace(/\{([^\}]+)\}/g, (match, variable) => {
      return `var(--${variable.trim()})`;
    });
  
    return output;
}

sdp.apply = function() {
    var tag = document.getElementsByTagName("sdp")[0];
    var style_tag = document.querySelector("style");
    tag.style.display = "none";
    var classes = document.querySelectorAll("*[sdp-class]");
    var fullCode = tag.textContent

    if(sdp.msg == true) {
        console.log("Classes: " + classes.length)
    }
    for(let i = 0; i < classes.length; i++) {
        var sdp_class = classes[i].getAttribute("sdp-class");
            if(fullCode.includes("_vars")) {
                var current_variableValue = tag.textContent.split("_vars")[1].split("(")[1].split(")")[0];
                current_variableValue = current_variableValue.split(";")
                var convert_variables_apply = function() {
                    for(let r = 0; r < current_variableValue.length - 1; r++) {
                        var variable = current_variableValue[r].split(":")[0]
                        var variable_value = current_variableValue[r].split(":")[1]
                        var converted = sdp.delete_spaces(variable)
                        converted = '--' + converted;
                        document.documentElement.style.setProperty(converted, variable_value)
                    }
                }
                if(sdp.visible_vars == true) {
                    convert_variables_apply()
                }
            }
            
        var this_class = document.querySelector("*[sdp-class='" + sdp_class + "']");

        sdp.style = function() {
            console.log("This is none")
        }

        sdp.style.getClass = function(className) {
            var thisClass = tag.textContent.split(className)[1].split("(")[1].split(")")[0];
            thisClass = sdp.delete_spaces(thisClass)
        }
            
        this_class.removeAttribute("sdp-class");
        this_class.setAttribute("class", sdp_class);
    }
    if(fullCode.includes("$")) {
        // const pattern = /\$(\w+)(?:::(\w+))?\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g;
        const pattern = /\$(\w+(?:::\w+)?)((?:::(?:selector|tag|class|id)\[[^\]]*\])*)\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g;
        let match;
        if(sdp.visible_vars == true) {
            fullCode = sdp.vars_visible(fullCode)
        }
        else {
            fullCode = sdp.vars(fullCode)
        }
        while (match = pattern.exec(fullCode)) {
            var sdp_class = match[1]
            var pseudoElement = match[2] || undefined;
            var sdp_classValue = match[3]
            console.log(sdp_class)
            if(pseudoElement != undefined) {
                if(pseudoElement.includes("::selector")) {
                    var selector_content = pseudoElement.split("::selector")[1]
                    var selector_content_foruse = pseudoElement.split("::selector")[1].replace(/^.*\[(.*?)].*$/, "$1").replaceAll('"', "");
                    var selector = selector_content;
                    pseudoElement = pseudoElement.replace(/::selector\[[^\]]*\]/g, "")
                    sdp_class = sdp_class + "::off";
                    sdp.selector_to_attr = function(str) {
                        return str.replace(/(\w+):(\w+)/g, "[$1='$2']")
                    }
                    var selectorClass = sdp_class.replace(":off", "").replace(":", "")
                    var structure = document.querySelector("*");
                    var selector_query = structure.querySelectorAll("." + selectorClass + " " + sdp.selector_to_attr(selector_content_foruse))
                    if(selector_query.length < 1) {
                        selector_query = structure.querySelectorAll("." + selectorClass + "" + sdp.selector_to_attr(selector_content_foruse))
                    }
                    if(selector_content_foruse.includes("~")) {
                        selector_query = structure.querySelectorAll(sdp.selector_to_attr(selector_content_foruse.replace("~", "")) + " ." + selectorClass)
                        if(selector_query.length < 1) {
                            selector_query = structure.querySelectorAll(sdp.selector_to_attr(selector_content_foruse.replace("~", "")) + "." + selectorClass)
                        }
                    }
                    if(selector_content_foruse.includes("@")) {
                        selector_query = structure.querySelectorAll(sdp.selector_to_attr(selector_content_foruse.replace("@", "")) + " ." + selectorClass)
                        if(selector_query.length < 1) {
                            selector_query = structure.querySelectorAll(sdp.selector_to_attr(selector_content_foruse.replace("@", "")) + "." + selectorClass)
                        }
                    }
                    for(let i = 0; i < selector_query.length; i++) {
                        selector_query[i].style.cssText = sdp.delete_spaces(sdp.values_convert(sdp_classValue))
                    }
                }
                if(pseudoElement.includes("::tag")) {
                    var selector_content = pseudoElement.split("::tag")[1]
                    var selector_content_foruse = pseudoElement.split("::tag")[1].replace(/^.*\[(.*?)].*$/, "$1");
                    var selector = selector_content;
                    pseudoElement = pseudoElement.replace(/::tag\[[^\]]*\]/g, "");
                    console.log(selector)
                    sdp_class = sdp_class + " " + selector_content_foruse.replaceAll('"', "")
                    console.log(sdp_class)
                }
            }
            if (!sdp_classValue.endsWith(')')) {
                sdp_classValue += ')';
            }
            if(pseudoElement != undefined) {
                sdp_class = sdp_class + ":" + pseudoElement
            }
            else {
                sdp_class = sdp_class;
            }
            sdp_class = sdp_class.replaceAll("::", ":")
            sdp_classValue = sdp_classValue.replace(/\);?\s*$/, '')
            sdp_classValue = sdp.values_convert(sdp_classValue)
            if(sdp_classValue.includes("width:")) {
                if(sdp_classValue.includes("--width")) {
                    var thisWidth = sdp_classValue.split("width:")[1].split(";")[0]
                    sdp_classValue = sdp_classValue.replaceAll("--width", thisWidth)
                }
            }
            if(sdp_classValue.includes("height:")) {
                if(sdp_classValue.includes("--height")) {
                    var thisHeight = sdp_classValue.split("height:")[1].split(";")[0]
                    sdp_classValue = sdp_classValue.replaceAll("--height", thisHeight)
                }
            }
            if(sdp_class.includes(":off")) {
                style_tag.textContent += "";
            }
            else {
                style_tag.textContent += "." + sdp_class + " {\n" + sdp_classValue + "\n}\n";
            }
        }
    }
}
// function sdp_vars() {
//     var tag = document.querySelector("sdp");
//     var style_tag = document.querySelector("style");
//     tag.style.display = "none";

//     var classes = document.querySelectorAll("*[sdp-class]");
//     for(let i = 0; i < classes.length; i++) {
//         var sdp_class = classes[i].getAttribute("sdp-class");
//         var sdp_classValue = document.querySelector("sdp").textContent.split("$" + sdp_class)[1].split("(")[1].split(")")[0].replace(" ", '')
//         var this_class = document.querySelector("*[sdp-class='" + sdp_class + "']");
//         this_class.removeAttribute("sdp-class");
//         this_class.setAttribute("class", sdp_class)
//         console.log("$" + sdp_class + " = " + sdp_classValue)
//     }
// }
// sdp_vars()
sdp.sdp_doubles = function() {
    var str = document.querySelector("sdp").textContent
    const regex = /\$[\w-]+(?:::[\w-]+)?/g;
    const classes = {};

    let match;
    while ((match = regex.exec(str)) !== null) {
        const className = match[0];
        const isPseudoClass = /::/.test(className);
        const baseClassName = isPseudoClass ? className.replace(/::.*/, '') : className;
        classes[baseClassName] = (classes[baseClassName] || new Set());
        classes[baseClassName].add(className);
    }

    for (const className in classes) {
    const classSet = classes[className];
    const style_tag_content = style_tag.textContent
        if (classSet.size > 1) {
            classSet.forEach((classItem) => 
                style_tag.textContent = style_tag_content + classItem.replaceAll("$", ".").replaceAll("::", ":") + " {" + str.split(classItem + "(")[1].split(")")[0] + "}\n"
            );
        }
    }

}
sdp_rel().then(() => {
    var tag = document.querySelector("sdp")
    tag.textContent += sdp_imported.textContent;
    sdp_templates()
    sdp_import_css()
    sdp_script()
    sdp_imported.remove()
    sdp.apply()
    sdp_animation()
    sdp_media()
});
