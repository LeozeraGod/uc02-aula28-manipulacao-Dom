const dadosPessoa = {
      "nome": "LEONARDO SOUZA",  
      "email": "leonardo@gmail.com",  
      "telefone": "46987654321",  
      "cpf": "00123456789",  
      "endereco": "Rua Tupinamba",  
      "numero": 640,  
      "complemento": "Casa",  
      "cep": 123456789,  
      "bairro": "Centro",  
      "cidade": "Pato Branco",  
      "estado": "Paraná",  
      "sexo": "Masculino",  
      "estadoCivil": "Casado",  
      "profissao": "Desenvolvedor de Software",  
      "dataNascimento": "01/01/1980",
      "urls": [
{ "Titulo": "Linkedin",
    "url": "https://www.linkedin.com/leonardoSouza",
    },
{
    "Titulo": "GitHub",
    "url": "https://www.github.com/leozeragod",
},
{
    "Titulo": "Facebook",
    "url": "https://www.facebook.com/leonardoSouza",
}
    
]
}

// Montagem da Div title 
const divTitle = document.getElementById("title")
const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)

//Montagem da div Contact 

const divContact = document.getElementById("contact")

//Lista não ordenada 
const listaContato = document.createElement("ul")


//Item de lista para o endereço completo 
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

//Item de lista para o e-mail 
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)

//Item de lista para o telefone 
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemTelefone)

//Item de lista com o link para cada link para cada link da lista de links
for(url of dadosPessoa.urls) {
    const itemLink = document.createElement("li")
    const ancora = document.createElement("a")
    ancora.textContent = url
    ancora.setAttribute("href", url)
    itemLink.appendChild(ancora)
    listaContato.appendChild(itemLink)
}


divContact.appendChild(listaContato)