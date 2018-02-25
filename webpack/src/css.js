import $ from 'jquery';

import '../asset/1.css';

import a from '../asset/a.png'

$(function(){
    $('.box').on('click',function(){
        // $(this).css('background','red');
        // $(this).addClass('active')
        $(this).css({
            width:'400px',
            height:'180px',
            background:`url(${a})`
        })
    })
})