import React from "react";
import styles from './NavigationBar.module.css';
import profileImage from '../../data/images/sam.jpeg'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const NavigationBar = (props) => {
    return (
        <div>
            <div className={styles.r1}>
                {props.profile.bio.map((details, index) => {
                    return (<p key={index}>{details}</p>);
                })}
                <h1>{props.profile.name}</h1>
            </div>

            <div className={styles.r2}>
                <img src={profileImage} alt={"Samad Ali Shah"} />
                {/*<GetImage />*/}
                <p className={styles.gmail}><FontAwesomeIcon icon={faEnvelope}/> {props.profile.socialLinks.email}</p>
            </div>

            <div className={styles.socialCard}>
                <div className={styles.r3Items}><Link smooth to="/#about" className={styles.links}>About</Link></div>
                <div className={styles.r3Items}><Link smooth to="/#journey" className={styles.links}>Journey</Link></div>
                <div className={styles.r3Items}><Link smooth to="/#interest" className={styles.links}>Interest</Link></div>
            </div>

            <div className={styles.r4}>
                <div className={styles.socialCard}>
                    <div className={styles.socialCardIcons}> <a href={props.profile.socialLinks.github} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faGithub}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={props.profile.socialLinks.linkedIn} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faLinkedin}/></a></div>
                    <div className={styles.socialCardIcons}> <a href={"mailto:" + props.profile.socialLinks.email} rel="opener noreferrer" target="_blank" className={styles.faLg}><FontAwesomeIcon icon={faEnvelope}/></a></div>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
