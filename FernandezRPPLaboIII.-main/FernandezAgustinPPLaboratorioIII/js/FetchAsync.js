export const getDatosAsync = async (url)=>{

    try{
        const res =  await fetch(url);
        if(!res.ok)
        {
            throw {error : res.status , statusText : res.statusText}
        }
        return await res.json();
    }
    catch(error){
        console.log(error);
    }
};

export const postDatosAsync = async (url,objeto)=>{
    
    try{

        const options  =  {method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(objeto)};
        const res =  await fetch(url,options);
        if(!res.ok)
        {
            throw {error : res.status , statusText : res.statusText}
        }
        
        return await res.json();

    }
    catch(error){

        console.log(error);
    }
};

const putDatosAsync = async (url,id,objeto)=>{
    try{

        const options  =  {method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(objeto)};
        const res =  await fetch(`${url}/${id}`,options);
        if(!res.ok)
        {
            throw {error : res.status , statusText : res.statusText}
        }
        data = await res.json();
        console.log(data);
    }
    catch(error){

        console.log(error);
    }
};

const deleteDatosAsync = async (url,id)=>{
  
    try{
        const res =  await fetch(`${url}/${id}`,{method:"DELETE"});
        if(!res.ok)
        {
            throw {error : res.status , statusText : res.statusText}
        }
        data = await res.json();
        console.log(data);
    }
    catch(error){

        console.log(error);
    }
};