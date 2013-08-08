$(document).ready(function(){
    var nuevos = {};
    url_id = "http://www.etnassoft.com/api/v1/get/?id=589&callback=?";
    url_newest = "http://openlibra.com/api/v1/get/?criteria=newest&num_items=10&callback=?";
    //return;
    function get_newest () {
        $.getJSON(url_newest, function(data){
            $("#lst_newest").html("");
            $.each(data, function(i, item) {
                console.log(i , item);
                nuevos['libro_' + item['ID']] = item;
                strHTML = '\n<li>\n';
                strHTML += '<a class="detalle" id="libro_' + item["ID"] + '" href="#">\n';
                strHTML += '<aside><img src="' + item["thumbnail"] + '"></aside>\n';
                strHTML += '<p>' + item["title"] + '</p>\n';
                strHTML += '<p>' + item["author"] + '</p>\n';
                strHTML += '</a>\n';
                strHTML += '</li>';
                $("#lst_newest").append(strHTML);
                $("#libro_" + item["ID"]).click(function(){
                    console.log(nuevos);
                    console.log(nuevos[this.id]);
                    $('#detalle_titulo').html(nuevos[this.id]['title'])
                    $('#detalle_img').prop('src', nuevos[this.id]['thumbnail'])
                    $('#detalle_autor').html(nuevos[this.id]['author'])
                    $('#detalle_publi').html(nuevos[this.id]['publisher_date'])
                    $('#detalle_edit').html(nuevos[this.id]['publisher'])
                    $('#detalle_paginas').html(nuevos[this.id]['pages'])
                    $('#detalle_idioma').html(nuevos[this.id]['language'])
                    $('#detalle_desc').html(nuevos[this.id]['content_short'])
                    $('#detalle_pdf').prop('href', nuevos[this.id]['url_read_online'])
                    $('#detalle_descarga').prop('href', nuevos[this.id]['url_download'])
                    $('#detalle').slideDown();
                    $('#inicio').slideUp();
                });
            });
        });
    }
    $('.go_inicio').click(function(){
        $('#inicio').slideDown();
        $(this).parent().parent().slideUp();
    });
});
