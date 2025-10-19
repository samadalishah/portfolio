import React from 'react';
import classes from './Journey.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {faSchool, faBriefcase, faUniversity} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Journey = (props) => {
    return (
        <div className={classes.box} id="journey">
            <ScrollAnimation offset={0} animateIn="animate__fadeInLeftBig" duration={2} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>MY JOURNEY</span>
                <section className={classes.container}>
                    <div className={classes.container_content}>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        {props.journey.jobs.map((job, index) => {
                                            return (
                                                <article className={classes.timeline_entry}>
                                                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} style={{ backgroundColor: "white" }}>
                                                        <FontAwesomeIcon icon={job.icon} color={job.icon.color} />
                                                    </div>
                                                    <div className={classes.label}>
                                                        <h2>{job.title} <span>{job.when}</span></h2>
                                                        <h4>{job.where}</h4>
                                                            {job.what.map((activities, index) => {
                                                                return (<p key={index}>{activities}</p>);
                                                            })}
                                                    </div>
                                                </article>
                                            );
                                        })}
                                        <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        {props.journey.educations.map((education, index) => {
                                            return (
                                                <article className={classes.timeline_entry}>
                                                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} style={{ backgroundColor: "white" }}>
                                                        <FontAwesomeIcon icon={education.icon} color={education.icon.color} />
                                                    </div>
                                                    <div className={classes.label}>
                                                        <h2>{education.title} <span>{education.when}</span></h2>
                                                        <h4>{education.where}</h4>
                                                            {education.what.map((activities, index) => {
                                                                return (<p key={index}>{activities}</p>);
                                                            })}
                                                    </div>
                                                </article>
                                            );
                                        })}
                                        <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
}

export default Journey;
