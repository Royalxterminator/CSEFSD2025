const parent=document.querySelector('#parent');
const root=ReactDOM.createRoot(parent);

// College name at the top
const collegeTitle=React.createElement("h1",{
    id:"college-title", 
    style:{
        color:"blue",
        backgroundColor:"white",
        textAlign:"center",
        margin:"0 0 20px 0",
        padding:"20px",
        fontSize:"2.5rem",
        fontWeight:"bold"
    }
},"ABES Engineering College");

const image=React.createElement("img",{
    src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 
    alt:"profile",
    style:{
        width:"300px",
        height:"300px",
        borderRadius:"50%",
      
    }
});

const name=React.createElement("h2",{
    style:{
        fontSize:"1.8rem",
        margin:"0",
        color:"white",
        marginright:"20px"
    }
},"My name is Yash");

const imageNameContainer=React.createElement("div",{
    style:{
        display:"flex",
        alignItems:"center",
        gap:"30px",
        marginBottom:"30px",
        justifyContent:"space-between"
    }
},[image,name]);

// List items
const lit1=React.createElement("li",{key:"1"},"Item 1");
const lit2=React.createElement("li",{key:"2"},"Item 2");
const lit3=React.createElement("li",{key:"3"},"Item 3");
const list=React.createElement("ul",{
    id:"list",
    style:{
        fontSize:"1.2rem",
        lineHeight:"1.8"
    }
},[lit1,lit2,lit3]);

// Main container
const div=React.createElement("div",{
    id:"container", 
    style: {
        border:"3px solid orange", 
        padding:"20px",
        backgroundColor:"black",
        color:"white",
        minHeight:"100vh",
        fontFamily:"Arial, sans-serif"
    }
},[collegeTitle,imageNameContainer,list]);

root.render(div);




