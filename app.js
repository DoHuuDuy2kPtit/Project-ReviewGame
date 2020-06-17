let log_in = document.querySelector('.top-navbar__account-log-in');
let register = document.querySelector('.top-navbar__account-register');

let overlay = document.createElement('div');
overlay.className = "overlay";

let body = document.querySelector('body');

let loginForm = document.createElement('div');
loginForm.className = 'login-form';


window.addEventListener('click',(e)=>{
      
})


window.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target == register){
    body.appendChild(overlay);
    loginForm.innerHTML = `
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="email-register" aria-describedby="emailHelp">
      <small>Email phải đúng theo định dạng của email</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="password-register">
      <small>Mật khẩu phải có chiều dài tối thiểu là 6 và tối đa là 32 kí tự</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Confirm Password</label>
      <input type="password" class="form-control" id="confirm-password-register">
    </div>
    <p class = "invalid-account"></p>
    <button type="submit" class="btn btn-primary btn-login second">Sign up</button>
    </form>`
    overlay.appendChild(loginForm);
  }

  if(e.target == log_in) {
    body.appendChild(overlay);
    loginForm.innerHTML = `
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="email-login" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="passwordLogin">
    </div>
    <p class = "invalid-account"></p>
    <button type="submit" class="btn btn-primary btn-login first">Sign in</button>
    </form>`
    overlay.appendChild(loginForm);
  }

  if(e.target.className=='overlay') e.target.remove();  



  let buttonSubmit2 = document.querySelector('.btn-login.second');
  let p = document.querySelector('.invalid-account');
  if(e.target == buttonSubmit2) {
    let emailRegisterRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    let emailRegister = document.getElementById('email-register').value;
    let passwordRegex = /\w{6,32}/;
    let passwordRegister = document.getElementById('password-register').value;
    let confirmPassword = document.getElementById('confirm-password-register').value;
    if(emailRegisterRegex.test(emailRegister) && passwordRegex.test(passwordRegister) && passwordRegister == confirmPassword){
      alert("REGISTER SUCCESSFUL");
      p.innerHTML = '';
    } else {
      p.innerHTML = 'Invalid account';
    }
  }
});

