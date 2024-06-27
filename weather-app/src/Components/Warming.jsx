import { useEffect, useState } from "react";
import gw from '../assets/gw.webp'
function Warming(){

    const [oldTemp, setOldTemp] = useState("")
    const [newTemp, setNewTemp] = useState("")
    
    let url= "https://global-warming.org/api/ocean-warming-api"
useEffect(()=>{
fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        const {
            result: {1851: ot,
                    2024: nt},
        } = data;
        setOldTemp(ot)
        setNewTemp(nt)
    })
    .catch((err)=>console.error(err))
},[])
    

    return(
        <div className="warming">
            <div className="content">
                <h2>Global Ocean Temperatures Warming</h2>
                <span>
                    <p className="temphistory">1851:<b className="one">&nbsp;{oldTemp}°C</b> </p>
                    <p className="temphistory">2024: <b className="two">{newTemp}°C</b></p>
                </span>
                <span>
                <p className="desc">Global ocean warming is primarily driven by 
                    the accumulation of greenhouse gases in the 
                    atmosphere, which trap heat and cause the 
                    oceans to absorb it. This absorption leads to 
                    thermal expansion of seawater, contributing 
                    significantly to sea level rise and coastal 
                    flooding. Additionally, ocean warming disrupts 
                    marine ecosystems, affecting biodiversity, 
                    fisheries, and weather patterns, with far-reaching 
                    consequences for global climate systems and human 
                    societies.</p>
                    <img src={gw}></img>
                </span>
            </div>
        </div>
    );
}
export default Warming