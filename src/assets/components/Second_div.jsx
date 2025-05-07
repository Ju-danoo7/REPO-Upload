

export default function Second(props) {



    return (

        <div className="second">
            <h1>Stay Updated</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="per_line">
                <div className="circle">
                    <img src="./Images/icon-list.svg" alt="icon-list" />
                </div>
                <p>Product discovery and building what matters</p>
            </div>
            <div className="per_line">
                <div className="circle">
                    <img src="./Images/icon-list.svg" alt="icon-list" />
                </div>
                <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="per_line">
                <div className="circle">
                    <img src="./Images/icon-list.svg" alt="icon-list" />
                </div>
                <p>And much more</p>
            </div>
            <form action={props.submit} >
                <div className="label">
                    <label htmlFor="email">Email address</label>
                    <span className={props.send ? "span" : "span error"}>valid email required</span>
                </div>
                <div className="input_div">
                    <input
                        className={props.send ? "" : "error"}
                        onChange={props.change} type="email"
                        id="email" name="email"
                        placeholder={props.send ? "email@company.com" : ""}
                    />
                    <p className={props.send ? "par" : "error"}>ash#loremcompany.com</p>
                </div>
                <button>Subscribe to monthly newsletter</button>
            </form>
        </div>
    )
}