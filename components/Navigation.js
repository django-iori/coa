import Link from 'next/link'

const Navigation = () => {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand text-dark" href="#">C O A 音楽教室</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="float-right">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="https://www.instagram.com/iori_432">Instagram</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.tiktok.com/@tennis432">Tiktok</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/@D83516494">Twitter</a>
            </li>
            </ul>
        </div>
        </div>
       </nav>
    </div>
    )
}

export default Navigation