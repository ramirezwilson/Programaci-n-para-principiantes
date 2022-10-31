export let weekDay: number = 5; // 1 = Lunes, 2 = Martes, 3 = Miercoles
const sayDay = function () {    
    switch (weekDay) {
        case 1:
            console.log('Is Monday');
            break;
        case 2: 
            console.log('Is Tuesday');
            break;
        case 3: 
            console.log('Is Wednesday');
            break;
        case 4: 
            console.log('Is Thursday');
            break;
        case 5: 
            console.log('Is Friday');
            break;
        case 6: 
            console.log('Is Saturday');
            break;
        case 7: 
            console.log('Is Sunday');
            break;
    }
}

if ( weekDay <= 0 || weekDay >= 8 ) {
    // console.log('Este Dia de la semana no es permitido.');
    throw new Error('Este Dia de la semana no es permitido');
    
} else {
    sayDay()
}