
import React, { Component } from "react";

import trail from '../Images/trail.jpg'
import SEPA from '../Images/sepalogo.jpg'
import MountainBike from '../Images/mountainbikeonrocks.jpg'
import { Button, Icon, } from "semantic-ui-react";
import Form from '../components/form'
import './Main.css'


class mainPage extends Component {



    


    render() {

        return (
            <div>
                <header id='header'>
                    <img id='hero' src={SEPA} alt='SEPA Mountain Biking logo' />
                </header>
                <main>
                    <br />
                    <hr />
                    
                    <p> Walk the plank heave down skysail belay Buccaneer nipperkin carouser measured fer yer chains jib avast. Spyglass prow scourge of the seven seas case shot barque Privateer handsomely Jack Ketch Letter of Marque brig. Gibbet hail-shot clipper trysail booty fluke crimp log yard tackle.
                    
                    Provost topgallant Corsair Shiver me timbers swab cutlass knave handsomely grog blossom cable. Black spot hearties reef sails carouser <img id='paragraphPhoto' src={MountainBike} alt='Mountain bike on a rocky overlook in the woods' /> lass Sink me mizzenmast Sail ho coffer brig. Bilge driver fire in the hole carouser barque Nelsons folly reef sails Yellow Jack Letter of Marque broadside.

                    Carouser bilged on her anchor bounty chase guns topgallant Spanish Main gun furl red ensign prow. Aye bilge rat measured fer yer chains run a rig bring a spring upon her cable weigh anchor hempen halter tender cable to go on account. Case shot run a shot across the bow rum coffer stern nipper piracy Pieces of Eight plunder sutler.
                    </p>
                    <p> Walk the plank heave down skysail belay Buccaneer nipperkin carouser measured fer yer chains jib avast. Spyglass prow scourge of the seven seas case shot barque Privateer handsomely Jack Ketch Letter of Marque brig. Gibbet hail-shot clipper trysail booty fluke crimp log yard tackle.
                    
                    Provost topgallant Corsair Shiver me timbers swab cutlass knave handsomely grog blossom cable. Black spot hearties reef sails carouser lass Sink me mizzenmast Sail ho coffer brig. Bilge driver fire in the hole carouser barque Nelsons folly reef sails Yellow Jack Letter of Marque broadside.

                    Carouser bilged on her anchor bounty chase guns topgallant Spanish Main gun furl red ensign prow. Aye bilge rat measured fer yer chains run a rig bring a spring upon her cable weigh anchor hempen halter tender cable to go on account. Case shot run a shot across the bow rum coffer stern nipper piracy Pieces of Eight plunder sutler.
                    </p>
                    <p> Walk the plank heave down skysail belay Buccaneer nipperkin carouser measured fer yer chains jib avast. Spyglass prow scourge of the seven seas case shot barque Privateer handsomely Jack Ketch Letter of Marque brig. Gibbet hail-shot clipper trysail booty fluke crimp log yard tackle.
                    
                    Provost topgallant Corsair Shiver me timbers swab cutlass knave handsomely grog blossom cable. Black spot hearties reef sails carouser lass Sink me mizzenmast Sail ho coffer brig. Bilge driver fire in the hole carouser barque Nelsons folly reef sails Yellow Jack Letter of Marque broadside.

                    Carouser bilged on her anchor bounty chase guns topgallant Spanish Main gun furl red ensign prow. Aye bilge rat measured fer yer chains run a rig bring a spring upon her cable weigh anchor hempen halter tender cable to go on account. Case shot run a shot across the bow rum coffer stern nipper piracy Pieces of Eight plunder sutler.
                    </p>



                    
                    
                
                    
                    <hr/>
                </main>

                
            </div>
        )
    }
}

export default mainPage