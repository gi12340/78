var images =
    ["https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Fvetores-premium%2Fmae-com-filha-indo-para-ilustracao-vetorial-plana-de-escola-feliz-pai-e-estudante-segurando-personagens-de-desenhos-animados-de-maos-isolados-no-fundo-branco-mulher-e-estudante-com-mochila-andando_22553395.htm&psig=AOvVaw0BpKmtADwNaC9Sn_2i5NHz&ust=1690320807770000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCIipsPWlqIADFQAAAAAdAAAAABAa", "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Fvetores-premium%2Fdesenho-animado-infantil-abracando-seu-pai-com-amor_10192509.htm&psig=AOvVaw05ziE5zQf80UFoXOZeoMDC&ust=1690320923235000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCIjAqqymqIADFQAAAAAdAAAAABAE",
     "https://www.google.com.br/url?sa=i&url=http%3A%2F%2Fatl.clicrbs.com.br%2Fatlgirls%2F2018%2F02%2F07%2Filustradora-mostra-em-8-desenhos-como-e-bom-viver-sozinha%2F&psig=AOvVaw3xPBYvNpgj8Zj7XE-1FB-u&ust=1690321079595000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCPDk5vamqIADFQAAAAAdAAAAABA4", "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Fvetores-premium%2Fdesenho-de-avos-bonito_2970788.htm&psig=AOvVaw3_NqwyVKt4T9OID1ZABpln&ust=1690321204954000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCMCsx7KnqIADFQAAAAAdAAAAABAI", "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F680254718703677745%2F&psig=AOvVaw3xPBYvNpgj8Zj7XE-1FB-u&ust=1690321079595000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqGAoTCPDk5vamqIADFQAAAAAdAAAAABD3AQ"];
        var names = ["Mãe","Pai","Filha","Avós","Cachorro"];

 var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 5 
    if(i > numbersOfFamilyMemberInArray )
    {
        i= 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}