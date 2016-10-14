require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap');
require('bootstrap/dist/css/bootstrap-theme');
require("./css/style");

$(function() {
    editAreaLoader.init({
        id : "expressionInput"	    // textarea id
        ,syntax: "js"			    // syntax to be uses for highgliting
        ,start_highlight: true	    // to display with highlight mode on start-up
        ,language: "es"
        ,replace_tab_by_spaces: 3
        ,allow_toggle: false
    });

    $('#evalBtn').click(function() {
        editAreaLoader.hide('expressionInput');
        editAreaLoader.show('expressionInput');

        withEval();
        withNewFunction();

        $('#result-dialog').modal();
    });
});

function withEval() {
    $('#resultPadEval').html('');

    var exp = $('#expressionInput').val();

    try {
        var result = eval(exp);
        $('#resultPadEval').html(result);
    }
    catch(err) {
        $('#resultPadEval').html('<span class="">Error: ' + err.message + '</span');
    }
};

function withNewFunction() {
    $('#resultPadNewFunction').html('');

    var exp = $('#expressionInput').val();

    try {
        var fx = new Function(exp);
        $('#resultPadNewFunction').html(fx);
    }
    catch(err) {
        $('#resultPadNewFunction').html('Error: ' + err.message);
    }
};

function sayHello() {
    return ('Hey!');
};