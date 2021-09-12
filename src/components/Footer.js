export default function Footer(){
    return  (
    <div style = {{display:'flex', width: '100%', margin: '70px 0px', justifyContent:'center', alignItems:'center'}}>
            <img style ={{display: 'block', width:'50px'}} src ="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt ="github mark"/>
            <figcaption style ={{fontSize:'20px'}}>this page source in <cite><a href="https://github.com/devCoderian/book-shop">view on gitHub </a></cite></figcaption>
            <figcaption style = {{marginLeft:'20px', fontSize:'20px'}}>FAKE API in <cite><a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a></cite></figcaption>
    </div>
    );
    
}