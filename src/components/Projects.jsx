import React from "react";
import ReactDOM from "react-dom";

import styles from "../style/Projects.module.css";

const ProjectModal = ({ name, isOpen, onClose, children, item }) => {
  if (!isOpen) return null;

  const Modal = (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <div className={styles.close} onClick={onClose} />
          <div className={styles.card}>
            <img src={item.image} alt="cover" className={styles.modalImage} />
            <div className={styles.cardContent}>
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
            </div>

            <div className={styles.footer}>
              <div className={styles.author}>
                TechStack:
                <div className={styles.name}>
                  {item.techstack.map((item) => {
                    return <p>- {item} </p>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.foot}>
            <a className={styles.redirect} href={item.github}>Repo</a>
            <a className={styles.redirect} href={item.demo}>Live</a>
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(Modal, document.getElementById("modal"));
};

const Project = (props) => {
  const [open, setOpen] = React.useState(false);
  const image =
    props.project.image ||
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.projectCard} onClick={openModal}>
        <img src={image} className={styles.image} alt="project image" />

        <div className={styles.year}>{props.project.year}</div>
        <div className={styles.Pname}>{props.project.name}</div>
      </div>
      <ProjectModal
        name={props.project.name}
        item={props.project}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

const Projects = (props) => {
  const projects = props.item || [];
  return (
    <>
      <div className={styles.wrapper}>
        {projects.map((project, index, array) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
