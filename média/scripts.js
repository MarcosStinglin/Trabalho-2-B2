(function() { // don't leak
    var elm = document.getElementById('select'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 1; i <= 40; i++) { // loop
        var option = document.createElement('option'); // create the option element
        option.value = i; // set the value property
        option.appendChild(document.createTextNode(i)); // set the textContent in a safe way.
        df.appendChild(option); // append the option to the document fragment
    }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
}());

function ovrl() {
    const form = document.querySelector('.form')
    const result = document.querySelector('.resultado')
    const select = document.querySelector('.select')

        function evForm (evento) {
            evento.preventDefault(); //previne a pagina de recarrega sozinha

            const name = form.querySelector('.name')
            const turma = form.querySelector('.turma')
            const nota1 = form.querySelector('.nota1')
            const nota2 = form.querySelector('.nota2')
            const nota3 = form.querySelector('.nota3')
            const notaExame = prompt("Digite a nota do exame: ")
            const media = ((Number(nota1.value)) + (Number(nota2.value)) + (Number(nota3.value)))/3
            


            function exame(media){
                for (var i = 0; 5 >= ((media + (i/10))/2); i++) {
                    var exameNota = (i/10)
                    if (5 <= ((media + (i/10))/2)) {
                        return exameNota
                }}
                return exameNota
            }
           

            function presenca(select) {
                const prct = (Number(select.value)*100)/40
                return prct
            }

            exame(media)
            const exNota = exame(media)
            function calculo(media, exNota, notaExame){
                    if (media >= 7 && presenca(select) >= 75) {
                        result.innerHTML += `<p>Aluno ${name.value} da turma ${turma.value}, voc?? est?? aprovado com m??dia ${media} e participou de ${select.value} aulas<p>`
                    
                    }else if (presenca(select) < 75) {
                        result.innerHTML += `<p>Aluno ${name.value} da turma ${turma.value}, voc?? est?? reprovado por faltas. sua m??dia foi de ${media} e participou de ${select.value} aulas.<p>`
                    
                    }else if (media < 7 && presenca(select) >= 75) {
                        result.innerHTML += `<p>Aluno ${name.value} da turma ${turma.value}, voc?? est?? em exame com m??dia ${media} e participou de ${select.value} aulas. Voc?? precisa tirar ${exNota} no exame para ser aprovado.<p>`
                        notaExame
                            if (notaExame < exNota) {result.innerHTML += `<p>Infelizmente voc?? foi reprovado com a nota ${notaExame}. Voc?? precisava tirar ${exNota} para ser aprovado</p>`
                        } else {result.innerHTML += `<p>Voc?? foi aprovado com a nota do exame. Sua nota foi de ${notaExame}. Parab??ns!</p>`}
                    } else { result.innerHTML += `<p>Aluno ${name.value} da turma ${turma.value}, infelizmente, voc?? est?? reprovado com m??dia ${media} e participou de ${select.value} aulas<p>`}
                }
                presenca(select)
                calculo(media, exNota, notaExame)
        }
        form.addEventListener('submit', evForm)
}
ovrl()
