/* Datos de prueba simples */

var testData = {
	field1: 123,
	field2: 'Kash'
};

var hello = sayHello();

hello + ' ' + testData.field2;
//return hello + ' ' + testData.field2;

/* Cálculo de la edad de una persona */

var kashData = {
    Name: 'Kash',
    BirthDate: '03-21-1977'
};

function calculateAge(dateString) {
    console.log(dateString);
    var today = new Date();
    console.log(today);
    var birthDate = new Date(dateString);
    console.log(birthDate);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }

    console.log(age);

    // la función sayHello debe estar definida entre las funciones de librería (index.js)

    return sayHello() + ' Edad de ' + kashData.Name + ': ' + age + ' años';
    //return ' Edad de ' + kashData.Name + ': ' + age + ' años';
}

var resp = calculateAge(kashData.BirthDate);

console.log(resp);

resp;