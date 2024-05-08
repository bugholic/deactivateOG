function run() {
    let camp = document.getElementsByClassName('stop-circled');
    if (camp.length != 0) {
        camp[0].click();
        setInterval(() => {
            console.clear();
            document.getElementsByTagName('h1')[0].innerText = camp.length + " remaining";
            run();
        }, 3000);
    } else {
        document.getElementsByTagName('h1')[0].innerText ='Automation Deactivated'
    }
}

run();
