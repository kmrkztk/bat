
var url='https://echizen.cloudgate.jp/sso/fdc-inc_co_jp/login.xhtml';
var method='post'
var user='k.kimura';
var pass='xxxxxxxxxxxxxxxxxxxx';

var form = document.createElement('form');
var username = document.createElement('input');
var password = document.createElement('input');

form.action = url;
form.method = method;
username.name   = 'userName';
username.value  = user;
password.name   = 'password';
password.value  = pass;

form.appendChild(username);
form.appendChild(password);
document.body.append(form);
form.submit();

//window.close();
