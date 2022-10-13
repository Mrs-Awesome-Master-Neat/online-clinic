import "../style/top-bar.css"

export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="logo-div">
                <img src="/icons/logo.png"/>
                <p className="top-title">Oclinic</p>
               
            </div>
            <form className="search-form">
                <input type={"text"}/>
                <button><img src="/icons/search.svg"/></button>
            </form>
            <div className="bar-profile">
                <img src="/images/prof-pic.png"/>
                <div>
                  <p className="top-name">Oscar Otee</p>
                  <p className="top-username">@oscar_otee</p>
                </div>
            </div>
        </div>
    )
}