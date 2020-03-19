function print(...args){ console.log(...args) }

// Cookies

// display cookie
// alert(document.cookie)

// set cookie
document.cookie = 'user=vyshnav'
// alert(document.cookie)

// encode
document.cookie = encodeURIComponent('my name') + '=' + encodeURIComponent('vyshnav raj s')
// alert(document.cookie)

// path attribute
// admin page contains script which sets a cookie
// and is not accessible by the index page
// document.cookie = 'svr=this_is_admin; path=http://127.0.0.1:5500/admin/'

// try to access the cookie set by subdomain
// alert(document.cookie) // cannot access

// domain attribute
// document.cookie = "user=John; domain=localhost"

// expiry
let date = new Date(Date.now() + 5000)
document.cookie = 'svr=SVR;expires=' + date.toUTCString()

// max-age
document.cookie = 'college=TKM;max-age=5'