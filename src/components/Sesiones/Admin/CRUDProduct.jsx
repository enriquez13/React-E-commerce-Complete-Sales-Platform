import { useForm, useFieldArray } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UpData } from "./UpData";

const AddProductForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizes",
  });

  const onSubmit = async (data) => {
    const storage = getStorage();
    const imgPromises = [];
  
    const productData = {
      id: data.category,
      category: data.category,
      nombre: data.nombre,
      valor: Number(data.valor),
      cantidad: Number(data.cantidad),
      sizes: fields.map((size) => ({
        size: size.size,
        colors: size.colors.map((color) => ({
          idepro: color.color,
          color: color.color,
          bg: color.bg,
          stock: Number(color.stock),
          img: color.img,
        })),
      })),
    };
  
    for (const size of productData.sizes) {
      for (const color of size.colors) {
        if (color.img) {
          const imgRef = ref(storage, `images/${Math.random().toString(36).substring(2)}`);
          const imgFile = color.img[0];
          const imgPromise = uploadBytes(imgRef, imgFile)
            .then(async (snapshot) => {
              const downloadURL = await getDownloadURL(snapshot.ref);
              color.img = downloadURL;
            });
          imgPromises.push(imgPromise);
        }
      }
    }
  
    await Promise.all(imgPromises);
  
    const db = getFirestore();
    const productsCollection = collection(db, "productos");
    await addDoc(productsCollection, productData);
    alert("Producto agregado con éxito");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
    <label className="block">
      Category:
      <input {...register("category")} className=' mt-1 mb-3 bg-gray-100 ml-2'/>
    </label>
    <label className="block">
      Nombre del producto:
      <input {...register("nombre")} className='mt-1 mb-3 bg-gray-100 ml-2'/>
    </label>
    <label className="block">
      Valor:
      <input type="number" {...register("valor")} className='mt-1 mb-3 bg-gray-100 ml-2'/>
    </label>
    <label className="block">
      Cantidad:
      <input type="number" {...register("cantidad")} className='mt-1 mb-3 bg-gray-100 ml-2'/>
    </label>
    <label>
      Sizes:
      <button className="bg-black text-white mx-4 py-1 px-3 rounded-lg"
        type="button"
        onClick={() => {
          append({
            size: "",
            colors: [{ color: "", bg: "", stock: 0, img: "" }],
          });
        }}
      >
       Agregar talla
      </button >
      {fields.map((size, sizeIndex) => (
        <div key={size.id}>
          <label className="block">
            Size:
            <input {...register(`sizes.${sizeIndex}.size`)} className='mt-1 mb-3 bg-gray-100 ml-2'/>
          </label>
          {//<button className="bg-black text-white mx-4"
          //  type="button"
          //  onClick={() => {
          //    remove(sizeIndex);
          //  }}
          //>
          
          //</div>  Eliminar talla
          //</button>
          }
          {size.colors && size.colors.map((color, colorIndex) => (
            <div key={color.id}>
              <label className="block">
                Color:
                <input {...register(`sizes.${sizeIndex}.colors.${colorIndex}.color`)} 
                className="bg-gray-100 ml-2"/>
              </label>
              <label className="block">
                Background color:
                <input {...register(`sizes.${sizeIndex}.colors.${colorIndex}.bg`)} className='mt-1 mb-3 bg-gray-100 ml-2'/>
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
          <button className="bg-red-200"
            type="button"
            onClick={() => {
              append({ color: "", bg: "", stock: 0, img: "" }, sizeIndex);
            }}
          >
            Add color
          </button>
        </div>
   ))}
   </label>
   
   <button className="bg-black text-white mx-4 py-1 px-3 rounded-lg"
        type="button"
        onClick={() => {
          append({
            size: "",
            colors: [{ color: "rojo", bg: "rojo", stock: 0, img: "" }],
          });
        }}
      ></button>
   <button type="submit" className="block my-4 bg-black text-white w-1/2 py-2">Agregar producto</button>
   </form>
 );
};

const CRUDProduct = () => {
  return (
    <div>
      {//<AddProductForm />
      }
      <UpData />
    </div>
  );
};

export default CRUDProduct;


