
const fs = require('fs')
const chalk = require('chalk')

// api usada para cases 
global.APIs = {
	venom_api_rest: 'https://venom-apis.herokuapp.com/',
}

// minha key para logos
global.akameapikey = 'vsfd kkkk compre a sua'

// outros
global.owner = ['559784388524','5562936180708']
global.packname = ''
global.author = '${ 🔥559784388524🔥 }'
global.nomedobot =  '𝐞𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧-𝐦𝐝'
global.limite = '900000'
global.sessionName = 'evolution' //nao mexa pode da erros
global.prefa = ['/','!','.','*','#','$']
global.tzvenom = '⌁' 
global.ttzvenom = '𖥂'
global.tttzvenom = '𐂥'
global.fundowelcome = 'https://telegra.ph/file/14c9a6ce9c4e3e43a8ee1.jpg'
global.textowelcome = 'Bem vindo'
global.textadeus = 'Bye bye'

global.thumb = fs.readFileSync('./lib/evolution.jpg')
let salvedvenom = require.resolve(__filename)
fs.watchFile(salvedvenom, () => {
	fs.unwatchFile(salvedvenom)
	console.log(chalk.redBright(`'${__filename}' foi atualizado`))
	delete require.cache[salvedvenom]
	require(salvedvenom)
})
