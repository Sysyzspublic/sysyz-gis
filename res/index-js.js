(() => {
  const wrapperEl = document.getElementById('wrapper')
  const homePaneEl = wrapperEl.querySelector('.panel.home')
  const mobilePaneEl = wrapperEl.querySelector('.panel.mobile')
  const btnMobile = homePaneEl.querySelector('#btn-goto-mobile')
  const btnWeb = homePaneEl.querySelector('#btn-goto-web')
  const btnAndroid = mobilePaneEl.querySelector('#btn-download-android')
  const btnIos = mobilePaneEl.querySelector('#btn-download-ios')
  const btnApp = mobilePaneEl.querySelector('#btn-download-app')
  const MODE = {
    DEFAULT: 'wrapper',
    MOBILE: 'mobile',
    HOME: 'home',
    ANDROID: 'android',
    APP_STORE: 'app'
  }

  const updateMode = (...classes) => {
    Array.from(wrapperEl.classList).forEach(e => wrapperEl.classList.remove(e))
    wrapperEl.classList.add(...classes);

    [btnAndroid, btnIos, btnApp].forEach(item => {
      Array.from(item.classList).forEach(e => item.classList.remove(e))
    });

    [btnAndroid, btnIos, btnApp].forEach(e => {
      e.classList.add('card-item')
    });

    if (classes.includes(MODE.ANDROID)) {
      btnAndroid.classList.add('active')
    }

    if (classes.includes(MODE.IOS)) {
      btnIos.classList.add('active')
    }

    if (classes.includes(MODE.APP_STORE)) {
      btnApp.classList.add('active')
    }
  }

  btnMobile.addEventListener('click', () => {
    updateMode(MODE.DEFAULT, MODE.MOBILE, MODE.ANDROID)
  })

  btnWeb.addEventListener('click', () => {
    window.open("https://sysyz-itcom.github.io/sysyz-gis/maps/amap.html")
  })

  btnAndroid.addEventListener('click', () => {
    updateMode(MODE.DEFAULT, MODE.MOBILE, MODE.ANDROID)
  })

  btnIos.addEventListener('click', () => {
    updateMode(MODE.DEFAULT, MODE.MOBILE, MODE.IOS)
  })

})()
