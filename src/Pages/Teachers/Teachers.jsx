import React from "react";
import "./Teachers.css";
import { useState, useEffect } from "react";
import loader from "../../assets/loader.gif";

const Teachers = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  let teacherList = [
    {
      id: 1,
      name: "Mehedi Hasan",
      sub: "Physics",
      number: "01601300220",
      img: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/272906196_3008629042800824_4018445643390888483_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHzowTnkCfZQi9dkK8is5LileqjiknmLmKV6qOKSeYuYmFzyDGQOekPovYJZvgP3dx5TlSVznR7dUTO94wwatXD&_nc_ohc=d0INvTIhXIEAX8gwI6s&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAZKB3UJwK3PBdV2cDekf1CYvxCG1NPjr6rRFxvYHMG9w&oe=63F81720",
    },
    {
      id: 2,
      name: "Silvia Islam",
      sub: "Computer Fundamentals",
      number: "01601000443",
      img: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/119450827_743351223178033_1422626924168017251_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHH2tyVADJisRHSwQIBvTd84qKNVyvT26Lioo1XK9Pbokb9Nac_CD3TNeAk9Btr73dJfuTmtcdMpDj7FMJAV9Y4&_nc_ohc=bgu5FsFyL68AX8NXCnZ&tn=13Oy-DrFJUvu37yH&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCNYZxZ-n4W1kSpD2I2fuBGI8NFIDTY_JdoknbIZN3drA&oe=641A8766",
    },
    {
      id: 3,
      name: "Baby Shark",
      sub: "swimming",
      number: "01111111111",
      img: "https://yt3.googleusercontent.com/ytc/AL5GRJUv3uWmiT5VKUEXgqNoLWV56vLocdSH7bbQI78zSQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 4,
      name: "Mehedi Hasan",
      sub: "Physics",
      number: "01601300220",
      img: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/272906196_3008629042800824_4018445643390888483_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHzowTnkCfZQi9dkK8is5LileqjiknmLmKV6qOKSeYuYmFzyDGQOekPovYJZvgP3dx5TlSVznR7dUTO94wwatXD&_nc_ohc=d0INvTIhXIEAX8gwI6s&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAZKB3UJwK3PBdV2cDekf1CYvxCG1NPjr6rRFxvYHMG9w&oe=63F81720",
    },
    {
      id: 4,
      name: "Silvia Islam",
      sub: "Computer Fundamentals",
      number: "01601000443",
      img: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/119450827_743351223178033_1422626924168017251_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHH2tyVADJisRHSwQIBvTd84qKNVyvT26Lioo1XK9Pbokb9Nac_CD3TNeAk9Btr73dJfuTmtcdMpDj7FMJAV9Y4&_nc_ohc=bgu5FsFyL68AX8NXCnZ&tn=13Oy-DrFJUvu37yH&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCNYZxZ-n4W1kSpD2I2fuBGI8NFIDTY_JdoknbIZN3drA&oe=641A8766",
    },
    {
      id: 6,
      name: "Baby Shark",
      sub: "swimming",
      number: "01111111111",
      img: "https://yt3.googleusercontent.com/ytc/AL5GRJUv3uWmiT5VKUEXgqNoLWV56vLocdSH7bbQI78zSQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 7,
      name: "Baby Shark",
      sub: "swimming",
      number: "01111111111",
      img: "https://yt3.googleusercontent.com/ytc/AL5GRJUv3uWmiT5VKUEXgqNoLWV56vLocdSH7bbQI78zSQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 8,
      name: "Mehedi Hasan",
      sub: "Physics",
      number: "01601300220",
      img: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/272906196_3008629042800824_4018445643390888483_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHzowTnkCfZQi9dkK8is5LileqjiknmLmKV6qOKSeYuYmFzyDGQOekPovYJZvgP3dx5TlSVznR7dUTO94wwatXD&_nc_ohc=d0INvTIhXIEAX8gwI6s&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAZKB3UJwK3PBdV2cDekf1CYvxCG1NPjr6rRFxvYHMG9w&oe=63F81720",
    },
    {
      id: 9,
      name: "Silvia Islam",
      sub: "Computer Fundamentals",
      number: "01601000443",
      img: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/119450827_743351223178033_1422626924168017251_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHH2tyVADJisRHSwQIBvTd84qKNVyvT26Lioo1XK9Pbokb9Nac_CD3TNeAk9Btr73dJfuTmtcdMpDj7FMJAV9Y4&_nc_ohc=bgu5FsFyL68AX8NXCnZ&tn=13Oy-DrFJUvu37yH&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCNYZxZ-n4W1kSpD2I2fuBGI8NFIDTY_JdoknbIZN3drA&oe=641A8766",
    },
    {
      id: 10,
      name: "Baby Shark",
      sub: "swimming",
      number: "01111111111",
      img: "https://yt3.googleusercontent.com/ytc/AL5GRJUv3uWmiT5VKUEXgqNoLWV56vLocdSH7bbQI78zSQ=s900-c-k-c0x00ffffff-no-rj",
    },
  ];
  return (
    <>
      {loading ? (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      ) : (
        <div className="teacher container">
          <div className="teacherWrapper">
            {teacherList.map((item, index) => {
              return (
                <>
                  <div className="teacherCard" key={item.id}>
                    <div className="cardImg">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="cardDetails">
                      <p className="teacherCardName">{item.name}</p>
                      <p className="teacherCardSub">{item.sub}</p>
                      <p className="teacherCardNumber">{item.number}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Teachers;
