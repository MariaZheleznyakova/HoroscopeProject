const translate = require('translate-google');

translate('Я говорю по-русски', { to: 'en' }).then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
