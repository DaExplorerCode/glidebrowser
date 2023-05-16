process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']=true
console.info('[GLIDEBROWSER][INFO]: electron security warnings has been disabled')
process.env['GLIDEBROWSER_DISABLE_PREBUILDS']=true
process.env['GLIDEBROWSER_USING-GLIDEBROWSER?']=true
console.info('[GLIDEBROWSER][INFO]: glidebrowser env has been declared')
const wv = document.getElementById("view");
wv.addEventListener('DOMContentLoaded', () => {
    const devtoolsView = document.getElementById('DevTools');
    const browser = wv.getWebContents();
    browser.setDevToolsWebContents(devtoolsView.getWebContents());
    browser.openDevTools();
  console.info('[GLIDEBROWSER]: devtools for webview enabled')
});