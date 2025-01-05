function centralTimerController() {
    let time = 0;

    function A() {
        console.log(`A (${time})`);
    }
    
    function B() {
        console.log(`B (${time})`);
    }
    
    function C() {
        console.log(`C (${time})`);
    }

    setInterval(function() {
        time++;
        if(time % 30 === 0) {
            A();
        }
        if(time % 60 === 0) {
            B();
        }
        if(time % 75 === 0) {
            C();
        }
    }, 1000);
}

centralTimerController();
