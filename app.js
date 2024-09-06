function buscar() { 
    let section = document.getElementById ("resultados-pesquisa")

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    console.log (campoPesquisa)
    
    let resultados = ""
    
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                    <h2>
                                <a href="https://www.blackboss.shop/" target="_blank">${dado.titulo}</a>
                    </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
            </div>
            `;
        }
   
    
    }
    
    section.innerHTML = resultados
}