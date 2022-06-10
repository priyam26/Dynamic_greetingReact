import React from 'react';
import ReactDom from 'react-dom';
import  Card from './Cards';
import  './index.css';
import Sdata from './Sdata';
console.log(Sdata[0].Sname)

ReactDom.render(
<>
<h1 className='heading_style'>List of top 6 Prime Amazone Series in 2020</h1>
<Card 
imgsrc={Sdata[0].imgsrc} 
title = {Sdata[0].title} 
Sname= {Sdata[0].Sname}
links ={Sdata[0].links}
/>
<Card 
imgsrc={Sdata[0].imgsrc} 
title = {Sdata[0].title} 
Sname= {Sdata[0].Sname}
links ={Sdata[0].links}
/>
<Card 
imgsrc={Sdata[0].imgsrc} 
title = {Sdata[0].title} 
Sname= {Sdata[0].Sname}
links ={Sdata[0].links}
/>
<Card 
imgsrc={Sdata[0].imgsrc} 
title = {Sdata[0].title} 
Sname= {Sdata[0].Sname}
links ={Sdata[0].links}
/>
<Card 
imgsrc={Sdata[0].imgsrc} 
title = {Sdata[0].title} 
Sname= {Sdata[0].Sname}
links ={Sdata[0].links}
/>
<Card 
imgsrc={Sdata[0].imgsrc} 
title = {Sdata[0].title} 
Sname= {Sdata[0].Sname}
links ={Sdata[0].links}
/>
</>,
document.getElementById('root')
);