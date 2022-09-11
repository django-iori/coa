import Image from 'next/image'
import Slider from '../components/Slider'

const Index = () => {
  return (
    <>
      <Slider />
      <section class="light-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-title">
							<h2>初めてでも楽しく弾ける</h2>
							<p>
                「ピアノ始めたいけどなんか難しそう・・・」<br/>
                そう思っていても大丈夫！<br/>
                経験豊富な講師が全力でサポートします！！
              </p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-title">
							<h2>受講生募集中</h2>
							<p>
                初心者も経験者も大歓迎です！
							</p>
							
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-title">
							<h2>まずは体験レッスン！</h2>
							<p>
                お気軽にお問い合わせください！！
				<br/>
                <br/>
                <strong><a href="mailto:iori4321999@gmail.com">お問い合わせ</a></strong>
              </p>
						</div>
					</div>
				</div>
		<iframe type="text/html" frameborder="0" width="100%" height="1000px" src="//airrsv.net/coa-music/calendar/embed/" ></iframe>
      </div>
		</section>
    </>
  )
}
export default Index
