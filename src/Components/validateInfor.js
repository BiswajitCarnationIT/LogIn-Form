export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Write username"
    }

    if(!values.email){
        errors.email = "Write email"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid';
    }

    return errors;
}
