function run() {
    let camp = document.getElementsByClassName('stop')
    if (camp.length > 0) {
        camp[0].click()
        let sBtn = document.getElementById('submit-button')
        sBtn .click()
        setInterval(() => {
            let checkBtn = document.getElementById('submit-button') != null                
            if(checkBtn == true){
                sBtn.click()
            }
            else{
                document.getElementsByTagName('h1')[0].innerText = camp.length + " " + "remaining"
                run()
            }
        }, 3000);
    }
    else {
        document.getElementsByTagName('h1')[0].innerText ='Transitional Deactivated'
    }
}
run()   