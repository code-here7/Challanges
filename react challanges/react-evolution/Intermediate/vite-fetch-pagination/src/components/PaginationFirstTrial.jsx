import React from 'react'

export const PaginationFirstTrial = () => {
  const [allcomments,setAllcomments] = useState([]);
  const [comments,setcomments] = useState([]);
  const [err,setErr] = useState(null);
  const [loading,setLoading] = useState(true);

  const [page,setPage] = useState(1);
  const displayItems = 5;
 

  useEffect(()=> {
    async function fetchData() {
      try
      {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      if(!data.ok) throw new Error("There might be some issue!!!");
      const res = await data.json();
      // console.log(res);
      setAllcomments(res);
      }
      catch(e)
      {
       setErr(e.message);
      }
      finally
      {
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  useEffect(() => {
    let endPage = page *  displayItems;
    let startpage = endPage - displayItems;
   const piece = allcomments.slice(startpage,endPage);
  //  console.log(piece);
   setcomments(piece);
  },[page,allcomments]);

  if(err) return <h1>{err}</h1>
  if(loading) return <h1>Page is loading</h1> //till the data is fetch and set.

  const handlePrev = () => {
  setPage(prev => prev>1 ? prev -1 : prev);
  }

  const handleNext = () => {
    let totalPages = Math.ceil(allcomments.length/displayItems);
    // console.log(totalPages);
    setPage(prev => prev<totalPages ? prev+1 : prev);
  }

  return (
    <>
    <h1>Displaying the data with pagination</h1>
    <div>
      {comments.map((item) =>
    <ul key={item.id}>
      <li>{item.name}</li>
      <li>{item.email}</li>
      <li>{item.body}</li>
    </ul>
    )}

    {/* pagination buttons */}
    <div style={{display: "flex",justifyContent: "space-between"}}>
    <button onClick={handlePrev}>Prev</button>
    <span>{page}</span>
    <button onClick={handleNext}>Next</button>
    </div>
    </div>
   
    </>
  )
}


export default PaginationFirstTrial;