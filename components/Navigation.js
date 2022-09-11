import Link from 'next/link'

const Navigation = () => {
    return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand text-dark" href="#" data-en="Coa音楽教室"><br/>~piano&marimba~</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div class="float-right">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="https://www.instagram.com/iori_432">Instagram</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tiktok.com/@tennis432">Tiktok</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://twitter.com/@D83516494">Twitter</a>
            </li>
            </ul>
        </div>
        </div>
       </nav>
    </div>
    )
}

export default Navigation