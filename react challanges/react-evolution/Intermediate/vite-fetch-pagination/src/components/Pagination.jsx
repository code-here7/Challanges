import React, { useEffect, useState } from 'react'

const Pagination = () => {

  const[allPhotos,setAllPhotos] = useState([]);
  const[photos,setPhotos] = useState([]);
  const [err,setErr] = useState(null); //Null because we are un aware of type of error message
  const [loading,setLoading] = useState(true);

  const [page,setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allPhotos.length/itemsPerPage);
  // console.log(totalPages);

  const src = "https://picsum.photos/200/300?random="

  useEffect(()=> {
  async function fetchData() {
  try 
  {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos");
  if(!data.ok) throw new Error("Data can not be fetched!!!")
  const res = await data.json();
  // console.log(res);
  setAllPhotos(res);
  }
  catch(e)
  {
    // console.log(e.message);
    setErr(e.message);
  }
  finally
  {
    setLoading(false);
  }
  }
  fetchData();
  },[])

  useEffect(()=> {
   const lastIndex = page * itemsPerPage;
   const startIndex = lastIndex - itemsPerPage;
   const piece = allPhotos.slice(startIndex,lastIndex)
  //  console.log(piece);
   setPhotos(piece);
  },[page,allPhotos]);

  const handlePrev = () => {
    setPage(prev => prev>1 ? prev-1 : prev);
  }

    const handleNext = () => {
    setPage(prev => prev<totalPages ? prev+1 : prev);
  }

  if(err) return <h2>{err}</h2>
  if(loading) return <h2>The Data is Loading</h2>
  return(
    <>
    <div>
      <table>
       <thead>
         <tr>
        <th>Album ID</th>
        <th>title</th>
        <th>URL</th>
         </tr>
       </thead>
       <tbody>
         {
        photos.map((item) =>
         <tr key={item.id}>
            <td>{item.albumId}</td>
            <td>{item.title}</td>
            <td><img src={src+item.id} alt="Grey Image" /></td>
         </tr>
        )
      }
       </tbody>
    </table>
    <br />
    <div style={{display: "flex",justifyContent: "space-between"}}>
      <button onClick={handlePrev}>Prev</button>
      <span>{page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
    </div>
    </>
  )
}

export default Pagination;