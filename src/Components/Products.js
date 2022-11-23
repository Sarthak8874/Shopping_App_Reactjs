import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Items from "./Items";
import Skeletoncard from "./Skeletoncard";
import LoadingBar from "react-top-loading-bar";

function Products(props) {

  const [products, setProducts] = useState([]);
  const[totalproducts,setTotalproducts] = useState(0);
  const [progress, setProgress] = useState(0);
  const[page,setPage] = useState(1);
  const [isloading, setIsloading] = useState(true);

  const URL = `https://api.escuelajs.co/api/v1${props.category}/products?offset=${page}&limit=8`;
  const URL2 = `https://api.escuelajs.co/api/v1${props.category}/products`;


  useEffect(() => {
    setIsloading(true);
    setProgress(30);
    axios.get(URL).then((res) => {
      setProducts(res.data); 
    setIsloading(false);
    setProgress(100);
    });
  }, [props.category]);
  useEffect(()=>{
    axios.get(URL2).then((res)=>{
        setTotalproducts(res.data.length);
        setPage(1);
    })
  },[props.category]);
  
  function fetchMoreData(){
    setPage(page+8);
    axios.get(URL).then((res)=>{
        setProducts(products.concat(res.data));
    })
  }
  document.title = props.title;
  return (
    <>
     <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={page <= totalproducts}
        loader={<Skeletoncard/>}
      >
        <LoadingBar
          color="#38598b"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {isloading ? (<Skeletoncard/>) :(
            <section id="product1" className="section-p1">
        {/* <h2>Products</h2>
        <p>Summer Collection New Modern Design</p> */}
        <div className="pro-container">
          {products.map((item) => {
            return (
              <>
              
                <Items
                  Item = {item}
                  image={item.images[0]}
                  title={item.title}
                  price={item.price}
                  key = {item.id}
                />
              </>
            );
          })}
        </div>
      </section>
        )}
      
      </InfiniteScroll>
    </>
  );
}

export default Products;
