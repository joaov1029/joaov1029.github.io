const items = [
    {
        id: 0,
        nome: 'pizza de calabresa',
        tipo: 'brasileira',
        quantidade: 0,
        img:'calabresa.jpg'
    },
    {
        id: 1,
        nome: 'pizza de mussarela',
        tipo: 'brasileira',
        quantidade: 0,
        img:'mussarela.jpg'
    },
    {
        id: 2,
        nome: 'pizza de quatro queijos',
        tipo: 'brasileira',
        quantidade: 0,
        img:'quatro queijos.jpg'
    },
    {
        id: 3,
        nome: 'pizza marguerita',
        tipo: 'brasileira',
        quantidade: 0,
        img:'marguerita.jpg'
    },
    {
        id: 4,
        nome: 'pizza portuguesa',
        tipo: 'brasileira',
        quantidade: 0,
        img:'portuguesa.jpg'
    },
    {
        id: 5,
        nome: 'pizza de frango com catupiry',
        tipo: 'brasileira',
        quantidade: 0,
        img:'frango com catupiry.jpg'
    },
    {
        id: 6,
        nome: 'pizza Capricciosa',
        tipo: 'italiana',
        quantidade: 0,
        img:'capricciosa.jpg'
    },
    {
        id: 7,
        nome: 'pizza Parmiggiana',
        tipo: 'italiana',
        quantidade: 0,
        img:'parmiggiana.jpg'
    },
    {
        id: 8,
        nome: 'pizza Bianca',
        tipo: 'italiana',
        quantidade: 0,
        img:'bianca.jpg'
    },
    {
        id: 9,
        nome: 'pizza Diavola',
        tipo: 'italiana',
        quantidade: 0,
        img:'diavola.jpg'
    },
    {
        id: 10,
        nome: 'pizza 4 Stagioni',
        tipo: 'italiana',
        quantidade: 0,
        img:'4 stagioni.jpg'
    },
    
    InicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        items.map((val)=>{
            containerProdutos.innerHTML+= `
            
                <div class="produto-single">
                    <img src="${val.img}" />
                    <p>${val.nome}</p>
                    <p>${val.tipo}</p>
                    <a class="link" key="${val.id}" href="#">Adicionar ao carrinho</a>
                </div>

            `;
        })
    }

]
InicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML="";
        items.map((val)=>{
            if(val.quantidade > 0){
            containerCarrinho.innerHTML+= `
                
                
                <p>${val.nome} | quantidade ${val.quantidade}</p><br>
                

            `;
            }
        })
}

var links = document.getElementsByClassName('link')

for(var i = 0; i < links.length ; i ++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}