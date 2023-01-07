outputArea = document.getElementById('output');

clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', function(){
    console.log('clearbutton clicked...')
    outputArea.innerhtml = '0';
});


OppesiteButton = document.getElementById('btn-oppesite');
OppesiteButton.addEventListener('click', function(){
    console.log('Oppesitebutton clicked...')
    outputArea.innerhtml = parseFloat(outputArea.innerhtml)* -1;
});





