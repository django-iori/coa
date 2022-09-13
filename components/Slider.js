const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure>
            <img src="images/piano.jpg" className="img-responsive" alt="My avatar" />
            <figcaption className="decorator">Coa Music classes</figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure>
            <img src="images/sample1.jpg" className="img-responsive" alt="My avatar" />
            <figcaption className="decorator">Coa Music classes</figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure>
            <img src="images/iori_guitar.jpg" className="img-responsive" alt="My avatar" />
            <figcaption className="decorator">Coa Music classes</figcaption>
            </figure>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
    </div>
    )
}

export default Slider