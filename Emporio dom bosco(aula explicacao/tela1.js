//Aqui adcionamos um evento de escultar o click do mouse sobre
// o ícone de hamburguer
hamburguerButton.addEventListener("click", function()
{
//Criamos uma função que a ouvir o click do mouse, ele 
//adicione uma class, que está fazendo nossa caixa (Div)
//aparecer, ou seja, fica visível.
mobileMenu.classlist.add("flex");

});

closeButton.addEventListener("click", function()
{
    mobileMenu.classlist.remove("flex")
});