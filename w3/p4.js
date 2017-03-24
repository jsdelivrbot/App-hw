(function(){console.log(this);})();

let person = {
    firstname: 'Yi-Xuan',
    lastname: 'Lin',
    greet_function: function(){
        console.log(this);
    },

    greet_Arrow: () => {
        console.log(this);
    },

    greet_functionArrow: function(){
        (() =>{
            console.log(this);
        })();
    }
}

person.greet_function();
person.greet_Arrow();
person.greet_functionArrow();