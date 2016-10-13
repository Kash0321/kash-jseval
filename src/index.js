require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap');
require('bootstrap/dist/css/bootstrap-theme');
require("./css/style");

$(function() {
    $('#evalBtn').click(function() {
        editAreaLoader.execCommand('expressionInput', 'EA_submit');
        //editAreaLoader.execCommand('expressionInput', 'toggle_on');

        //editAreaLoader.execCommand('expressionInput', 'submit',  null);

        withEval();
        withNewFunction();
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