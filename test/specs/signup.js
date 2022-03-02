const signupPage = require('../pages/signup.page');


describe('Daraz Test Demo', () => {
    it('should Open The Main Url of Daraz', async () => {
        await signupPage.open();
       
        
    });

     it('Should Click The SignUp-Sign In Button',async () => {
        await signupPage.signUp().click();
     });

     it('Should Click The Register Button',async () => {
        await signupPage.register().click();
     });

     it('should Input The Phone Number', async () => {
         await signupPage.phone().click();
        
     });

     it('Should Input The Password', async () => {
         await signupPage.password().click();
     });

     it('Should Skip The Birthday',async () => {
         await signupPage.months();
         await signupPage.day();
         await signupPage.year();
         
     });

     it('Should Skip The Name',async () => {
         await signupPage.fullName();
     });

     it('Should Skip The Promotion Box',async () => {
         await signupPage.promotion().click();
     });
    
     it('Should Click The Submit Button', async () => {
         await signupPage.submitBtn().click();
     });


});


