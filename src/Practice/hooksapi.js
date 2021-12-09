import React, { useState,useEffect } from "react";

function hooksapi(){
const [employee1,setitems]=useState([])
useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=1')
    .then(res=>{
        // console.log(res)
        setitems(res.data)
    })
    .catch(err=> {
        console.log(err)
    })
})

    return(
        <div>
 <div className="App">
                <div className="headerOrFooter sticky">
                    <h1>Profiles </h1>
                    <input type="button" value="Load" className="search" onClick={this.handleLoadMore} />
                </div>
                <div className="content">

                    <input type="text" placeholder="search" className="search" />
                    {/* <input type="button" value="Click" className="search" onClick={this.func} /> */}
                   

                    {employee1.data.map(item => (
                        <div key={item.id} className="flexelements ">
                            <div>
                                <img src={item.avatar} alt={item.first_name} />
                            </div>
                            <div>
                                <h1>{item.first_name} </h1>


                                <p>Email: {item.email}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="headerOrFooter">
                    <p>footer content</p>

                </div>
            </div>
        </div>
    )
}
export default hooksapi