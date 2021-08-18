import React from "react";
import { Figure } from "react-bootstrap";

const Freelancer = () => {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={"https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/234823319_2125232974296268_7024097236028108888_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0debeb&_nc_ohc=i_A0Rv8YT1IAX8nLUYH&_nc_ht=scontent.fdac7-1.fna&oh=7ad1ec5761f2be3617e9fcb803ea71c7&oe=61422089"}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default Freelancer;
