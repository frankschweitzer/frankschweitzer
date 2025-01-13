import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';
import '../assets/styles/Projects.css';
import Cube from '../assets/images/Cube.jpg';
import BullMarket from '../assets/images/bullMKTlogo.png';

const Projects = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card title="TV Data Scraper" description="Used by a TV Advertisement Company to extract programs being run at specific time slots in
                    in order to scope out perspective ad slot times for clients."
                        image={<i className="bi bi-tv" style={{ fontSize: '8rem', color: '#3498db' }}></i>} />
                </div>
                <div className="col-md-4">
                    <Card title="Rubik's Cube Solver" description="Honors Thesis for the Wake Forest University Department of Computer Science. 
                    Designed and developed a reinforcement learning based solver using Q-Learning. Wrote a 35 page paper and presented findings 
                    to faculty and peers." image={<i className="bi bi-puzzle" style={{ fontSize: '8rem', color: '#3498db' }}></i>} />
                </div>
                <div className="col-md-4">
                    <Card title="BullMarket" description="Designed and developed a fantasy stock trading game for mobile and web. Had 10+ monthly users."
                        image={<i className="bi bi-graph-up" style={{ fontSize: '8rem', color: '#3498db' }}></i>} />
                </div>
            </div>
        </div>
    );
};

export default Projects;