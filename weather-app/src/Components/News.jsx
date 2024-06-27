import { useEffect, useState } from "react";
import axios from 'axios'
function Moon() {

const apiKey = "e45aa198-e9b0-4a73-8b2f-f0b88041ceb1"
const url = `https://api.goperigon.com/v1/all?source=cnn.com&sortBy=date&apiKey=${apiKey}`

const [title, setTitle] = useState("")
const [img, setImg] = useState("")
const [desc, setDesc] = useState("")
const [title2, setTitle2] = useState("")
const [img2, setImg2] = useState("")
const [desc2, setDesc2] = useState("")
const [title3, setTitle3] = useState("")
const [img3, setImg3] = useState("")
const [desc3, setDesc3] = useState("")
const [title4, setTitle4] = useState("")
const [img4, setImg4] = useState("")
const [desc4, setDesc4] = useState("")
const [title5, setTitle5] = useState("")
const [img5, setImg5] = useState("")
const [desc5, setDesc5] = useState("")
const [title6, setTitle6] = useState("")
const [img6, setImg6] = useState("")
const [desc6, setDesc6] = useState("")
const [title7, setTitle7] = useState("")
const [img7, setImg7] = useState("")
const [desc7, setDesc7] = useState("")
const [title8, setTitle8] = useState("")
const [img8, setImg8] = useState("")
const [desc8, setDesc8] = useState("")
const [title9, setTitle9] = useState("")
const [img9, setImg9] = useState("")
const [desc9, setDesc9] = useState("")
const [link1, setLink1] = useState("");
const [link2, setLink2] = useState("");
const [link3, setLink3] = useState("");
const [link4, setLink4] = useState("");
const [link5, setLink5] = useState("");
const [link6, setLink6] = useState("");
const [link7, setLink7] = useState("");
const [link8, setLink8] = useState("");
const [link9, setLink9] = useState("");

const [see, setSee] = useState("See More");
const [arrow, setArrow] = useState("↓");
const [extra, setExtra] = useState(false);
  
  useEffect(() => {
  axios.get(url)
  .then((response) => {
    console.log(response.data)
    const {
      description: desc,
      imageUrl: url,
      title: title,
      url: link1
    } = response.data.articles[0];
    const {
      description: desc2,
      imageUrl: url2,
      title: title2,
      url: link2
    } = response.data.articles[1];
    const {
      description: desc3,
      imageUrl: url3,
      title: title3,
      url: link3
    } = response.data.articles[3];
    const {
      description: desc4,
      imageUrl: url4,
      title: title4,
      url: link4
    } = response.data.articles[4];
    const {
      description: desc5,
      imageUrl: url5,
      title: title5,
      url: link5
    } = response.data.articles[5];
    const {
      description: desc6,
      imageUrl: url6,
      title: title6,
      url: link6
    } = response.data.articles[6];
    const {
      description: desc7,
      imageUrl: url7,
      title: title7,
      url: link7
    } = response.data.articles[7];
    const {
      description: desc8,
      imageUrl: url8,
      title: title8,
      url: link8
    } = response.data.articles[8];
    const {
      description: desc9,
      imageUrl: url9,
      title: title9,
      url: link9
    } = response.data.articles[9];
    setDesc3(desc3)
    setTitle3(title3)
    setImg3(url3)
    setDesc2(desc2)
    setImg2(url2)
    setTitle2(title2)
    setTitle(title)
    setDesc(desc)
    setImg(url)
    setTitle4(title4)
    setDesc4(desc4)
    setImg4(url4)
    setTitle5(title5)
    setDesc5(desc5)
    setImg5(url5)
    setTitle6(title6)
    setDesc6(desc6)
    setImg6(url6)
    setTitle7(title7)
    setDesc7(desc7)
    setImg7(url7)
    setTitle8(title8)
    setDesc8(desc8)
    setImg8(url8)
    setTitle9(title9)
    setDesc9(desc9)
    setImg9(url9)
    setLink1(link1)
    setLink2(link2)
    setLink3(link3)
    setLink4(link4)
    setLink5(link5)
    setLink6(link6)
    setLink7(link7)
    setLink8(link8)
    setLink9(link9)
  })
  .catch((error) => {
    console.log(error);
  });
  
  }, []);
  const handleMore=()=>{
    if(see === "See Less"){
      setExtra(false)
      setSee("See More")
      setArrow("↓")
    } else{
      setExtra(true)
      setSee("See Less")
      setArrow("↑")
    }
  }

  return (
    <div className="news">
        <h1>Breaking News</h1>
    <div className="container">
      <div className="nextfullmoon">
        <h3>{title}</h3>
        <a href={link1}> <img  src={img}></img></a>
        <p>{desc}</p>

      </div>
      <div className="nextfullmoon">
      <h3>{title2}</h3>
        <a href={link2}><img  src={img2}></img></a> 
        <p>{desc2}</p>
      </div>
      <div className="nextfullmoon">
      <h3>{title3}</h3>
        <a href={link3}><img  src={img3}></img></a> 
        <p>{desc3}</p>
      </div>
      {extra && (
        <>
        <div className="nextfullmoon">
        <h3>{title4}</h3>
        <a href={link4}> <img  src={img4}></img></a>
        <p>{desc4}</p>
      </div>
      <div className="nextfullmoon">
      <h3>{title5}</h3>
        <a  href={link5}> <img src={img5}></img></a>
        <p>{desc5}</p>
      </div>
      <div className="nextfullmoon">
      <h3>{title6}</h3>
        <a  href={link6}> <img src={img6}></img></a>
        <p>{desc6}</p>
      </div>
      <div className="nextfullmoon">
        <h3>{title7}</h3>
        <a href={link7} > <img src={img7}></img></a>
        <p>{desc7}</p>

      </div>
      <div className="nextfullmoon">
      <h3>{title8}</h3>
       <a href={link8}> <img src={img8}></img></a> 
        <p>{desc8}</p>
      </div>
      <div className="nextfullmoon">
      <h3>{title9}</h3>
        <a href={link9}><img  src={img9}></img></a> 
        <p>{desc9}</p>
        </div>
      </>
      )}
    </div>
    <div className="btns">
      <button onClick={handleMore}>{see}<br/>{arrow}</button>
    </div>
    
    </div>
  );
}

export default Moon;
