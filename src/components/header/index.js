import {storeLinks} from '../../utils/constant'
import "./header.css";
import snapPwa from "../../assets/img/snapp_pwa.png";
import sibche from "../../assets/img/sibche.png";
import sibApp from "../../assets/img/sibapp-badge-white.png";
import iApps from "../../assets/img/iApps.png";
import bazar from "../../assets/img/bazaar.png";
import googlePlay from "../../assets/img/google-play-badge.png";

const Header = () => {
    return (
    <div className='Header'>
      <div className='mobile'>
        <div className='content'>
          <h1 className='downloadText'>
            دانلود برنامه <span>اسنپ</span> مسافران
          </h1>
          <a href={storeLinks.googlePlay} target='_blank'>
            <img alt='googlePlay' src={googlePlay}/>
          </a>

          <a href={storeLinks.bazar} target='_blank'>
            <img alt='bazar' src={bazar} />
          </a>
          <h3 className='or'>یا</h3>
          <p className='getDownloadLink'>
            برای دریافت لینک دانلود، شماره خود را وارد کنید.
          </p>
          <div className='downloadSms'>
            <input
              type="text"
              className='phoneNumber'
              placeholder="شماره موبایل"
            />
            <button className='sendButton'>ارسال لینک دانلود</button>
          </div>
        </div>
        <h3 className='otherMethods'>همچنین قابل دسترس از طریق</h3>
        <a href={storeLinks.snapPwa} target="_blanck">
          <img alt='snapPwa' src={snapPwa} />
        </a>
      </div>

      <div className='deskTop'>
        <div className='content'>
          <h2>
            دانلود برنامه <span>اسنپ</span> مسافران
          </h2>
          <p>برای دریافت لینک دانلود، شماره خود را وارد کنید.</p>
          <input
            type="text"
            className='phoneNumber'
            placeholder="شماره موبایل"
          />
          <button className='sendButton'>ارسال لینک دانلود</button>
          <h6>یا</h6>
        </div>
        <div className='downloadBox'>

        <a href={storeLinks.googlePlay} target='_blank'>
            <img alt='googlePlay' src={googlePlay} />
          </a>
          <a href={storeLinks.bazar} target='_blank'>
            <img alt='bazar' src={bazar} />
          </a>
          <a href={storeLinks.snapPwa} target='_blank'>
            <img alt='snapPwa' src={snapPwa} />
          </a>
          <a href={storeLinks.sibApp} target='_blank'>
            <img alt='sibApp' src={sibApp} />
          </a>
          <a href={storeLinks.iApps} target='_blank'>
            <img alt='iApps' src={iApps} />
          </a>
          <a href={storeLinks.sibche} target='_blank'>
            <img alt='sibche' src={sibche} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
