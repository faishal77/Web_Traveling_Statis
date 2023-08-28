import React from "react";
import GetStarted from "../../Components/GetStarted/GetStarted";

class LandingPage extends React.Component{
    render(){
        return(
            <>
            <div className="content">
                <h1>Let's Begin a</h1>
                <h2>Journey with us</h2>
                <p className="keterangan">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas animi veritatis illo esse reiciendis sapiente consequuntur fugit sed provident velit cupiditate dolorem iusto, rerum, nulla, sequi commodi amet quo deserunt laboriosam repudiandae aspernatur minima architecto? Omnis animi eveniet culpa impedit debitis quo consectetur et tempora sint autem? Facere, mollitia aspernatur!</p>

                <GetStarted/>
            </div>
            <img className="bike" src="/src/assets/bike.png" alt="" />
            </>
        )
    }
}

export default LandingPage