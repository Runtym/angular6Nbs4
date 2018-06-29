var userService = {};
module.exports = userService;

userService.getUser = getUser;
function getUser(po){
    return new Promise((resolved,rejected)=>{  
        let user = [
            {name:'Test1',age:20},
            {name:'Test2',age:20},
            {name:'Test3',age:20},
            {name:'Test3',age:20}
        ]
        if(user.length==5){
            return rejected({err:'4개임',code:'some error'});
        }
        return resolved(user);
    });
}