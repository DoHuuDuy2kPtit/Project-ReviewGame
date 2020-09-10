// Tạo thẻ
let accountLogo = document.createElement("div");
accountLogo.className = "account-logo";
let accountName = document.createElement("div");
accountName.className = "account-name";
let accountLogout = document.createElement("div");
accountLogout.className = "account-logout";

// Chọn thẻ

let log_in = document.querySelector(".top-navbar__account-log-in");

let register = document.querySelector(".top-navbar__account-register");

let unaccount = document.querySelector(".top-navbar__account");

let overlay = document.createElement("div");
overlay.className = "overlay";

let body = document.querySelector("body");
const anonymous = { username: "Anonymous" };
let user = [];
let existUser = [];
const storageKey = "user";
const data = localStorage.getItem(storageKey);
let currentUser;
if (data) {
  currentUser = JSON.parse(data);
  unaccount.removeChild(log_in);
  unaccount.removeChild(register);
  accountName.innerHTML = `${currentUser.username}`;
  accountLogout.innerHTML = "Thoát";
  unaccount.appendChild(accountName);
  unaccount.appendChild(accountLogo);
  unaccount.appendChild(accountLogout);
  accountLogout.addEventListener("click", (e) => {
    e.preventDefault();
    unaccount.removeChild(accountName);
    unaccount.removeChild(accountLogo);
    unaccount.removeChild(accountLogout);
    unaccount.appendChild(register);
    unaccount.appendChild(log_in);
    currentUser = anonymous;
    localStorage.clear();
  });
} else {
  currentUser = anonymous;
}
document.addEventListener("DOMContentLoaded", async function () {
  const db = firebase.firestore();
  let userRef = db.collection("Users");
  let gameRef = db.collection("Games");
  let commentRef = db.collection("Comments");

  let loginForm = document.createElement("div");
  loginForm.className = "login-form";

  log_in.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target == log_in) {
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
    </form>`;
      overlay.appendChild(loginForm);
      overlay.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target == overlay) overlay.remove();
        let buttonSubmit1 = document.querySelector(".btn-login.first");
        if (e.target == buttonSubmit1) {
          let emailLogin = document.getElementById("email-login").value;
          let passwordLogin = document.getElementById("password-login").value;
          let p = document.querySelector(".invalid-account");
          let status = 0;

          await userRef
            .where("email", "==", emailLogin)
            .get()
            .then((querySnap) =>
              querySnap.forEach((doc) => user.push(doc.data()))
            );
          console.log(user);

          if (user.length === 0) {
            p.innerHTML = "Tài khoản không tồn tại";
          } else {
            if (user[user.length - 1].password === passwordLogin) {
              p.innerHTML = "Welcome back";
              currentUser = Object.assign({}, user[user.length - 1]);
              localStorage.setItem(storageKey, JSON.stringify(currentUser));

              overlay.remove();
              unaccount.removeChild(log_in);
              unaccount.removeChild(register);

              accountName.innerHTML = `${currentUser.username}`;
              let accountLogout = document.createElement("div");
              accountLogout.className = "account-logout";
              accountLogout.innerHTML = "Thoát";
              unaccount.appendChild(accountName);
              unaccount.appendChild(accountLogo);
              unaccount.appendChild(accountLogout);
              accountLogout.addEventListener("click", (e) => {
                e.preventDefault();
                unaccount.removeChild(accountName);
                unaccount.removeChild(accountLogo);
                unaccount.removeChild(accountLogout);
                unaccount.appendChild(register);
                unaccount.appendChild(log_in);
                currentUser = anonymous;
              });
            } else {
              p.innerHTML = "Sai mật khẩu";
            }
          }
        }
      });
    }
  });

  register.addEventListener("click", (e) => {
    e.preventDefault();
    body.appendChild(overlay);
    loginForm.innerHTML = `
  <form>
  <div class="form-group">
    <label for="email-register">Email</label>
    <input type="email" class="form-control" id="email-register" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="username-register">Username</label>
    <input type="text" class="form-control" id="username-register" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="password-register">Mật khẩu</label>
    <input type="password" class="form-control" id="password-register">
  </div>
  <div class="form-group">
    <label for="confirm-password-register">Xác nhận mật khẩu</label>
    <input type="password" class="form-control" id="confirm-password-register">
  </div>
  <p class = "invalid-account"></p>
  <button type="submit" class="btn btn-primary btn-login second">Đăng kí</button>
  </form>`;
    overlay.appendChild(loginForm);
    overlay.addEventListener("click", async (e) => {
      e.preventDefault();
      if (e.target == overlay) overlay.remove();
      let buttonSubmit2 = document.querySelector(".btn-login.second");
      let p = document.querySelector(".invalid-account");
      if (e.target == buttonSubmit2) {
        let emailRegisterRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
        let emailRegister = document.getElementById("email-register").value;
        let passwordRegex = /\w{6,32}/;
        let username = document.getElementById("username-register").value;
        let passwordRegister = document.getElementById("password-register")
          .value;
        let confirmPassword = document.getElementById(
          "confirm-password-register"
        ).value;

        await userRef
          .where("email", "==", emailRegister)
          .get()
          .then((querySnap) =>
            querySnap.forEach((doc) => existUser.push(doc.data()))
          );
        console.log(existUser);

        let account = new User(username, emailRegister, passwordRegister);
        console.log(checkAccount(existUser, account));
        if (
          emailRegisterRegex.test(emailRegister) &&
          passwordRegex.test(passwordRegister) &&
          passwordRegex.test(username) &&
          passwordRegister == confirmPassword &&
          checkAccount(existUser, account)
        ) {
          alert("Đăng kí thành công !!");
          userRef.doc(account.email).set(Object.assign({}, account));
          overlay.remove();
        } else {
          p.innerHTML = "Tài khoản không hợp lệ hoặc địa chỉ email đã tồn tại";
        }
      }
    });
  });

  function checkAccount(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].email == obj.email) {
        return false;
      }
    }
    return true;
  }
});
