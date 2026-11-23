const nomes = ["Diogo", "luiz", "moisés", "joão pedro", "junior", "irineu", "juvico" ];

export function aleatorio (lista){
    const posicao = math.floor(math.random()* lista.length);
    return lista[posicao];
 }

export const nome = aleatorio(nomes);