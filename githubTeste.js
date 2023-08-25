const {Builder, By, Key} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');

const chromedriver = require('chromedriver');

const service = ()=> chrome .setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run(){
    let driver = await new Builder().forBrowser('chrome').build();

    //abrir a página de login do github
    await driver.get('https://github.com/login');

    //encontra o elemento do input de usuario
    const usuario = await driver.findElement(By.name("login"));

    //inserir o email
    await usuario.sendKeys("000000000@gmail.com");

    //encontra o elemento do input de senha
    const senha = await driver.findElement(By.name("password"));

    //inserir a senha
    await senha.sendKeys("1111111111");

    //pressiona o enter
    await usuario.sendKeys(Key.ENTER);
}

//chamar a função 
run();
