import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import '../assets/styles/Home.css';

const Home = () => {
    const [show, setShow] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const timelineEvents = [
        { year: 'Summer 2022', event: 'Software Engineer @ Peraton', details: 'Worked on the State Department Consular Systems Modernization contract.' },
        { year: 'Summer 2023', event: 'Software Engineer @ Capital One', details: 'Full Stack Engineer on part of the Pre-Approvals team in the Card Tech business. Used Java Spring Boot and Angular with Typescript.' },
        { year: 'Spring 2024', event: 'Graduated from Wake Forest University', details: 'Magna Cum Laude double major graduate: BS Computer Science & BA Mathematics. CS Coursework: CS Fundamentals, Data Structures & Algorithms, Programming Languages, Computer Systems, Algorithm Design & Analysis, Deep Learning & Neural Networks, Computer Vision, Cloud Computing, iOS Development. Math Coursework: Multivariable Calculus, Linear Algebra, Numerical Linear Algebra, Discerete Dynamical Systems, Probability Theory, Real Analysis, Abstract Algebra, Operations Research.' },
        { year: 'Now', event: 'Software Engineer @ Capital One', details: 'Backend Engineer on the Enterprise Payment Debit Acceptance team. Use Java Spring Boot, Python Lambdas, Go, as well as AWS services.' },
    ];

    const handleShow = (event) => {
        setSelectedEvent(event);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">My Tech Timeline</h1>
            <div className="timeline d-flex justify-content-between">
                {timelineEvents.map((item, index) => (
                    <div key={index} className="timeline-item text-center" onClick={() => handleShow(item)}>
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-event">{item.event}</div>
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent?.year}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{selectedEvent?.event}</h5>
                    <p>{selectedEvent?.details}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Home;