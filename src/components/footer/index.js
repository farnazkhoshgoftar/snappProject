import { Link } from "react-router-dom";
import "./footer.css";
import ecunion from "../../assets/img/cunion.png";
import eNamad from "../../assets/img/e-namad.png";
import samandehi from "../../assets/img/logo-samandehi.png";
const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul className="footerMenu">
          <li>
            <Link to=''>دریافت اسنپ</Link>
          </li>
          <li>
            <Link to=''>فرصت های شغلی</Link>
          </li>
          <li>
            <Link to=''>شرایط و قوانین</Link>
          </li>
          <li>
            <Link to=''>حریم خصوصی</Link>
          </li>
          <li>
            <Link to=''>درباره ما</Link>
          </li>
          <li>
            <Link to=''>تماس با ما</Link>
          </li>
          <li>
            <Link to=''>سوالات متداول</Link>
          </li>
        </ul>
      </nav>
      <p className="Copyright">
        ©کپی رایت تمامی حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن های
        موبایل) متعلق به ایده گزین ارتباطات روماک (اسنپ) است.
      </p>
      <img alt='ecunion' src={ecunion} />
      <img alt='eNamad' src={eNamad} />
      <img alt='samandehi' src={samandehi} />
    </div>
  );
};
export default Footer;
