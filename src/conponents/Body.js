import React ,{useState , useEffect}from 'react'
import RestaurantsCards from './RestaurantsCards';
import { useSelector } from 'react-redux';


const Body = () => {
    const [resData , setResData] = useState([]);
    const [page , setPage] = useState(0);
    const dropDown = useSelector(store => store.dropDown.text);
      console.log(dropDown)

    const fetchResdata = async() =>{
      const data = await fetch(`https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=${dropDown}&page=${page}`);
      const json = await data.json();
      console.log(json.data);
     // new data with old one
        setResData((prevData) => [...prevData, ...json?.data]);
      
      
    }

    useEffect(()=>{
        fetchResdata();
        console.log("useeffect")
    },[])

    let handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((page) => page + 1);
      }
    };
    useEffect(() => {
      fetchResdata(0);
      setPage(0);
    }, [dropDown]);
    useEffect(() => {
      if (page > 0) {
        fetchResdata(page); //calling my function
      }
    }, [page]);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   if(resData.length === 0){
    return 'loding..'
   }
  return (
    <div>
    <div className='flex justify-center'>
      <div className='flex flex-wrap justify-center w-[1000px]'>
     {
      resData?.map((card,index)=>(
        <RestaurantsCards key={index} card={card}/>
      ))
      
    } 
    </div>
    
    </div>
    </div>
  )
}

export default Body