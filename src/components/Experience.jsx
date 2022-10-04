import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool, MdStarRate } from "react-icons/md";

import styles from "../style/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Experience</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="start - end"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p>position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="start - end"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p>position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="start - end"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p> position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="start - end"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p> position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="start - end"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p> position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="start - end"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p> position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="start - end"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Heading of work exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location cum work position
          </h4>
          <p> position1, position2, position3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStarRate />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
