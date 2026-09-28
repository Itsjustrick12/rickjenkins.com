import emoji from '../assets/ConstructionEmoji.jpg' 

export function UnderConstruction (){
    return (
        <div>
            <h3>
                This Page is UNDER CONSTRUCTION!
            </h3>
        
            <img src={emoji} alt="I'm still working bruh" width={500} height={500}/>

            <h3>
                Development in progress...
            </h3>
        </div>
    )
}