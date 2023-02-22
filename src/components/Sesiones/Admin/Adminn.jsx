import { useForm, useFieldArray } from "react-hook-form";
//import firebase from "firebase/app";
//import "firebase/firestore";
import {addDoc, collection, getFirestore} from 'firebase/firestore'

const AddProductForm = () => {
  const { register, handleSubmit, control, formState: {errors} } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const onSubmit = async (data) => {
    const { category, nombre, valor, cantidad } = data;
    //const productRef = firebase.firestore().collection("products").doc();
    const productData = {
      id: 1,
      category,
      nombre,
      valor: Number(valor),
      cantidad: Number(cantidad),
      sizes: fields.map((size) => ({
        size: size.size,
        colors: size.colors.map((color) => ({
          idepro: 1,
          color: color.color,
          bg: color.bg,
          stock: Number(color.stock),
          img: color.img,
        })),
      })),
    };
    //await productRef.set(productData);
    // limpiar formulario
    const db = getFirestore();
    const productsCollection = collection(db, 'productos')
    addDoc(productsCollection, productData)
    .then(()=> alert("Producto agregado con éxito"))
.catch(error=>{
    alert(errors)
})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
      <label className="block">
        Category:
        <input {...register("category")} className=' mt-1 mb-3 bg-gray-100'/>
      </label>
      <label className="block">
        Nombre:
        <input {...register("nombre")} className='mt-1 mb-3 bg-gray-100'/>
      </label>
      <label className="block">
        Valor:
        <input type="number" {...register("valor")} className='mt-1 mb-3 bg-gray-100'/>
      </label>
      <label className="block">
        Cantidad:
        <input type="number" {...register("cantidad")} className='mt-1 mb-3 bg-gray-100'/>
      </label>
      <label>
        Sizes:
        <button className="bg-black text-white mx-4"
          type="button"
          onClick={() => {
            append({
              size: "",
              colors: [{ color: "", bg: "", stock: 0, img: "" }],
            });
          }}
        >
          Add size
        </button >
        {fields.map((size, sizeIndex) => (
          <div key={size.id}>
            <label className="block">
              Size:
              <input {...register(`sizes.${sizeIndex}.size`)} className='mt-1 mb-3 bg-gray-100'/>
            </label>
            <button className="bg-black text-white mx-4"
              type="button"
              onClick={() => {
                remove(sizeIndex);
              }}
            >
              Remove size
            </button>
            {size.colors && size.colors.map((color, colorIndex) => (
              <div key={color.id}>
                <label className="block">
                  Color:
                  <input {...register(`sizes.${sizeIndex}.colors.${colorIndex}.color`)} 
                  className="bg-gray-100"/>
                </label>
                <label className="block">
                  Background color:
                  <input {...register(`sizes.${sizeIndex}.colors.${colorIndex}.bg`)} className='mt-1 mb-3 bg-gray-100'/>
                </label>
                <label className="block">
                  Stock:
                  <input type="number" {...register(`sizes.${sizeIndex}.colors.${colorIndex}.stock`)} className='mt-1 mb-3 bg-gray-100'/>
                </label>
                <label className="block">
                  Image:
                  <input type="file" {...register(`sizes.${sizeIndex}.colors.${colorIndex}.img`)} className='mt-1 mb-3 bg-gray-100'/>
                </label>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                append({ color: "", bg: "", stock: 0, img: "" });
              }}
            >
              Add color
            </button>
          </div>
     ))}
     </label>
     <button type="submit" className="block my-4 bg-black text-white w-1/2">Add product</button>
   </form>
 );
};

const Adminn = () => {
  return (
    <div>
      <h1>Admin</h1>
      <AddProductForm />
    </div>
  );
};

export default Adminn;


