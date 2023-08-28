import React from 'react'
import DoHiking from '../../Components/DoHiking/DoHiking'
import Explore from '../../Components/Explore/Explore'
import Travel from '../../Components/Travel/Travel'

class Etd extends React.Component{
    render(){
        return(
            <>
               
                <div className="Explore">
                <Explore/>
                <Travel/>
                <DoHiking/>
             </div>

            </>
        )
    }
}

export default Etd