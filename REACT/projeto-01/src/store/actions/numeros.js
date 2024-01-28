import { NUN_MIN_ALTERADO, NUN_MAX_ALTERADO } from "./actionsTypes"

export function alteraNumeroMinimo(novoNumero){
    return{
        type: NUN_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alteraNumeroMaximo(novoNumero){
    return{
        type: NUN_MAX_ALTERADO,
        payload: novoNumero
    }
}