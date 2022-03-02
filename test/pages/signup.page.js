

const Page = require('./page');


class signupPage extends Page {


     signUp(){
        return $('#anonLogin');
    };

    register(){
        return $('.login-other span a');
    };

    phone(){
        return $('//*[@id="container"]/div/div[2]/form/div/div[1]/div[1]/input');
    };

    password(){
        return $('//*[@id="container"]/div/div[2]/form/div/div[1]/div[3]');
    };
    months(){
        return $("div[id='month']");
    };
    day(){
        return $("div[id='day']");
    };
    year(){
        return $("div[id='year']")
    }

    fullName(){
        return $("div[class='mod-input mod-login-input-name mod-input-name']");
    }

    promotion(){
        return $("div[class='mod-login-receive']");
    };

    submitBtn(){
        return $("div[class='mod-login-btn']");
    };














    open() {
        return super.open('');
    }
}

module.exports = new signupPage();
