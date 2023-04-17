var sdp = {};
sdp.msg = false;
sdp.visible_vars = true;
sdp.version = "1.0";

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

            .replaceAll(/\bt-a\b/g, "text-align")
            .replaceAll(/\bt-s\b/g, "text-shadow")
            .replaceAll(/\bt-d\b/g, "text-decoration")
            .replaceAll(/\bt-of\b/g, "text-overflow")
            .replaceAll(/\bt-rend\b/g, "text-rendering")
            .replaceAll(/\binner\b/g, "content")
            .replaceAll(/\bl-h\b/g, "line-height")
            .replaceAll(/\btrans\b/g, "transition")
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
sdp_animation()

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
    if(tag.textContent.includes("_script")) {
        var inScript = sdp.delete_spaces(tag.textContent.split("_script(")[1].split(")")[0]);
        var script = inScript.split(";")
        for(let i = 0; i < script.length - 1; i++) {
            var cond = script[i].split(":")[0]
            var value = script[i].split(":")[1]
            var id = value.split("-")[0];
            var target = value.split("-")[1];
            var doc = document.querySelector("*");
            if(cond == "ADD") {
                if(id == "tag") {
                    var createdTag = document.createElement(target)
                    doc.append(createdTag)
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
                var value1 = value.split(",")[0]
                var value2 = value.split(",")[1].replaceAll('"', "")
                var current_id = value1.split("-")[0].split(",")[0]
                var current_target = value1.split("-")[1].split(",")[0]
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
    var tag = document.querySelector("sdp");
    var style_tag = document.querySelector("style");
    var tag_content = tag.textContent;

    if(tag_content.includes("@media")) {
        var media = "@media" + tag.textContent.split("@media")[1]
        const match = media.match(/^@media\s+([^[\]]+)\s+\[\s*([\s\S]+?)\s*\]$/m);
        if (match) {
            const firstParams = match[1].trim();
            const secondParams = match[2].trim();
            style_tag.textContent = style_tag.textContent + "\n@media " + firstParams + "\n{\n " + sdp.values_convert(sdp.values_dot_convert(secondParams.replaceAll("$", ".").replaceAll("(", "{").replaceAll(")", "}"))) + "\n}\n"
        } else {
            console.error('Media query string does not match expected format');
        }
    }
}
sdp_media()
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
    sdp_imported.remove()
    sdp.apply()
    sdp_script()
});
