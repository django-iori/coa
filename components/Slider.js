import Image from 'next/image'

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <figure>
            <Image src="/images/piano.jpg" layout="responsive"  width={600} height={400} alt="My avatar" />
            <figcaption class="decorator">Coa Music Classes</figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure>
            <Image src="/images/marimba.jpg" layout="responsive"  width={600} height={400} alt="My avatar" />
            <figcaption class="decorator">Coa Music Classes</figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure>
            <Image src="/images/iori_guitar.jpg" layout="responsive"  width={600} height={400} alt="My avatar" />
            <figcaption class="decorator">Coa Music Classes</figcaption>
            </figure>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
    </div>
    )
}

export default Slider