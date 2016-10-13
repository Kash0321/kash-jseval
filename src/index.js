require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap');
require('bootstrap/dist/css/bootstrap-theme');
require("./css/style");

$(function() {
    $('#evalBtn').click(function() {
        withEval();
        withNewFunction();
    });
});

function withEval() {
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
    var exp = $('#expressionInput').val();

    try {
        var fx = new Function(exp);
        console.log('*** FX --> ' + fx);
        $('#resultPadNewFunction').html(fx);
    }
    catch(err) {
        $('#resultPadNewFunction').html('Error: ' + err.message);
    }
};

function sayHello() {
    return ('Hey!');
};