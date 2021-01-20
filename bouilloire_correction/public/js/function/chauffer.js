function Chauffer(temp){
    if (temp < 100){
        temp += 20;
        setTimeout(() => {
            console.log(`La bouilloire est a ${temp}°C`);
            Chauffer(temp);
        }, 1000);
    } else {
        console.log(`La bouilloire s'est éteinte.`);
    };
};

export default Chauffer;