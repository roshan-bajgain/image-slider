let counter = 1;
setInterval(function(){
    console.log('running');
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter >= 4){
        counter = 1;
    }
}, 500);