import React, { useState} from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const UpData = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      category: 'camiseta',
      imagenes: null,
      nombre: '',
      nuevo: false,
      descripcion : '',
      valor : '',
      sizes: [{ size: "XS", colors: [] }],
    },
    criteriaMode: 'all',
  });




  const [products, setProducts] = useState({ sizes: [] });

  const handleAddSize = () => {
    setProducts({
      ...products,
      sizes: [
        ...products.sizes,
        {
          size: "",
          colors: [],
        },
      ],
    });
  };

  const handleAddColor = (index) => {
    setProducts({
      ...products,
      sizes: [
        ...products.sizes.slice(0, index),
        {
          ...products.sizes[index],
          colors: [
            ...products.sizes[index].colors,
            {
              idepro: "",
              color: "",
              stock: "",
              imagen: null,
              precio: ""
            },
          ],
        },
        ...products.sizes.slice(index + 1),
      ],
    });
  };


  
  const onSubmit = async (formData) => {
    const storage = getStorage();
    const imgPromises = [];
    const imagenURL = [];

   
    //Subir la primera imagen
    for (const imagen of formData.imagenes) {
      const imgRef = ref(storage, `portada/${Math.random().toString(36).substring(2)}`);
  
      const imgFile = imagen;
      console.log("imgRef", imgFile)
      const snapshot = await uploadBytes(imgRef, imgFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      imagenURL.push(downloadURL); // Agrega la URL de descarga al array
      //console.log("downloadURL",downloadURL)
    }
    
    const product ={
      category: formData.category,
      imagenes:  imagenURL[0],
      nombre: formData.nombre,
      nuevo: formData.nuevo,
      sizes: formData.sizes,
      descripcion: formData.descripcion,
      valor: formData.valor
    }
    //await Promise.all(imgPromises);
    //Cambiar imagen por URL y agregarla en sizes colors imagen
    for (const size of formData.sizes) {
      for (const color of size.colors) {
        if (color.imagen) {
          const imgRef = ref(storage, `images/${Math.random().toString(36).substring(2)}`);
          
          const imgFile = color.imagen[0];
          console.log("imgRef2", imgFile)
          const imgPromise = await uploadBytes(imgRef, imgFile)
            .then(async (snapshot) => {
              const downloadURL = await getDownloadURL(snapshot.ref);
              color.imagen = downloadURL;
              //console.log("color.img :", color.img)
            });
          imgPromises.push(imgPromise);
        }
      }
    }
      await Promise.all(imgPromises);
      console.log("product : ",product);
      const db = getFirestore();
      const productsCollection = collection(db, "productos");
      await addDoc(productsCollection, product);
      alert("Producto agregado con éxito");
    
  
    
    
  };

  const sizesOptions = ["XS","S", "M", "L", "XL", "XXL"];
  const categoryOptions = ["camiseta", "camisa", "buzo", "chaqueta", "pantaloneta", "pantalon"];

  return (
    <> 
    <div className=' max-w-full grid justify-center my-5'>
    <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[40vw]' >

     <label className="  mr-2">
                Categoria del producto:</label> 
    <select
    
            name="category"
            {...register('category')}
            className='bg-gray-200 py-2 pl-1'
          >
             {categoryOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
     
          <label className="block my-3">
                Nombre del producto:
                <input {...register("nombre")} 
                className="bg-gray-100 pl-2 py-2 block w-full "/>
          </label>
          <label className="block my-3">
                Precio del producto:
                <input {...register("valor")} 
                className="bg-gray-100 pl-2 py-2 block w-full"
                type='number'/>
          </label>
     
      <label className="block my-3">
               Imagen de portada del producto:
                <input {...register("imagenes")} 
                className="bg-gray-100 pl-2 py-2 block w-full overflow-x-scroll "
                type='file'/>
      </label>
      <label className="block my-3 ">
                Selecciona si el producto es nuevo:
                <input {...register("nuevo")} 
                className="  ml-2 form-checkbox h-5 w-5 text-gray-100"
                type="checkbox"/>
      </label>
      <label className="block my-2">
    Descripción del producto:
  <input 
    {...register("descripcion")} 
    className="px-2 text-xs bg-gray-100 w-full  mb-2 block"
    style={{ height: 80 }}
  />
</label>

      {products.sizes.map((size, index) => (
        <div key={index}>
          <label htmlFor={`sizes[${index}].size`} className='mr-2  '>Seleccione una talla</label>
          <select
            name={`sizes[${index}].size`}
            {...register(`sizes[${index}].size`)}
            className='bg-gray-200 py-2 px-10  text-center pl-1 '
          >
            {sizesOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          <table className='mt-2'>
            <thead className='bg-gray-100'>
              <tr className='h-3 border border-blue-500 '>
              <th className='border mr-2'>Id del producto</th>
                <th className='border mr-2'>Color</th>
                <th className='border'>Stock</th>
                <th className='border'>Imagen</th>
                <th className='border'>Precio</th>
              </tr>
            </thead>
            <tbody>
              {size.colors.map((color, i) => (
                <tr key={i}>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].idepro`}
                      {...register(`sizes[${index}].colors[${i}].idepro`)}
                      placeholder="Id del producto"
                      className='bg-gray-200 mr-2'
                    />
                  </td>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].color`}
                      {...register(`sizes[${index}].colors[${i}].color`)}
                      placeholder="Color"
                      className='bg-gray-200 mr-2'
                    />
                  </td>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].stock`}
                      {...register(`sizes[${index}].colors[${i}].stock`)}
                      placeholder="Stock"
                      className='bg-gray-200 mr-2'
                    />
                  </td>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].imagen`}
                      {...register(`sizes[${index}].colors[${i}].imagen`)}
                      placeholder="Imagen"
                      className='bg-gray-200 mr-22'
                      type="file"
                    />
                  </td>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].precio`}
                      {...register(`sizes[${index}].colors[${i}].precio`)}
                      placeholder="Precio"
                      className='bg-gray-200'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='grid justify-center w-full mt-3 '>

            <div className='w-[40vw] md:w-[20vw] '><button type="button" onClick={() => handleAddColor(index)} className='bg-green-500 rounded-lg text-white py-1 px-2 w-full'>Insertar Color</button></div>

          </div>
          <hr className='bg-gray-500 text-black border h-1 w-full my-3' />
        </div>
        
        
      ))}
      <div className='grid justify-center w-full mt-3 mb-[3rem] '>
      <div className='w-[40vw] md:w-[20vw] '>
      <button type="button" onClick={handleAddSize} className='bg-green-500 rounded-lg text-white py-1 px-2 w-full'>Insertar talla</button>
      
      <button type="submit" className="block mt-7  bg-black text-white w-full py-2  rounded-lg">Guardar producto</button>
      </div>
      </div>
    </form>
    </div>
    </>
  );
};
