import React from 'react'

export const Envios = () => {
  return (
    <>
           <h4 className='col-start-1 col-span-5 mt-5 font-medium'>Método de envío</h4>
                

                <div className='col-start-1 col-span-7 text-md'  >
                        <label > Envío clásico
                        <input className='mx-2 mt-4' value='clasico'  
                        type="radio" {...register("envio")} onChange={onChangeValue}/>
                        </label>
                        <label className='pl-6'>Contraentrega
                        <input className='mx-2 mt-4 accent-blue-500' value='contraentrega'  
                        type="radio" {...register("envio")} onChange={onChangeValue}/>
                        </label>
                </div>
                {opcionenvio==="clasico" ?
                <>
                <h4 className='col-start-1 col-span-5 mt-5 font-medium'>Tipo de pago</h4>
                <div className='col-start-1 col-span-7 text-md' //onChange={onChangeValue}
                > 
                        
                        <label className='block'>PSE, T.Crédito, Nequi, Bancolombia
                        <input className='mx-2 mt-4' type="radio" value="tarjetas" name="gender" onClick={onChangepago}/> 
                        </label>
                        <label > Transferencia, Nequi o Daviplata
                        <input className='mx-2 mt-4' type="radio" value="transferencia" name="gender" onClick={onChangepago}  /> 
                        </label>
                        {metodopago==="transferencia" ?
                        <p className='bg-[#EDEDED] p-2 my-2'>Realiza tu pago directamente en nuestra cuenta bancaria Bancolombia, nequi o daviplata <br/><br/>
                            Alejandro Enríquez<br/>
                            CC 1085277421<br/><br/>
                            Bancolombia ahorros: 261<br/>
                            Nequi: 3146556488<br/>
                            daviplata: 3146556488<br/><br/>
                            Una vez hecho el pago envíanos el comprobante a nuestro whatsapp 3146556488 junto con el número de orden. 
                        </p>
                        :""}
                     
                        
                </div>
                </>
                :""}
    </>
  )
}
