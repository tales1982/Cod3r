const ComParametro =(props) => {
    console.log(props)
    
    return (
        <div>
            <h2>{props.titulo}</h2>
         
            <p>{props.subtitulo} <strong>{props.aluno}</strong> tem a nota : {props.nota} {props.nota >= 7 ? 'Aprovado': 'Reprovado'}</p>
        </div>
    )
}

export default ComParametro