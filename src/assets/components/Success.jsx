export default function Success(props) {
    return (

        props.show && <div className="success">
            <div className="message">
                <img src="./Images/icon-list.svg" alt="icon-list" />
                <h1>Thanks for Subscribing</h1>
                <p>A confirmation message has been sent to <strong>{props.mail}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                <button onClick={props.unShow}>Dismiss message</button>
            </div>
        </div>

    )
}