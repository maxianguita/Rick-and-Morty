const validation = (userData) => {

    let errors = {};


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) { // con esto vemos si el email es valido
        errors.username = "el imail no es valido";
    }


    if (!userData.username) {
        errors.username = " este campo no puede estar vacio";
    }
    if (userData.username.length > 35) {
        errors.username = " el email no puede superar los 35 caracteres "

    }
    if (!userData.password.match(/\d/)) { //esto me retorna un buleano 
        errors.password = " la contrasaña debe contener al menos un numero"

    }
    if (userData.password.length < 6 || userData.password.length > 10) {

        errors.password = " la contraseña debe tener al menos entre 6 y 10 caracteres "
    }
    return errors;
}

export default validation; 