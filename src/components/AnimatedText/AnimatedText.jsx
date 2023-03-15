import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

const AnimatedText = () => {
    const items = ["¡Envío gratis al comprar 149.900 o más!", 
    "Paga cuando recibas tu producto en las manos",
    "Obten 20% en tu segundo producto",
    "Obten 40% en tu tercer producto"];
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(state => (state + 1) % items.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [items.length]);
  
    const transitions = useTransition(items[index], {
      from: { opacity: 0, transform: 'translate3d(100%, 0, 0)', position: 'absolute' },
      enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)', left: '100%', position: 'absolute' },
      leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)', position: 'absolute' },
      config: { duration: 1000 }
    });
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100vw'}}>
          {transitions((style, item, t, index) => (
            <animated.div key={index} style={{ ...style, width: '85%', left: '50%', transform: 'translateX(-50%)' }}>
              {item}
            </animated.div>
          ))}
        </div>
      );
   
  };
  
  export default AnimatedText;