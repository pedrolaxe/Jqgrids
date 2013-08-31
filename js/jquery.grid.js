/*
 ***********************************
 * Jquery Windows 8 Style          *
 * Author: Pedro Laxe              *
 * http://www.phpsec.com.br        *
 * GNU General Public License (GPL)*
 ***********************************
*/
(function ($) {
    $.fn.AddCaixaGrid = function (id, theme, imagem, texto, link) {
        var el = $(this);
        var html_code = "<div";
        if (id != '') {
            html_code += " id='" + id + "'";
        }
        if (link != '') {
            html_code += " onclick='" + link + "'";
        }
        html_code += " class='grid-btn grid gridsingle " + theme + "'>\r\n";
        html_code += "\t<div class='imgsimple'><img src='" + imagem + "' alt='" + texto + "' /></div>\r\n";
        html_code += "\t<span>" + texto + "</span>\r\n";
        html_code += "</div>\r\n";

        el.append(html_code);
    };

    $.fn.AddCaixaDuplaGrid = function (id, theme, imagem, texto, link) {
        var el = $(this);
        var html_code = "<div";
        if (id != '') {
            html_code += " id='" + id + "'";
        }
        if (link != '') {
            html_code += " onclick='" + link + "'";
        }
        html_code += " class='grid gridduas " + theme + "'>\r\n";
        html_code += "\t<div class='imgdouble'><img src='" + imagem + "' alt='" + texto + "' /></div>\r\n";
        html_code += "\t<span>" + texto + "</span>\r\n";
        html_code += "</div>\r\n";

        el.append(html_code);
    };

    $.fn.AddTextoCaixa = function(id, theme, imagem, texto, link) {
        var el = $(this);
        var html_code = "<div";
        if (id != '') {
            html_code += " id='" + id + "'";
        }
        if (link != '') {
            html_code += " onclick='" + link + "'";
        }
        html_code += " class='grid gridsingle " + theme + "'>\r\n";
        html_code += "\t<div class='imglabeled'><img src='" + imagem + "' alt='" + texto + "' /></div>\r\n";
        html_code += "\t<div class='gridlabel'>" + texto + "</div>\r\n";
        html_code += "</div>\r\n";

        el.append(html_code);
    };
	
	$.fn.AddDuasCaixas = function(id, theme, imagem, texto, link, theme_trailer) {
		var el = $(this);
        var html_code = "<div";
        if (id != '') {
            html_code += " id='" + id + "'";
        }
        if (link != '') {
            html_code += " onclick='" + link + "'";
        }
        html_code += " class='grid griddouble " + theme + "'>\r\n";
        html_code += "\t<div class='imgdouble'><img src='" + imagem + "' alt='" + texto + "' /></div>\r\n";
        html_code += "\t<div class='grid-destaque-rodape " + theme_trailer + "'><span>" + texto + "</span></div>\r\n";
        html_code += "</div>\r\n";

        el.append(html_code);	
	};
	
	$.fn.AddDuasCaixasComBG = function(id, bg_image, texto, link, theme_trailer) {
		var el = $(this);
        var html_code = "<div";
        if (id != '') {
            html_code += " id='" + id + "'";
        }
        if (link != '') {
            html_code += " onclick='" + link + "'";
        }
        html_code += " class='grid griddouble' style='background:url(" + bg_image + ");'>\r\n";
        html_code += "\t<div class='grid-destaque-rodape " + theme_trailer + "'><span>" + texto + "</span></div>\r\n";
        html_code += "</div>\r\n";

        el.append(html_code);	
	};	
})(jQuery);