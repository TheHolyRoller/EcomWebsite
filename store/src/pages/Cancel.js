
// Import the stylesheet here 

import cancel from '../Styles/Cancel.module.css'; 



function Cancel() {
    return (
        <h1 className={cancel.header} >Sorry to see you cancelled your Stripe payment!</h1>
    )
}

export default Cancel;