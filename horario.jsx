export const exibirHorario = (e) => {
    const dateObj = new Date();
    const hora = dateObj.getHours();
    const minuto = dateObj.getMinutes();
    const segundo = dateObj.getSeconds();
    let horarioFormatado = hora + ":" + minuto + ":" + segundo
    console.clear();
    console.log(horarioFormatado);
}