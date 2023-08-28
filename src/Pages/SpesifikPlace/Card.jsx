import React from "react";

class Card extends React.Component{
    render(){
        return(
            <>
                <div className="Card">
                    <div className="Card-satu">
                        <img className="Galery" src="/src/assets/Borobudur.jfif" alt="" />
                        <img className="Visit" src="/src/assets/Visit.png" alt="" />
                        <h5>Candi Borobudur
                        <h4 className="Price">Price</h4>
                        </h5>
                        <h6>Jawa Tengah
                        <h4>49
                        <img src="/src/assets/Dollar.png" alt="" />
                        </h4>
                        </h6>
                        <a  className="button-visit" href="">Visit</a>
          
                    </div>
                    <div className="Card-dua">
                        <img className="Galery" src="/src/assets/Kepulauan Gili.jfif" alt="" />
                        <img className="Visit" src="/src/assets/Visit.png" alt="" />
                        <h5>Kepulauan Gili
                        <h4>Price</h4>
                        </h5>
                        <h6>Nusa Tenggara Barat
                        <h4>4
                        <img src="/src/assets/Dollar.png" alt="" />
                        </h4>
                        </h6>
                        <a  className="button-visit" href="">Visit</a>
          
                    </div>


                    <div className="Card-tiga">
                         <img className="Galery" src="/src/assets/pantai.jfif" alt="" />
                         <img className="Visit" src="/src/assets/Visit.png" alt="" />
                        <h5>Pantai Kuta
                        <h4>Price</h4>
                        </h5>
                        <h6>Bali
                        <h4>1
                        <img src="/src/assets/Dollar.png" alt="" />
                        </h4>
                        </h6>
                        <a  className="button-visit" href="">Visit</a>
                    
                    </div>
                
                    
                </div>
            </>
        )
    }
}

export default Card