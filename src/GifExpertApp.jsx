import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch']);
  
  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory.toLowerCase() ) ) return;
    setCategories( [ newCategory.toLowerCase(), ...categories ] );

  }
  
  return (
    <>
        <AddCategory 
          onNewCategory={ onAddCategory } 
        />
        
        {categories.map(category => {
          return (<GifGrid 
            key={ category }
            category={ category }
          />)

        })}

    </>
  )
}
