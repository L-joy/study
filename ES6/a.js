const  PASSWORD = Symbol();

class Login {
    constructor(username, password){
        this.username = username;
        this[password] = password;
    }
    checkPassword(pwd){
        return this[PASSWORD] === pwd;
    }
}
export default Login;//对外输出本模块变量的接口