import React from 'react';

const Documents = (files) => {
 return files.map(file=> {
     return(
         <div id={file}>
             {file}
         </div>
     )
 })
}

export default Documents