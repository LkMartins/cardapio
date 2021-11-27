btncarrinho = document.querySelector("#btn-carrinho");
voltar = document.querySelector("#btn-voltar");
btnx = document.querySelector("#cardapio-btn-x");
fecharpedido = document.querySelector(".box-link");
carrinho = document.querySelector("aside");
cardapio = document.querySelector("main");


voltar.addEventListener("click", function() {
    window.location="../";
})

btncarrinho.addEventListener("click", function() {
    carrinho.style.display = "block";
    cardapio.style.display = "none";
    if(carrinho.style.display === "block") {
        btncarrinho.style.display = "none";
    }
    btnx.style.display = "block"
})

btnx.addEventListener("click", function() {
    carrinho.style.display = "none";
    cardapio.style.display = "block"
    if(cardapio.style.display = "block"){
        btnx.style.display = "none"
        btncarrinho.style.display = "block"
    }
})

const items = [
    {
        id: 0,
        nome: 'Calabresa',
        descricao: 'O recheio é preparado com queijo, molho de tomate, calabresa em rodelas, cebola, tomate picado, azeite e orégano. A azeitona também pode ser acrescentada!',
        img: 'img/pizza1.jpg',
        quantidade: 0,
        valoruni: 30
    },
    {
        id: 1,
        nome: 'Portuguesa',
        descricao:'Pimentão e orégano! queijo, azeitona verde ou preta, ovo cozido, presunto cozido, cebola, ervilha, molho de tomate e azeite. Também há preparações que são acrescentadas milho verde, pimentão e orégan',
        img: 'img/pizza2.jpg',
        quantidade: 0,
        valoruni: 40
    },
    {
        id: 2,
        nome: 'Muçarela',
        descricao:'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!',
        img: 'img/pizza3.jpg',
        quantidade: 0,
        valoruni: 50
    },
    {
        id: 3,
        nome: 'Marguerita',
        descricao:'É preparada com molho de tomate, manjericão, rodelas de tomate fresco, azeitona, queijo muçarela e orégano salpicado. A pizza fica uma delícia e a apresentação super linda!',
        img: 'img/pizza4.jpg',
        quantidade: 0,
        valoruni: 80
    },
    {
        id: 4,
        nome: 'Quatro queijos',
        descricao:'Assim como o nome já diz, essa pizza é preparada com quatro queijos diferentes, como muçarela, gorgonzola, parmesão e catupiry, por exemplo.',
        img: 'img/pizza5.jpg',
        quantidade: 0,
        valoruni: 50
    },
    {
        id: 5,
        nome: 'Frango com catupiry',
        descricao:'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!',
        img: 'img/pizza6.jpg',
        quantidade: 0,
        valoruni: 60
    },
    {
        id: 6,
        nome: 'Frango com catupiry',
        descricao:'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!',
        img: 'img/pizza7.jpg',
        quantidade: 0,
        valoruni: 30
    },
    {
        id: 7,
        nome: 'Frango com catupiry',
        descricao:'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!',
        img: 'img/pizza8.jpg',
        quantidade: 0,
        valoruni: 35
    },
    {
        id: 8,
        nome: 'Frango com catupiry',
        descricao:'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!',
        img: 'img/pizza9.jpg',
        quantidade: 0,
        valoruni: 20
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
       containerProdutos.innerHTML+= `
       
       <div class="col-lg-4 col-sm-6">
            <div class="card">
                <img src="`+val.img+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+val.nome+` - R$ `+val.valoruni+`,00</h5>
                    <p class="card-text">`+val.descricao+`</p>
                    <a key="`+val.id+`" name="calabresa" id="addcarrinho" class="linkadd btn-add btn btn-success">Add carrinho</a>
                </div>
            </div>
        </div>
       
       `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
   
    const itemsCarrinho = items.filter(val => val.quantidade > 0)
    let soma = 0
    itemsCarrinho.forEach(function(item) {
        soma += (item.valoruni * item.quantidade) 
    }, 0)
    console.log(soma);


    var carinhovalortotal = document.querySelector(".valortotal p");
    carinhovalortotal.innerText= "Total a Pagar= " + soma ;


   fecharpedido.style.display = "block";
   var containerCarrinho = document.querySelector('.box');
   containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
       containerCarrinho.innerHTML+= `
       <div class="carrinho-produto">
            <div class="carrinho-capa-produto">
                <img src="`+val.img+`" class="carrinho-produto-img">
            </div>
            <div class="carrinho-texto-produto">
                <h5 class="p-2">Pizza de `+val.nome+`<br/>
                Unidade: `+val.quantidade+` <br/>
                Preço uni: `+val.valoruni+`
                </h5>
            </div>  
        <div/>
       `;
        }
    })
}

   //


var links = document.getElementsByClassName('linkadd');
var cardcarrinho = document.querySelector(".carrinho-produto");

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

var carinhovalortotal = document.querySelector(".valortotal p");

    console.log(fecharpedido);
    console.log(carinhovalortotal);
    console.log(links);
    console.log(carrinho);
    console.log(btncarrinho);
    console.log(voltar);
    console.log(btnx);
