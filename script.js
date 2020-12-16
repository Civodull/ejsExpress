function buttonOn() {
    if (confirm('CONFIRMEZ-VOUS D ACTIVER LA VANE ?')) {
        // window.open('page.html', '', '');
        document.getElementById('etat').src = 'im5';
    }

}

function buttonOff() {
    if (confirm('CONFIRMEZ-VOUS DE DESACTIVER LA VANE ?')) {
        document.getElementById('etat').src = 'im4';
    }
}

function dButtonOn() {
    if (confirm('CONFIRMEZ-VOUS D ACTIVER LA VANE ?')) {
        // window.open('page.html', '', '');
        document.getElementById('etat1').src = 'im5';
    }

}

function dButtonOff() {
    if (confirm('CONFIRMEZ-VOUS DE DESACTIVER LA VANE ?')) {
        document.getElementById('etat1').src = 'im4';
    }
}

function tButtonOn() {
    if (confirm('CONFIRMEZ-VOUS D ACTIVER LA VANE ?')) {
        // window.open('page.html', '', '');
        document.getElementById('etat2').src = 'im5';
    }

}

function tButtonOff() {
    if (confirm('CONFIRMEZ-VOUS DE DESACTIVER LA VANE ?')) {
        document.getElementById('etat2').src = 'im4';
    }
}

function qButtonOn() {
    if (confirm('CONFIRMEZ-VOUS D ACTIVER LA VANE ?')) {
        // window.open('page.html', '', '');
        document.getElementById('etat3').src = 'im5';
    }
}

function qButtonOff() {
    if (confirm('CONFIRMEZ-VOUS DE DESACTIVER LA VANE ?')) {
        document.getElementById('etat3').src = 'im4';
    }
}
//creation d'une fonction d'allumage et d'eteignage deuxieme methode

function etatButton(valeurRecu) {
    var etatImage;
    if (valeurRecu == 1) {
        etatImage = "im4";
    } else
        etatImage = "im5";
    //etatImage ne peut pas afficher l'image sur la pasge html pour le faire 
    //il faut rajouter la balise img et recuperer son id
    document.getElementById('etat').src = etatImage;
}
var list = {
    Temperature: 28,
    Humidity: 122,
};

//document.getElementById('zone1Tem').innerHTML = list.Temperature;
document.getElementById('zone1Hum').innerHTML = list.Humidity;
var list1 = {
    Temperature: 38,
    Humidity: 150,
};
document.getElementById('zone2Tem').innerHTML = list1.Temperature;
document.getElementById('zone2Hum').innerHTML = list1.Humidity;
var list2 = {
    Temperature: 28,
    Humidity: 500,
};
document.getElementById('zone3Tem').innerHTML = list2.Temperature;
document.getElementById('zone3Hum').innerHTML = list2.Humidity;
var list3 = {
    Temperature: 32,
    Humidity: 100,
};
document.getElementById('zone4Tem').innerHTML = list3.Temperature;
document.getElementById('zone4Hum').innerHTML = list3.Humidity;

fetch("donnee")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#region1').innerText = data[0].region;
    });


$(document).ready(function() {
    $.getJson('meteo.json', function(data) {
        var donnees = '';
        $.each(data, function(key, value) {
            donnees += '<span>' + value.id + '</span>';
        });
        $('#region1').append(donnees);
    });
});


//document.getElementById('region1').innerHTML = valeurJson[0].region;