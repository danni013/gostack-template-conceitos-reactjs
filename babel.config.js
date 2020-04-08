module.exports = {
  presets: [
    '@babel/preset-env',  //converte o código para que o browser entenda
    '@babel/preset-react' //adiciona as funcionalidades react na conversão
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}