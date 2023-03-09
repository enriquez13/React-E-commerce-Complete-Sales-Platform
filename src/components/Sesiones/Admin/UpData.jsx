import React, { useState,useRef } from 'react';
import { useForm, useFieldArray } from "react-hook-form";

export const UpData = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
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
              bg: "",
              stock: "",
              imagen: "",
            },
          ],
        },
        ...products.sizes.slice(index + 1),
      ],
    });
  };

  const onSubmit = async (data) => {
    console.log("Resultado data: ",data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
      {products.sizes.map((size, index) => (
        <div key={index}>
          <input
            name={`sizes[${index}].size`}
            ref={register()}
            placeholder="Talla"
          />
          <table className=''>
            <tbody>
              {size.colors.map((color, i) => (
                <tr key={i}>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].color`}
                      ref={register()}
                      placeholder="Color"
                    />
                  </td>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].stock`}
                      ref={register()}
                      placeholder="Stock"
                    />
                  </td>
                  <td>
                    <input
                      name={`sizes[${index}].colors[${i}].imagen`}
                      ref={register()}
                      placeholder="Imagen"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => handleAddColor(index)}>Agregar Color</button>
        </div>
      ))}
      <button onClick={handleAddSize}>Agregar Talla</button>
      <button type="submit" className="block my-4 bg-black text-white w-1/2 py-2">Agregar producto</button>
    </form>
  );
};
