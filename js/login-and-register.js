let log_in = document.querySelector('.top-navbar__account-log-in');
console.log(log_in);
let register = document.querySelector('.top-navbar__account-register');

let unaccount = document.querySelector('.top-navbar__account');

let overlay = document.createElement('div');
overlay.className = "overlay";

let body = document.querySelector('body');

let loginForm = document.createElement('div');
loginForm.className = 'login-form';

log_in.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(e.target);
  if(e.target == log_in) {
    body.appendChild(overlay);
    loginForm.innerHTML = `
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" id="email-login" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Mật khẩu</label>
      <input type="password" class="form-control" id="password-login">
    </div>
    <p class = "invalid-account"></p>
    <button type="submit" class="btn btn-primary btn-login first">Đăng nhập</button>
    </form>`
    overlay.appendChild(loginForm);
    overlay.addEventListener('click',(e)=>{
      e.preventDefault();
      if(e.target == overlay) overlay.remove();
      let buttonSubmit1 = document.querySelector('.btn-login.first');
      if(e.target == buttonSubmit1){
        let emailLogin = document.getElementById('email-login').value;
        let passwordLogin = document.getElementById('password-login').value;
        let p = document.querySelector('.invalid-account');
        let status = 0;
        for(let i = 0; i < user.length; i++){
          if(user[i].email == emailLogin && user[i].password == passwordLogin){
            status = 1;
            overlay.remove();
            unaccount.removeChild(log_in);
            unaccount.removeChild(register);
            let accountLogo = document.createElement('div');
            accountLogo.className = 'account-logo';
            let accountName = document.createElement('div');
            accountName.className = 'account-name';
            accountName.innerHTML = `${user[i].username}`;
            unaccount.appendChild(accountName);
            unaccount.appendChild(accountLogo);
          }
        }
        if(status == 0) {
          p.innerHTML = 'Tài khoản và mật khẩu không chính xác. Mời bạn nhập lại';
        }
      }
    })
  }
})

register.addEventListener('click',(e)=>{
  e.preventDefault();
  body.appendChild(overlay);
  loginForm.innerHTML = `
  <form>
  <div class="form-group">
    <label for="email-register">Email</label>
    <input type="email" class="form-control" id="email-register" aria-describedby="emailHelp">
    <small>Email phải đúng theo định dạng của email</small>
  </div>
  <div class="form-group">
    <label for="username-register">Username</label>
    <input type="text" class="form-control" id="username-register" aria-describedby="emailHelp">
    <small>Hãy nghĩ 1 cái username thật hay nhé :), chú ý rằng chiều dài tối thiểu là 6 và tối đa là 32 kí tự</small>
  </div>
  <div class="form-group">
    <label for="password-register">Mật khẩu</label>
    <input type="password" class="form-control" id="password-register">
    <small>Mật khẩu phải có chiều dài tối thiểu là 6 và tối đa là 32 kí tự</small>
  </div>
  <div class="form-group">
    <label for="confirm-password-register">Xác nhận mật khẩu</label>
    <input type="password" class="form-control" id="confirm-password-register">
  </div>
  <p class = "invalid-account"></p>
  <button type="submit" class="btn btn-primary btn-login second">Đăng kí</button>
  </form>`
  overlay.appendChild(loginForm);
  overlay.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target == overlay) overlay.remove();
    let buttonSubmit2 = document.querySelector('.btn-login.second');
    let p = document.querySelector('.invalid-account');
    if(e.target == buttonSubmit2) {
      let emailRegisterRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
      let emailRegister = document.getElementById('email-register').value;
      let passwordRegex = /\w{6,32}/;
      let username = document.getElementById('username-register').value; 
      let passwordRegister = document.getElementById('password-register').value;
      let confirmPassword = document.getElementById('confirm-password-register').value;
      let account = new User(
        username,
        emailRegister,
        passwordRegister
      );
      console.log(checkAccount(user,account));
      if(emailRegisterRegex.test(emailRegister) && passwordRegex.test(passwordRegister) 
        && passwordRegex.test(username) && passwordRegister == confirmPassword 
        && checkAccount(user,account)){
        alert("Đăng kí thành công !!");
        user.push(account);
        console.log(user);
        overlay.remove();
      } else {
        p.innerHTML = 'Tài khoản không hợp lệ hoặc địa chỉ email đã tồn tại';
      }
    }
  })
})

function checkAccount(arr,obj){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].email == obj.email){
      return false;
    }
  }
  return true;
}
