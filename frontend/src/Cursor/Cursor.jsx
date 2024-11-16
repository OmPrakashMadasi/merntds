// import React, { useEffect,useRef } from 'react';
// import "./Cursor.css"

// const Cursor=()=>{
// const cursor =useRef()

// useEffect(()=>{
//     window.addEventListener("mousemove",(e)=>{
// const x=e.clientX;
// const  y=e.clientY;

// cursor.current.style.left =x +"px";
// cursor.current.style.top =y +"px";


//     })
// },[])

//     return(
//         <div ref={cursor} style={{width:40,height:40,position:'fixed',borderRadius:50,pointerEvents:'none',border:2 ,borderColor:'purple',borderStyle:'solid',marginTop:-10,marginLeft:-15}} className='cursorCustome'></div>

//     )
// }
// export default Cursor;








import React, { useEffect,useRef } from 'react';
// import "./Cursor.css"
import AnimatedCursor from "react-animated-cursor"

const Cursor=()=>{
return(
    <div className="App">
    <AnimatedCursor
      innerSize={12}
      outerSize={40}
      color='59, 153, 159'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={3}
      
       outerStyle={{
          background: 'linear-gradient(135deg, #8fd1d6 50%, #8fd1d6 60%)',  // Gradient effect
          borderRadius: '50% ',       // Make the outer cursor a circle
        }}
        innerStyle={{
          border: '2px solid #3B999F',  // Solid border for inner circle
          borderRadius: '50%',         // Make the inner cursor a circle
        }}
      clickables={[
        // 'a',
        // 'input[type="text"]',
        // 'input[type="email"]',
        // 'input[type="number"]',
        // 'input[type="submit"]',
        // 'input[type="image"]',
        'label[for]',
        // 'select',
        // 'textarea',
        // 'button',
        // '.link',
      ]}
    />
    </div>       
)
}
export default Cursor;
