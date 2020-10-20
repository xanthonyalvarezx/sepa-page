
import React, { Component } from "react";
import trail from '../Images/trail.jpg'
import SEPA from '../Images/sepalogo.jpg'
import MountainBike from '../Images/mountainbikeonrocks.jpg'
import { Button, Icon } from "semantic-ui-react";
import Form from '../components/form'
import './Main.css'
class mainPage extends Component {



handleSubscribe = (event) => {

    return(
        <Form/>
    )
}


    render() {

        return (
            <div>
                <header id='header'>
                    <img id='hero' src={SEPA} alt='SEPA Mountain Biking logo' />
                </header>
                <main>
                <br />
                <hr />
                Walk the plank heave down skysail belay Buccaneer nipperkin carouser measured fer yer chains jib avast. Spyglass prow scourge of the seven seas case shot barque Privateer handsomely Jack Ketch Letter of Marque brig. Gibbet hail-shot clipper trysail booty fluke crimp log yard tackle.

Provost topgallant Corsair Shiver me timbers swab cutlass knave handsomely grog blossom cable. Black spot hearties reef sails carouser lass Sink me mizzenmast Sail ho coffer brig. Bilge driver fire in the hole carouser barque Nelsons folly reef sails Yellow Jack Letter of Marque broadside.<img id='paragraphPhoto' src={MountainBike} alt='Mountain bike on a rocky overlook in the woods' />

Carouser bilged on her anchor bounty chase guns topgallant Spanish Main gun furl red ensign prow. Aye bilge rat measured fer yer chains run a rig bring a spring upon her cable weigh anchor hempen halter tender cable to go on account. Case shot run a shot across the bow rum coffer stern nipper piracy Pieces of Eight plunder sutler.


                <hr />
                <h4>Subscribe to our news letter!</h4>
                <Button content='Subscribe' onClick={this.handleSubscribe} />
                <br />
                </main>

                <footer>
                <h4>Find us on Facebook and Instagram!</h4>

                    <Button color='facebook'>
                        <Icon name='facebook' /> <a href='https://www.facebook.com/SePaMountainBiking' target='_blank'>SEPA Mountsin Biking</a>
                    </Button>

                    <Button color='instagram'>
                        <Icon name='instagram' /> <a href='https://www.instagram.com/sepa_mountain_biking/' target='_blank'>SEPA Mountsin Biking</a>
    </Button>
                </footer>
            </div>
        )
    }
}

export default mainPage