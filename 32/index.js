let current_users = ["usman", "ali", "asad", "saad", "arfah"];

let new_users = ["Usman", "Ishaq", "Nadir", "Ali", "Twaha"];


for(let i=0; i<new_users.length; i++){
    let flag = true;
    for(let j=0; j<current_users.length; j++){
        if(current_users[j].toLowerCase() === new_users[i].toLowerCase()){
            console.log(`user name ${new_users[i]} is not available`);
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(`the username ${new_users[i]} is available.`);
    }
}