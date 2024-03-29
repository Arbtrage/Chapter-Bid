import React, { useEffect, useState } from "react";
import Books from "./Books";

// const url = "https://my.api.mockaroo.com/booksapi.json?key=d9f0d370";

const RunningBids = ({listedBooks}) => {
    const [booksData, setBooksData] = useState(null);
    const fetchData = async() => {
      try {
        setBooksData(listedBooks);
        
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchData();      
    }, [])
    
  return (
    <>
      <div className="h-95 min-w-screen bg-white p-6 px-8 pb-16">
        <span>
          <h1 className="text-4xl text-center mt-4 text-slate-700 font-bold italic font-sans" >Upcoming Bids</h1>
          <h1 className="text-l text-center mb-6 text-slate-700  font-sans" >Stay informed about upcoming auctions before they expire!</h1>
        </span>

        {booksData && <Books booksData = {booksData} /> }
        
      </div>
    </>
  );
};

export default RunningBids;
