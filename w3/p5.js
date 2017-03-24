var info = {
    firstname: 'Yi-Xuan',
    lastname: 'Lin',
    getFullName: function(){
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var loginfo = function(){
    console.log('logged: '+ this.getFullName());
}
var loginfo = loginfo.bind(info);
loginfo();

