import { IPDataInterface } from "../../types/interface";
import style from "./style.module.scss";

export const IPInfo = ({ IPData }: IPDataInterface) => {
  const {
    ip,
    location: { country, city, region, timezone },
    isp,
  } = IPData;
  return (
    <section className={style.IPInfoSectionWrapper}>
      <ul>
        <li>
          <h2>IP ADDRESS</h2>
          <p>{ip}</p>
        </li>
        <li>
          <h2>LOCATION</h2>
          <p>{`${city}, ${region}, ${country}`}</p>
        </li>
        <li>
          <h2>TIMEZONE</h2>
          <p>UTC {timezone}</p>
        </li>
        <li>
          <h2>ISP</h2>
          <p>{isp}</p>
        </li>
      </ul>
    </section>
  );
};
